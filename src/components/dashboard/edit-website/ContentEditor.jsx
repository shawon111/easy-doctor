"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { templateOneDefaults } from "@/content/defaults/template-one";
import { templateTwoDefaults } from "@/content/defaults/template-two";
import { templateThreeDefaults } from "@/content/defaults/template-three";
import { toGoogleMapsEmbedUrl } from "@/lib/content/map-embed";
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
    if (!Array.isArray(source) || source.length === 0) return clone(defaults);
    const defaultIsObjectList = defaults.some((item) => item && typeof item === "object" && !Array.isArray(item));
    if (defaultIsObjectList) {
      return source.map((item, index) => mergeContent(item, defaults[index % defaults.length] || {}));
    }
    return clone(source);
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
  return /image/i.test(key) && !/(?:alt|altsecondary)$/i.test(key);
}

function isMapLinkKey(key) {
  return key === "mapUrl" || key === "mapLink" || key === "mapLinkUrl";
}

const LINK_LIST_KEYS = new Set(["label", "href", "link", "key", "text", "url"]);

function isLinkList(value, template) {
  const items = Array.isArray(value) && value.length > 0 ? value : template;
  if (!Array.isArray(items) || items.length === 0) return false;

  return items.every(
    (item) =>
      item &&
      typeof item === "object" &&
      ("link" in item || "href" in item) &&
      Object.keys(item).every((key) => LINK_LIST_KEYS.has(key))
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
      <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{label}</Label>
      {value ? (
        <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60 p-1.5 shadow-sm">
          <Image
            src={value}
            alt={`${label} preview`}
            width={640}
            height={256}
            unoptimized
            className="h-36 w-full rounded-lg object-cover"
          />
        </div>
      ) : null}
      <div className="flex gap-2">
        <Input
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Image URL"
          className="rounded-xl border-slate-700 bg-slate-900/90 text-xs text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
        />
        <Button
          type="button"
          variant="outline"
          disabled={uploading}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white"
          asChild
        >
          <label className="cursor-pointer">
            {uploading ? "Uploading..." : "Upload"}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
        </Button>
      </div>
    </div>
  );
}

function MapLinkEditor({ label, value, onChange }) {
  const embedUrl = toGoogleMapsEmbedUrl(value || "");

  return (
    <div className="space-y-2">
      <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{label}</Label>
      {embedUrl ? (
        <div className="h-56 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60 shadow-sm">
          <iframe
            title={`${label} preview`}
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <div className="flex h-24 w-full items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-3 text-center text-xs text-slate-400">
          Add a Google Maps link to display an interactive location map.
        </div>
      )}
      <Input
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder="https://www.google.com/maps?q=Harley+Street,+London"
        className="rounded-xl border-slate-700 bg-slate-900/90 text-xs text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
      />
    </div>
  );
}

