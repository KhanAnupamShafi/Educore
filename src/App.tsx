import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/routes';

function App() {
  return (
    <>
      {
        <div className="w-full mx-auto">
          <RouterProvider router={router} />
        </div>
      }
    </>
  );
}

export default App;
