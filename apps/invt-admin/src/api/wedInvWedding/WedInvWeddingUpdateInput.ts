import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvWeddingUpdateInput = {
  father?: string | null;
  gender?: "Bride" | "Groom" | null;
  mother?: string | null;
  name?: string | null;
  photo?: string | null;
  wedInvId?: WedInvWhereUniqueInput | null;
};
