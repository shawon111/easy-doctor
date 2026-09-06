"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { templateOneDefaults } from "@/content/defaults/template-one";
import { templateTwoDefaults } from "@/content/defaults/template-two";
import { templateThreeDefaults } from "@/content/defaults/template-three";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const PAGE_LABELS = {
  home: "Home",
  about: "About",
  services: "Services",
  appointment: "Appointment",
};

const DEFAULTS_BY_TEMPLATE = {
  "template-one": templateOneDefaults,
  "template-one-dark": templateOneDefaults,
  "template-two": templateTwoDefaults,
  "template-two-dark": templateTwoDefaults,
  "template-three": templateThreeDefaults,
  "template-three-dark": templateThreeDefaults,
};

function clone(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function mergeContent(source, defaults) {
  if (Array.isArray(defaults)) {
    return !Array.isArray(source) || source.length === 0 ? clone(defaults) : clone(source);
  }
  if (defaults && typeof defaults === "object") {
    const result = {};
    for (const key of new Set([...Object.keys(defaults), ...Object.keys(source || {})])) {
      result[key] = mergeContent(source?.[key], defaults[key]);
    }
    return result;
  }
  return source === undefined ? defaults : source;
}

function setPath(source, path, value) {
  const result = clone(source);
  let cursor = result;
  const keys = path.split(".");
  keys.slice(0, -1).forEach((key) => {
    cursor[key] = cursor[key] && typeof cursor[key] === "object" ? cursor[key] : {};
    cursor = cursor[key];
  });
  cursor[keys[keys.length - 1]] = value;
  return result;
}

function labelFor(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
}

function isImageKey(key) {
  return key === "imageUrl" || key === "image";
}

function isLinkList(value, template) {
  const items = value.length > 0 ? value : template;
  return Array.isArray(items) && items.length > 0 && items.every(
    (item) => item && typeof item === "object" && ("label" in item || "href" in item)
  );
}

function ImageField({ label, value, onChange }) {
  const [uploading, setUploading] = useState(false);

  async function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Images must be smaller than 5MB.");
      return;
    }

    setUploading(true);
    try {
      const uploaded = await uploadToCloudinary(file);
      onChange(uploaded.url);
      toast.success("Image uploaded.");
    } catch (error) {
      toast.error(error.message || "Image upload failed.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="h-32 w-full rounded-lg border object-cover" />
      ) : null}
      <div className="flex gap-2">
        <Input value={value || ""} onChange={(event) => onChange(event.target.value)} placeholder="Image URL" />
        <Button type="button" variant="outline" disabled={uploading} asChild>
          <label className="cursor-pointer">
            {uploading ? "Uploading..." : "Upload"}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
        </Button>
      </div>
    </div>
  );
}

