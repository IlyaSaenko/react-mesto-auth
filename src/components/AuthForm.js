import { useState } from 'react';

export default function AuthForm({
	title,
	children,
	handleSubmit,
	textOfButton
}) {

	const [formValue, setFormValue] = useState({
		password: '',
		email: '',
	});

	function onSubmit(e) {
		const { email, password } = formValue;
		handleSubmit(e, password, email)
	}
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setFormValue({
			...formValue,
			[name]: value
		})
	};

	return (
		<div className="entry" >
			<h2 className="entry__title"> {title} </h2>
			<form className="entry__form" onSubmit={onSubmit}>
				<input
					required
					type="email"
					name="email"
					minLength={5}
					id="email-input"
					placeholder="Email"
					value={formValue.email}
					onChange={handleChange}
					className="entry__input"
				/>
				<input
					required
					minLength={6}
					type="password"
					name="password"
					id="password-input"
					placeholder="Пароль"
					value={formValue.password}
					onChange={handleChange}
					className="entry__input"
				/>
				<button className="entry__submit" type="submit"> {textOfButton} </button>
			</form>
			{children}
		</div>
	);
};