import { WedInvWhereUniqueInput } from "../wedInv/WedInvWhereUniqueInput";

export type WedInvEventCreateInput = {
  address?: string | null;
  date?: Date | null;
  eventEnd?: string | null;
  eventStart?: string | null;
  maps?: string | null;
  name?: string | null;
  place?: string | null;
  wedInvId?: WedInvWhereUniqueInput | null;
  zone?: "Wib" | "Wita" | "Wit" | null;
};