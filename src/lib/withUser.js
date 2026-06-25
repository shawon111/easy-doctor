import { NextResponse } from "next/server";
import { requireUser } from "./requireUser";

export const withUser = (handler) => {
    return async (request, context) => {
        try {
            const currentUser = await requireUser();

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