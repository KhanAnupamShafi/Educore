import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className="z-50 bg-white border-t shadow-md fixed bottom-0 left-0 right-0 h-16 flex items-center justify-around">
      <Link
        className="flex flex-col items-center focus:text-purple-500 hover:text-purple-500"
        to="/">
        <HomeIcon />
        <span className="text-xs sm:text-sm mt-1 ">Home</span>
      </Link>
      <Link
        className="flex flex-col items-center focus:text-purple-500 hover:text-purple-500"
        to="users">
        <UsersIcon />
        <span className="text-xs sm:text-sm mt-1 ">Users</span>
      </Link>
      <Link
        className="flex flex-col items-center focus:text-purple-500 hover:text-purple-500"
        to="project">
        <ProjectorIcon />
        <span className="text-xs sm:text-sm mt-1 ">Project</span>
      </Link>
      <Link
        className="flex flex-col items-center focus:text-purple-500 hover:text-purple-500"
        to="task">
        <ActivityIcon />
        <span className="text-xs sm:text-sm mt-1 ">Task</span>
      </Link>
      <Link
        className="flex flex-col items-center focus:text-purple-500 hover:text-purple-500"
        to="reporting">
        <ViewIcon />
        <span className="text-xs sm:text-sm mt-1 ">Reporting</span>
      </Link>
    </div>
  );
};

export default MobileNav;

export function ActivityIcon() {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function ProjectorIcon() {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  );
}

export function UsersIcon() {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function ViewIcon() {
  return (
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
