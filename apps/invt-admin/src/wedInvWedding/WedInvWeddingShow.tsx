import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvWeddingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Father" source="father" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Mother" source="mother" />
        <TextField label="Name" source="name" />
        <TextField label="Photo" source="photo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Wed Inv_ID"
          source="wedinv.id"
          reference="WedInv"
        >
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
