import { WedInv } from "../wedInv/WedInv";

export type WedInvPreset = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  wedInv?: WedInv | null;
};
