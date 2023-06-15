import React from "react";

function index() {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0}
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://placehold.co/600x400"/>
                </div>
            </label>
            <ul tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a>List Order</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    );
}

export default index;
