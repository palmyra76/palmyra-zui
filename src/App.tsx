import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ThemeContext, AuthContext, StoreFactoryContext } from "../lib/palmyra/zui/PalmyraContext"

import FormViewHandler from "../lib/palmyra/zui/handlers/FormViewHandler";
import FormEditHandler from "../lib/palmyra/zui/handlers/FormEditHandler";
import { LeftMenuLayout } from "../lib/palmyra/zui/layout/LeftMenuLayout";
import ApplicationMenu from "./components/layout/ApplicationMenu";

import { appConfig } from "./configs/Config";
import GridViewHandler from "../lib/palmyra/zui/handlers/GridViewHandler";
import MockStoreFactory from "./components/store/MockStoreFactory";

const storeFactory = new MockStoreFactory();

function getDataHandler(pageName: string, idProperty: string) {
  return (
    <Route path={pageName} element={<Outlet />} >
      <Route path="new" element={<FormEditHandler idProperty={idProperty} />} />
      <Route path="view/:id" element={<FormViewHandler idProperty={idProperty} />} />
      <Route path="edit/:id" element={<FormEditHandler idProperty={idProperty} />} />
      <Route index element={<GridViewHandler idProperty={idProperty} />} />
    </Route>
  )
}

function App() {
  return (
    <>
      <ThemeContext.Provider value="light">
        <AuthContext.Provider value="demoUser">
          <StoreFactoryContext.Provider value={storeFactory}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LeftMenuLayout LeftMenu={ApplicationMenu} appTitle={appConfig.title} />}>
                  {getDataHandler(":category/:pageName", "id")}
                </Route>
              </Routes>
            </BrowserRouter>
          </StoreFactoryContext.Provider>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
