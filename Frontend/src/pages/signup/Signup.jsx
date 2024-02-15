import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import UseSignup from "../../hooks/UseSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = UseSignup();

  const handleGenderInput = (gender) => {
    setInputs({ ...inputs, gender: gender.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-se text-center text-gray-300 font-medium">
          SignUp
          <span className="text-blue-800 font-medium ml-2">B-Chat</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-5">
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-medium">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter full Name"
              className="input input-bordered w-full  bg-[#51515368] h-10 font-medium"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div className="pt-2">
            <label className="label p-2">
              <span className="text-base label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full  bg-[#51515368] h-10 font-medium"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div className="pt-2">
            <label className="label p-2">
              <span className="text-base label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full   h-10 bg-[#51515368] font-medium"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className="pt-2">
            <label className="label p-2">
              <span className="text-base label-text font-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full   h-10 bg-[#51515368] font-medium"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onInputChnage={handleGenderInput}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-l hover:underline hover:text-blue-600 mt-2 ml-1 inline-block cursor-pointer"
          >
            Already have an account? {"Log in here."}
          </Link>

          <div className="mt-2">
            <button
              className="btn btn-block btn-sm mt-2 bg-[#4ade80]"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
