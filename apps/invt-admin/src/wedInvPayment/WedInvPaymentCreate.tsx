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
          source="dtPaymentMethod.id"
          reference="DtPaymentMethod"
          label="DT Payment Method_"
        >
          <SelectInput optionText={DtPaymentMethodTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="No Ref" source="noRef" />
        <ReferenceInput source="user.id" reference="User" label="User_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
