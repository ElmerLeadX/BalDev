import { useContext, useState } from "react";
import { QuizContext } from "./lib/quizContext";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Progressbar from "./components/Progressbar/Progressbar";
import Question from "./components/Question/Question";
import {
	Questions as questionsfr,
	QuestionsEN as questionsen,
	OptionsEN,
	OptionsFR
} from "./lib/data";
import { useEffect } from "react";
const TOTAL_PAGES = 6;
const Quiz = () => {
	const data = useContext(QuizContext);
	const [page, setPage] = useState(1);
	const [showNextPage, setShowNextPage] = useState(false);
	const [active, setActive] = useState("");
	const [lang, setLang] = useState("fr");

	useEffect(() => {
		if (data.lang === "en") {
			history.pushState(null, null, "?lang=en");
			setLang("en");
		} else {
			history.pushState(null, null, "?lang=fr");
			setLang("fr");
		}
	}, [data.lang, setLang]);

	useEffect(() => {
		if (data.answers[page - 1]) {
			setShowNextPage(true);
		}
	}, [page, showNextPage, data.answers]);

	useEffect(() => {
		data.answers[page - 1]
			? setActive(data.answers[page - 1])
			: setActive(data.answers[page - 1]);
	}, [page, setActive, data.answers]);
	const nextPage = () => {
		setPage(page + 1);
		setShowNextPage(false);
	};
	const prevPage = () => {
		setPage(page - 1);
	};
	return (
		<QuizContext.Provider value={data}>
			<Navbar lang={lang} flag={false} />
			<article>
				<Pagination currentPage={page + 1} totalPages={TOTAL_PAGES + 1} />
				<Progressbar progress={(100 / (TOTAL_PAGES + 1)) * (page + 1)} />
				{lang === "fr" ? (
					<Question
						key={page}
						active={active}
						setActive={setActive}
						showNextPage={showNextPage}
						setShowNextPage={setShowNextPage}
						totalPages={TOTAL_PAGES}
						nextPage={nextPage}
						prevPage={prevPage}
						page={page}
						question={questionsfr[0].question}
						option1={questionsfr[page - 1].option1}
						option2={questionsfr[page - 1].option2}
						optionText={OptionsFR[page - 1][0]}
						optionText2={OptionsFR[page - 1][1]}
						hide2="true"
						lang={lang}
					/>
				) : (
					<Question
						key={page}
						active={active}
						setActive={setActive}
						showNextPage={showNextPage}
						setShowNextPage={setShowNextPage}
						totalPages={TOTAL_PAGES}
						nextPage={nextPage}
						prevPage={prevPage}
						page={page}
						question={questionsen}
						option1={questionsfr[page - 1].option1}
						option2={questionsfr[page - 1].option2}
						optionText={OptionsEN[page - 1][0]}
						optionText2={OptionsEN[page - 1][1]}
						hide2="true"
						lang={lang}
					/>
				)}
			</article>
		</QuizContext.Provider>
	);
};

export default Quiz;
