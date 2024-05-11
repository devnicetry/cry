import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WedInvGiftTitle } from "../wedInvGift/WedInvGiftTitle";

export const DtGiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="giftType"
          label="Gift Type"
          choices={[
            { label: "E Wallet", value: "EWallet" },
            { label: "Bank Transfer", value: "BankTransfer" },
            { label: "Qris", value: "Qris" },
            { label: "Shipping", value: "Shipping" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Icon" source="icon" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="wedInvGifts"
          reference="WedInvGift"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvGiftTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
