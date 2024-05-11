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
import { WEDINVSHARE_TITLE_FIELD } from "../wedInvShare/WedInvShareTitle";

export const WedInvCommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comment" source="comment" />
        <TextField label="Confirmation" source="confirmation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Moment" source="moment" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wed Inv_" source="wedinv.id" reference="WedInv">
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Wed Inv Share_"
          source="wedinvshare.id"
          reference="WedInvShare"
        >
          <TextField source={WEDINVSHARE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
