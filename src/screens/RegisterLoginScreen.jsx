import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenericForm from "../components/generics/FormContact"
import FormInput from "../components/generics/FormInput"


const RegisterLoginScreen = (props) => {

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (evt, response) => {
        const text = await response.text();
        const data = text.toJson();
        console.log(data);
        if (props.isLogin) {
            document.cookie = `auth=${data.cookie}`;
            const { email, role } = data;
            localStorage.setItem("user", JSON.stringify({ email, role }));
            setMessage({
                color: data.completed ? "alert-success" : "alert-danger",
                text: data.message,
            });
            if (data.completed) {
                setTimeout(() => navigate(`/accountscreen/${data.id}`), 4000);
            }
        }
        else {
            //isRegister
            setMessage({
                color: data.completed ? "alert-success" : "alert-danger",
                text: data.message,
            });
        }
    };
    const checkPasswords = () => {
        const pass = document.querySelector('[name="password"]').value;
        const passConfirm = document.querySelector('[name="password_confirm"]')?.value;
        if (pass !== passConfirm) {
            document
                .querySelector('[name="password_confirm"]')
                ?.classList.add("is-invalid");
        } else {
            document
                .querySelector('[name="password_confirm"]')
                ?.classList.remove("is-invalid");
        }
    };
    return (
        <>
            <h1>{props.isLogin ? "Se Connecter" : "Créer un compte"}</h1>
            <GenericForm endpoint={'http://localhost:5000/auth/' + (props.isLogin ? "login" : "register")}
                submitButtonText={props.isLogin ? "Se connecter" : "S'inscrire"}
                callback={handleSubmit}
                validation={true}>
                <FormInput className="mb-3"
                    name="email"
                    type="email"
                    labelText="Adresse mail"
                    required={true}
                    pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
                    invalidText="Saisr un email valide" />
                <FormInput className="mb-3"
                    onBlur ={checkPasswords}
                    name="password"
                    type="password"
                    labelText="Password"
                    required={true}
                    invalidText="Saisr un mot de passe valide" />
                {props.isRegister && (
                    <FormInput className="mb-3"
                        onBlur ={checkPasswords}
                        name="password_confirm"
                        type="password"
                        labelText="Confirm Password"
                        required={true}
                        invalidText="Saisr un mot de passe identique" />
                )}

            </GenericForm>
            <div style={{ postion: "relative", top: -40, letf: 90 }} className={props.isLogin && "ms-4"}>
                {props.isLogin ? (
                    <>
                        <Link className="nav-link" to="/registerscreen"> créer un compte</Link>
                        <Link className="nav-link" to="/renew"> mot de passe oublier?</Link>
                    </>
                ) : (
                    <Link className="nav-link" to="/loginscreen">deja un compte ? se connecter</Link>
                )}
            </div>
            {message && (
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
            )}
        </>
    )
}
export default RegisterLoginScreen;