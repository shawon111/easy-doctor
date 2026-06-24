import { NextResponse } from "next/server";
import { requireUser } from "./requireUser";

export const withUser = (handler) => {
    return async (request, context) => {
        try {
            const user = await requireUser();

            return handler(request, context, user);
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