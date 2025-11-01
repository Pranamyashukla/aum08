import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => {
    req.auth.userId; // gives the clerk user id if logged in

    res.send('User router - GET - to display list of users');
});


export default router;