import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, AuthContext, StoreFactoryContext } from "../lib/palmyra/zui/PalmyraContext"
import AppDataStoreFactory from "./components/store/AppDataStoreFactory";

import FormViewHandler from "../lib/palmyra/zui/handlers/FormViewHandler";
import FormEditHandler from "../lib/palmyra/zui/handlers/FormEditHandler";
import { LeftMenuLayout } from "../lib/palmyra/zui/layout/LeftMenuLayout";
import ApplicationMenu from "./components/layout/ApplicationMenu";

import { appConfig } from "./configs/Config";

const storeFactory = new AppDataStoreFactory();

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
                  <Route path="/form/:pageName/view/:id" element={<FormViewHandler />} />
                  <Route path="/form/:pageName/edit/:id" element={<FormEditHandler />} />
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
