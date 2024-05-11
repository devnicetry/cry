import { WedInvShare as TWedInvShare } from "../api/wedInvShare/WedInvShare";

export const WEDINVSHARE_TITLE_FIELD = "name";

export const WedInvShareTitle = (record: TWedInvShare): string => {
  return record.name?.toString() || String(record.id);
};
