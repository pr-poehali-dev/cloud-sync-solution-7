export default function MapSection() {
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Где мы находимся</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
          Приходите к нам
        </h2>
        <div className="w-full h-[400px] overflow-hidden border border-neutral-200">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755864&z=12&l=map"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Карта"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
