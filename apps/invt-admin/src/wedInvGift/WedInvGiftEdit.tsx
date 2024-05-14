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
        <div />
        <TextInput label="Details" multiline source="details" />
        <ReferenceInput source="dtGift.id" reference="DtGift" label="DT Gift_">
          <SelectInput optionText={DtGiftTitle} />
        </ReferenceInput>
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
