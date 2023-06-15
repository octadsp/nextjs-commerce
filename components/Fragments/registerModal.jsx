import React from "react";
import Button from "../Elements/Button/index";
import Input from "../Elements/Input/index";
import Select from "../Elements/Select/index";

function registerModal() {
    const handleButtonClick = () => {
        if (typeof window.my_modal_register.showModal === 'function') {
          window.my_modal_register.showModal();
        }
      };
  return (
    <>
      <Button type={"btn"} color={"slate-50"} handleOnClick={handleButtonClick} name={"Register"} />
      <dialog id="my_modal_register" className="modal">
        <form method="dialog" className="modal-box w-96 bg-slate-50">
          <h3 className="font-bold text-3xl text-black">Register</h3>
          <div className="flex flex-col gap-4 mt-5">
            <Input placeholder={"Email"} type={"text"} typeClass={"input"}/>
            <Input placeholder={"Password"} type={"password"} typeClass={"input"}/>
            <Input placeholder={"Name"} type={"text"} typeClass={"input"}/>
            <Select placeholder={"Role"} />
          </div>
          <div className="flex justify-center mt-5">
            <Button type={"btn"} name="Register" color={"green-500"} />
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default registerModal;
