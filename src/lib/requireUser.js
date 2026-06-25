import { getCurrentUser } from "@/services/user.service";

export const requireUser = async () => {
    const user = await getCurrentUser();
    console.log("requireUser user", user);
    if (!user) {
        return null;
    }
    return user;
}