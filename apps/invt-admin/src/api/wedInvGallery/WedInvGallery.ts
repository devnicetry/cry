import { JsonValue } from "type-fest";
import { WedInv } from "../wedInv/WedInv";

export type WedInvGallery = {
  createdAt: Date;
  id: string;
  name: string | null;
  photo: JsonValue;
  updatedAt: Date;
  wedInv?: WedInv | null;
};
