import React from "react";

export default function index(props) {
  return (
    <select 
        className="select select-bordered bg-gray-700 placeholder:text-slate-50 w-full"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
    >
      <option value="default" disabled>
        Role
      </option>
      <option >Seller</option>
      <option >User</option>
    </select>
  );
}
