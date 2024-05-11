import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DtPaymentMethodList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DT Payment Methods"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Account" source="account" />
        <TextField label="Account Name" source="accountName" />
        <TextField label="Account No" source="accountNo" />
        <TextField label="Account Type" source="accountType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
