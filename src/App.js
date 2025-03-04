import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/aside';
import Home from './pages/admin/home';
import Users from './pages/admin/users';
import Login from './components/login';
import Reset from './components/reset';
import Code from './components/code';
import ResetPassword from './components/ResetPassword';
import OneUser from './pages/admin/oneUser'; 
import Profile from './pages/admin/profile'; 
import Logout from './pages/admin/logout'; 
import AddLeader from './pages/admin/addLeaders';
import PostType from './pages/admin/PostManagement'; 
import Notification from './components/Notification_Page';
import AddCitizen from './pages/admin/addCitizen';
import PostCitizen from './pages/admin/citizenPostsPage';
import Post from './pages/admin/Post'; 
import PostView from './pages/admin/PostViewPage'; 
import Statistics from './pages/admin/statisticsPage'; 
import './components/style.css';

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/reset' || location.pathname.startsWith('/code/') || location.pathname.startsWith('/resetPassword/');

  return (
    <div className="App">
      {!isLoginPage && <Header />}
      {!isLoginPage && <Sidebar />}
      <div className={`content-wrapper ${isLoginPage ? 'login-page' : ''}`}>
        <Routes>
          
          <Route path="/users" element={<Users />} />
          <Route path="/oneUser/:id" element={<OneUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addusers" element={<AddLeader />} />
          <Route path="/post_type" element={<PostType />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/post" element={<Post />} />
          <Route path="/addcitizen" element={<AddCitizen />} />
          <Route path="/citizenpost" element={<PostCitizen />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/post/:id"  element={<PostView />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/code/:email" element={<Code />} />
        <Route path="/resetPassword/:email" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />

        {/* Main Layout Routes */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
