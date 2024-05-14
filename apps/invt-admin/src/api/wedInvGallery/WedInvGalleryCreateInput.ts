import { InputJsonValue } from "../../types";
import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvGalleryCreateInput = {
  name?: string | null;
  photo?: InputJsonValue;
  wedInv?: WedInvWhereUniqueInput | null;
};
