import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex mt-3">
      <div className="form-control">
        <select className="input input-bordered w-full   h-10 bg-[#51515368] font-medium">
          <option selected>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default GenderCheckbox;
