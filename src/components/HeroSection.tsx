import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Интерьер салона красоты Пепел роз"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-xl">
          <p className="text-cream-dark font-body text-sm tracking-widest uppercase mb-4">
            Краснодар · салон красоты
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-6">
            Пепел роз
          </h1>
          <p className="text-cream-dark/90 font-body text-lg sm:text-xl leading-relaxed mb-4">
            Стрижки, окрашивание, маникюр, уход за&nbsp;бровями — всё в одном месте с проверенной репутацией.
          </p>

          <div className="flex items-center gap-3 mb-8 text-cream-dark/80">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-rose-glow" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 font-body text-sm font-medium">4.9</span>
            </div>
            <span className="text-sm">·</span>
            <span className="text-sm font-body">37 отзывов на Яндекс Картах</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+79001234567"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-rose-warm text-primary-foreground font-body font-medium text-sm rounded-lg hover:bg-rose-glow transition-colors"
            >
              Позвонить и записаться
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-cream-dark/30 text-cream font-body font-medium text-sm rounded-lg hover:bg-cream/10 transition-colors"
            >
              Услуги и цены
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
