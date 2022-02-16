// import { Link } from "react-router-dom";




const GenericForm =(props)=>{
//  const {method, endpoint , submitButtonText} = props
if(!props.endpoint){
    throw new Error("props.endpoint not set");
};

const {
    endpoint,
    method="post",
    submitButtonText="valider",
    callback,
    validation,
    ...rest
} = props;

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const formEvt=evt.currentTarget;
        if(validation){
            formEvt.querySelectorAll("[required],[pattern]").forEach((input)=>{
                if(!input.value ||(input.pattern && !new RegExp(input.pattern).test(input.value))){
                    input.classList.add("is-invalid");
                    input.onfocus = (evt)=>{
                        evt.currentTarget.classList.remove("is-invalid");
                    };
                }
                else{
                    input.parentElement.classList.remove("is-invalid");
                }
            });
            const isNotValid = Array.from(
                formEvt.querySelectorAll("[required],[pattern]")
            ).some((input)=>input.classList.contains("is-invalid"));
            if(isNotValid) return;
        }
       
        const formData = new FormData(formEvt)
        const body = JSON.stringify(Object.fromEntries(formData.entries()));
        const init = {
           method,
           headers:{
               "Content-Type": "application/json",
           },
           body
       }
       fetch(endpoint,init).then((response)=>{
           return callback ? callback(response) : response;
       }).catch(console.log);
    };
    return (
<>
    <form onSubmit={handleSubmit} noValidate={validation} {...rest}>
        
         {props.children}

        <button type="submit" className="btn btn-primary">{submitButtonText}</button>
    </form>
</>
    );
};
export default GenericForm;