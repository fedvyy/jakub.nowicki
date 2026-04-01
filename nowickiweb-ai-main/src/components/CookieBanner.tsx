import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPrefs: CookiePrefs = { necessary: true, analytics: false, marketing: false };

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const accept = (p: CookiePrefs) => {
    localStorage.setItem("cookie-consent", JSON.stringify(p));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container max-w-3xl mx-auto bg-foreground text-background rounded-xl p-6 shadow-2xl">
          {!showSettings ? (
            <>
              <p className="text-sm leading-relaxed opacity-90">
                Ta strona używa plików cookies, aby zapewnić najlepsze doświadczenia.
                Możesz zarządzać swoimi preferencjami w ustawieniach.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => accept({ necessary: true, analytics: true, marketing: true })}
                  className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Akceptuj wszystkie
                </button>
                <button
                  onClick={() => accept(defaultPrefs)}
                  className="px-5 py-2.5 rounded-lg border border-background/20 text-sm font-medium hover:bg-background/10 transition-colors"
                >
                  Odrzuć
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-5 py-2.5 rounded-lg border border-background/20 text-sm font-medium hover:bg-background/10 transition-colors"
                >
                  Ustawienia
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-heading font-semibold text-lg">Ustawienia cookies</h3>
              <div className="mt-4 space-y-4">
                {[
                  { key: "necessary" as const, label: "Niezbędne", desc: "Wymagane do działania strony.", disabled: true },
                  { key: "analytics" as const, label: "Analityczne", desc: "Pomagają zrozumieć, jak korzystasz ze strony.", disabled: false },
                  { key: "marketing" as const, label: "Marketingowe", desc: "Służą do personalizacji reklam.", disabled: false },
                ].map((item) => (
                  <div key={item.key} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs opacity-60">{item.desc}</p>
                    </div>
                    <button
                      disabled={item.disabled}
                      onClick={() => setPrefs((p) => ({ ...p, [item.key]: !p[item.key] }))}
                      className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors ${
                        prefs[item.key] ? "bg-primary" : "bg-background/20"
                      } ${item.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-background transition-transform ${
                          prefs[item.key] ? "translate-x-5" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => accept(prefs)}
                  className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Zapisz preferencje
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-5 py-2.5 rounded-lg border border-background/20 text-sm font-medium hover:bg-background/10 transition-colors"
                >
                  Wróć
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
