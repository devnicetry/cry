import { JsonValue } from "type-fest";
import { WedInv } from "../wedInv/WedInv";

export type WedInvVideo = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  video: JsonValue;
  wedInv?: WedInv | null;
};
