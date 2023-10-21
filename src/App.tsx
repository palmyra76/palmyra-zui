import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, AuthContext, StoreFactoryContext } from "../lib/palmyra/zui/PalmyraContext"

import FormViewHandler from "../lib/palmyra/zui/handlers/FormViewHandler";
import FormEditHandler from "../lib/palmyra/zui/handlers/FormEditHandler";
import { LeftMenuLayout } from "../lib/palmyra/zui/layout/LeftMenuLayout";
import ApplicationMenu from "./components/layout/ApplicationMenu";

import { appConfig } from "./configs/Config";
import GridViewHandler from "../lib/palmyra/zui/handlers/GridViewHandler";
import MockStoreFactory from "./components/store/MockStoreFactory";

const storeFactory = new MockStoreFactory();

function App() {
  return (
    <>
      <div>hsdfs</div>
      <ThemeContext.Provider value="light">
        <AuthContext.Provider value="demoUser">
          <StoreFactoryContext.Provider value={storeFactory}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LeftMenuLayout LeftMenu={ApplicationMenu} appTitle={appConfig.title} />}>
                  <Route path="/form/:pageName/new" element={<FormEditHandler />} />
                  <Route path="/form/:pageName/view/:id" element={<FormViewHandler />} />
                  <Route path="/form/:pageName/edit/:id" element={<FormEditHandler />} />
                  <Route path="/grid/:pageName/table" element={<GridViewHandler />} />
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
