import { WedInvEventWhereInput } from "./WedInvEventWhereInput";
import { WedInvEventOrderByInput } from "./WedInvEventOrderByInput";

export type WedInvEventFindManyArgs = {
  where?: WedInvEventWhereInput;
  orderBy?: Array<WedInvEventOrderByInput>;
  skip?: number;
  take?: number;
};
