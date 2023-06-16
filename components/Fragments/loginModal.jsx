import { useState, useContext } from "react";
import Button from "../Elements/Button/index";
import Input from "../Elements/Input/index";
import { useRouter } from "next/router";
import SuccessAlert from "../Elements/Alert/successAlert";
import ErrorAlert from "../Elements/Alert/errorAlert";
import { API, setAuthToken } from "../../utils/config/api";
import { useMutation } from "react-query";
import { UserContext } from "../../contexts/userContext";

function loginModal() {
  const router = useRouter();

  const [message, setMessage] = useState(null);

  const [state, dispatch] = useContext(UserContext);

  const [getUser, setUser] = useState({ 
    email: "", 
    password: "" 
  });

  const { email, password } = getUser;

  const handleOnChange = (e) => {
    setUser({
      ...getUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", getUser);

      console.log("login success : ", response);

      setMessage(<SuccessAlert message={"Login Success!"} />);
      setUser({ email: "", password: "" });

      // Status check
      setTimeout(() => {
        // Send data to useContext
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });

        setAuthToken(localStorage.token);
        router.push("/seller");
      }, 2000);
    } catch (err) {
      setMessage(<ErrorAlert message={"Login Failed!"} />);
      console.log("Login Failed! :", err);
    }
  });

  const handleButtonModal = () => {
    if (typeof window.my_modal_login.showModal === "function") {
      window.my_modal_login.showModal();
    }
  };

return (
  <>
    <Button
      type={"btn"}
      color={"slate-50"}
      handleOnClick={handleButtonModal}
      name={"Login"}
    />
    <dialog id="my_modal_login" className="modal">
      <form 
        method="dialog" 
        className="modal-box w-96 bg-slate-50"
        onSubmit={(e) => handleOnSubmit.mutate(e)} 
      >
        {message && message}
        <h3 className="font-bold text-3xl text-black">Login</h3>
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
        </div>
        <div className="flex justify-center mt-5">
          <Button
            type={"btn bg-green-500"}
            name="Login"
          />
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
