import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Links.scss';



export default function Links({ sendAuthorizationState }: any) {

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/user-profile' element={<ProfileScreen />} /> */}
      </Routes>
    </Router>
  );
}
