import icon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={icon} />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-300">
          Eventon
        </a>
        <a href="" className="font-medium text-sm ">
          Participantes
        </a>
      </nav>
    </div>
  );
}
