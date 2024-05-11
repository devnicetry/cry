import { WedInvGift as TWedInvGift } from "../api/wedInvGift/WedInvGift";

export const WEDINVGIFT_TITLE_FIELD = "accountName";

export const WedInvGiftTitle = (record: TWedInvGift): string => {
  return record.accountName?.toString() || String(record.id);
};
