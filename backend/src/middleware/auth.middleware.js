import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if(!req.auth.userId){
        return res.status(401).json({message: "Unauthorized"});

    }
    next();
};

// ******* Admin Middleware ********
export const requireAdmin = async (req, res, next) => {
    try{
        const { userId } = req.auth.userId;

        const currentUser = await clerkClient.users.getUser(userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress;

        if(!isAdmin){
            return res.status(403).json({message: "Forbidden - Admins only"});
        }
        next();
        
    }
    catch (error){
        next(error);
    }
}