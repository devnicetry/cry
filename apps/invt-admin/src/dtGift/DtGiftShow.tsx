import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DTGIFT_TITLE_FIELD } from "./DtGiftTitle";
import { WEDINV_TITLE_FIELD } from "../wedInv/WedInvTitle";

export const DtGiftShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Gift Type" source="giftType" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WedInvGift"
          target="dtGiftId"
          label="Wed Inv Gifts"
        >
          <Datagrid rowClick="show">
            <TextField label="Account Name" source="accountName" />
            <TextField label="Account No" source="accountNo" />
            <TextField label="Account Photo" source="accountPhoto" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <ReferenceField
              label="DT Gift_"
              source="dtgift.id"
              reference="DtGift"
            >
              <TextField source={DTGIFT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wed Inv_"
              source="wedinv.id"
              reference="WedInv"
            >
              <TextField source={WEDINV_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
