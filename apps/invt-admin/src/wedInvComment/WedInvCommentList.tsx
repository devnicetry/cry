import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";
import { WEDINVSHARE_TITLE_FIELD } from "../wedInvShare/WedInvShareTitle";

export const WedInvCommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wed Inv Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Comment" source="comment" />
        <TextField label="Confirmation" source="confirmation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Moment" source="moment" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Wed Inv_ID"
          source="wedinv.id"
          reference="WedInv"
        >
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Wed Inv Share_ID"
          source="wedinvshare.id"
          reference="WedInvShare"
        >
          <TextField source={WEDINVSHARE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
