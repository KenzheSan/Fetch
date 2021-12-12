import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasEror: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
    } = useInput((value) => value.trim() !== '')


    let formIsValid = false 
    if(enteredNameIsValid){
        formIsValid = true
    }

    const formSubmitHandler = (e) => {
		e.preventDefault()
        if(!enteredNameIsValid) return
		console.log(enteredName)
	}
    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>First Name</label>
            <input value={enteredName} type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameChangeHandler} />
            {nameInputHasError && <p>Name must not be empty</p>}
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' />
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  