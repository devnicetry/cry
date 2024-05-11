import { WedInvComment as TWedInvComment } from "../api/wedInvComment/WedInvComment";

export const WEDINVCOMMENT_TITLE_FIELD = "name";

export const WedInvCommentTitle = (record: TWedInvComment): string => {
  return record.name?.toString() || String(record.id);
};
