const webpush = require('web-push');
const app = require('./app.js');

const vapidKeys ={                
    publicKey:"BOlkEQP4lBBRFA7Ro91Y-PnAxKXL0rLSJk7Z1N7PCB0sG8noQCbeM5RN9n2WYLBhFSmXlmtGLa7IiMbVE-6RlMA",
    privateKey:"DsblLRZp8muUJW49pglUKNi1f9ma1kudpWcUoI6l9L8"
}

webpush.setVapidDetails(
    'mailto:totigamer2004@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);


const PORT = process.env.PORT || 3509;
app.listen(PORT);
console.log(`Server listening on port: ${PORT}`);

module.exports = vapidKeys