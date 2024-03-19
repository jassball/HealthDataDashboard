import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import {dataProvider, liveProvider} from "./providers";
import {Home , ForgotPassword, Register, Login }  from "./pages"
import Layout from "./components/layout"

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./providers/auth";
import { resources } from "./config/resources";




function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
               dataProvider={dataProvider}
                 liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                authProvider={authProvider}
                resources={resources}
                routerProvider={routerBindings}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "9ll1AN-n3vLf0-8QsPOO",
                  liveMode: "auto",
                }}
              >
                <Routes>
                 
                 
                 <Route path="/login" index element={<Login />} />
                 <Route path="forgot-password" index element={<ForgotPassword />} />
                 <Route path="register" index element={<Register />} />
                 <Route
                 element={
                 <Authenticated 
                 key="authenticated-layout"
                 fallback={<CatchAllNavigate to="/login"/>}
                 >
                 
                  <Layout>
                    <Outlet />
                  </Layout>
                  </Authenticated>
                 }>
                  <Route index element={<Home />} />
                 </Route>
              

                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
