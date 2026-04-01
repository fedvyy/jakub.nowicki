import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="o-mnie" className="py-24 px-6">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            O mnie
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full bg-primary" />
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Cześć, jestem <span className="text-foreground font-medium">Jakub Nowicki</span>.
            Zajmuję się tworzeniem nowoczesnych stron internetowych oraz implementacją
            chatbotów AI dla biznesu. Łączę estetyczny design z&nbsp;funkcjonalnością,
            aby Twoja firma wyróżniała się w&nbsp;sieci i&nbsp;skutecznie komunikowała
            się z&nbsp;klientami. Jestem na początku budowania portfolio, dlatego oferuję
            bardzo duże zaangażowanie, szybki kontakt i&nbsp;elastyczne podejście do projektu.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
