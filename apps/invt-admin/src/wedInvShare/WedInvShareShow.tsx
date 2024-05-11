import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";
import { WEDINVSHARE_TITLE_FIELD } from "./WedInvShareTitle";

export const WedInvShareShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="Identity" source="identity" />
        <TextField label="Link" source="link" />
        <TextField label="Name" source="name" />
        <BooleanField label="Open" source="open" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Wed Inv_ID"
          source="wedinv.id"
          reference="WedInv"
        >
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="WedInvComment"
          target="wedInvShareIdId"
          label="Wed Inv Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <TextField label="Confirmation" source="confirmation" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Moment" source="moment" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wed Inv_ID"
              source="wedinv.id"
              reference="WedInv"
            >
              <TextField source={WEDINV_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Wed Inv Share_ID"
              source="wedinvshare.id"
              reference="WedInvShare"
            >
              <TextField source={WEDINVSHARE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};