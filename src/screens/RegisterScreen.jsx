import GenericForm from "../components/generics/FormContact"
import FormInput from "../components/generics/FormInput"


const RegisterScreen =() =>{

    const handleSubmit = async (response) => {
        console.log(await response.text());
      };
    return (
        <>
            <GenericForm endpoint="http://localhost:5000/auth/register"
                submitButtonText="S'inscrire"
                callback={handleSubmit}
                validation={true}
                required={true}
                id="myForm">
                <FormInput className="mb-3"
                    name="login"
                    type="email"
                    labelText="Adresse mail"
                    required={true}
                    pattern={'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'}
                    invalidText="Saisr un email valide"/>
                <FormInput className="mb-3"
                    name="password"
                    type="password"
                    labelText="Password"
                    required={true}
                    invalidText="Saisr un Mot de passe valide"/>
            </GenericForm>
           <Link to="/loginscreen"> Déja un compte ? connectez vous </Link>
        </>
    )
}
export default RegisterScreen;