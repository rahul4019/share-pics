import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import Home from './container/Home';

function App() {
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
