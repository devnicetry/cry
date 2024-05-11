import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGalleryUpdateInput = {
  name?: string | null;
  photo?: string | null;
  wedInv?: WedInvWhereUniqueInput | null;
};
