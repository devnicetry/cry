import { WedInvCommentWhereInput } from "./WedInvCommentWhereInput";
import { WedInvCommentOrderByInput } from "./WedInvCommentOrderByInput";

export type WedInvCommentFindManyArgs = {
  where?: WedInvCommentWhereInput;
  orderBy?: Array<WedInvCommentOrderByInput>;
  skip?: number;
  take?: number;
};
