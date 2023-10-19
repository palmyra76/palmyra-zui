import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, AuthContext, StoreFactoryContext } from "../lib/palmyra/zui/Contexts"
import AppDataStoreFactory from "./components/store/AppDataStoreFactory";
import MainLayout from "./pages/layout/MainLayout";
import FormViewHandler from "./pages/hanlders/FormViewHandler";

const dsf = new AppDataStoreFactory();

function App() {
  return (
    <ThemeContext.Provider value="light">
      <AuthContext.Provider value="demoUser">
        <StoreFactoryContext.Provider value={dsf}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/form/:pageName/view" element={<FormViewHandler />} />
                <Route path="/form/:pageName/new" element={<FormViewHandler />} />
                <Route path="/form/:pageName/edit" element={<FormViewHandler />} />
                <Route path="/grid/:pageName/table" element={<FormViewHandler />} />
                <Route path="/grid/:pageName/card" element={<FormViewHandler />} />
                <Route path="/dashboard/:pageName" element={<FormViewHandler />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StoreFactoryContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
