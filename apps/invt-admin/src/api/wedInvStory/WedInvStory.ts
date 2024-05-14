import { JsonValue } from "type-fest";
import { WedInv } from "../wedInv/WedInv";

export type WedInvStory = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  photo: JsonValue;
  updatedAt: Date;
  wedInv?: WedInv | null;
};
