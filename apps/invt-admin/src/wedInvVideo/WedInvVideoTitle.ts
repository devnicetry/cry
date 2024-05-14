import { WedInvVideo as TWedInvVideo } from "../api/wedInvVideo/WedInvVideo";

export const WEDINVVIDEO_TITLE_FIELD = "id";

export const WedInvVideoTitle = (record: TWedInvVideo): string => {
  return record.id?.toString() || String(record.id);
};
