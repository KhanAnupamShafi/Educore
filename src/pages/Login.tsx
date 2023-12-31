import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { useLoginMutation } from '../redux/auth/authApi';

interface ErrorState {
  email: string;
  password: string;
}
const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [responseError, setResponseError] = useState('');
  const [errors, setErrors] = useState<ErrorState>({
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const [login, { data, error, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      if ('data' in error) {
        const errMsg =
          'error' in error ? error.error : JSON.stringify(error.data);
        setResponseError(JSON.parse(errMsg).error);
      }
    }
    if (data?.accessToken) {
      navigate('/');
    }
  }, [data, error]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResponseError('');
    // Validate email-password
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'This field is required',
      }));
      return;
    } else if (
      !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address.',
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Please enter a password.',
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    login({ email: email, password: password });
  };

  const handleInputFocus = (field: 'email' | 'password') => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className="min-h-screen m-auto flex justify-center items-center max-w-[444px] h-[576px]">
      {isLoading && <Loader />}
      <form
        noValidate
        onSubmit={handleSubmit}
        className="py-12 px-16 bg-white rounded-xl shadow-lg z-20">
        <div className="flex justify-start items-center mb-5 cursor-pointer gap-4">
          <Link to={'/'} className="w-20 h-20">
            <img
              className="w-full h-full"
              src="/images/educor.svg"
              alt=""
            />
          </Link>
          <h1 className="text-3xl font-bold text-center text-secondary">
            Sign In
          </h1>
        </div>
        <p className="w-80 text-dark text-start text-sm mb-8 font-semibold  tracking-wide cursor-pointer">
          Sign in to join with Educor
        </p>
        <div className="space-y-6 mt-14 text-secondary">
          <div className="relative">
            <label
              htmlFor="email"
              className="drop-shadow-md text-sm mb-0.5">
              Email
            </label>
            <input
              id="email"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              onFocus={() => handleInputFocus('email')}
              value={email}
              placeholder="Enter Email"
              className={`block text-sm mt-1 py-3 px-4 w-[292px] rounded-lg  border ${
                errors.email
                  ? 'border-error shadow-3xl'
                  : 'outline-[#D6BBFB] '
              }`}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <div
              className="relative error-container"
              style={{
                height: '20px',
                visibility: errors.email ? 'visible' : 'hidden',
              }}>
              {errors.email && (
                <p className="absolute top-2 text-red-600 text-sm ml-2">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="drop-shadow-md text-sm mb-0.5">
              Password
            </label>
            <input
              id="password"
              type={isPasswordVisible ? 'text' : 'password'}
              onChange={(event) => setPassword(event.target.value)}
              onFocus={() => handleInputFocus('password')}
              value={password}
              placeholder="********"
              className="block text-sm mt-1 py-3 px-4 w-[292px] rounded-lg border outline-[#D6BBFB]"
              required
            />
            <button
              className="absolute inset-y-0 right-4 flex items-center px-4 text-gray-600"
              onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>

            <div
              className="relative error-container"
              style={{
                height: '20px',
                visibility: errors.password ? 'visible' : 'hidden',
              }}>
              {errors.password && (
                <p className="relative top-2 text-red-500 text-sm ml-2">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={`text-center ${'mt-10'} relative`}>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-primary rounded-lg hover:bg-purple-500 transition-all">
            Sign In
          </button>
          {responseError && (
            <p className="mt-1 text-xs text-red-600">
              {responseError}
            </p>
          )}
          <p className="mt-7 text-start text-light">
            Already Have An Account?{' '}
            <Link to={'/signup'}>
              <span className="hover:underline font-semibold text-link cursor-pointer">
                {' '}
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
