import { cookies } from "next/headers";
import { verifyAccessToken } from "./jwt";
import User from "@/models/user.model";

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return null;
    }

    try {
        const payload = verifyAccessToken(accessToken);
        // if token is invalid or token type is not access, return null
        if (!payload || payload.type !== "access") {
            return null;
        }
        const user = await User.findById(payload.sub);
        return user;
    } catch {
        return null;
    }
}