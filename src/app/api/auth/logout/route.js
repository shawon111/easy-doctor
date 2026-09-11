import { logger } from "@/lib/logger"
import { logoutuser } from "@/services/user.service"
import { NextResponse } from "next/server"

export const POST = async()=>{
    try{
        const logOut = await logoutuser();
        if(!logoutuser) {
            throw new Error("failed to logout user")
        }
        return NextResponse.json({
            success: true,
            data: logOut
        }, {status: 201})
    }catch(error){
        logger.error(error.message)
        return NextResponse.json({
            success: false,
            message: "failed to logout user"
        }, {status: 500})
    }
}