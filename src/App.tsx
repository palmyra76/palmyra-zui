import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, AuthContext, StoreFactoryContext } from "../lib/palmyra/zui/Contexts"
import AppDataStoreFactory from "./components/store/AppDataStoreFactory";
import MainLayout from "./pages/layout/MainLayout";
import FormViewHandler from "./pages/hanlders/FormViewHandler";
import FormNewHandler from "./pages/hanlders/FormNewHandler";
import FormEditHandler from "./pages/hanlders/FormEditHandler";
import GridTableHandler from "./pages/hanlders/GridTableHandler";
import GridCardHandler from "./pages/hanlders/GridCardHandler";
import DashboardHandler from "./pages/hanlders/DashboardHandler";

const dsf = new AppDataStoreFactory();

function App() {
  return (
    <ThemeContext.Provider value="light">
      <AuthContext.Provider value="demoUser">
        <StoreFactoryContext.Provider value={dsf}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/form/:pageName/view/:id" element={<FormViewHandler />} />
                <Route path="/form/:pageName/new" element={<FormNewHandler />} />
                <Route path="/form/:pageName/edit/:id" element={<FormEditHandler />} />
                <Route path="/grid/:pageName/table" element={<GridTableHandler />} />
                <Route path="/grid/:pageName/card" element={<GridCardHandler />} />
                <Route path="/dashboard/:pageName" element={<DashboardHandler />} />
                <Route path="/dashboard/:pageName/:id" element={<DashboardHandler />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StoreFactoryContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
