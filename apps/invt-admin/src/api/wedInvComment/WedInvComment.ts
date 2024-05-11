import { WedInv } from "../wedInv/WedInv";
import { WedInvShare } from "../wedInvShare/WedInvShare";

export type WedInvComment = {
  comment: string | null;
  confirmation: string | null;
  createdAt: Date;
  id: string;
  moment: string | null;
  name: string | null;
  updatedAt: Date;
  wedInvId?: WedInv | null;
  wedInvShareId?: WedInvShare | null;
};