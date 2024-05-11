import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WedInvTitle } from "../wedInv/WedInvTitle";

export const WedInvEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <DateInput label="Date" source="date" />
        <TextInput label="Event End" source="eventEnd" />
        <TextInput label="Event Start" source="eventStart" />
        <TextInput label="Maps" source="maps" />
        <TextInput label="Name" source="name" />
        <TextInput label="Place" source="place" />
        <ReferenceInput
          source="wedInvId.id"
          reference="WedInv"
          label="Wed Inv_ID"
        >
          <SelectInput optionText={WedInvTitle} />
        </ReferenceInput>
        <SelectInput
          source="zone"
          label="Zone"
          choices={[
            { label: "WIB", value: "Wib" },
            { label: "WITA", value: "Wita" },
            { label: "WIT", value: "Wit" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
