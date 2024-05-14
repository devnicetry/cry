import { JsonValue } from "type-fest";
import { WedInv } from "../wedInv/WedInv";
import { WedInvShare } from "../wedInvShare/WedInvShare";

export type WedInvComment = {
  comment: string | null;
  confirmation: string | null;
  createdAt: Date;
  id: string;
  moment: JsonValue;
  name: string | null;
  updatedAt: Date;
  wedInv?: WedInv | null;
  wedInvShare?: WedInvShare | null;
};
