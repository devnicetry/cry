import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WedInvPaymentTitle } from "../wedInvPayment/WedInvPaymentTitle";

export const DtPaymentMethodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
        <TextInput label="Icon" source="icon" />
        <ReferenceArrayInput
          source="wedInvPayments"
          reference="WedInvPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvPaymentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
