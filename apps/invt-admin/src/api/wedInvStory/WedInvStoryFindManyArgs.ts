import { WedInvStoryWhereInput } from "./WedInvStoryWhereInput";
import { WedInvStoryOrderByInput } from "./WedInvStoryOrderByInput";

export type WedInvStoryFindManyArgs = {
  where?: WedInvStoryWhereInput;
  orderBy?: Array<WedInvStoryOrderByInput>;
  skip?: number;
  take?: number;
};
