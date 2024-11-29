import { sponsors } from "../data";

export default function SponsorsList({ items = sponsors }) {
  return (
    <ul className="bg-slate-600 flex justify-around rounded-lg">
      {items.map((it) => {
        return (
          <li className="bg-slate-600 ">
            <a href={it.link}>
              <img className="h-12 " src={it.img} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
