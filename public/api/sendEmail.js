
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {
        // You can't use emailjs directly on the server in Node like this.
        // Server-side, you need the EmailJS REST API (or your own SMTP)
        // Example using fetch to EmailJS REST endpoint
        const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: process.env.EMAILJS_SERVICE_ID,
                    template_id: process.env.EMAILJS_TEMPLATE_ID,
                    user_id: process.env.EMAILJS_PUBLIC_KEY,
                    template_params: { name, email, message },
                }),
            }
        );

        if (response.ok) {
            return res.status(200).json({ message: "Email sent successfully" });
        } else {
            const text = await response.text();
            return res.status(500).json({ message: text });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
