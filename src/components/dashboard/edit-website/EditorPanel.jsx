import React from "react";
import SectionNav from "./SectionNav";
import BasicInfoForm from "./BasicInfoForm";

const EditorPanel = ({ activeSection, onSectionChange }) => {
  return (
    <section className="flex h-full w-full flex-col overflow-hidden border-r border-border bg-card shadow-[4px_0_12px_rgba(0,0,0,0.03)] lg:w-[450px] lg:flex-shrink-0 xl:w-[500px]">
      <SectionNav active={activeSection} onChange={onSectionChange} />
      <div className="flex-1 overflow-y-auto bg-card p-4 md:p-6">
        <div className="mb-8">
          <h3 className="mb-1 text-base font-semibold text-foreground">
            {activeSection}
          </h3>
          <p className="text-sm text-muted-foreground">
            Update your primary details displayed at the top of your website.
          </p>
        </div>
        <BasicInfoForm />
      </div>
    </section>
  );
};

export default EditorPanel;