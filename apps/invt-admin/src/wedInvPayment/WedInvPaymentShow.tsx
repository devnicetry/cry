import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DTPAYMENTMETHOD_TITLE_FIELD } from "../dtPaymentMethod/DtPaymentMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvPaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account Name" source="accountName" />
        <TextField label="Account No" source="accountNo" />
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="DT Payment Method_"
          source="dtpaymentmethod.id"
          reference="DtPaymentMethod"
        >
          <TextField source={DTPAYMENTMETHOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Evidence" source="evidence" />
        <TextField label="ID" source="id" />
        <TextField label="No Ref" source="noRef" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User_" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Wed Inv_" source="wedinv.id" reference="WedInv">
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
