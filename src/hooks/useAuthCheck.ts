import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hook';
import { userLoggedIn } from '../redux/auth/authSlice';

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const [authStateCheck, setAuthStateCheck] = useState(false);

  useEffect(() => {
    const authLocal = localStorage.getItem('auth');
    if (authLocal) {
      const auth = JSON.parse(authLocal);
      if (auth.accessToken) {
        dispatch(userLoggedIn(auth));
      }
    }
    setAuthStateCheck(true);
  }, [dispatch]);

  return authStateCheck;
};

export default useAuthCheck;
