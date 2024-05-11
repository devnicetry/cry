import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DTPAYMENTMETHOD_TITLE_FIELD } from "./DtPaymentMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const DtPaymentMethodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account" source="account" />
        <TextField label="Account Name" source="accountName" />
        <TextField label="Account No" source="accountNo" />
        <TextField label="Account Type" source="accountType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WedInvPayment"
          target="dtPaymentMethodIdId"
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
      </SimpleShowLayout>
    </Show>
  );
};
