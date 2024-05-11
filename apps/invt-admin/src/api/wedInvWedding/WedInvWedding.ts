import { WedInv } from "../wedInv/WedInv";

export type WedInvWedding = {
  createdAt: Date;
  father: string | null;
  gender?: "Bride" | "Groom" | null;
  id: string;
  mother: string | null;
  name: string | null;
  photo: string | null;
  updatedAt: Date;
  wedInvId?: WedInv | null;
};
