import { useAppSelector } from '../app/hook';

const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.accessToken) {
    return true;
  } else return false;
};

export default useAuth;
