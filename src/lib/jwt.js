import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || "30m";

export function signRefreshToken(user) {
    return jwt.sign(
        {
            sub: user._id,
        },
        JWT_SECRET,
        {
            expiresIn: JWT_REFRESH_EXPIRES_IN ,
        }
    );
}

export function signAccessToken(user) {
    return jwt.sign(
        { sub: user._id },
        JWT_SECRET,
        { expiresIn: JWT_ACCESS_EXPIRES_IN }
    );
}

export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

export function refreshAccessToken(refreshToken) {
    try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        const userId = decoded.sub;
        const newAccessToken = signAccessToken({ _id: userId });
        return newAccessToken;
    }
    catch (err) {
        throw new Error("Invalid refresh token");
    }
}