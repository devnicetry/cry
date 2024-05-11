import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WedInvCommentTitle } from "../wedInvComment/WedInvCommentTitle";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvShareCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Frequency" source="frequency" />
        <TextInput label="Identity" source="identity" />
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Open" source="open" />
        <ReferenceArrayInput
          source="wedInvComments"
          reference="WedInvComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvCommentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="wedInvId.id"
          reference="WedInv"
          label="Wed Inv_ID"
        >
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
