import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DtPaymentMethodTitle } from "../dtPaymentMethod/DtPaymentMethodTitle";
import { UserTitle } from "../user/UserTitle";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvPaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="Evidence" source="evidence" />
        <TextInput label="No Ref" source="noRef" />
        <ReferenceInput source="user.id" reference="User" label="User_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
