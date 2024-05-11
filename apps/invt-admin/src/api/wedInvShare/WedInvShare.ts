import { WedInvComment } from "../wedInvComment/WedInvComment";
import { WedInv } from "../wedInv/WedInv";

export type WedInvShare = {
  createdAt: Date;
  frequency: number | null;
  id: string;
  identity: string | null;
  link: string | null;
  name: string | null;
  open: boolean | null;
  updatedAt: Date;
  wedInvComments?: Array<WedInvComment>;
  wedInvId?: WedInv | null;
};
