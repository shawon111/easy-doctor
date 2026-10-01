import mongoose from "mongoose";

export const withTransaction = async (callback) => {
    const session = await mongoose.startSession();

    try {
        return await session.withTransaction(() => callback(session));
    } finally {
        await session.endSession();
    }
};
