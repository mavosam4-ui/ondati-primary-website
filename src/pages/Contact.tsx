import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, Mailbox } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will respond shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading title="Send Us a Message" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      maxLength={255}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is your message about?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    maxLength={200}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    maxLength={1000}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="font-heading font-bold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading title="Get in Touch" centered={false} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 bg-card rounded-lg p-3 border border-border">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      Phone
                    </h4>
                    <p className="text-muted-foreground">0710 790 013</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card rounded-lg p-3 border border-border">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      Email
                    </h4>
                    <p className="text-muted-foreground">
                      info@ondatiprimary.ac.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card rounded-lg p-3 border border-border">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      Physical Address
                    </h4>
                    <p className="text-muted-foreground">
                      Ondati Village, Koguta Location
                      <br />
                      Pala Ward, Ndhiwa Sub County
                      <br />
                      Homabay County, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card rounded-lg p-3 border border-border">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <Mailbox className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      Postal Address
                    </h4>
                    <div className="text-muted-foreground">
                      <ul className="list-disc pl-5">
                        <li>P.O. BOX 40300 Homa-Bay</li>
                        <li>P.O. BOX 126 Ndhiwa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card rounded-lg p-3 border border-border">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      Office Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Monday – Friday: 7:00 AM – 5:00 PM
                      <br />
                      Saturday: 8:00 AM – 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border shadow-sm lg:col-span-2"> 
                <iframe
                  title="Ondati Primary School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.0!2d34.4!3d-0.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNDUnMDAuMCJTIDM0wrAyNCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
