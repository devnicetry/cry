import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WedInvTitle } from "../wedInv/WedInvTitle";
import { WedInvCommentTitle } from "../wedInvComment/WedInvCommentTitle";

export const WedInvShareEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Frequency" source="frequency" />
        <TextInput label="Identity" source="identity" />
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Open" source="open" />
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="wedInvComments"
          reference="WedInvComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvCommentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
