import React from "react";
import Button from "../Elements/Button/index";
import Input from "../Elements/Input/index";
import TextArea from "../Elements/Textarea/index";

function addProductModal() {
    const handleButtonClick = () => {
        if (typeof window.my_modal_addProduct.showModal === 'function') {
          window.my_modal_addProduct.showModal();
        }
      };
  return (
    <>
      <Button type={"btn"} color={"slate-50"} handleOnClick={handleButtonClick} name={"Add Product"} />
      <dialog id="my_modal_addProduct" className="modal">
        <form method="dialog" className="modal-box w-96 bg-slate-50">
          <h3 className="font-bold text-3xl text-black">Add Product</h3>
          <div className="flex flex-col gap-4 mt-5">
            <Input placeholder={"Name"} type={"text"} typeClass={"input"}/>
            <TextArea placeholder={"Description"}/>
            <Input placeholder={"Price"} type={"number"} typeClass={"input"}/>
            <Input placeholder={"Quantity"} type={"number"} typeClass={"input"}/>
            <Input placeholder={"Image"} type={"file"} typeClass={"file-input"}/>
          </div>
          <div className="flex justify-center mt-5">
            <Button type={"btn"} name="Add" color={"green-500"} />
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default addProductModal;
