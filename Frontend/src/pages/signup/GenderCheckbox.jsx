import React from "react";

const GenderCheckbox = ({ onInputChnage, selectedGender }) => {
  return (
    <div className="flex mt-3">
      <div className="form-control">
        <select
          value={selectedGender}
          onChange={onInputChnage}
          className="input input-bordered w-full   h-10 bg-[#51515368] font-medium"
        >
          <option value="Select">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default GenderCheckbox;
