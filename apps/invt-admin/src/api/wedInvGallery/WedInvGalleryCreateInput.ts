import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGalleryCreateInput = {
  name?: string | null;
  photo?: string | null;
  wedInvId?: WedInvWhereUniqueInput | null;
};