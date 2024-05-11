import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DtGiftTitle } from "../dtGift/DtGiftTitle";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvGiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Account Name" source="accountName" />
        <TextInput label="Account No" source="accountNo" />
        <TextInput label="Account Photo" source="accountPhoto" />
        <TextInput label="Details" multiline source="details" />
        <ReferenceInput source="dtGift.id" reference="DtGift" label="DT Gift_">
          <SelectInput optionText={DtGiftTitle} />
        </ReferenceInput>
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
