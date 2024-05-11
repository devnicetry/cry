import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvPresetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="wedInv.id" reference="WedInv" label="Wed Inv_">
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
