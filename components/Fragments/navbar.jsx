import React, { useState } from "react";
import Avatar from "../Elements/Avatar/index";
import Cart from "../Elements/Cart/index";
import LoginModal from "../Fragments/loginModal";
import RegisterModal from "../Fragments/registerModal";

function navbar() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="navbar bg-slate-200 rounded-xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-black">B-Commerce</a>
      </div>
      <div className="flex-none">
        {isLogin ? (
          <>
            <Cart />
            <Avatar />
          </>
        ) : (
          <div className="flex gap-5">
            <Cart/>
            <LoginModal />
            <RegisterModal />
          </div>
        )}
      </div>
    </div>
  );
}

export default navbar;
