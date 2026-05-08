import heroBg from "@/assets/hero-bg.jpg";
import politico from "@/assets/politico.jpg";
import layout1 from "@/assets/layout1.jpg";
import layout2 from "@/assets/layout2.jpg";
import layout3 from "@/assets/layout3.jpg";
import layout4 from "@/assets/layout4.jpg";
import FloatingButtons from "@/components/FloatingButtons";
import lay1 from "@/assets/lay1.jpg";
import lay2 from "@/assets/lay2.jpg";
import lay3 from "@/assets/lay3.jpg";
import lay4 from "@/assets/lay4.jpg";
import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Globe,
  Headphones,
  HeartHandshake,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531973433033?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20campanha.";
const PHONE_DISPLAY = "(31) 9 7343-3033";

const benefits = [
  { icon: Target, title: "Proposta clara e profissional", desc: "Apresente suas bandeiras e propostas em um espaço pensado para o eleitor entender em segundos." },
  { icon: TrendingUp, title: "Mais visibilidade e engajamento", desc: "Apareça no Google quando o eleitor pesquisar sobre você e sua candidatura." },
  { icon: HeartHandshake, title: "Captação de contatos e doações", desc: "Receba mensagens, cadastros e apoios de forma direta e organizada." },
  { icon: ShieldCheck, title: "Credibilidade e seriedade", desc: "Um site próprio transmite a imagem institucional que sua campanha merece." },
  { icon: Award, title: "Diferenciação dos concorrentes", desc: "Saia na frente dos adversários que ainda dependem só das redes sociais." },
  { icon: Smartphone, title: "Perfeito no celular", desc: "Mais de 80% dos eleitores acessam pelo celular. Seu site é otimizado para isso." },
];

const layouts = [
  { img: layout1, title: "Institucional Clássico", desc: "Hero com foto, propostas e trajetória." },
  { img: layout2, title: "Mobile First", desc: "Pensado para o eleitor que acessa pelo celular." },
  { img: layout3, title: "Galeria & Eventos", desc: "Destaque fotos de campanha e agenda." },
  { img: layout4, title: "Doações & Contato", desc: "Formulários, doações e captação de leads." },
];

const planFeatures = [
  "Site 100% otimizado e feito do seu jeito",
  "Hospedagem gratuita por 1 ano",
  "Domínio gratuito (.site) por 1 ano",
  "Otimização para Meta Ads e Google Ads",
  "Suporte direto no WhatsApp",
];

const portfolio = [
  { img: lay1, name: "Assessoria Pulicarpo", url: "https://assessoriapulicarpo.com/" },
  { img: lay2, name: "Retífica Mais", url: "https://retificamais.site/" },
  { img: lay3, name: "Porto Betarello", url: "https://www.portobetarello.com/" },
  { img: lay4, name: "Expopet Design", url: "https://expopet-proj-uwlg.vercel.app/index.html" },
];

