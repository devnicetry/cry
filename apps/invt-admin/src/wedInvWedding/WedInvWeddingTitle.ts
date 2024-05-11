import { WedInvWedding as TWedInvWedding } from "../api/wedInvWedding/WedInvWedding";

export const WEDINVWEDDING_TITLE_FIELD = "name";

export const WedInvWeddingTitle = (record: TWedInvWedding): string => {
  return record.name?.toString() || String(record.id);
};
