import { motion } from "framer-motion";
import { Globe, MessageSquare, Cog } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Strony internetowe",
    description: "Landing pages, strony firmowe i wizytówki — szybkie, responsywne i zoptymalizowane pod SEO.",
  },
  {
    icon: MessageSquare,
    title: "Chatboty AI",
    description: "Inteligentni asystenci, którzy odpowiadają na pytania klientów 24/7 i wspierają sprzedaż.",
  },
  {
    icon: Cog,
    title: "Automatyzacja procesów",
    description: "Usprawnienie powtarzalnych zadań dzięki nowoczesnym narzędziom i integracji AI.",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="py-24 px-6 bg-card">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Usługi
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
