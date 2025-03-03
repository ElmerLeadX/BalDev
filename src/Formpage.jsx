import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from './lib/quizContext'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeadingQuiz from "./components/HeadingQuiz/HeadingQuiz";
import Form from "./components/Form/Form";
import formbanner from "./assets/form-banner.jpg";
import { useEffect } from 'react';
import {
	CreateProfiles,
	AddtoList,
	getProfiles,
	removeFromList,
	UpdateProfile,
	subscribe,
} from "./lib/klaviyo";
import { CreateResults, CreateResultsEn } from "./lib/actions";
import './Formpage.css'

const Formpage = () => {
  const navigate = useNavigate()
  const data = useContext(QuizContext);
	const [lang, setLang] = useState("fr");
	const [sent, setSent] = useState(false);

  useEffect(() => {
    if (data.lang === "en") {
			history.pushState(null, null, "?lang=en");
			setLang("en");
		} else {
			history.pushState(null, null, "?lang=fr");
			setLang("fr");
		}
		if(!sent){
			if (data.email !== "") {
				//store on klaviyo and redirect to results
				navigate("/results");
			}
		}
  },[sent, data.lang,data.email, navigate])

	useEffect(() => {
		const sentResult = async () => {
			if (data.answers.length >= 6) {
				const response = await getProfiles(data);
				const exists = await response;
				if (exists.data.length > 0) {
					if (deleteFromList(exists.data[0].id)) {
						let results = [];
						if (lang === "fr") {
							results = await CreateResults(data);
						} else {
							results = await CreateResultsEn(data);
						}
						data.results = await results;
						const profile = await UpdateProfile(exists.data[0].id, data);
						const wasUpdated = await profile;
						if (wasUpdated.data) {
							if (lang === "fr") {
								const Added = await AddtoList(exists.data[0].id, "X4e7xU");
								const wasAdded = await Added;
								if (wasAdded) {
									const addedSubList = await AddtoList(
										exists.data[0].id,
										"QUXpum"
									);
									const wasAddedSubList = await addedSubList;
									if (data.terms === "yes") {
										if (wasAddedSubList) {
											const addedSub = await subscribe(
												data,
												exists.data[0].id,
												"QUXpum"
											);
											const wasAddedSub = await addedSub;
											if (wasAddedSub) {
												navigate("/results");
											}
										}
									} else {
										navigate("/results");
									}
								}
							} else {
								const Added2 = await AddtoList(exists.data[0].id, "Tf35Ap");
								const wasAdded2 = await Added2;
								if (wasAdded2) {
									const addedSubList = await AddtoList(
										exists.data[0].id,
										"VrkekZ"
									);
									const wasAddedSubList = await addedSubList;
									if (data.terms === "yes") {
										if (wasAddedSubList) {
											const addedSub = await subscribe(
												data,
												exists.data[0].id,
												"VrkekZ"
											);
											const wasAddedSub = await addedSub;
											if (wasAddedSub) {
												navigate("/results");
											}
										}
									} else {
										navigate("/results");
									}
								}
							}
						} else {
							console.log("There was an error trying to delete the profile");
						}
					} else {
						console.log("There was an error trying to delete the profile");
					}
				} else {
					let results = [];
					if (lang === "fr") {
						results = await CreateResults(data);
					} else {
						results = await CreateResultsEn(data);
					}
					data.results = await results;
					const Profiles = await CreateProfiles(data);
					const wasCreated = await Profiles;
					if (wasCreated) {
						if (lang === "fr") {
							const Added = await AddtoList(wasCreated.id, "X4e7xU");
							const wasAdded = await Added;
							if (wasAdded) {
								const addedSubList = await AddtoList(
									exists.data[0].id,
									"QUXpum"
								);
								const wasAddedSubList = await addedSubList;
								if (data.terms === "yes") {
									if (wasAddedSubList) {
										const addedSub = await subscribe(
											data,
											wasCreated.id,
											"QUXpum"
										);
										const wasAddedSub = await addedSub;
										if (wasAddedSub) {
											navigate("/results");
										}
									}
								} else {
									navigate("/results");
								}
							} else {
								console.log("There was an error trying to send the profile");
							}
						} else {
							const Added2 = await AddtoList(wasCreated.id, "Tf35Ap");
							const wasAdded2 = await Added2;
							if (wasAdded2) {
								const addedSubList = await AddtoList(
									exists.data[0].id,
									"VrkekZ"
								);
								const wasAddedSubList = await addedSubList;
								if (data.terms === "yes") {
									if (wasAddedSubList) {
										const addedSub = await subscribe(
											data,
											wasCreated.id,
											"VrkekZ"
										);
										const wasAddedSub = await addedSub;
										if (wasAddedSub) {
											navigate("/results");
										}
									}
								} else {
									navigate("/results");
								}
							} else {
								console.log("There was an error trying to send the profile");
							}
						}
					} else {
						console.log("There was an error trying to create the profile");
					}
				}
			} else {
				console.log("Results are missing");
			}
		};
		if(sent){
			sentResult();
		}
	},[sent, data, lang, navigate]);

	const deleteFromList = async (id) => {
		const Deleted = await removeFromList(id, "X4e7xU");
		const Deleted2 = await removeFromList(id, "Tf35Ap");
		const Deleted3 = await removeFromList(id, "QUXpum");
		const Deleted4 = await removeFromList(id, "VrkekZ");
		const wasDeleted = await Deleted;
		const wasDeleted2 = await Deleted2;
		const wasDeleted3 = await Deleted3;
		const wasDeleted4 = await Deleted4;
		if (wasDeleted || wasDeleted2 || wasDeleted3 || wasDeleted4) {
			return true;
		}
		return false;
	};

  return (
		<QuizContext.Provider value={data}>
			<Navbar lang={lang} flag={false} />
			<section className="form-container">
				<div>
					<img src={formbanner} />
				</div>
				<div className="form-content">
					{lang === "en" ? (
						<>
							<p className="form-subtitle">Thank you!</p>
							<HeadingQuiz title="Sign up to receive your results by email" />
						</>
					) : (
						<>
							<p className="form-subtitle">Merci!</p>
							<HeadingQuiz title="Inscrivez-vous pour recevoir vos résultats par courriel" />
						</>
					)}
					<Form sent={sent} setSent={setSent} lang={lang} />
				</div>
			</section>
			<Footer copy="© 2025, BAR À LUNETTES MARIE-SOPHIE DION" />
		</QuizContext.Provider>
	);
}
export default Formpage