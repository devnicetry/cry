import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvShareList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wed Inv Shares"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="Identity" source="identity" />
        <TextField label="Link" source="link" />
        <TextField label="Name" source="name" />
        <BooleanField label="Open" source="open" />
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
