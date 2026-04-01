import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="container max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kontakt
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full bg-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 space-y-6"
        >
          <p className="text-muted-foreground">
            Skontaktuj się ze mną — chętnie porozmawiam o&nbsp;Twoim projekcie.
            Wycena jest <span className="font-semibold text-primary">darmowa</span>!
          </p>

          <div className="space-y-4">
            <a
              href="tel:+48604729277"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  604 729 277
                </p>
              </div>
            </a>

            <a
              href="mailto:jakubnbiz@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  jakubnbiz@gmail.com
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
