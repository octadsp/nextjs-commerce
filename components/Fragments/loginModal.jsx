import React from "react";
import Button from "../Elements/Button/index";
import Input from "../Elements/Input/index";
import { useRouter } from "next/router";

function loginModal() {
    const router = useRouter();

    const handleButtonModal = () => {
        if (typeof window.my_modal_login.showModal === 'function') {
          window.my_modal_login.showModal();
        }
      };
    const handleButtonLogin = () => {
        router.push("/seller");
    }
  return (
    <>
      <Button type={"btn"} color={"slate-50"} handleOnClick={handleButtonModal} name={"Login"} />
      <dialog id="my_modal_login" className="modal">
        <form method="dialog" className="modal-box w-96 bg-slate-50">
          <h3 className="font-bold text-3xl text-black">Login</h3>
          <div className="flex flex-col gap-4 mt-5">
            <Input placeholder={"Email"} type={"text"} typeClass={"input"}/>
            <Input placeholder={"Password"} type={"password"} typeClass={"input"}/>
          </div>
          <div className="flex justify-center mt-5">
            <Button type={"btn bg-green-500"} name="Login" handleOnClick={handleButtonLogin} />
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default loginModal;
