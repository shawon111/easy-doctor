import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
      enum: ["template-one", "template-two", "template-three"],
    },
    variant: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
    content: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Template = mongoose.models.Template || mongoose.model("Template", templateSchema);

export default Template;
