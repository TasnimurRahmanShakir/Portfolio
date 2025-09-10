import { InputField } from "./InputField";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from "@/hooks/useInView"
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Map,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Send,
} from "lucide-react";

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", { duration: 1500 });
      formRef.current.reset();
    } catch (err) {
      toast.error(`Failed to send message. ${err}`, { duration: 1500 });
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={cn(
        "px-4 h-auto relative mb-24 bg-secondary/30 opacity-0",
        sectionInView ? "animate-fade-in-delay-1" : ""
      )}
    >
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-fade-in-delay-2">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delay-3">
          I’d love to hear from you whether it’s about a project, an idea, or
          just a friendly hello. I’m always open to opportunities and
          collaborations, so let’s build something meaningful together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6 justify-center animate-fade-in-delay-4">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tasnim.bd.cse@gmail.com&su=Collaboration%20Opportunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    tasnim.bd.cse@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone </h4>
                  <a
                    href="tel:+880 1521-549877"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1521-549877
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mirpur-1, Dhaka, Bangladesh
                  </a>
                </div>
              </div>
              <div className="pt-8">
                <h4 className="font-medium mb-4 text-left">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/md-tasnimur-rahman-36bab6219/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/tasnimurrrahman/"
                    target="_blank"
                  >
                    <Instagram />
                  </a>

                  <a href="https://www.facebook.com/Tasnim0152" target="_blank">
                    <Facebook />
                  </a>
                  <a href="https://github.com/TasnimurRahmanShakir/">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs animate-fade-in-delay-5">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <InputField
                title="Your Name"
                name="name"
                placeholder="Mr. Tasnim..."
                type="text"
                id="name"
              />

              <InputField
                title="Email"
                name="email"
                id="email"
                type="email"
                placeholder="tasnim@gmail.com"
              />
              <InputField
                title="Your Message"
                name="message"
                id="message"
                type="textArea"
                placeholder="I would like to talk about..."
              />

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} className="mt-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
