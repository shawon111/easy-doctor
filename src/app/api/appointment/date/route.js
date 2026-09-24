import { getAppointmentByDate } from "@/services/appointment.service";

export const GET = async (request, { params }, currentuser) => {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const date = searchParams.get("date");
    try {
        const appointments = await getAppointmentByDate(userId, date);
        return NextResponse.json(
            {
                success: true,
                data: appointments
            },
            {
                status: 200
            }
        )
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json({
            success: false,
            message: "Failed to get appointments"
        }, {
            status: 500,
        });
    }
}