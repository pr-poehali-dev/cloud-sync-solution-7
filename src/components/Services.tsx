import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Plane",
    title: "Английский для путешествий",
    desc: "Разговорные навыки, бытовые ситуации, аэропорт, отель, шоппинг. Заговорите уверенно уже через 2 месяца.",
    price: "от 2 500 ₽ / урок",
  },
  {
    icon: "Briefcase",
    title: "Деловой английский",
    desc: "Переговоры, деловая переписка, презентации и звонки с иностранными партнёрами. Для руководителей и менеджеров.",
    price: "от 3 500 ₽ / урок",
  },
  {
    icon: "GraduationCap",
    title: "Английский для детей",
    desc: "Игровые занятия для детей 5–14 лет. Развитие речи, чтения и аудирования в дружелюбной атмосфере.",
    price: "от 1 800 ₽ / урок",
  },
  {
    icon: "BookOpen",
    title: "Подготовка к IELTS / TOEFL",
    desc: "Интенсивный курс для получения международного сертификата. Практика всех разделов экзамена с опытным тьютором.",
    price: "от 3 000 ₽ / урок",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Курсы</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Что мы предлагаем
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-neutral-200 p-8 hover:border-neutral-900 transition-colors duration-300 group"
            >
              <Icon name={s.icon as "Plane"} size={32} className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-4" />
              <h4 className="text-xl font-bold text-neutral-900 mb-2">{s.title}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">{s.desc}</p>
              <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
