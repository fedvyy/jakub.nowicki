import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="container max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground"
        >
          Tworzę nowoczesne strony internetowe i&nbsp;wdrażam chatboty&nbsp;AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Pomagam firmom budować obecność online i&nbsp;automatyzować komunikację dzięki&nbsp;AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Skontaktuj się
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
