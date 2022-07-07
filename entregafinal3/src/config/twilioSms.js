const twilio = require('twilio')

const sendSMS = async () =>  {
    
    const accountSid = process.env.ACCOUNTSID
    const authToken = process.env.AUTHTOKEN
    
    const client = twilio(accountSid, authToken)
    
    try {
       const message = await client.messages.create({
          body: 'Mensaje desde el servicio de SMS de Twilio',
          from: process.env.CELTWILIO,
          to: process.env.MICEL
         })
         console.log(message)
    } catch (error) {
       console.log("Todo ok de momento")
    }
}

module.exports =  sendSMS
