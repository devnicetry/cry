import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvGalleryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
    </Create>
  );
};
