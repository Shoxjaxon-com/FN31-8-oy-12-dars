import React from "react";
import { FaSearch } from "react-icons/fa";
function FormInput({ type, placeholder, name }) {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 mx-auto">
        <input type={type} className="grow w-[400px] h-[35px] input-sm flex md:input-md" placeholder={placeholder} name={name} />
        <FaSearch className="h-4 w-4 opacity-70" />
      </label>
    </div>
  );
}

export default FormInput;
