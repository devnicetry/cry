import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvGalleryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wed Inv Galleries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Photo" source="photo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Wed Inv_ID"
          source="wedinv.id"
          reference="WedInv"
        >
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
