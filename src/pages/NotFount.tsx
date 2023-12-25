import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-[calc(100vh_-_74px)]  bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg">
        <div className="p-6 text-center m-auto">
          <svg
            className="text-center"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-700">404</h1>
          <p className="text-gray-500">Page not found</p>
        </div>
        <div className="p-6 text-center m-auto">
          <p className="text-lg text-gray-700 text-center mb-4">
            The page you're looking for doesn't exist or has been
            moved.
          </p>
          <Link to={'/'}>
            <button className=" bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
