import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import {
  useDeleteCoursesMutation,
  useGetCoursesQuery,
} from '../redux/course/courseApi';

export interface Course {
  _id: string;
  name: string;
  price: string;
  duration: string;
  level: string;
}
const Home = () => {
  const { data: courses, isLoading } = useGetCoursesQuery({});
  const [deleteCourses, { isLoading: deleteIsLoading }] =
    useDeleteCoursesMutation();
  if (isLoading) {
    return <Loader />;
  }
  const deleteCourse = (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this course?'
    );

    if (confirmDelete) {
      deleteCourses(id);
      console.log(id);
    }
  };
  return (
    <main className="p-4 md:p-6">
      {/* Card */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">
          Web Development - Master Classes
        </h2>
        <p className="text-gray-600">
          Choose from a variety of professional web development
          courses
        </p>

        {/* Table */}
        <table className="w-full border-collapse mt-4">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4">
                Course Name
              </th>
              <th className="border border-gray-300 py-2 px-4">
                Price
              </th>
              <th className="border border-gray-300 py-2 px-4">
                Duration
              </th>
              <th className="border border-gray-300 py-2 px-4">
                Level
              </th>
              <th className="border border-gray-300 py-2 px-4 bg-blue-200 text-xs font-bold uppercase">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {courses &&
              courses.map((course: Course) => (
                <tr key={course._id}>
                  <td className="border border-gray-300 hover:text-primary">
                    <Link
                      to={`/course/${course._id}`}
                      className="py-2 px-4  flex justify-between hover:bg-[#dcf0ff] rounded-lg ">
                      {course.name}
                      <button className=" ml-auto relative text-secondary-dark bg-light-dark hover:text-primary inline-flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                        <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {course.price}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {course.duration}
                  </td>
                  <td className="border border-gray-300 py-2 px-4">
                    {course.level}
                  </td>
                  <td className="max-w-12 border border-gray-300 py-2 px-4">
                    <Link
                      to={`/course/${course._id}`}
                      className="text-blue-400 hover:text-blue-600 underline">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteCourse(course._id)}
                      disabled={deleteIsLoading}
                      className="text-blue-400 hover:text-blue-600 underline pl-6">
                      Remove
                    </button>{' '}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Enroll Now Button */}
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
            Enroll Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
