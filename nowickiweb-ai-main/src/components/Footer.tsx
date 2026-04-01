import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="container max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jakub Nowicki. Wszelkie prawa zastrzeżone.</p>
        <div className="flex items-center gap-6">
          <Link to="/polityka-prywatnosci" className="hover:text-foreground transition-colors">
            Polityka prywatności
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("cookie-consent");
              window.location.reload();
            }}
            className="hover:text-foreground transition-colors"
          >
            Ustawienia cookies
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
