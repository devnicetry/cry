import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DTGIFT_TITLE_FIELD } from "../dtGift/DtGiftTitle";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const WedInvGiftShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account Name" source="accountName" />
        <TextField label="Account No" source="accountNo" />
        <TextField label="Account Photo" source="accountPhoto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Details" source="details" />
        <ReferenceField label="DT Gift_" source="dtgift.id" reference="DtGift">
          <TextField source={DTGIFT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wed Inv_" source="wedinv.id" reference="WedInv">
          <TextField source={WEDINV_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
