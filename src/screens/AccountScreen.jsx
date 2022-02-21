
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";




const AccountScreen =(props) =>{

     const[searchParams] = useSearchParams();
     const token = searchParams.get("t");

     const{id} =useParams();

     const [message , setMessage] =useState(null);
     const [app_user, setApp_user] =useState(null);

     const navigate = useNavigate();

    
      useEffect(() => {
        const fetchData = async () => {
          if (props.toValidate){
          const response = await fetch("http://localhost:5000/auth/validate", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ token }),
          });
          const text = await response.text();
          const data = await text.toJson();
          setMessage({
            color: data.completed ? "alert-success" : "alert-danger",
            text: data.message,
          });
          if (data.completed) {
            setTimeout(() => navigate("/loginscreen"), 4000);
            // document
            //   .querySelector(".alert")
            //   .addEventListener("closed.bs.alert", function () {
            //     navigate("/login");
            //   });
          }
        }
        else {
          const data = 
          await (await fetch(`http://localhost:5000/app_user/${id}`,{method:"get"})).json();
  
        setApp_user(data);

        }
    }
    fetchData().catch(console.error);
  },[]);
  

  return (
    
    <>
      {message && (
      <>
        <h1>Account Validation</h1>
        <div
          className={`alert ${message.color} alert-dismissible fade show mt-1`}
          role="alert"
        >
          {message.text}
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      </>
      )}
      {app_user &&(
        <>
          <h1>Your Account info</h1>
          <div>your email : {app_user.login}</div>
          <div>your role : {app_user.user_role_id === 1?"user" : "admin" }</div>
        </>
      )}
    </>
  );
};
export default AccountScreen;