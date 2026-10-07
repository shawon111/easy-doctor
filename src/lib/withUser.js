import { NextResponse } from "next/server";
import { requireUser } from "./requireUser";
import { isWebsiteActive } from "./subscription";

export const withUser = (handler) => {
    return async (request, context) => {
        try {
            const currentUser = await requireUser();
            if (!currentUser?._id) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Unauthorized",
                    },
                    { status: 401 }
                );
            }

            // response if subscription expired
            const isActivePlan = isWebsiteActive(currentUser?.expiresAt)
            if (isActivePlan === false) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Your subscription has expired.",
                    },
                    { status: 403 }
                );
            }
            return handler(request, context, currentUser);
        } catch (error) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }
    };
};