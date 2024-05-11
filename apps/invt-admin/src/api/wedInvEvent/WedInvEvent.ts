import { WedInv } from "../wedInv/WedInv";

export type WedInvEvent = {
  address: string | null;
  createdAt: Date;
  date: Date | null;
  eventEnd: string | null;
  eventStart: string | null;
  id: string;
  maps: string | null;
  name: string | null;
  place: string | null;
  updatedAt: Date;
  wedInvId?: WedInv | null;
  zone?: "Wib" | "Wita" | "Wit" | null;
};
