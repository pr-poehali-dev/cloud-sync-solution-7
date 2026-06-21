const team = [
  {
    name: "Иванов М.В.",
    role: "Старший преподаватель",
    desc: "10 лет опыта, специализация — деловой английский и подготовка к IELTS",
    photo: "https://cdn.poehali.dev/projects/04f4eb4a-9ebe-4ee9-a691-b3d573c839ec/files/8fba8083-e600-4f38-aea3-990a20177e17.jpg",
  },
  {
    name: "Смирнова Т.С.",
    role: "Преподаватель детских групп",
    desc: "Сертифицированный педагог, автор игровых методик для детей от 5 лет",
    photo: "https://cdn.poehali.dev/projects/04f4eb4a-9ebe-4ee9-a691-b3d573c839ec/files/47888a15-4380-4d03-af92-5fdffd592ff3.jpg",
  },
  {
    name: "Андреев И.Н.",
    role: "Преподаватель разговорного английского",
    desc: "Носитель языкового уровня C2, 3 года работы в международных компаниях",
    photo: "https://cdn.poehali.dev/projects/04f4eb4a-9ebe-4ee9-a691-b3d573c839ec/files/4378d5c6-5377-4377-8b3b-558ea420f9d2.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Команда</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Наши преподаватели
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col">
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-lg font-bold text-neutral-900">{member.name}</h4>
              <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">{member.role}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
