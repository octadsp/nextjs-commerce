import React, { useState } from "react";
import Avatar from "../Elements/Avatar/index";
import Cart from "../Elements/Cart/index";
import LoginModal from "../Fragments/loginModal";

function navbar() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">B-Commerce</a>
      </div>
      <div className="flex-none">
        {isLogin ? (
          <>
            <Cart />
            <Avatar />
          </>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  );
}

export default navbar;
