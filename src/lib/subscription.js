export const isWebsiteActive = (expiresAt) => {
    if (expiresAt === null || expiresAt === undefined || expiresAt === "") {
        return true;
    }

    const expirationTime = new Date(expiresAt).getTime();
    return Number.isFinite(expirationTime) && expirationTime > Date.now();
};
