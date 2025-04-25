/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { QuizContext } from '../../lib/quizContext';
import Arrow from '../Arrow/Arrow';
import './Form.css';

const Form = ({ sent, setSent, lang }) => {
  const data = useContext(QuizContext);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleChage = (event) => {
    const { name, value } = event.target;
    if(name === "name") setName(value)
    if(name === "lastname") setLastname(value)
    if(name === "email") setEmail(value)
    setErrors({});
  }

  const validateForm = () => {
    let isValid = true;
    const validationErrors = {};
    //gender validation
    /*if (!gender) {
      isValid = false;
      validationErrors.gender = lang === "fr" ? 'Veuillez choisir votre genre.' : 'Please choose your gender.';
    }*/
    // Name validation
    if (!name.trim()) {
      isValid = false;
      validationErrors.name = lang === "fr" ? 'Prénom est requis.': 'Name is required.';
    }
    // Last name validation
    if (!lastname.trim()) {
      isValid = false;
      validationErrors.lastname = lang === "fr" ? 'Nom de famille est requis.' : 'Last name is required.';
    }
    // Email validation
    /* const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/; */
    const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
    if (!emailRegex.test(email)) {
      isValid = false;
      validationErrors.email = lang === "fr" ? 'Adresse courriel invalide.' : 'Invalid email address.';
    }
		if(!document.getElementById('terms').checked){
			isValid = false;
			validationErrors.terms = lang === "fr" ? 'Veuillez accepter les termes et conditions.' : 'Please accept the terms and conditions.';
		}
    setErrors(validationErrors); // Update errors state
    return isValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let submitted = false;
    if (validateForm()) {
      submitted = true;
    }
    else{
      return
    }
    if(submitted){
      const result = new FormData(event.target);
      const name = result.get('name');
      const lastname = result.get('lastname');
      const email = result.get('email');
			const terms = result.get('terms');
      data.name=name;
      data.lastname=lastname;
      data.email=email;
			data.terms=terms;
      setSent(!sent);
    }
    else{
      return
    }
  };
  return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<input
					type="text"
					id="name"
					name="name"
					placeholder={lang === "fr" ? "Prénom" : "Name"}
					value={name}
					onChange={(e) => handleChage(e)}
					className={errors.name ? "error-input" : ""}
					autoComplete="on"
					suppressHydrationWarning={true}
				/>
				{errors.name && <span className="error-message">{errors.name}</span>}
			</div>
			<div className="form-group">
				<input
					type="text"
					id="lastname"
					name="lastname"
					placeholder={lang === "fr" ? "Nom de famille" : "Last name"}
					value={lastname}
					onChange={(e) => handleChage(e)}
					className={errors.lastname ? "error-input" : ""}
					autoComplete="on"
					suppressHydrationWarning={true}
				/>
				{errors.lastname && (
					<span className="error-message">{errors.lastname}</span>
				)}
			</div>
			<div className="form-group">
				<input
					type="text"
					id="email"
					name="email"
					placeholder={lang === "fr" ? "Courriel" : "Email"}
					value={email}
					onChange={(e) => handleChage(e)}
					className={errors.email ? "error-input" : ""}
					autoComplete="on"
					suppressHydrationWarning={true}
				/>
				{errors.email && <span className="error-message">{errors.email}</span>}
			</div>
			<div className="form-group">
				<label htmlFor="terms" className="subscribe">
					<input type="checkbox" id="terms" name="terms" value="yes" />
					{lang === "fr" ? (
						<span>
							Je comprends la&nbsp;
							<a
								href="https://baralunettes.com/pages/terms-and-conditions"
								target="_blank"
								style={{ textDecoration: "underline" }}
							>
								politique de confidentialité
							</a>
							, et j&apos;accepte de recevoir des communications du Bar à Lunettes
						</span>
					) : (
						<span>
							I have read and understood the&nbsp;
							<a
								href="https://baralunettes.com/en/pages/terms-and-conditions"
								target="_blank"
								style={{ textDecoration: "underline" }}
							>
								privacy policy
							</a>
							&nbsp;and agree to receive email communications from Bar à Lunettes.
						</span>
					)}
				</label>
				{errors.terms && <span className="error-message">{errors.terms}</span>}
			</div>
			<button type="submit" value="submit">
				{lang === "fr" ? "Obtenir mes résultats" : "Get my results"}{" "}
				<Arrow color="#ffffff" />
			</button>
		</form>
	);
};

export default Form;