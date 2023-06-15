import React from "react";
import Button from "../Button/index"

export default function index() {
  return (
    <div className="overflow-x-auto mt-10 bg-slate-100">
      <table className="table text-black">
        {/* head */}
        <thead>
          <tr className="text-black">
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th className="">Image</th>
            <th className="flex justify-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Laptop ROG</td>
            <td>Laptop ROG yang sangat bagus</td>
            <td>20000</td>
            <td>10</td>
            <td>image</td>
            <td className="flex justify-center gap-2">
                <Button type={"px-2 py-1 rounded-lg"} name={"Edit"} color={"green-500"} />
                <Button type={"px-2 py-1 rounded-lg"} name={"Delete"} color={"red-500"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
