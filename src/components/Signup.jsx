import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrls } from "../baseUrls";
import { errorEmitter, successEmitter } from "../ToastEmitter";

import { useAuthContext } from "../contextapi/authcontext/authContext";
function Signup() {
  const { signupFun } = useAuthContext();

  const [authData, setAuthData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const [tandc, setTandc] = useState(false);

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myobj = {
      name: `${authData.fname} ${authData.lname}`,
      email: authData.email,
      password: authData.password,
      terms_condition: tandc,
    };
    signupFun(myobj, navigate);
    setAuthData({
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
    });
    setTandc(false);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900  text-gray-900 dark:text-gray-100 px-10 p-6">
      <div className="lg:grid lg:grid-cols-12 pt-10">
        <section className="relative flex h-24 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <svg
                class="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="white"
              >
                <rect x="3" y="1" width="7" height="12"></rect>
                <rect x="3" y="17" width="7" height="6"></rect>
                <rect x="14" y="1" width="7" height="6"></rect>
                <rect x="14" y="11" width="7" height="12"></rect>
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Prabhat
              </span>
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Prabhat 🦑
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Create your account and join Prabhat! Whether you're a traveler or
              a host, signing up gives you access to book unique stays or list
              your property. Just enter your details, verify your email, and
              you're all set to explore or host.
            </p>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-orange-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
            <form
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={submitHandler}
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="fname"
                  value={authData.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="lname"
                  value={authData.lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                  required
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={authData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={authData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="pb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Password Confirmation
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="cpassword"
                  onChange={handleChange}
                  value={authData.cpassword}
                  placeholder="Confirm Password"
                  className="w-full px-3  py-2 outline-none focus:outline  focus:outline-orange-500 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:dark:border-orange-500"
                  required
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    onChange={(e) => setTandc(e.target.checked)}
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    required
                  />
                  <span className="text-sm text-gray-900 dark:text-gray-100">
                    By creating an account, you agree to our
                    <a
                      href="#"
                      className="text-gray-900 dark:text-gray-100 underline"
                    >
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a
                      href="#"
                      className="text-gray-900 dark:text-gray-100 underline"
                    >
                      privacy policy
                    </a>
                    .
                  </span>
                </label>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                {authData.password === authData.cpassword &&
                tandc &&
                authData.fname &&
                authData.lname &&
                authData.email ? (
                  <button className="inline-block shrink-0 rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500">
                    Create an account
                  </button>
                ) : (
                  <button
                    className="inline-block shrink-0 rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 disabled:bg-orange-200 disabled:hover:text-white"
                    disabled
                  >
                    Create an account
                  </button>
                )}

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-gray-900 dark:text-gray-100 underline font-semibold text-orange-500"
                  >
                    &nbsp;Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Signup;
