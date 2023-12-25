import { enqueueSnackbar } from 'notistack';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import { useAppDispatch } from '../app/hook';
import { userLoggedOut } from '../redux/auth/authSlice';
import { useAddCoursesMutation } from '../redux/course/courseApi';
export interface CourseFormData {
  name: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  topics: string[];
  schedule: {
    startDate: string;
    endDate: string;
    classDays: string[];
    classTime: string;
  };
}

const topicOptions = [
  { label: 'HTML', value: 'HTML' },
  { label: 'CSS', value: 'CSS' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Vue.js', value: 'Vue.js' },
  { label: 'Node.js', value: 'Node.js' },
  { label: 'Express.js', value: 'Express.js' },
  { label: 'RESTful APIs', value: 'RESTful APIs' },
];

const Course: React.FC = () => {
  const [addCourse, { error }] = useAddCoursesMutation();
  console.log(error);
  const [formData, setFormData] = useState<CourseFormData>({
    name: '',
    description: '',
    price: '',
    duration: '',
    level: '',
    topics: [],
    schedule: {
      startDate: '',
      endDate: '',
      classDays: [],
      classTime: '',
    },
  });

  const [selectedTopics, setSelectedTopics] = useState<
    { label: string; value: string }[]
  >([]);
  const dispatch = useAppDispatch();
  const handleTopicChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selectedOptions: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actionMeta: any
  ) => {
    if (actionMeta.action === 'create-option') {
      const newOption = {
        label: actionMeta.option.label,
        value: actionMeta.option.value,
      };
      setSelectedTopics([...selectedTopics, newOption]);
    } else {
      setSelectedTopics(selectedOptions);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleNumberInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: isNaN(parseFloat(value)) ? '' : value,
    }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      schedule: { ...prevData.schedule, [id]: value },
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    if (id === 'classTime') {
      // If the selected field is 'classTime', update it directly
      setFormData((prevData) => ({
        ...prevData,
        schedule: { ...prevData.schedule, classTime: value },
      }));
    } else {
      // For other fields, update them as usual
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const classDays = checked
        ? [...prevData.schedule.classDays, value]
        : prevData.schedule.classDays.filter((day) => day !== value);
      return {
        ...prevData,
        schedule: { ...prevData.schedule, classDays },
      };
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedTopicValues = selectedTopics.map(
      (topic) => topic.value
    );
    const formDataFormatted: CourseFormData = {
      ...formData,
      topics: selectedTopicValues,
    };
    addCourse(formDataFormatted)
      .unwrap()
      .then((result) => {
        // Handle successful mutation result if needed
        console.log('Mutation result:', result);
        navigate('/');
      })
      .catch((error) => {
        // Handle mutation error, e.g., display an error message
        console.error('Mutation error:', error);

        // If the error indicates unauthorized access, log the user out
        if (error) {
          enqueueSnackbar('Authentication failed login again', {
            variant: 'error',
          });
          dispatch(userLoggedOut());
          localStorage.clear();
          navigate('/login');
        }
      });
  };
  return (
    <div>
      <div className="mx-auto max-w-2xl space-y-8 p-6 border border-gray-300 rounded-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Submit Course Details
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter the details of your course to submit it for review
          </p>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Course Name</label>
              <input
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                id="name"
                placeholder="Enter course name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <textarea
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full min-h-[100px]"
                id="description"
                placeholder="Enter course description"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                  id="price"
                  placeholder="Enter course price"
                  required
                  onChange={handleNumberInputChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="duration">Duration</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                  id="duration"
                  placeholder="Enter course duration"
                  required
                  onChange={handleNumberInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="topics">Topics</label>
              <CreatableSelect
                id="topics"
                isMulti
                options={topicOptions}
                value={selectedTopics}
                onChange={handleTopicChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="level">Level</label>
              <select
                onChange={handleSelectChange}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                id="level"
                required>
                <option value="">Select course level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="classTime">Time</label>
              <select
                onChange={handleSelectChange}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                id="classTime"
                required>
                <option value="">Select class time</option>
                <option value="8:00 - 10:00">8:00 - 10:00</option>
                <option value="10:00 - 12:00">10:00 - 12:00</option>
                <option value="12:00 - 14:00">12:00 - 14:00</option>
                <option value="14:00 - 16:00">14:00 - 16:00</option>
                <option value="16:00 - 18:00">16:00 - 18:00</option>
                <option value="18:00 - 20:00">18:00 - 20:00</option>
                <option value="20:00 - 22:00">20:00 - 22:00</option>
                <option value="22:00 - 00:00">22:00 - 00:00</option>
              </select>
            </div>
            <div className="space-y-2 my-5">
              <label htmlFor="class-days">Class Days</label>
              <div className="grid grid-rows-7 gap-2">
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Monday"
                    onChange={handleCheckboxChange}
                  />
                  Monday
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Tuesday"
                    onChange={handleCheckboxChange}
                  />
                  Tuesday
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Wednesday"
                    onChange={handleCheckboxChange}
                  />
                  Wednesday
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Thursday"
                    onChange={handleCheckboxChange}
                  />
                  Thursday
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Friday"
                    onChange={handleCheckboxChange}
                  />
                  Friday
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Saturday"
                    onChange={handleCheckboxChange}
                  />
                  Saturday
                </label>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    value="Sunday"
                    onChange={handleCheckboxChange}
                  />
                  Sunday
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-4">
              <div className="space-y-2">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                  id="startDate"
                  placeholder="Enter start date"
                  required
                  onChange={handleDateChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 w-full"
                  id="endDate"
                  placeholder="Enter end date"
                  required
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Course;
