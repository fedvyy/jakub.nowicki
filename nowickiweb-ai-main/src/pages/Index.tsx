import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Index;
