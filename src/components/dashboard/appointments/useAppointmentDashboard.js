"use client";

import { useQuery } from "@tanstack/react-query";

const getAppointmentDashboard = async (limit) => {
    const response = await fetch(
        `/api/appointment/dashboard?limit=${limit}`,
        { cache: "no-store" }
    );
    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load appointments");
    }

    return result.data;
};

export function useAppointmentDashboard(limit) {
    return useQuery({
        queryKey: ["appointment-dashboard-data", limit],
        queryFn: () => getAppointmentDashboard(limit),
        staleTime: 0,
        refetchOnMount: "always",
    });
}
