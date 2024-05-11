import { WedInvGallery as TWedInvGallery } from "../api/wedInvGallery/WedInvGallery";

export const WEDINVGALLERY_TITLE_FIELD = "name";

export const WedInvGalleryTitle = (record: TWedInvGallery): string => {
  return record.name?.toString() || String(record.id);
};
