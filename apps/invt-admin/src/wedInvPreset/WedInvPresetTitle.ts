import { WedInvPreset as TWedInvPreset } from "../api/wedInvPreset/WedInvPreset";

export const WEDINVPRESET_TITLE_FIELD = "id";

export const WedInvPresetTitle = (record: TWedInvPreset): string => {
  return record.id?.toString() || String(record.id);
};
