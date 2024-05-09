import './App.css';
import Header from './components/Header';
import AddDonor from './components/AddDonor';
import AllDonors from './components/AllDonors';
import Donors from './components/Donors';
import Reports from './components/Reports';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import MyDonations from './components/MyDonations';
import Help from './components/Help';
import MyAccount from './components/MyAccount';
import UpdateDonor from './components/UpdateDonor';
import DonorProfile from './components/DonorProfile';
import MyProfile from './components/MyProfile';
import DonorDashboard from './components/DonorDashboard';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddDonor />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/myDonations" element={<MyDonations />} />
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<AllDonors />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/updateDonor/:id" element={<UpdateDonor />} />
          <Route path="/donorProfile/:id" element={<DonorProfile />} />
          
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/donorDashboard" element={<DonorDashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
