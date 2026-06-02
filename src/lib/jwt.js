import User from "@/models/user.model";
import jwt from "jsonwebtoken";

const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;

const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || "30m";

export function signRefreshToken(user) {
    return jwt.sign(
        {
            sub: user._id,
            type: "refresh",
        },
        JWT_REFRESH_SECRET,
        {
            expiresIn: JWT_REFRESH_EXPIRES_IN,
        }
    );
}

export function signAccessToken(user) {
    return jwt.sign(
        {
            sub: user._id,
            type: "access",
        },
        JWT_ACCESS_SECRET,
        {
            expiresIn: JWT_ACCESS_EXPIRES_IN,
        }
    );
}

export function verifyAccessToken(token) {
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET);

    if (decoded.type !== "access") {
        throw new Error("Invalid token type");
    }

    return decoded;
}

export function verifyRefreshToken(token) {
    const decoded = jwt.verify(token, JWT_REFRESH_SECRET);

    if (decoded.type !== "refresh") {
        throw new Error("Invalid token type");
    }

    return decoded;
}

export async function refreshAccessToken(refreshToken) {
    const decoded = verifyRefreshToken(refreshToken);

    const user = await User.findById(decoded.sub);

    if (!user) {
        throw new Error("User not found");
    }

    const newAccessToken = signAccessToken(user);
    const newRefreshToken = signRefreshToken(user);

    const data = {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
    }

    return data
}