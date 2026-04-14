import { Instagram } from "lucide-react";
import oraveLogo from "@/assets/orave-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-md mx-auto text-center space-y-6">
        <p className="text-muted-foreground text-xs text-spaced uppercase">Crafted By</p>
        <img
          src={oraveLogo}
          alt="Orave Studios"
          className="h-12 mx-auto opacity-80 invert"
          loading="lazy"
        />
        <a
          href="https://www.instagram.com/oravestudios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Instagram className="w-4 h-4" />
          <span className="text-xs text-wide uppercase">@oravestudios</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
