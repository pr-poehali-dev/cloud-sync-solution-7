import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Контакты</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Запишитесь на пробный урок
          </h2>
          <div className="flex flex-col gap-4 text-neutral-700">
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={18} className="text-neutral-400" />
              <a href="mailto:finitephase@gmail.com" className="hover:text-neutral-900 transition-colors">
                finitephase@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={18} className="text-neutral-400" />
              <span>Пн–Пт 9:00–21:00, Сб–Вс 10:00–18:00</span>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
              <Icon name="CheckCircle" size={48} className="text-green-500" />
              <p className="text-xl font-semibold text-neutral-900">Заявка отправлена!</p>
              <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон или email"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
              />
              <textarea
                placeholder="Какой курс вас интересует?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors w-fit"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
