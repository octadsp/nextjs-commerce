import { useState } from "react";
import Button from "../Elements/Button/index";
import Input from "../Elements/Input/index";
import Select from "../Elements/Select/index";
import SuccessAlert from "../Elements/Alert/successAlert"
import ErrorAlert from "../Elements/Alert/errorAlert"
import { API } from "../../utils/config/api";
import { useMutation } from "react-query";

function registerModal() {
    const [message, setMessage] = useState(null)

    const [getData, setData] = useState({
      email: "",
      password: "",
      name: "",
      role: "",
    });
  
    const { email, password, name, role } = getData;

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const response = await API.post("/register", getData);

            setMessage(<SuccessAlert message={"Register Success!"} />)
            console.log("Register success :" , response);

            setData({
                email: "",
                password: "",
                name: "",
                role: "",
            });
        } catch (error) {
            setMessage(<ErrorAlert message={"Register Failed!"} />)
            console.log("Register failed :" , error);
        }
    });

    const handleOnChange = (e) => {
        setData({
          ...getData,
          [e.target.name]: e.target.value,
        });
      };

    const handleButtonClick = () => {
        if (typeof window.my_modal_register.showModal === 'function') {
          window.my_modal_register.showModal();
        }
      };
  return (
    <>
      <Button type={"btn"} color={"slate-50"} handleOnClick={handleButtonClick} name={"Register"} />
      <dialog id="my_modal_register" className="modal">
        <form 
            method="dialog" 
            className="modal-box w-96 bg-slate-50"
            onSubmit={(e) => handleOnSubmit.mutate(e)} 
        >
            {message && message}
          <h3 className="font-bold text-3xl text-black">Register</h3>
          <div className="flex flex-col gap-4 mt-5">
            <Input 
                placeholder={"Email"} 
                type={"text"} 
                typeClass={"input"}
                name={"email"}
                onChange={handleOnChange}
                value={email}
            />
            <Input 
                placeholder={"Password"} 
                type={"password"} 
                typeClass={"input"}
                name={"password"}
                onChange={handleOnChange}
                value={password}
            />
            <Input 
                placeholder={"Name"} 
                type={"text"} 
                typeClass={"input"}
                name={"name"}
                onChange={handleOnChange}
                value={name}
            />
            <Select 
                name={"role"}
                onChange={handleOnChange}
                value={role} 
            />
          </div>
          <div className="flex justify-center mt-5">
            <Button type={"btn bg-green-500"} name="Register" />
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