const bonuses = [
  {
    title: "Bônus 1: QR Code Personalizado",
    desc: "Receba um QR Code exclusivo para colocar nos seus materiais de campanha e cartões de visita. Também, botão de contato direto no seu site para o eleitor falar com você em um clique.",
  },
  {
    title: "Bônus 2: Domínio e Hospedagem",
    desc: "O pacote inclui domínio (.site) e hospedagem gratuita por 1 ano, além de um site otimizado para SEO e preparado para gerar mais visibilidade online.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container-elegant flex h-16 items-center justify-between">
          <a href="#top" className="font-serif text-lg font-bold text-primary">
            Vel<span className="text-accent">Dec</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#beneficios" className="hover:text-accent transition-smooth">Benefícios</a>
            <a href="#layouts" className="hover:text-accent transition-smooth">Layouts</a>
            <a href="#plano" className="hover:text-accent transition-smooth">Plano</a>
            <a href="#portfolio" className="hover:text-accent transition-smooth">Portfólio</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-smooth hover:bg-burgundy-deep"
          >
            <MessageCircle className="h-4 w-4" /> Falar agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="container-elegant relative z-10 py-24 md:py-32 text-primary-foreground animate-fade-up">
          <p className="eyebrow text-sand mb-6">
            <span className="divider-line bg-sand" />Presença Digital | Eleições 2026
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.05] font-bold max-w-4xl text-balance">
            Sua campanha merece <em className="text-sand not-italic">ser vista</em> por todos.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-sand/90 leading-relaxed">
            Tenha uma landing page profissional, rápida e elegante que apresenta sua proposta,
            trajetória e contato diretamente para o eleitor que funciona em qualquer dispositivo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#plano"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-elegant transition-smooth hover:bg-burgundy-deep hover:scale-[1.02]"
            >
              Quero minha página de campanha
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-sand/40 px-8 py-4 text-base font-medium text-sand transition-smooth hover:bg-sand/10"
            >
              Ver projetos entregues
            </a>
          </div>
          <div className="mt-16 flex items-center gap-8 text-xs text-sand/70 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Zap className="h-4 w-4" /> Rápido</span>
            <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> SEO Otimizado</span>
            <span className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> Mobile First</span>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-24 md:py-32 bg-background">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-muted shadow-elegant">
                <img
                  src={politico}
                  alt="Político em traje formal sorrindo"
                  loading="lazy"
                  width={896}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground p-6 max-w-[220px] shadow-elegant">
                <p className="font-serif text-3xl font-bold leading-none">+80%</p>
                <p className="text-xs mt-2 uppercase tracking-widest">dos eleitores buscam candidatos online</p>
              </div>
            </div>

            <div>
              <p className="eyebrow"><span className="divider-line" />Por que sua campanha precisa</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-primary leading-tight">
                Por que um político precisa de uma landing page?
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Em um cenário cada vez mais digital, ter um site próprio é um diferencial decisivo.
                É lá que o eleitor conhece, confia e decide.
              </p>

              <ul className="mt-10 space-y-6">
                {benefits.map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-accent">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-primary">{b.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LAYOUTS */}
      <section id="layouts" className="py-24 md:py-32 bg-secondary/40">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">Layouts Personalizados</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-primary leading-tight">
              Escolha o estilo que combina com sua candidatura.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Galeria de fotos, vídeos de campanha, depoimentos, números da sua trajetória, propostas
              detalhadas, tudo isso em layouts elegantes e profissionais, totalmente adaptáveis.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layouts.map((l) => (
              <article key={l.title} className="group bg-card shadow-card overflow-hidden transition-smooth hover:shadow-elegant hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={l.img}
                    alt={`Layout ${l.title}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-primary">{l.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{l.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              { icon: Smartphone, label: "Mobile Friendly" },
              { icon: Globe, label: "SEO Otimizado" },
              { icon: Rocket, label: "Pronto para Ads" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <p className="font-serif text-base font-semibold text-primary">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL / MOTIVAÇÃO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-elegant max-w-4xl text-center">
          <Sparkles className="h-8 w-8 text-accent mx-auto" />
          <h2 className="mt-6 font-serif text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
            Em ano de eleição, quem tem presença digital forte se destaca.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Com um site próprio você passa mais credibilidade, é encontrado facilmente no Google
            e as pessoas podem conhecer melhor sua história e propostas. Coloque o link do seu site
            no cartão de visitas com um <strong className="text-accent">QR Code</strong> e facilite o
            contato com o eleitor onde quer que você esteja.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 border border-border bg-secondary/50">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-primary">Mais alcance. Mais confiança. Mais votos.</span>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-elegant">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Exclusivos para você</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-primary">Bônus Exclusivos</h2>
            <p className="mt-6 text-muted-foreground">Vantagens adicionais que potencializam sua campanha desde o primeiro dia.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bonuses.map((bonus, i) => (
  <div key={i} className="aspect-[4/3] bg-card border border-border shadow-card flex flex-col items-center justify-center text-center p-10">
    <Star className="h-10 w-10 text-accent" />
    <p className="mt-4 font-serif text-xl font-semibold text-primary">{bonus.title}</p>
    <p className="mt-2 text-sm text-muted-foreground">{bonus.desc}</p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* PLANO PROMOÇÃO */}
      <section id="plano" className="py-24 md:py-32 bg-gradient-promo text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--sand-light))_0%,transparent_50%)]" />
        <div className="container-elegant relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sand-light/10 border border-sand-light/30 text-xs uppercase tracking-[0.25em] font-medium">
              <Zap className="h-3 w-3" /> Promoção Relâmpago
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl font-bold leading-tight">
              Plano Vitalício
            </h2>
            <p className="mt-4 text-sand/90">Oferta por tempo limitado! Garanta sua presença digital antes da campanha começar.</p>
          </div>

          <div className="mt-14 max-w-2xl mx-auto bg-navy-deep/40 backdrop-blur-sm border border-sand-light/15 p-8 md:p-12 shadow-elegant">
            <ul className="space-y-5">
              {planFeatures.map((f) => (
                <li key={f} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-sand mt-0.5" />
                  <span className="text-base md:text-lg leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-sand-light/15">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-sm bg-sand-light text-primary px-8 py-4 font-semibold transition-smooth hover:bg-sand"
              >
                Quero garantir minha vaga
              </a>
              <p className="mt-6 flex items-center justify-center gap-2 text-sm text-sand/80">
                <ShieldCheck className="h-4 w-4" />
                7 dias de garantia — Se não ficar satisfeito, ajustamos ou reembolsamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="py-24 md:py-32 bg-background">
        <div className="container-elegant">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow"><span className="divider-line" />Portfólio</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-primary leading-tight">Projetos já entregues</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Cada projeto é desenvolvido de forma personalizada, de acordo com a identidade e os objetivos de cada cliente.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((p) => (
              <article key={p.name} className="group bg-card shadow-card overflow-hidden transition-smooth hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={`Projeto ${p.name}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-primary">{p.name}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all"
                  >
                    Ver Projeto <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-elegant max-w-3xl text-center">
          <Headphones className="h-10 w-10 text-sand mx-auto" />
          <h2 className="mt-6 font-serif text-3xl md:text-5xl font-bold leading-tight text-balance">
            Vamos conversar sobre o site da sua campanha?
          </h2>
          <p className="mt-6 text-sand/80 text-lg leading-relaxed">
            Atendimento direto, sem intermediários. Tire suas dúvidas e receba uma proposta
            personalizada para sua candidatura em 2026.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-accent px-8 py-5 text-base font-semibold text-accent-foreground shadow-elegant transition-smooth hover:bg-burgundy-deep hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            Fale comigo no WhatsApp agora
          </a>
          <p className="mt-6 text-sm text-sand/70">{PHONE_DISPLAY}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-navy-deep text-sand/60 text-center text-sm">
        <div className="container-elegant">
          <p className="font-serif text-lg text-sand mb-2">Presença Digital para Políticos</p>
          <p>VelDec © {new Date().getFullYear()} — Sites e landing pages para campanhas eleitorais.</p>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  );
};

export default Index;
