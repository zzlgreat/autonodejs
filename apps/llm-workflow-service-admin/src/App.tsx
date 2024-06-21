import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResultList } from "./result/ResultList";
import { ResultCreate } from "./result/ResultCreate";
import { ResultEdit } from "./result/ResultEdit";
import { ResultShow } from "./result/ResultShow";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { UserInteractionList } from "./userInteraction/UserInteractionList";
import { UserInteractionCreate } from "./userInteraction/UserInteractionCreate";
import { UserInteractionEdit } from "./userInteraction/UserInteractionEdit";
import { UserInteractionShow } from "./userInteraction/UserInteractionShow";
import { WorkflowList } from "./workflow/WorkflowList";
import { WorkflowCreate } from "./workflow/WorkflowCreate";
import { WorkflowEdit } from "./workflow/WorkflowEdit";
import { WorkflowShow } from "./workflow/WorkflowShow";
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
        title={"LLMWorkflowService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Result"
          list={ResultList}
          edit={ResultEdit}
          create={ResultCreate}
          show={ResultShow}
        />
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="UserInteraction"
          list={UserInteractionList}
          edit={UserInteractionEdit}
          create={UserInteractionCreate}
          show={UserInteractionShow}
        />
        <Resource
          name="Workflow"
          list={WorkflowList}
          edit={WorkflowEdit}
          create={WorkflowCreate}
          show={WorkflowShow}
        />
      </Admin>
    </div>
  );
};

export default App;
