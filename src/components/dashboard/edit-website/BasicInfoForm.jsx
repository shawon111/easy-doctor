import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfilePhotoInput from "./ProfilePhotoInput";

const PROFILE_PHOTO =
  "https://ui-avatars.com/api/?name=Ahmed+Rahman&size=400&background=0050cb&color=ffffff&bold=true";

const FullNameInput = () => (
  <div>
    <Label htmlFor="name" className="mb-1 block text-sm font-semibold text-foreground">
      Full Name
    </Label>
    <Input id="name" type="text" defaultValue="Dr. Ahmed Rahman" className="h-11" />
  </div>
);

const TitleInput = () => (
  <div>
    <Label htmlFor="title" className="mb-1 block text-sm font-semibold text-foreground">
      Professional Title
    </Label>
    <Input id="title" type="text" defaultValue="Senior Cardiologist" className="h-11" />
  </div>
);

const SpecializationInput = () => (
  <div>
    <Label htmlFor="specialization" className="mb-1 block text-sm font-semibold text-foreground">
      Specialization
    </Label>
    <Input
      id="specialization"
      type="text"
      defaultValue="Interventional Cardiology, Heart Failure"
      className="h-11"
    />
    <p className="mt-1 text-xs text-muted-foreground">Separate multiple with commas.</p>
  </div>
);

const PhoneEmailGrid = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <Label htmlFor="phone" className="mb-1 block text-sm font-semibold text-foreground">
        Contact Phone
      </Label>
      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="h-11" />
    </div>
    <div>
      <Label htmlFor="email" className="mb-1 block text-sm font-semibold text-foreground">
        Public Email
      </Label>
      <Input
        id="email"
        type="email"
        defaultValue="contact@drahmedrahman.com"
        className="h-11"
      />
    </div>
  </div>
);

const BasicInfoForm = () => {
  return (
    <form className="space-y-6">
      <ProfilePhotoInput src={PROFILE_PHOTO} />
      <FullNameInput />
      <TitleInput />
      <SpecializationInput />
      <PhoneEmailGrid />
    </form>
  );
};

export default BasicInfoForm;