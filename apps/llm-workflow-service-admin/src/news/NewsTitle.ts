import { News as TNews } from "../api/news/News";

export const NEWS_TITLE_FIELD = "id";

export const NewsTitle = (record: TNews): string => {
  return record.id?.toString() || String(record.id);
};
