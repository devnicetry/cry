import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvStoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <div />
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
