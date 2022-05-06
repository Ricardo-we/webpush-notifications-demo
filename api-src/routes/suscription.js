const { Router } = require('express');
const webpush = require('web-push');
const router = Router();

let currentSub;



router.post('/suscribe',async (req, res) => {
    try {
        const subscription = req.body;
        currentSub = subscription;
        res.status(201).json({message: 'Suscribed'});
        
        const payload = JSON.stringify({
            title: 'Pushing notifications',
            message: 'Hey welcome to example'
        })
        
        await webpush.sendNotification(subscription, payload);
    } catch(error){
        console.log(error);
    }
})


const suscriptionRouter = router;
module.exports = suscriptionRouter;