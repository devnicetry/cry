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
import { DTPAYMENTMETHOD_TITLE_FIELD } from "../dtPaymentMethod/DtPaymentMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvPaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wed Inv Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Account Name" source="accountName" />
        <TextField label="Account No" source="accountNo" />
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="DT Payment Method_ID"
          source="dtpaymentmethod.id"
          reference="DtPaymentMethod"
        >
          <TextField source={DTPAYMENTMETHOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Evidence" source="evidence" />
        <TextField label="ID" source="id" />
        <TextField label="No Ref" source="noRef" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User_ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
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
