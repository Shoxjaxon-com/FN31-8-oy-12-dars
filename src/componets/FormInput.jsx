import React from "react";
import { FaSearch, FaUser, FaKey } from "react-icons/fa";
import { MdEmail} from "react-icons/md";

function FormInput({ type, placeholder, name }) {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 mx-auto">
        <input type={type} className="grow w-[400px] h-[35px] input-sm flex md:input-md" placeholder={placeholder} name={name} />
        {placeholder == "Search" &&  <FaSearch className="h-4 w-4 opacity-70" />}

      </label>
    </div>
  );
}

export default FormInput;
