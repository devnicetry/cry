import { WedInv } from "../wedInv/WedInv";
import { WedInvComment } from "../wedInvComment/WedInvComment";

export type WedInvShare = {
  createdAt: Date;
  frequency: number | null;
  id: string;
  identity: string | null;
  link: string | null;
  name: string | null;
  open: boolean | null;
  updatedAt: Date;
  wedInv?: WedInv | null;
  wedInvComments?: Array<WedInvComment>;
};
