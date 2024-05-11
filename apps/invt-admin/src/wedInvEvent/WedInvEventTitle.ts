import { WedInvEvent as TWedInvEvent } from "../api/wedInvEvent/WedInvEvent";

export const WEDINVEVENT_TITLE_FIELD = "name";

export const WedInvEventTitle = (record: TWedInvEvent): string => {
  return record.name?.toString() || String(record.id);
};
