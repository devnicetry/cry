import { InputJsonValue } from "../../types";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGalleryUpdateInput = {
  name?: string | null;
  photo?: InputJsonValue;
  wedInv?: WedInvWhereUniqueInput | null;
};
