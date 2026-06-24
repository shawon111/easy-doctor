import { getCurrentUser } from "@/services/user.service";

export const requireUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
        throw new Error("Unauthorized");
    }
    return user;
}