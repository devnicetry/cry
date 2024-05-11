import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvWeddingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Father" source="father" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Bride", value: "Bride" },
            { label: "Groom", value: "Groom" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Mother" source="mother" />
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
