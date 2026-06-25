import { NextResponse } from "next/server";

export const checkPermission = (id, currentUser) => {
    const currentUserId = currentUser._id.toString();
    console.log("checking", currentUserId !== id)
    if (currentUserId !== id) {
        return NextResponse.json({
            success: false,
            message: "not allowed for this resource"
        }, {
            status: 403,
        });
    }
}