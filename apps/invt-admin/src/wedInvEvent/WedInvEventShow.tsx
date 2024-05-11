import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Event End" source="eventEnd" />
        <TextField label="Event Start" source="eventStart" />
        <TextField label="ID" source="id" />
        <TextField label="Maps" source="maps" />
        <TextField label="Name" source="name" />
        <TextField label="Place" source="place" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wed Inv_" source="wedinv.id" reference="WedInv">
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Zone" source="zone" />
      </SimpleShowLayout>
    </Show>
  );
};
