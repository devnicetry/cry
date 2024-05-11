import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvEventUpdateInput = {
  address?: string | null;
  date?: Date | null;
  eventEnd?: string | null;
  eventStart?: string | null;
  maps?: string | null;
  name?: string | null;
  place?: string | null;
  wedInv?: WedInvWhereUniqueInput | null;
  zone?: "Wib" | "Wita" | "Wit" | null;
};
