import { WedInvVideoWhereInput } from "./WedInvVideoWhereInput";
import { WedInvVideoOrderByInput } from "./WedInvVideoOrderByInput";

export type WedInvVideoFindManyArgs = {
  where?: WedInvVideoWhereInput;
  orderBy?: Array<WedInvVideoOrderByInput>;
  skip?: number;
  take?: number;
};
