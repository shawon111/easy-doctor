
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
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

    invoiceId: {
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
      default: "bkash",
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "initiated",
        "pending",
        "completed",
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

    subscriptionStartedAt: {
      type: Date,
      default: null,
    },

    subscriptionExpiresAt: {
      type: Date,
      default: null,
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