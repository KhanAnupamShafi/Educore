import { Link, useParams } from 'react-router-dom';
import { useGetSingleCoursesQuery } from '../../redux/course/courseApi';
import Loader from '../Loader/Loader';

const SingleCourse = () => {
  const { id } = useParams();
  const {
    data: courseData,
    isLoading,
    error,
  } = useGetSingleCoursesQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  // Handle the case where id is undefined
  if (!id) {
    return <div>Error: Course ID is undefined</div>;
  }
  if (!courseData || error) {
    return <div>Error: Not Authorized</div>;
  }

  return (
    <main className="p-4 md:p-6">
      {/* First Card */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">{courseData.name}</h2>
        <p className="text-gray-600">{courseData.description}</p>

        {/* Course Details */}
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div>
            <h3 className="font-semibold text-lg">Course Details</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Price:{' '}
                <span className="font-medium">
                  $ {courseData.price}
                </span>
              </li>
              <li>
                Duration:{' '}
                <span className="font-medium">
                  {' '}
                  {courseData.duration} months
                </span>
              </li>
              <li>
                Level:{' '}
                <span className="font-medium">
                  {courseData.level}
                </span>
              </li>
            </ul>
          </div>

          {/* Course Topics */}
          <div>
            <h3 className="font-semibold text-lg">Course Topics</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {courseData.topics?.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enroll Now Button */}
        <div className="mt-4">
          <Link
            to={`/course-update/${courseData._id}`}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
            Enroll Now
          </Link>
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white mt-6 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-2">Course Schedule</h2>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4">
                Day
              </th>
              <th className="border border-gray-300 py-2 px-4">
                Time
              </th>
              <th className="border border-gray-300 py-2 px-4">
                Topic
              </th>
            </tr>
          </thead>
          <tbody>
            {courseData?.schedule?.classDays?.map((day, _index) => (
              <tr key={_index}>
                {' '}
                <td className="border border-gray-300 py-2 px-4">
                  {day}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  {courseData.schedule.classTime}
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  HTML & CSS
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default SingleCourse;
