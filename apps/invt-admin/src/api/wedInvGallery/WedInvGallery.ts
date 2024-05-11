import { WedInv } from "../wedInv/WedInv";

export type WedInvGallery = {
  createdAt: Date;
  id: string;
  name: string | null;
  photo: string | null;
  updatedAt: Date;
  wedInv?: WedInv | null;
};
