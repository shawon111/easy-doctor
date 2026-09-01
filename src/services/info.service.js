import User from "@/models/user.model";

// check subdomain availibility
export const subdomainAvailability = async (subdomain) => {
    try {
        const isAvailable = await User.findOne({ subdomain: subdomain.toLowerCase() });
        if(isAvailable && isAvailable.subdomain === subdomain.toLowerCase()) {
            return false;
        }
        return true;
    }catch (error) {
        console.error("Error checking subdomain availability:", error);
        throw error;
    }
}