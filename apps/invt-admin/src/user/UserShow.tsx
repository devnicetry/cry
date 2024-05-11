import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DTPAYMENTMETHOD_TITLE_FIELD } from "../dtPaymentMethod/DtPaymentMethodTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="Roles" source="roles" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="WedInvPayment"
          target="userIdId"
          label="Wed Inv Payments"
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
        </ReferenceManyField>
        <ReferenceManyField reference="WedInv" target="userId" label="Wed Invs">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
            <ReferenceField label="User_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
