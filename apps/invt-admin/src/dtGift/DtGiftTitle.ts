import { DtGift as TDtGift } from "../api/dtGift/DtGift";

export const DTGIFT_TITLE_FIELD = "name";

export const DtGiftTitle = (record: TDtGift): string => {
  return record.name?.toString() || String(record.id);
};
