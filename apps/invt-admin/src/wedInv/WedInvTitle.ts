import { WedInv as TWedInv } from "../api/wedInv/WedInv";

export const WEDINV_TITLE_FIELD = "url";

export const WedInvTitle = (record: TWedInv): string => {
  return record.url?.toString() || String(record.id);
};
