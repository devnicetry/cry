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
import { WedInvShareTitle } from "../wedInvShare/WedInvShareTitle";

export const WedInvCommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <TextInput label="Confirmation" source="confirmation" />
        <TextInput label="Moment" source="moment" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="wedInvId.id"
          reference="WedInv"
          label="Wed Inv_ID"
        >
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wedInvShareId.id"
          reference="WedInvShare"
          label="Wed Inv Share_ID"
        >
          <SelectInput optionText={WedInvShareTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