function LinkListEditor({ label, value, onChange }) {
  const links = value || [];

  return (
    <div className="space-y-3.5 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div>
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{label}</Label>
          <p className="mt-0.5 text-xs text-slate-400">Add the link text visitors see and where it directs.</p>
        </div>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-1.5 text-xs font-bold text-slate-200 transition-colors hover:border-indigo-500/50 hover:bg-slate-700 hover:text-white cursor-pointer"
          onClick={() => onChange([...links, { label: "", href: "" }])}
        >
          Add link
        </Button>
      </div>
      {links.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-4 text-center text-xs text-slate-400">
          No links yet. Click "Add link" to create one for your practice website.
        </p>
      ) : null}
      {links.map((link, index) => (
        <div
          key={`${label}-${index}`}
          className="grid gap-3.5 rounded-xl border border-slate-700/80 bg-slate-950/80 p-4 md:grid-cols-[1fr_1.4fr_auto] md:items-end shadow-sm"
        >
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">Link {index + 1}</span>
            <Label htmlFor={`${label}-${index}-label`} className="text-xs font-semibold text-slate-300">
              Link Label
            </Label>
            <Input
              id={`${label}-${index}-label`}
              value={link.label || ""}
              placeholder="e.g. About Us"
              onChange={(event) => onChange(links.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))}
              className="rounded-xl border-slate-700 bg-slate-900/90 text-xs text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`${label}-${index}-href`} className="text-xs font-semibold text-slate-300">
              Destination URL
            </Label>
            <Input
              id={`${label}-${index}-href`}
              value={link.href || ""}
              placeholder="/about or https://example.com"
              onChange={(event) => onChange(links.map((item, itemIndex) => itemIndex === index ? { ...item, href: event.target.value } : item))}
              className="rounded-xl border-slate-700 bg-slate-900/90 text-xs text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3.5 py-2 text-xs font-semibold text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white cursor-pointer"
            onClick={() => onChange(links.filter((_, itemIndex) => itemIndex !== index))}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}

function FieldEditor({ value, template, path, onChange }) {
  const lastKey = path.split(".").at(-1);
  const isScalarField = value === null || value === undefined || typeof value === "string";

  if (isScalarField && isImageKey(lastKey)) {
    return (
      <ImageField
        label={labelFor(lastKey)}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (isScalarField && isMapLinkKey(lastKey)) {
    return (
      <MapLinkEditor
        label={labelFor(path.split(".").at(-1))}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div>
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{labelFor(path.split(".").at(-1))}</Label>
          <p className="mt-0.5 text-xs text-slate-400">Toggle this section on or off on your website</p>
        </div>
        <Switch checked={value} onCheckedChange={onChange} />
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="space-y-1.5">
        <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{labelFor(path.split(".").at(-1))}</Label>
        <Input
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="rounded-xl border-slate-700 bg-slate-900/90 text-xs text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
        />
      </div>
    );
  }

  if (typeof value === "string" || value === null || value === undefined) {
    const isLong = value?.length > 100 || /body|description|answer|quote|heading/i.test(path);
    return (
      <div className="space-y-1.5">
        <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{labelFor(path.split(".").at(-1))}</Label>
        {isLong ? (
          <Textarea
            value={value || ""}
            onChange={(event) => onChange(event.target.value)}
            rows={4}
            className="rounded-xl border-slate-700 bg-slate-900/90 text-xs leading-relaxed text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
          />
        ) : (
          <Input
            value={value || ""}
            onChange={(event) => onChange(event.target.value)}
            className="rounded-xl border-slate-700 bg-slate-900/90 text-xs text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
          />
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
      <div className="space-y-3.5 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div>
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{labelFor(path.split(".").at(-1))}</Label>
            <p className="mt-0.5 text-xs text-slate-400">Manage list items for this section</p>
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-1.5 text-xs font-bold text-slate-200 transition-colors hover:border-indigo-500/50 hover:bg-slate-700 hover:text-white cursor-pointer"
            onClick={() => onChange([...value, clone(itemTemplate)])}
          >
            Add Item
          </Button>
        </div>
        {value.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-4 text-center text-xs text-slate-400">
            No items in this list yet. Click "Add Item" to create one.
          </p>
        ) : null}
        {value.map((item, index) => (
          <div key={`${path}-${index}`} className="space-y-3.5 rounded-xl border border-slate-700/70 bg-slate-950/80 p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Item {index + 1}</span>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white cursor-pointer"
                onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}
              >
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
      <div className="space-y-4 rounded-xl border border-slate-800/90 bg-slate-900/30 p-4 sm:p-5">
        <div className="border-b border-slate-800/80 pb-2">
          <Label className="text-xs font-bold uppercase tracking-wider text-slate-200">{labelFor(path.split(".").at(-1))}</Label>
        </div>
        <div className="space-y-4">
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
    <aside className="hidden w-[430px] shrink-0 border-l border-slate-800/80 bg-slate-950 p-4 xl:block">
      <div className="sticky top-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Preview</h2>
            <p className="text-xs text-slate-400">Previewing the {PAGE_LABELS[page].toLowerCase()} page</p>
          </div>
          <span className="rounded-full border border-slate-800 bg-slate-900 px-2.5 py-0.5 font-mono text-[11px] font-bold text-slate-400">Mobile</span>
        </div>
        <iframe
          ref={frameRef}
          title="Mobile website preview"
          src={`/preview/${templateType}`}
          className="mx-auto h-[calc(100vh-170px)] max-h-[820px] w-[375px] rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-950 shadow-2xl"
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


  if (isLoading) return <div className="p-8 text-xs font-semibold text-slate-400">Loading website editor...</div>;
  if (isError) return <div className="m-6 rounded-xl border border-rose-500/30 bg-rose-500/10 p-5 text-xs font-semibold text-rose-300">{error.message}</div>;
  if (!website) {
    return <div className="m-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-xs font-semibold text-amber-300">Website is not created yet.</div>;
  }
  if (!resolvedContent || !defaults) return <div className="m-6 rounded-xl border border-rose-500/30 bg-rose-500/10 p-5 text-xs font-semibold text-rose-300">Unsupported template type.</div>;

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
    <div className="flex min-h-[calc(100dvh-4rem)] w-full flex-col bg-slate-950 xl:h-[calc(100dvh-4rem)] xl:min-h-0 xl:overflow-hidden">
      <div className="border-b border-slate-800/80 bg-slate-950 px-4 py-4 md:px-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3 sm:items-center">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">Personalize Your Practice</p>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">Website Content Editor</h1>
            <p className="break-words text-xs sm:text-sm text-slate-400">{website.templateType} · Changes are saved section by section.</p>
          </div>
          <Button
            type="button"
            className="rounded-xl bg-indigo-600 px-5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
            disabled={saveMutation.isPending}
            onClick={saveActiveSection}
          >
            {saveMutation.isPending ? "Saving..." : `Save ${labelFor(activeSection)}`}
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {Object.entries(PAGE_LABELS).map(([pageKey, pageLabel]) => (
            <button
              key={pageKey}
              type="button"
              onClick={() => setPage(pageKey)}
              className={cn(
                "shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                page === pageKey
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              {pageLabel}
            </button>
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col xl:flex-row">
        <aside className="shrink-0 border-b border-slate-800/80 bg-slate-950 p-4 xl:w-60 xl:overflow-y-auto xl:border-b-0 xl:border-r">
          <p className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-slate-400">Sections</p>
          <nav aria-label="Website content sections" className="flex gap-2 overflow-x-auto pb-1 xl:block xl:overflow-visible xl:pb-0">
            {sections.map((sectionKey) => (
              <button
                key={sectionKey}
                type="button"
                onClick={() => setSection(sectionKey)}
                aria-current={activeSection === sectionKey ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-xl px-3.5 py-2 text-left text-xs sm:text-sm font-medium transition-all xl:mb-1.5 xl:block xl:w-full cursor-pointer",
                  activeSection === sectionKey
                    ? "bg-indigo-600 font-bold text-white shadow-sm shadow-indigo-600/20"
                    : "text-slate-400 hover:bg-slate-900/80 hover:text-slate-200"
                )}
              >
                {labelFor(sectionKey)}
              </button>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-8 xl:overflow-y-auto bg-slate-900/20">
          <Card className="mx-auto max-w-3xl rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-sm p-0">
            <CardHeader className="p-5 sm:p-6 border-b border-slate-800/80">
              <CardTitle className="text-base sm:text-lg font-bold text-white">{labelFor(activeSection)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-5 sm:p-6">
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
