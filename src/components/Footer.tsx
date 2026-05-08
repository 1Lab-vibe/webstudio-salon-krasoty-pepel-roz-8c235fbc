const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-semibold text-foreground">Пепел роз</p>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Салон красоты «Пепел роз», Краснодар
      </p>
    </div>
  </footer>
);

export default Footer;
