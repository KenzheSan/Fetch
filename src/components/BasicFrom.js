import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const regexForTheName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  const regexForTheEmail =   /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,})+$/
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasEror: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
    } = useInput((value) => value.match(regexForTheName))

    const {
      value: enteredLastName,
      isValid: enteredLastNameIsValid,
      hasEror: lastNameInputHasError,
      valueChangeHandler: lastNameChangeHandler,
      inputBlurHandler: lastNameInputBlurHandler,
    } = useInput((value) => value.match(regexForTheName))

    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasEror: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailInputBlurHandler,
    } = useInput((value) => value.match(regexForTheEmail))

    let formIsValid = false 
    if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
        formIsValid = true
    }

    const formSubmitHandler = (e) => {
		e.preventDefault()
        if(!enteredNameIsValid) return
        if(!enteredLastNameIsValid) return
        if(!enteredEmailIsValid) return
	}
    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>First Name</label>
            <input value={enteredName} type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameChangeHandler} />
            {nameInputHasError && <p>Name error</p>}
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input value={enteredLastName} type='text' id='name' onBlur={lastNameInputBlurHandler} onChange={lastNameChangeHandler}/>
            {lastNameInputHasError && <p>Last Name error</p>}
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' value={enteredEmail} onBlur={emailInputBlurHandler} onChange={emailChangeHandler}/>
          {emailInputHasError && <p>Email error</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
        {console.log(nameInputHasError)}
        {console.log(lastNameInputHasError)}
        {console.log(lastNameInputHasError)}
      </form>
    );
  };
  
  export default BasicForm;
  