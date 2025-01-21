import { useReducer } from "react";


const HandlingForm = () => {
    const formRed = (state,action) =>{
        switch (action.type) {
            case "SET_INPUT":
                return{...state, [action.key]:action.value}
                
            case "RESET_FORM":
                return initialState
                
            
        
            default:
                return state;
        }
    }
    const initialState = {
        name:"",
        email:"",
        dept:""
    }
    const[formValues,dispatch] = useReducer(formRed,initialState)
    
  
    const setInp = (e) =>{
        let{name,value} = e.target
        dispatch({type:"SET_INPUT",key:name,value})
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(formValues);
        dispatch({type:"RESET_FORM"})
        
    }
    return ( 
        <>
            <form onSubmit={onSubmit}>
                <input type="text" value={formValues.name} name="name" onChange={setInp} placeholder="Enter your name" />
                <input name="email" value={formValues.email} type="email" onChange={setInp} placeholder="Enter your email" />
                <input type="text" value={formValues.dept} name="dept" onChange={setInp} placeholder="Dept" />
                <p>my name is {formValues.name}</p>
                <input type="submit" value="submit" />
            </form>
        </>
     );
}
 
export default HandlingForm;