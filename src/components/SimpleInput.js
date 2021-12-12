import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandaler,
		inputBlurHandler: nameInputBlurHandler,
	} = useInput((value) => value.trim() !== '')

	let formIsValid = false
	if (enteredNameIsValid) {
		formIsValid = true
	}

	const formSubmitHandler = (e) => {
		e.preventDefault()
		if (!enteredNameIsValid) return
		console.log(enteredName)
	}


	const nameInputClasses = nameInputHasError
		? 'form-control error-text'
		: 'form-control'

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandaler}
					value={enteredName}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputHasError && <p>Name must not be empty</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
