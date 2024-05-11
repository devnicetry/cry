import { DtGiftWhereUniqueInput } from "../dtGift/DtGiftWhereUniqueInput";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGiftUpdateInput = {
  accountName?: string | null;
  accountNo?: string | null;
  accountPhoto?: string | null;
  details?: string | null;
  dtGift?: DtGiftWhereUniqueInput | null;
  wedInv?: WedInvWhereUniqueInput | null;
};
