import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { WedInvList } from "./wedInv/WedInvList";
import { WedInvCreate } from "./wedInv/WedInvCreate";
import { WedInvEdit } from "./wedInv/WedInvEdit";
import { WedInvShow } from "./wedInv/WedInvShow";
import { WedInvEventList } from "./wedInvEvent/WedInvEventList";
import { WedInvEventCreate } from "./wedInvEvent/WedInvEventCreate";
import { WedInvEventEdit } from "./wedInvEvent/WedInvEventEdit";
import { WedInvEventShow } from "./wedInvEvent/WedInvEventShow";
import { WedInvStoryList } from "./wedInvStory/WedInvStoryList";
import { WedInvStoryCreate } from "./wedInvStory/WedInvStoryCreate";
import { WedInvStoryEdit } from "./wedInvStory/WedInvStoryEdit";
import { WedInvStoryShow } from "./wedInvStory/WedInvStoryShow";
import { WedInvGalleryList } from "./wedInvGallery/WedInvGalleryList";
import { WedInvGalleryCreate } from "./wedInvGallery/WedInvGalleryCreate";
import { WedInvGalleryEdit } from "./wedInvGallery/WedInvGalleryEdit";
import { WedInvGalleryShow } from "./wedInvGallery/WedInvGalleryShow";
import { WedInvWeddingList } from "./wedInvWedding/WedInvWeddingList";
import { WedInvWeddingCreate } from "./wedInvWedding/WedInvWeddingCreate";
import { WedInvWeddingEdit } from "./wedInvWedding/WedInvWeddingEdit";
import { WedInvWeddingShow } from "./wedInvWedding/WedInvWeddingShow";
import { DtGiftList } from "./dtGift/DtGiftList";
import { DtGiftCreate } from "./dtGift/DtGiftCreate";
import { DtGiftEdit } from "./dtGift/DtGiftEdit";
import { DtGiftShow } from "./dtGift/DtGiftShow";
import { WedInvGiftList } from "./wedInvGift/WedInvGiftList";
import { WedInvGiftCreate } from "./wedInvGift/WedInvGiftCreate";
import { WedInvGiftEdit } from "./wedInvGift/WedInvGiftEdit";
import { WedInvGiftShow } from "./wedInvGift/WedInvGiftShow";
import { WedInvShareList } from "./wedInvShare/WedInvShareList";
import { WedInvShareCreate } from "./wedInvShare/WedInvShareCreate";
import { WedInvShareEdit } from "./wedInvShare/WedInvShareEdit";
import { WedInvShareShow } from "./wedInvShare/WedInvShareShow";
import { WedInvCommentList } from "./wedInvComment/WedInvCommentList";
import { WedInvCommentCreate } from "./wedInvComment/WedInvCommentCreate";
import { WedInvCommentEdit } from "./wedInvComment/WedInvCommentEdit";
import { WedInvCommentShow } from "./wedInvComment/WedInvCommentShow";
import { DtPaymentMethodList } from "./dtPaymentMethod/DtPaymentMethodList";
import { DtPaymentMethodCreate } from "./dtPaymentMethod/DtPaymentMethodCreate";
import { DtPaymentMethodEdit } from "./dtPaymentMethod/DtPaymentMethodEdit";
import { DtPaymentMethodShow } from "./dtPaymentMethod/DtPaymentMethodShow";
import { WedInvPaymentList } from "./wedInvPayment/WedInvPaymentList";
import { WedInvPaymentCreate } from "./wedInvPayment/WedInvPaymentCreate";
import { WedInvPaymentEdit } from "./wedInvPayment/WedInvPaymentEdit";
import { WedInvPaymentShow } from "./wedInvPayment/WedInvPaymentShow";
import { WedInvPresetList } from "./wedInvPreset/WedInvPresetList";
import { WedInvPresetCreate } from "./wedInvPreset/WedInvPresetCreate";
import { WedInvPresetEdit } from "./wedInvPreset/WedInvPresetEdit";
import { WedInvPresetShow } from "./wedInvPreset/WedInvPresetShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"INVT"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="WedInv"
          list={WedInvList}
          edit={WedInvEdit}
          create={WedInvCreate}
          show={WedInvShow}
        />
        <Resource
          name="WedInvEvent"
          list={WedInvEventList}
          edit={WedInvEventEdit}
          create={WedInvEventCreate}
          show={WedInvEventShow}
        />
        <Resource
          name="WedInvStory"
          list={WedInvStoryList}
          edit={WedInvStoryEdit}
          create={WedInvStoryCreate}
          show={WedInvStoryShow}
        />
        <Resource
          name="WedInvGallery"
          list={WedInvGalleryList}
          edit={WedInvGalleryEdit}
          create={WedInvGalleryCreate}
          show={WedInvGalleryShow}
        />
        <Resource
          name="WedInvWedding"
          list={WedInvWeddingList}
          edit={WedInvWeddingEdit}
          create={WedInvWeddingCreate}
          show={WedInvWeddingShow}
        />
        <Resource
          name="DtGift"
          list={DtGiftList}
          edit={DtGiftEdit}
          create={DtGiftCreate}
          show={DtGiftShow}
        />
        <Resource
          name="WedInvGift"
          list={WedInvGiftList}
          edit={WedInvGiftEdit}
          create={WedInvGiftCreate}
          show={WedInvGiftShow}
        />
        <Resource
          name="WedInvShare"
          list={WedInvShareList}
          edit={WedInvShareEdit}
          create={WedInvShareCreate}
          show={WedInvShareShow}
        />
        <Resource
          name="WedInvComment"
          list={WedInvCommentList}
          edit={WedInvCommentEdit}
          create={WedInvCommentCreate}
          show={WedInvCommentShow}
        />
        <Resource
          name="DtPaymentMethod"
          list={DtPaymentMethodList}
          edit={DtPaymentMethodEdit}
          create={DtPaymentMethodCreate}
          show={DtPaymentMethodShow}
        />
        <Resource
          name="WedInvPayment"
          list={WedInvPaymentList}
          edit={WedInvPaymentEdit}
          create={WedInvPaymentCreate}
          show={WedInvPaymentShow}
        />
        <Resource
          name="WedInvPreset"
          list={WedInvPresetList}
          edit={WedInvPresetEdit}
          create={WedInvPresetCreate}
          show={WedInvPresetShow}
        />
      </Admin>
    </div>
  );
};

export default App;
