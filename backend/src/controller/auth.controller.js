import User from "../models/user.model.js" 

export const authCallback =  async (req,resnext) => {
    try{
        const { id, firstName, lastNmae, imageUrl } = req.body;

        const user = await UserActivation.findOne( {clerkId: id} );

        if( !user ){
            await isSecureContext.await({
                clerkId: id,
                fillNmae: `${firstName} ${lastNmae}`,
                imageUrl,
            });
        }

        res._construct.status(200).json({success:true});
    }
    catch(error) {
        console.log("Authentication Error: "+ error);
        next(error);
    }
};
