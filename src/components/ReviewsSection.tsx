const reviews = [
  {
    name: "Анна К.",
    text: "Хожу уже полтора года. Окрашивание всегда ровное, цвет держится долго. Мастера внимательные, никогда не навязывают лишнего.",
    rating: 5,
    date: "март 2026",
  },
  {
    name: "Мария Д.",
    text: "Делала маникюр перед свадьбой — получилось идеально. Очень уютная атмосфера и приятный персонал.",
    rating: 5,
    date: "январь 2026",
  },
  {
    name: "Елена В.",
    text: "Стрижка и укладка за час — быстро, аккуратно, без долгих ожиданий. Рекомендую всем знакомым.",
    rating: 5,
    date: "декабрь 2025",
  },
  {
    name: "Ольга С.",
    text: "Брови сделали точно под форму лица. Наконец-то нашла своего мастера в Краснодаре!",
    rating: 5,
    date: "февраль 2026",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Что говорят клиенты
          </h2>
          <p className="text-muted-foreground font-body">
            Реальные отзывы с Яндекс Карт · рейтинг 4.9 из 5
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl p-5 border border-border"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-rose-warm" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-4">
                «{review.text}»
              </p>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm font-medium text-foreground">{review.name}</span>
                <span className="font-body text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
