import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvStoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Photo" source="photo" />
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
