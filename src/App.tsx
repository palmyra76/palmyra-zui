import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, AuthContext, StoreFactoryContext } from "../lib/palmyra/zui/Contexts"
import AppDataStoreFactory from "./components/store/AppDataStoreFactory";
import MainLayout from "./pages/layout/MainLayout";
import FormViewHandler from "../lib/palmyra/zui/handlers/FormViewHandler";
import FormEditHandler from "../lib/palmyra/zui/handlers/FormEditHandler";


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
                <Route path="/" element={<MainLayout />}>
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
