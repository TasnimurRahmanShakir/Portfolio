import emailjs from "emailjs-com";

export default async function handler(req, res) {
    console.log("Received:", req.body);
    console.log("Env:", process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, process.env.EMAILJS_PUBLIC_KEY);

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,   // your EmailJS service ID
            process.env.EMAILJS_TEMPLATE_ID,  // your EmailJS template ID
            { name, email, message },          // template parameters
            process.env.EMAILJS_PUBLIC_KEY    // your EmailJS public key
        );

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
        console.error("EmailJS Error:", err);
        return res.status(500).json({ message: "Failed to send email" });
    }
}
