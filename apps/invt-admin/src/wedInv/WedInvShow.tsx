import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { WEDINV_TITLE_FIELD } from "./WedInvTitle";
import { WEDINVSHARE_TITLE_FIELD } from "../wedInvShare/WedInvShareTitle";
import { DTGIFT_TITLE_FIELD } from "../dtGift/DtGiftTitle";
import { DTPAYMENTMETHOD_TITLE_FIELD } from "../dtPaymentMethod/DtPaymentMethodTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WedInvShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
        <ReferenceField label="User_ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="WedInvComment"
          target="wedInvIdId"
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
        <ReferenceManyField
          reference="WedInvEvent"
          target="wedInvIdId"
          label="Wed Inv Events"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Wed Inv_ID"
              source="wedinv.id"
              reference="WedInv"
            >
              <TextField source={WEDINV_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Zone" source="zone" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvGallery"
          target="wedInvIdId"
          label="Wed Inv Galleries"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvGift"
          target="wedInvIdId"
          label="Wed Inv Gifts"
        >
          <Datagrid rowClick="show">
            <TextField label="Account Name" source="accountName" />
            <TextField label="Account No" source="accountNo" />
            <TextField label="Account Photo" source="accountPhoto" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <ReferenceField
              label="DT Gift_ID"
              source="dtgift.id"
              reference="DtGift"
            >
              <TextField source={DTGIFT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wed Inv_ID"
              source="wedinv.id"
              reference="WedInv"
            >
              <TextField source={WEDINV_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvPayment"
          target="wedInvIdId"
          label="Wed Inv Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="Account Name" source="accountName" />
            <TextField label="Account No" source="accountNo" />
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="DT Payment Method_ID"
              source="dtpaymentmethod.id"
              reference="DtPaymentMethod"
            >
              <TextField source={DTPAYMENTMETHOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Evidence" source="evidence" />
            <TextField label="ID" source="id" />
            <TextField label="No Ref" source="noRef" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User_ID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Wed Inv_ID"
              source="wedinv.id"
              reference="WedInv"
            >
              <TextField source={WEDINV_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvPreset"
          target="wedInvIdId"
          label="Wed Inv Presets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wed Inv_ID"
              source="wedinv.id"
              reference="WedInv"
            >
              <TextField source={WEDINV_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvShare"
          target="wedInvIdId"
          label="Wed Inv Shares"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvStory"
          target="wedInvIdId"
          label="Wed Inv Stories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WedInvWedding"
          target="wedInvIdId"
          label="Wed Inv Weddings"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