function LinkListEditor({ label, value, onChange }) {
  const links = value || [];

  return (
    <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <Label>{label}</Label>
          <p className="text-xs text-muted-foreground">Add the text visitors see and where the link should go.</p>
        </div>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => onChange([...links, { label: "", href: "" }])}
        >
          Add link
        </Button>
      </div>
      {links.length === 0 ? (
        <p className="rounded-md border border-dashed p-3 text-sm text-muted-foreground">
          No links yet. Add a link to show it on your website.
        </p>
      ) : null}
      {links.map((link, index) => (
        <div key={`${label}-${index}`} className="grid gap-3 rounded-lg border bg-background p-3 md:grid-cols-[1fr_1.4fr_auto] md:items-end">
          <div className="space-y-2">
            <p className="text-sm font-medium">Link {index + 1}</p>
            <Label htmlFor={`${label}-${index}-label`}>Link name</Label>
            <Input
              id={`${label}-${index}-label`}
              value={link.label || ""}
              placeholder="For example, About us"
              onChange={(event) => onChange(links.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${label}-${index}-href`}>Link address</Label>
            <Input
              id={`${label}-${index}-href`}
              value={link.href || ""}
              placeholder="/about or https://example.com"
              onChange={(event) => onChange(links.map((item, itemIndex) => itemIndex === index ? { ...item, href: event.target.value } : item))}
            />
          </div>
          <Button type="button" variant="ghost" className="text-destructive" onClick={() => onChange(links.filter((_, itemIndex) => itemIndex !== index))}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}

function FieldEditor({ value, template, path, onChange }) {
  if (isImageKey(path.split(".").at(-1))) {
    return (
      <ImageField
        label={labelFor(path.split(".").at(-1))}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-between rounded-lg border p-3">
        <Label>{labelFor(path.split(".").at(-1))}</Label>
        <Switch checked={value} onCheckedChange={onChange} />
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="space-y-2">
        <Label>{labelFor(path.split(".").at(-1))}</Label>
        <Input type="number" value={value} onChange={(event) => onChange(Number(event.target.value))} />
      </div>
    );
  }

  if (typeof value === "string" || value === null || value === undefined) {
    const isLong = value?.length > 100 || /body|description|answer|quote|heading/i.test(path);
    return (
      <div className="space-y-2">
        <Label>{labelFor(path.split(".").at(-1))}</Label>
        {isLong ? (
          <Textarea value={value || ""} onChange={(event) => onChange(event.target.value)} rows={4} />
        ) : (
          <Input value={value || ""} onChange={(event) => onChange(event.target.value)} />
        )}
      </div>
    );
  }

  if (Array.isArray(value)) {
    if (isLinkList(value, template)) {
      return <LinkListEditor label={labelFor(path.split(".").at(-1))} value={value} onChange={onChange} />;
    }
    const itemTemplate = value[0] ?? template?.[0] ?? "";
    return (
      <div className="space-y-3 rounded-lg border bg-muted/20 p-3">
        <div className="flex items-center justify-between">
          <Label>{labelFor(path.split(".").at(-1))}</Label>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => onChange([...value, clone(itemTemplate)])}
          >
            Add
          </Button>
        </div>
        {value.map((item, index) => (
          <div key={`${path}-${index}`} className="space-y-3 rounded-lg border bg-background p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Item {index + 1}</p>
              <Button type="button" size="sm" variant="ghost" onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}>
                Remove
              </Button>
            </div>
            <FieldEditor
              value={item}
              template={itemTemplate}
              path={`${path}.${index}`}
              onChange={(nextValue) => onChange(value.map((entry, itemIndex) => itemIndex === index ? nextValue : entry))}
            />
          </div>
        ))}
      </div>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div className="space-y-4 rounded-lg border bg-muted/20 p-4">
        <Label className="text-sm font-semibold">{labelFor(path.split(".").at(-1))}</Label>
        {Object.entries(value).map(([key, childValue]) => (
          <FieldEditor
            key={`${path}.${key}`}
            value={childValue}
            template={template?.[key]}
            path={`${path}.${key}`}
            onChange={(nextValue) => onChange({ ...value, [key]: nextValue })}
          />
        ))}
      </div>
    );
  }

  return null;
}

function MobilePreview({ templateType, page, section, content }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const sendPreview = () => frame.contentWindow?.postMessage(
      { type: "website-editor-preview", page, section, content },
      window.location.origin
    );
    frame.addEventListener("load", sendPreview);
    sendPreview();
    return () => frame.removeEventListener("load", sendPreview);
  }, [page, section, content]);

  return (
    <aside className="hidden w-[430px] shrink-0 border-l bg-muted/40 p-4 xl:block">
      <div className="sticky top-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Live preview</h2>
            <p className="text-xs text-muted-foreground">Previewing the {PAGE_LABELS[page].toLowerCase()} page</p>
          </div>
          <span className="rounded-full border bg-card px-2 py-1 text-xs text-muted-foreground">Mobile</span>
        </div>
        <iframe
          ref={frameRef}
          title="Mobile website preview"
          src={`/preview/${templateType}`}
          className="mx-auto h-[calc(100vh-150px)] max-h-[820px] w-[375px] rounded-[2rem] border-[8px] border-slate-900 bg-background shadow-2xl"
        />
      </div>
    </aside>
  );
}

function fetchWebsite() {
  return fetch("/api/website").then(async (response) => {
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.message || "Unable to load website.");
    return payload.data;
  });
}

export default function ContentEditor() {
  const queryClient = useQueryClient();
  const { data: website, isLoading, isError, error } = useQuery({
    queryKey: ["website-editor"],
    queryFn: fetchWebsite,
  });
  
  const [page, setPage] = useState("home");
  const [section, setSection] = useState("");
  const [content, setContent] = useState(null);

  const defaults = DEFAULTS_BY_TEMPLATE[website?.templateType];
  const resolvedContent = useMemo(
    () => (website && defaults ? mergeContent(content ?? website.content ?? {}, defaults) : null),
    [content, defaults, website]
  );
  const sections = useMemo(
    () => (resolvedContent?.pages?.[page] ? ["header", "footer", ...Object.keys(resolvedContent.pages[page])] : []),
    [page, resolvedContent]
  );
  const activeSection = sections.includes(section) ? section : sections[0];


  const saveMutation = useMutation({
    mutationFn: async ({ content }) => {
      const response = await fetch("/api/content", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateType: website.templateType,
          content,
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Unable to save section.");
      return payload.data;
    },
    onSuccess: (savedContent, variables) => {
      setContent(savedContent);
      queryClient.invalidateQueries({ queryKey: ["website-editor"] });
      toast.success(`${labelFor(variables.sectionName)} saved.`);
    },
    onError: (saveError) => toast.error(saveError.message),
  });

  if (!website) {
    return <div className="p-8 text-destructive">Website is not created yet.</div>;
  }

  if (isLoading) return <div className="p-8 text-muted-foreground">Loading website editor...</div>;
  if (isError) return <div className="p-8 text-destructive">{error.message}</div>;
  if (!resolvedContent || !defaults) return <div className="p-8 text-destructive">Unsupported template type.</div>;

  const isSiteSection = activeSection === "header" || activeSection === "footer";
  const sectionValue = isSiteSection ? resolvedContent[activeSection] : resolvedContent.pages[page][activeSection];
  const sectionTemplate = isSiteSection ? defaults[activeSection] : defaults.pages[page][activeSection];

  function updateSection(value) {
    const contentPath = isSiteSection ? activeSection : `pages.${page}.${activeSection}`;
    setContent((current) => setPath(current ?? website.content ?? {}, contentPath, value));
  }

  function saveActiveSection() {
    const sectionContent = isSiteSection
      ? { [activeSection]: sectionValue }
      : { pages: { [page]: { [activeSection]: sectionValue } } };
    saveMutation.mutate({ sectionName: activeSection, content: sectionContent });
  }

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-muted/30">
      <div className="border-b bg-card px-4 py-4 md:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold">Website content</h1>
            <p className="text-sm text-muted-foreground">{website.templateType} · Save each section independently.</p>
          </div>
          <Button
            type="button"
            disabled={saveMutation.isPending}
            onClick={saveActiveSection}
          >
            {saveMutation.isPending ? "Saving..." : `Save ${labelFor(activeSection)}`}
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {Object.entries(PAGE_LABELS).map(([pageKey, pageLabel]) => (
            <Button key={pageKey} type="button" variant={page === pageKey ? "default" : "outline"} onClick={() => setPage(pageKey)}>
              {pageLabel}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1">
        <aside className="w-56 shrink-0 overflow-y-auto border-r bg-card p-3">
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Sections</p>
          {sections.map((sectionKey) => (
            <button
              key={sectionKey}
              type="button"
              onClick={() => setSection(sectionKey)}
              className={cn("mb-1 w-full rounded-lg px-3 py-2 text-left text-sm", activeSection === sectionKey ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
            >
              {labelFor(sectionKey)}
            </button>
          ))}
        </aside>
        <main className="min-w-0 flex-1 overflow-y-auto p-4 md:p-6">
          <Card className="mx-auto max-w-3xl">
            <CardHeader><CardTitle>{labelFor(activeSection)}</CardTitle></CardHeader>
            <CardContent className="space-y-5">
              <FieldEditor value={sectionValue} template={sectionTemplate} path={activeSection} onChange={updateSection} />
            </CardContent>
          </Card>
        </main>
        <MobilePreview
          templateType={website.templateType}
          page={page}
          section={activeSection}
          content={resolvedContent}
        />
      </div>
    </div>
  );
}
