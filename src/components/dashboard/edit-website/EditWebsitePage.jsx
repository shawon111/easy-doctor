"use client";

import { useState } from "react";
import EditorPanel from "./EditorPanel";
import LivePreviewPane from "./LivePreviewPane";

const DEFAULT_SECTION = "Basic Information";

const EditWebsitePage = () => {
  const [activeSection, setActiveSection] = useState(DEFAULT_SECTION);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <EditorPanel
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <LivePreviewPane />
    </div>
  );
};

export default EditWebsitePage;