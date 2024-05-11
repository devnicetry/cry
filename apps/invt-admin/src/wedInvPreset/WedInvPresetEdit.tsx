import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvPresetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
