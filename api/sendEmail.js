import emailjs from '@emailjs/browser';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        try {
            await emailjs.send(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID,
                { name, email, message },
                process.env.EMAILJS_PUBLIC_KEY
            );
            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
