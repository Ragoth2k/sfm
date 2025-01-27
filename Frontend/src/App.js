import ApprovalFlow from "./Views/PTW_module/PTW/ApprovalFlow/ApprovalFlow.js";
import ManagePTW from './Views/PTW_module/PTW/ManagePTW/ManagePTW.js'
import { BrowserRouter as Router,Route,Routes  } from "react-router-dom";
import UpdateFlow from './components/organisms/Update/PTW_module/UpdateFlow/UpdateFlow.js'
import PermitToWork from "./Views/PTW_module/PTW/PermitToWork/PermitTowork.js";
import NewPermitApp from "./components/organisms/Create/PTW_module/NewPermitApp/NewPermitApp";
import Login from "./Views/Login/Login.js";
import Layout from "./components/molecules/Layout/Layout.js";
import PrivateRoutes from "./utils/PrivateRoutes.js";
import Parts from "./Views/Parts_module/Parts/Parts.js";
import Meter from "./Views/Meter/Meter.jsx";
import AddMeter from "./Views/Meter/Addmeter.jsx";
import EditMeter from "./Views/Meter/EditMeter.jsx";
import Reading from "./Views/Reading/Reading.jsx";
import Add_Reading from "./Views/Reading/Add_Reading.jsx";
import Edit_Reading from "./Views/Reading/Edit_Reading.jsx";
import School from "./Views/School/school.jsx";
import AddSchool from "./Views/School/AddSchool.jsx";
import EditSchool from "./Views/School/EditSchool.jsx";
import Location from "./Views/Location/Location.jsx";
import AddLocation from "./Views/Location/Add_Location.jsx";
import Edit_Location from "./Views/Location/Edit_location.jsx";
import Attendance from "./Views/Attendance/Attendance.jsx";
import Add_Attendance from "./Views/Attendance/Add_Attendance.jsx";
import Edit_Attendance from "./Views/Attendance/Edit_Attendance.jsx";
import Report from "./Views/Fault Report/Report.jsx";
import Add_Report from "./Views/Fault Report/Add_Report.jsx";
import Edit_Report from "./Views/Fault Report/Edit_Report.jsx";
import Fault_Report from './Views/Fault Report/Fault_Report.jsx'
import QRCodePage from "./Views/Location/QRcodegen.jsx";
import Add_Booking from './Views/Booking Management/AddBooking.jsx'
import Edit_Booking from './Views/Booking Management/Edit_booking.jsx'
import Space_Management from './Views/Booking Management/space_management.jsx'
import Iaq from "./Views/IAQ/Iaq.jsx";
import AddLicense from "./Views/License/Add_License.jsx";
import License from "./Views/License/License.jsx";
import EditLicense from "./Views/License/EditLicense.jsx";
import Assign from "./Views/License/Assign.jsx";
import Update from "./Views/License/Update.jsx";
import ViewHistory from "./Views/License/ViewHistroy.jsx"; 
import VisitorManagement from "./Views/VisitorManagement/Visitor.jsx";
import AddInvitation from "./Views/VisitorManagement/Add_visitor.jsx";
import EditVisitor from "./Views/VisitorManagement/Edit_visitor.jsx";
import VisitorEntry from "./Views/VisitorEntry/Visitor_Entry.jsx";
import AddVisitorEntry from "./Views/VisitorEntry/Add_visitorentry.jsx";
import Schedule from "./Views/Schedule/Schedule.jsx";
import BookScheduleMaintenance from "./Views/Schedule/Book_Schedule.jsx";
import EditSchedule from "./Views/Schedule/Edit_schedule.jsx";




const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" element={<Layout/>}/>
        <Route path="/parts" element={<Parts/>}/>
        <Route path="/permitTowork" element={<PermitToWork/>}/>
        <Route path="/managePTW" element={<ManagePTW/>}/>
        <Route path="/approvalFlow" element={<ApprovalFlow/>}/>
        <Route path="/updateFlow" element={<UpdateFlow/>}/>
        <Route path="/newPermitApp" element={<NewPermitApp/>}/>


        <Route path='/meter' element={<Meter/>}></Route>
        <Route path='/display/add_meter' element={<AddMeter/>}> </Route>
        <Route path='/display/meter_edit/:id' element={<EditMeter/>}></Route>

        <Route path='/display/reading/:id' element={<Reading/>}></Route>
        <Route path='/display/add_reading/:id' element={<Add_Reading/>}></Route>
        <Route path='/display/edit_reading/:id' element={<Edit_Reading/>}></Route>

        <Route path='/display/school' element={<School/>}></Route>
        <Route path='/display/add_school' element={<AddSchool/>}></Route>
        <Route path='/display/edit_school/:id' element={<EditSchool/>}></Route>

        <Route path='/display/location/:id' element={<Location/>}></Route>
        <Route path='/display/add_location/:id' element={<AddLocation/>}></Route>
        <Route path='/display/edit_location/:id' element={<Edit_Location/>}></Route>
        <Route path='/display/qrcode/:locQRID' element={<QRCodePage/>}></Route>

        <Route path='/display/attendance' element={<Attendance/>}></Route>
        <Route path='/display/add_attendance' element={<Add_Attendance/>}></Route>
        <Route path='/display/edit_attendance/:id' element={<Edit_Attendance/>}></Route>

        <Route path='/display/report' element={<Report/>}></Route>
        <Route path='/display/add_request' element={<Add_Report/>}></Route>
        <Route path='/display/edit_request/:id' element={<Edit_Report/>}></Route>
        <Route path='/display/fault_report' element={<Fault_Report/>}></Route>
        
        <Route path='/display/add_booking' element={<Add_Booking/>}></Route>
        <Route path='/display/edit_booking/:id' element={<Edit_Booking/>}></Route>
        <Route path='/display/booking' element={<Space_Management/>}></Route>

        <Route path='/display/iaq' element={<Iaq/>}></Route>

        <Route path='/display/license' element={<License/>}></Route>
        <Route path='/display/add_license' element={<AddLicense/>}></Route>
        <Route path='/display/license_edit/:id' element={<EditLicense/>}></Route>
        <Route path='/display/assign/:id' element={<Assign/>}></Route>
        <Route path='/display/update/:id' element={<Update/>}></Route>
        <Route path='/display/view_histroy/:id' element={<ViewHistory/>}></Route>
        
        <Route path='/display/visitor' element={<VisitorManagement/>}></Route>
        <Route path='/display/add_visitor' element={<AddInvitation/>}></Route>
        <Route path='/display/visitor_edit/:id' element={<EditVisitor/>}></Route>

        <Route path='/display/visitor_entry' element={<VisitorEntry/>}></Route>
        <Route path='/display/add_visitorentry' element={<AddVisitorEntry/>}></Route>

        <Route path='/display/schedule_maintenance' element={<BookScheduleMaintenance/>}></Route>
        <Route path='/display/schedule' element={<Schedule/>}></Route>
        <Route path='/display/schedule_edit/:id' element={<EditSchedule/>}></Route>

        
      </Route>
      <Route path="/" element={<Login/>}/>
    </Routes>
  </Router>
    

  </>
  );
};


export default App;





