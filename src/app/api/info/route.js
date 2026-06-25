import { NextResponse } from "next/server";

export const GET = async () => {
    return NextResponse.json({
        success: false,
        message: "Info endpoint not implemented yet"
    }, {
        status: 501,
    });
};

export const POST = async () => {
    return NextResponse.json({
        success: false,
        message: "Info endpoint not implemented yet"
    }, {
        status: 501,
    });
};
