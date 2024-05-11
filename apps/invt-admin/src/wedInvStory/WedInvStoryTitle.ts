import { WedInvStory as TWedInvStory } from "../api/wedInvStory/WedInvStory";

export const WEDINVSTORY_TITLE_FIELD = "name";

export const WedInvStoryTitle = (record: TWedInvStory): string => {
  return record.name?.toString() || String(record.id);
};
