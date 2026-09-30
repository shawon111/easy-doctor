import { connectDB } from "@/config/database";
import { requireUser } from "@/lib/requireUser";
import User from "@/models/user.model";
import { revalidatePath } from "next/cache";

export async function markGoogleBusinessComplete() {
    "use server"
    const user = await requireUser();

    await connectDB();

    await User.findByIdAndUpdate(user._id, {
        $set: {
            googleBusinessSetup: true,
        },
    }, {
        new: true
    });
     revalidatePath("/dashboard/google-business")
}