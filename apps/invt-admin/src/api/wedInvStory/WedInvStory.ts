import { WedInv } from "../wedInv/WedInv";

export type WedInvStory = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  photo: string | null;
  updatedAt: Date;
  wedInvId?: WedInv | null;
};
