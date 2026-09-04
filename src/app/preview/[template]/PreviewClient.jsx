"use client";

import { useEffect, useState } from "react";
import TemplateRenderer from "./TemplateRenderer";

export default function PreviewClient({ template, initialPage = "home" }) {
  const [preview, setPreview] = useState({ page: initialPage, section: "", content: null });

  useEffect(() => {
    const pageRoot = document.querySelector("main");
    const siteHeader = document.querySelector("body header");
    const siteFooter = document.querySelector("body footer");
    if (!pageRoot || !preview.section) return;

    if (siteHeader) siteHeader.style.display = preview.section === "header" ? "" : "none";
    if (siteFooter) siteFooter.style.display = preview.section === "footer" ? "" : "none";
    pageRoot.style.display = ["header", "footer"].includes(preview.section) ? "none" : "";
    if (["header", "footer"].includes(preview.section)) return;

    const wrapper = pageRoot.children.length === 1 && pageRoot.firstElementChild?.tagName === "DIV"
      ? pageRoot.firstElementChild
      : pageRoot;
    const candidates = Array.from(wrapper.children).filter((element) =>
      ["SECTION", "HEADER"].includes(element.tagName)
    );
    const sectionIndex = Object.keys(preview.content?.pages?.[preview.page] || {}).indexOf(preview.section);

    candidates.forEach((element, index) => {
      element.style.display = index === sectionIndex ? "" : "none";
    });
  }, [preview]);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== window.location.origin || event.data?.type !== "website-editor-preview") {
        return;
      }
      setPreview({
        page: event.data.page,
        section: event.data.section,
        content: event.data.content,
      });
    }

    window.addEventListener("message", handleMessage);
    window.parent.postMessage({ type: "website-editor-ready" }, window.location.origin);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <TemplateRenderer
      page={preview.page}
      slug={template}
      isDemo={!preview.content}
      content={preview.content || undefined}
      template={template}
    />
  );
}
