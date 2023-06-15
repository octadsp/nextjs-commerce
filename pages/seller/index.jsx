import React from 'react'
import AddProductModal from '../../components/Fragments/addProductModal';
import TableProduct from '../../components/Elements/Table/index';
import Button from '../../components/Elements/Button/index'

function index() {
  return (
    <div className='mx-20 mt-10'>
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="normal-case text-xl">Welcome, {"NAME"}</a>
                </div>
                <div className="flex-none gap-4">
                    {/* <button className="btn btn-square btn-ghost bg-red-200 w-full px-2">
                        Add Product
                    </button> */}
                    <AddProductModal/>
                    <Button name={"Logout"} type={"text-red-500"}/>
                </div>
                </div>
            </nav>

        <section>
            <TableProduct/>
        </section>
    </div>
  )
}

export default index;