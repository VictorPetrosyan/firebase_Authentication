import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from './store/slices/userSlice'; // Ensure you have clearUser action
import Spinner from './components/Spinner';


function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();

        dispatch(setUser({
          email: currentUser.email,
          id: currentUser.uid,
          token: token,
          emailVerified: currentUser.emailVerified
        }));
      } else {
        dispatch(removeUser());
      }

      setTimeout(() =>
        setLoading(false),
        1000
      )
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
