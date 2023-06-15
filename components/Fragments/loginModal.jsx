import React from "react";
import Button from "../Elements/Button/index";
import Input from "../Elements/Input/index";

function loginModal() {
  return (
    <>
      <Button id={"my_modal_login"} name={"Login"} />
      <dialog id="my_modal_login" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <div>
            <Input placeholder={"Email"} type={"test"}/>
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
