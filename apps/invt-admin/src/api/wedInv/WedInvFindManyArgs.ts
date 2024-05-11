import { WedInvWhereInput } from "./WedInvWhereInput";
import { WedInvOrderByInput } from "./WedInvOrderByInput";

export type WedInvFindManyArgs = {
  where?: WedInvWhereInput;
  orderBy?: Array<WedInvOrderByInput>;
  skip?: number;
  take?: number;
};
