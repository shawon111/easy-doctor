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

const getAppointmentsForDate = async (date, page, limit) => {
    const params = new URLSearchParams({
        date,
        page: String(page),
        limit: String(limit),
    });
    const response = await fetch(`/api/appointment/manage?${params}`, {
        cache: "no-store",
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load appointments for this date");
    }

    return result.data;
};

export function useAppointmentsForDate(date, page, limit = 15) {
    return useQuery({
        queryKey: ["appointments-by-date", date, page, limit],
        queryFn: () => getAppointmentsForDate(date, page, limit),
        enabled: Boolean(date),
        staleTime: 0,
        refetchOnMount: "always",
    });
}
