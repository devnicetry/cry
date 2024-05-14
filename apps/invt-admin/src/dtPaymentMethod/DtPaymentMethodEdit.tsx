import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WedInvPaymentTitle } from "../wedInvPayment/WedInvPaymentTitle";

export const DtPaymentMethodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account" source="account" />
        <TextInput label="Account Name" source="accountName" />
        <TextInput label="Account No" source="accountNo" />
        <SelectInput
          source="accountType"
          label="Account Type"
          choices={[
            { label: "E Wallet", value: "EWallet" },
            { label: "Bank Transfer", value: "BankTransfer" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceArrayInput
          source="wedInvPayments"
          reference="WedInvPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvPaymentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
