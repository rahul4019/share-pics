import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';

import Home from './container/Home';
import Login from './components/Login';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
