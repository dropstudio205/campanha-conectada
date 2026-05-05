import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5531973433033?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20campanha.";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant transition-smooth hover:scale-110 hover:bg-burgundy-deep"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed bottom-24 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card transition-smooth hover:bg-navy-deep"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
