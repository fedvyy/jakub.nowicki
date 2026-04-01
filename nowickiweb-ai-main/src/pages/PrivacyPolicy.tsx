import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="py-20 px-6">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Strona główna
          </Link>

          <h1 className="mt-8 font-heading text-3xl md:text-4xl font-bold text-foreground">
            Polityka prywatności
          </h1>
          <div className="mt-2 w-12 h-1 rounded-full bg-primary" />

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                1. Administrator danych
              </h2>
              <p>
                Administratorem danych osobowych jest Jakub Nowicki. W sprawach związanych
                z ochroną danych osobowych można kontaktować się za pośrednictwem formularza
                kontaktowego na stronie głównej.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                2. Zakres przetwarzanych danych
              </h2>
              <p>
                Przetwarzamy dane osobowe podane dobrowolnie w formularzu kontaktowym:
                imię, adres e-mail oraz treść wiadomości. Dane te wykorzystywane są wyłącznie
                w celu udzielenia odpowiedzi na przesłane zapytanie.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                3. Pliki cookies
              </h2>
              <p>
                Strona wykorzystuje pliki cookies w następujących kategoriach:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                <li><strong className="text-foreground">Niezbędne</strong> — wymagane do prawidłowego działania strony.</li>
                <li><strong className="text-foreground">Analityczne</strong> — pomagają zrozumieć, w jaki sposób odwiedzający korzystają ze strony.</li>
                <li><strong className="text-foreground">Marketingowe</strong> — służą do personalizacji treści reklamowych.</li>
              </ul>
              <p className="mt-3">
                Możesz zarządzać swoimi preferencjami dotyczącymi cookies za pomocą banera
                wyświetlanego przy pierwszej wizycie lub poprzez link „Ustawienia cookies" w stopce strony.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                4. Prawa użytkownika
              </h2>
              <p>
                Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
                przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu wobec przetwarzania.
                W celu realizacji tych praw skontaktuj się z administratorem.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                5. Kontakt
              </h2>
              <p>
                W sprawach dotyczących polityki prywatności i ochrony danych osobowych
                skontaktuj się za pośrednictwem formularza kontaktowego dostępnego na stronie głównej.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
