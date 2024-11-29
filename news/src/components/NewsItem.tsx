import { News } from "../types";

export default function NewsItem(item = new News()) {
  return (
    <li className="grid grid-cols-12 h-36 ">
      <div className="pl-2 col-span-2 ">
        <img
          className=" h-32 w-60 my-2   rounded-lg"
          src={item.img}
          alt={"Foto: " + item.label}
        />
      </div>

      <span className="col-span-10 p-4">
        <a href={item.link} target="_blank" className="text-blue-500">
          {item.label}
        </a>
        <div>{item.date}</div>
      </span>
    </li>
  );
}
