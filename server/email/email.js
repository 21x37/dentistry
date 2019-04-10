const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

const sendContactEmail = (contact) => {
    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'CONTACT REQUEST!',
        html: (
            `<p><b>Name:</b> ${contact.name}</p>
            <p><b>Email:</b> ${contact.email}</p>
            <p><b>Phone:</b> ${contact.phone}</p>
            <p><b>Company:</b> ${contact.company}<p>
            <p><b>Message:</b> ${contact.message}</p>`
        )
    });
};

const sendTruckEmail = (truck) => {
    sgMail.send({
        to: 'tylermok@outlook.com',
        from: 'website@freightdispatch.com',
        subject: 'TRUCK SETUP PACKET!',
        html: (
            `<p><b>Name:</b> ${truck.name}</p>
            <p><b>Represenative:</b> ${truck.represenative}</p>
            <p><b>Doing Business As:</b> ${truck.dbaName}</p>
            <p><b>Email:</b> ${truck.email}</p>
            <p><b>Address:</b> ${truck.address}</p>
            <p><b>City:</b> ${truck.city}</p>
            <p><b>State:</b> ${truck.state}</p>
            <p><b>Zip:</b> ${truck.zip}</p>
            <p><b>Type:</b> ${truck.carrier}</p>
            <p><b>Number:</b> ${truck.mc}: ${truck.number}</p>`
            ),
        attachments: [
            {
              content: truck.signedContract,
              filename: 'signed-contract.jpg',
              type: 'image/jpg',
              disposition: 'attachment',
              contentId: 'signed-contract'
            },
            {
                content: truck.namedInsurance,
                filename: 'named-insurance.jpg',
                type: 'image/jpg',
                disposition: 'attachment',
                contentId: 'named-insurance'
            },
            {
                content: truck.w9,
                filename: 'w9.jpg',
                type: 'image/jpg',
                disposition: 'attachment',
                contentId: 'w9'
            }
        ]
    });
};

const sendQuoteEmail = (quote) => {
    sgMail.send({
        to: 'tylermok@outlook.com',
        from:'website@freightdispatch.com',
        subject: 'QUOTE REQUEST!',
        html: (
            `<p><b>Name:</b> ${quote.name}</p>
            <p><b>Company:</b> ${quote.company}</p>
            <p><b>Email:</b> ${quote.email}
            <p><b>Phone:</b> ${quote.phone}
            <p><b>Pick Up:</b> ${quote.pickupCity}, ${quote.pickupState}</p>
            <p><b>Deliver:</b> ${quote.deliveryCity}, ${quote.deliveryState}</p>`
        )
    });
};

module.exports = {
    sendContactEmail,
    sendTruckEmail,
    sendQuoteEmail
};