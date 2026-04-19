import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  Shield,
  Star,
  TrendingDown,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Instant autocomplete with filters by category, brand, price range, and ratings. Find exactly what you need in seconds.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: BarChart2,
    title: "Price Comparison",
    desc: "Side-by-side price breakdowns from Amazon, Flipkart, eBay, and more. All data in one unified view.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: TrendingDown,
    title: "Best Deal Finder",
    desc: "AI automatically highlights the lowest price and best value product so you never miss a deal.",
    color: "text-chart-3",
    bg: "bg-chart-3/10",
  },
  {
    icon: Heart,
    title: "Wishlist",
    desc: "Save your favourite products and get notified the moment prices drop on the items you love.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
];

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Search",
    desc: "Type any product name into our smart search bar. Autocomplete suggestions guide you to the exact item you're looking for.",
  },
  {
    step: "02",
    icon: BarChart2,
    title: "Compare",
    desc: "Instantly see prices from Amazon, Flipkart, eBay, and other top platforms side-by-side with ratings and discount badges.",
  },
  {
    step: "03",
    icon: TrendingDown,
    title: "Save",
    desc: "Click the best deal and buy directly from the retailer — or track the price and wait for an even better offer.",
  },
];

const STATS = [
  { value: "50+", label: "Products Tracked" },
  { value: "4", label: "Platforms" },
  { value: "100%", label: "Free to Use" },
];

const PLATFORMS = [
  { name: "Amazon", color: "bg-[#FF9900]/10 text-[#FF9900]", emoji: "📦" },
  { name: "Flipkart", color: "bg-[#2874F0]/10 text-[#2874F0]", emoji: "🛒" },
  { name: "eBay", color: "bg-[#E53238]/10 text-[#E53238]", emoji: "🏷️" },
  { name: "More Stores", color: "bg-primary/10 text-primary", emoji: "🌐" },
];

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Comparison", to: "/comparison" },
  { label: "About", to: "/about" },
];

export default function AboutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you within 24 hours. 🎉");
      setName("");
      setEmail("");
      setMessage("");
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="bg-background" data-ocid="about.page">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-card border-b border-border/50 py-20 px-4 overflow-hidden"
        data-ocid="about.hero_section"
      >
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--primary)) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--accent)) 0%, transparent 70%)",
          }}
        />

        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Badge className="mb-5 bg-primary/10 text-primary border-primary/30 px-3 py-1 text-sm">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              About PriceWise
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight tracking-tight">
              Your smart companion for finding{" "}
              <span className="text-accent">the best deals</span> across the web
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We believe everyone deserves to pay the right price. PriceWise
              aggregates real-time pricing from the world's top e-commerce
              platforms so you can compare, decide, and save effortlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {PLATFORMS.map(({ name: pName, color, emoji }) => (
              <span
                key={pName}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium glass ${color}`}
              >
                <span>{emoji}</span>
                {pName}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 border-b border-border/30 py-12 px-4"
        data-ocid="about.stats_section"
      >
        <div className="container max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
                data-ocid={`about.stat.${i + 1}`}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section
        className="bg-background py-16 px-4"
        data-ocid="about.mission_section"
      >
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
                <Star className="w-3 h-3 mr-1" />
                Our Mission
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Helping you save money on every purchase
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PriceWise was built for one simple reason: online shopping is
                fragmented. The same laptop might cost $100 more on Amazon than
                on Flipkart, yet most shoppers never know.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We pull live pricing from{" "}
                <span className="text-foreground font-medium">Amazon</span>,{" "}
                <span className="text-foreground font-medium">Flipkart</span>,{" "}
                <span className="text-foreground font-medium">eBay</span>, and
                more — surfacing the lowest price, best ratings, and current
                discounts in a single, clean comparison view.
              </p>
              <Link to="/products" data-ocid="about.mission_cta_link">
                <Button
                  className="gap-1.5"
                  data-ocid="about.mission_cta_button"
                >
                  Start Comparing <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Shield,
                  title: "100% Transparent",
                  desc: "No hidden fees. We never take commission.",
                },
                {
                  icon: Zap,
                  title: "Real-time Data",
                  desc: "Prices refresh automatically so you see current deals.",
                },
                {
                  icon: TrendingDown,
                  title: "Price History",
                  desc: "See 30-day trends and know when to buy.",
                },
                {
                  icon: Heart,
                  title: "User-first",
                  desc: "Your wishlist, your data, always private.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-xl p-4 shadow-subtle transition-smooth hover:shadow-elevated"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ─────────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 border-y border-border/30 py-16 px-4"
        data-ocid="about.features_section"
      >
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/30">
              Features
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Everything you need to shop smarter
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-6 shadow-subtle transition-smooth hover:shadow-elevated hover:-translate-y-1"
                data-ocid={`about.feature_card.${i + 1}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section
        className="bg-background py-16 px-4"
        data-ocid="about.how_it_works_section"
      >
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-3 bg-accent/10 text-accent border-accent/30">
              How It Works
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Three steps to the best deal
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connector line on desktop */}
            <div
              className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-border/60"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map(({ step, icon: Icon, title, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center relative"
                  data-ocid={`about.step.${i + 1}`}
                >
                  <div className="relative inline-flex mb-5">
                    <div className="w-20 h-20 rounded-2xl glass shadow-elevated flex items-center justify-center mx-auto transition-smooth hover:scale-105">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 border-y border-border/30 py-16 px-4"
        data-ocid="about.contact_section"
      >
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/30">
              <MessageSquare className="w-3 h-3 mr-1" />
              Contact Us
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Get in touch
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Questions, feedback, or just want to say hi? We'd love to hear
              from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-5"
            >
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "hello@pricewise.ai",
                },
                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
                {
                  icon: MapPin,
                  label: "Find Us",
                  value: "San Francisco, CA",
                },
                {
                  icon: MessageSquare,
                  label: "Live Chat",
                  value: "Mon–Fri, 9 AM – 5 PM PT",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {label}
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 glass-dark rounded-2xl p-6 shadow-elevated"
            >
              <h3 className="font-semibold text-foreground mb-5">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-ocid="about.contact_name_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-ocid="about.contact_email_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-muted-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us what's on your mind..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    data-ocid="about.contact_message_textarea"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-1.5"
                  disabled={submitting}
                  data-ocid="about.contact_submit_button"
                >
                  {submitting ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer
        className="bg-card border-t border-border/50 py-10 px-4"
        data-ocid="about.footer"
      >
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Price<span className="text-accent">Wise</span>
              </span>
            </div>

            {/* Nav links */}
            <nav
              className="flex flex-wrap justify-center gap-1"
              aria-label="Footer navigation"
            >
              {FOOTER_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
                  data-ocid={`about.footer_link.${label.toLowerCase()}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
