import React from "react";
import Button from "../Button/index";
import Badge from "./badge";

const carts = [
  {
    no: "1",
    title: "Laptop ROG",
    price: 20000,
  },
  {
    no: "2",
    title: "Laptop Sultan",
    price: 100000,
  },
  {
    no: "3",
    title: "Laptop ASUS",
    price: 50000,
  },
  {
    no: "4",
    title: "Laptop ASUS LENOVO MANTAP",
    price: 50000,
  },
];

function index() {
  const handleButtonClick = () => {
    if (typeof window.my_modal_cart.showModal === "function") {
      window.my_modal_cart.showModal();
    }
  };

  const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);
  const totalItems = carts.length;

  return (
    <>
      <div className="flex">
        <Button handleOnClick={handleButtonClick} name={"Cart"} />
        <Badge totalItems={totalItems} />
      </div>
      <div>
        <dialog id="my_modal_cart" className="modal">
          <form method="dialog" className="modal-box w-96 bg-slate-50">
            <h3 className="font-bold text-3xl text-black">My Cart</h3>
            <div className="flex flex-col gap-4 mt-5">
              <div className="card-body bg-slate-300 rounded-2xl">
                {carts?.map((cart, index) => (
                  // <div key={index}>
                    <span key={index} className="font-bold text-left text-lg text-black flex gap-3">
                      <span>{cart.no}.</span>
                      <div className="flex justify-between w-full">
                        <span className="text-left">
                          {cart.title.length > 15
                            ? `${cart.title.substring(0, 15)}...`
                            : cart.title}
                        </span>
                        <span>{cart.price}</span>
                      </div>
                    </span>
                  // </div>
                ))}
                <hr />
                <span className="text-info flex justify-between text-lg font-bold">
                  Subtotal:
                  <span>{totalPrice} </span>
                </span>
                <div className="card-actions flex justify-center mt-5">
                  <Button type={"btn"} name="Check Out" color={"green-500"} />
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default index;
