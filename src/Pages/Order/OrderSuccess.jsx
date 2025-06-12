import { Navigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import OrderSuccessImage from "../../assets/Images/ordered-success.png"  
function OrderSuccess(){
    return(
        <Layout>
            <div className = "flex flex-col justify-center items-center py-28">
                <img src={OrderSuccessImage} width={400} height={400} />
            </div>
            <p className="text-lg font-semibold">
                Your order has been placed successfully
            </p>
            <button 
            onClick = {() => Navigate('/')} className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">
                Go back home
            </button>
        </Layout>
    )
}

export default OrderSuccess;