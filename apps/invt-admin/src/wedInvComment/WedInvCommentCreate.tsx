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
        <div />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wedInvShare.id"
          reference="WedInvShare"
          label="Wed Inv Share_"
        >
          <SelectInput optionText={WedInvShareTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
