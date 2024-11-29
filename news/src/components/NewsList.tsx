import { news } from "../data";
import NewsItem from "./NewsItem";

export default function NewsList({ items = news }) {
  return <ul className="space-y-5">{items.map((it) => NewsItem(it))}</ul>;
}
