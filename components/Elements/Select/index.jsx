import React from "react";

export default function index(props) {
  return (
    <select className="select select-bordered bg-gray-700 placeholder:text-slate-50 w-full">
      <option disabled selected>
        {props.placeholder}
      </option>
      <option>Seller</option>
      <option>User</option>
    </select>
  );
}
