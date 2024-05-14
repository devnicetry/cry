import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WedInvCommentTitle } from "../wedInvComment/WedInvCommentTitle";
import { WedInvEventTitle } from "../wedInvEvent/WedInvEventTitle";
import { WedInvGalleryTitle } from "../wedInvGallery/WedInvGalleryTitle";
import { WedInvGiftTitle } from "../wedInvGift/WedInvGiftTitle";
import { WedInvPaymentTitle } from "../wedInvPayment/WedInvPaymentTitle";
import { WedInvPresetTitle } from "../wedInvPreset/WedInvPresetTitle";
import { WedInvShareTitle } from "../wedInvShare/WedInvShareTitle";
import { WedInvStoryTitle } from "../wedInvStory/WedInvStoryTitle";
import { WedInvVideoTitle } from "../wedInvVideo/WedInvVideoTitle";
import { WedInvWeddingTitle } from "../wedInvWedding/WedInvWeddingTitle";

export const WedInvEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Active", value: "Active" },
            { label: "Nonactive", value: "Nonactive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Url" source="url" />
        <ReferenceInput source="user.id" reference="User" label="User_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="wedInvComments"
          reference="WedInvComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvCommentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvEvents"
          reference="WedInvEvent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvEventTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvGalleries"
          reference="WedInvGallery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvGalleryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvGifts"
          reference="WedInvGift"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvGiftTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvPayments"
          reference="WedInvPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvPaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvPresets"
          reference="WedInvPreset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvPresetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvShares"
          reference="WedInvShare"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvShareTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvStories"
          reference="WedInvStory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvStoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvVideos"
          reference="WedInvVideo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvVideoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wedInvWeddings"
          reference="WedInvWedding"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WedInvWeddingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
