import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DtPaymentMethodTitle } from "../dtPaymentMethod/DtPaymentMethodTitle";
import { UserTitle } from "../user/UserTitle";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvPaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Account Name" source="accountName" />
        <TextInput label="Account No" source="accountNo" />
        <NumberInput step={1} label="Amount" source="amount" />
        <ReferenceInput
          source="dtPaymentMethodId.id"
          reference="DtPaymentMethod"
          label="DT Payment Method_ID"
        >
          <SelectInput optionText={DtPaymentMethodTitle} />
        </ReferenceInput>
        <TextInput label="Evidence" source="evidence" />
        <TextInput label="No Ref" source="noRef" />
        <ReferenceInput source="userId.id" reference="User" label="User_ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wedInvId.id"
          reference="WedInv"
          label="Wed Inv_ID"
        >
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
