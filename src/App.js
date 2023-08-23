import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Patient from "./scenes/patient";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ManagePatient from "./scenes/patient/ManagePatient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./auth/Login";
import EditPatient from "./scenes/patient/EditPatient";
import CreatePatient from "./scenes/patient/CreatePatient";
import ShowPatientInfo from "./scenes/patient/ShowPatientInfo";
import EditInsuranceInfo from "./scenes/patient/EditInsuranceInfo";
import EditPatientInfo from "./scenes/patient/EditPatientInfo";
import NewPractice from "./scenes/custom-setup/practices/NewPractice";
import Practice from "./scenes/custom-setup/practices/Practice";
import UpdatePractice from "./scenes/custom-setup/practices/UpdatePractice";
import NewProvider from "./scenes/custom-setup/provider/NewProvider";
import Provider from "./scenes/custom-setup/provider/Provider";
import UpdateProvider from "./scenes/custom-setup/provider/UpdateProvider";
import NewClaim from "./scenes/claim-dir/claim/NewClaim";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLoginPage && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {!isLoginPage && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/createpatient" element={<CreatePatient />} />
              {/* <Route path="/editpatient/:accountNo" element={<EditPatient />} /> */}
              <Route
                path="/editpatient/:accountNo"
                element={<EditPatientInfo />}
              />
              <Route path="/managepatient" element={<ManagePatient />} />
              <Route
                path="/showpatient/:accountNo"
                element={<ShowPatientInfo />}
              />
              {/* practices */}
              <Route path="/practice/new" element={<NewPractice />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/practice/update/:id" element={<UpdatePractice />} />
              {/* provider */}
              <Route path="/provider/new" element={<NewProvider />} />
              <Route path="/provider" element={<Provider />} />
              <Route path="/provider/update/:id" element={<UpdateProvider />} />
              {/*claim  */}
              <Route path="/claims/new" element={<NewClaim />} />

              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
