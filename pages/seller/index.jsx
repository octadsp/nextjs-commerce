import { useState } from 'react'
import AddProductModal from '../../components/Fragments/addProductModal';
import TableProduct from '../../components/Elements/Table/index';
import Button from '../../components/Elements/Button/index';
import SuccessAlert from '../../components/Elements/Alert/successAlert';
import { useRouter } from 'next/router';

function index() {
    const router = useRouter();
    const [message, setMessage] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setMessage(
            <SuccessAlert message={"Logout Success!"}/>
        )
        setTimeout(()=> {
            router.push('/')
        }, 2000);
      };
  return (
    <div className='mx-20 mt-10'>
                {message && message}
        <nav>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="normal-case text-xl">Welcome, {"NAME"}</a>
                </div>
                <div className="flex-none gap-4">
                    <AddProductModal/>
                    <Button 
                        handleOnClick={handleLogout} 
                        name={"Logout"} 
                        type={"text-red-500"}
                    />
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