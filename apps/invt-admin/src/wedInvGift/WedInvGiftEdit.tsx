import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DtGiftTitle } from "../dtGift/DtGiftTitle";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvGiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account Name" source="accountName" />
        <TextInput label="Account No" source="accountNo" />
        <TextInput label="Account Photo" source="accountPhoto" />
        <TextInput label="Details" multiline source="details" />
        <ReferenceInput
          source="dtGiftId.id"
          reference="DtGift"
          label="DT Gift_ID"
        >
          <SelectInput optionText={DtGiftTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wedInvId.id"
          reference="WedInv"
          label="Wed Inv_ID"
        >
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
