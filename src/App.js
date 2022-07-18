import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminpage from "./components/Adminpage/adminpage";
import Adminrapper from "./components/Adminpage/adminrapper";
import AddBooks from "./components/Adminpage/component/addBooks";
import AddFine from "./components/Adminpage/component/addFine";
import AdminNotification from "./components/Adminpage/component/adminNotification";
import DeleteBooks from "./components/Adminpage/component/deleteBooks";
import IssueRequest from "./components/Adminpage/component/issueRequest";
import ReIssueRequest from "./components/Adminpage/component/reissueRequest";
import StudentsInfo from "./components/Adminpage/component/studentInfo";
import Contract from "./components/Homepage/component/contract";
import Issued from "./components/Homepage/component/issued";
import Notification from "./components/Homepage/component/notification";
import Profile from './components/Homepage/component/profile';
import Rapper from "./components/Homepage/component/rapper";
import Reissue from "./components/Homepage/component/reissue";
import Homepage from './components/Homepage/homepage';
import AdminLogin from "./components/Log in page/adminLogin";
import AuthRapper from "./components/Log in page/authRapper";
import ChangePasswordPage from "./components/Log in page/changePassword";
import Confirmationpage from "./components/Log in page/confirmationpage";
import ForgetPasswordPage from "./components/Log in page/fogetPassword";
import StudentLogin from "./components/Log in page/studentLogin";
import Studentsignup from "./components/Log in page/studentsignup";
import AuthProvider from "./contexts/authContext";
import InvisibleAuthPage from './privateRouter/invisibleAuthPage';
import PrivateRouter from "./privateRouter/privateRouter";
import './style/app.css';
function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/admin/" element={<Adminpage/>}/>
        <Route path="/admin-login/" element={ <AuthRapper><AdminLogin/></AuthRapper>}/>
        <Route path="/admin/notification" element={<Adminrapper> <AdminNotification/></Adminrapper>}/>
        <Route path="/admin/Students-Info" element={<Adminrapper> <StudentsInfo/></Adminrapper>}/>
        <Route path="/admin/Add%20Books" element={<Adminrapper> <AddBooks/></Adminrapper>}/>
        <Route path="/admin/Add%20Fine" element={<Adminrapper> <AddFine/></Adminrapper>}/>
        <Route path="/admin/Delete%20Books" element={<Adminrapper> <DeleteBooks/></Adminrapper>}/>
        <Route path="/admin/Issue%20Books" element={<Adminrapper> <IssueRequest/></Adminrapper>}/>
        <Route path="/admin/Re-Issue%20Books" element={<Adminrapper> <ReIssueRequest/></Adminrapper>}/>
        
        <Route element={<PrivateRouter/>}>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="notification/" element={ <Rapper><Notification/></Rapper>}/>
        <Route path="/ContactUs/" element={ <Rapper><Contract/></Rapper>}/>
        <Route path="/Re-Issue-Books/" element={ <Rapper><Reissue/></Rapper>}/>
        <Route path="/Issued%20Books/" element={ <Rapper><Issued/></Rapper>}/>
        <Route path="/profile/" element={ <Rapper><Profile/></Rapper>}/>
        </Route>
        <Route element={<InvisibleAuthPage/>}>
        <Route path="/login/" element={ <AuthRapper><StudentLogin/></AuthRapper>}/>
        <Route path="/login/forget-password/" element={ <AuthRapper sendCode={true}><ForgetPasswordPage/></AuthRapper>}/>
        <Route path="/login/forget-password/password_reset/:id/:token/" element={ <AuthRapper sendCode={true}><ChangePasswordPage/></AuthRapper>}/>
        <Route path="/signup/" element={ <AuthRapper><Studentsignup/></AuthRapper>}/>
        <Route path="/verify/" element={ <AuthRapper sendCode={true} ><Confirmationpage/></AuthRapper>}/>
        </Route>
      </Routes>  
      </BrowserRouter> 
      </AuthProvider>
    
    </>
  );
}

export default App;
