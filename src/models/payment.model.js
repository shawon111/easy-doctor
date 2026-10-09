
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    provider: {
      type: String,
      enum: ["uddoktapay"],
      default: "uddoktapay",
      required: true,
    },

    plan: {
      type: String,
      enum: ["monthly", "sixMonth", "yearly"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "BDT",
      enum: ["BDT"],
    },

    paymentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    transactionId: {
      type: String,
      default: null,
      trim: true,
    },

    paymentMethod: {
      type: String,
      enum: ["bkash"],
      default: "bkash",
      trim: true,
    },

    checkoutUrl: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "initiated",
        "pending",
        "completed",
        "processing",
        "failed",
        "cancelled",
        "refunded",
      ],
      default: "initiated",
      required: true,
      index: true,
    },

    paidAt: {
      type: Date,
      default: null,
    },

    verifiedAt: {
      type: Date,
      default: null,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    gatewayResponse: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Index for retrieving a user's payment history.
paymentSchema.index({ userId: 1, createdAt: -1 });

paymentSchema.index(
  { userId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: { $in: ["initiated", "pending", "processing"] },
    },
  }
);

// Prevent duplicate transaction IDs when present.
paymentSchema.index(
  { transactionId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      transactionId: { $type: "string" },
    },
  }
);

const Payment =
  mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);

export default Payment;