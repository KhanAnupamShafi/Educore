import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import useAuthCheck from './hooks/useAuthCheck';
import { router } from './router/routes';

function App() {
  const authStateCheck = useAuthCheck();

  return (
    <>
      <SnackbarProvider />

      {!authStateCheck ? (
        <Loader />
      ) : (
        <div className="w-full mx-auto">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
