interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/projects/04f4eb4a-9ebe-4ee9-a691-b3d573c839ec/files/f6e2e460-2830-4179-83ff-29f886360a4a.jpg"
            alt="SpeakNow logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-white text-sm uppercase tracking-wide">SpeakNow</span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Курсы
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}