
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We&apos;re here to answer your questions. Reach out to us and
              we&apos;ll respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                Find us at our headquarters or drop us a line through email or
                phone.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Address</h3>
                    <p className="text-muted-foreground">
                      123 AI Avenue, Innovation City, 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors">
                      <a href="mailto:contact@scalezix.academy">
                        contact@scalezix.academy
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">
                      (123) 456-7890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6 md:p-8 shadow-lg">
                <h2 className="font-headline text-3xl font-bold mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
