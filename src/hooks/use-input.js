import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue,setEnteredValue] = useState('')
    const [isTouched,setIsTouched] = useState(false)
    const valueIsValid = validateValue(enteredValue)
    const hasEror = !validateValue && isTouched

    const valueChangeHandler = (e) =>{
        setEnteredValue(e.target.value)
    }
    
    const inputBlurHandler = () =>{
        setIsTouched(true)
    }

    

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasEror: hasEror,
        valueChangeHandler,
        inputBlurHandler,
    }
}

export default useInput