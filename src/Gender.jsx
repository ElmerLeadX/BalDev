import { useContext, useState } from "react";
import { QuizContext } from "./lib/quizContext";
import Pagination from "./components/Pagination/Pagination";
import Progressbar from "./components/Progressbar/Progressbar";
import Genderoption from "./components/Genderoption/Genderoption";
import { useEffect } from "react";
const TOTAL_PAGES = 7;
const Gender = () => {
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
			<article>
				<Pagination currentPage={page} totalPages={TOTAL_PAGES} />
				<Progressbar progress={(100 / TOTAL_PAGES) * page} />
				{lang === "fr" ? (
					<Genderoption
						key={page}
						active={active}
						setActive={setActive}
						showNextPage={showNextPage}
						setShowNextPage={setShowNextPage}
						totalPages={TOTAL_PAGES}
						nextPage={nextPage}
						prevPage={prevPage}
						page={page}
						question="Que cherchez-vous?"
						hide2="true"
						lang={lang}
					/>
				) : (
					<Genderoption
						key={page}
						active={active}
						setActive={setActive}
						showNextPage={showNextPage}
						setShowNextPage={setShowNextPage}
						totalPages={TOTAL_PAGES}
						nextPage={nextPage}
						prevPage={prevPage}
						page={page}
						question="What are you looking for?"
						hide2="true"
						lang={lang}
					/>
				)}
			</article>
		</QuizContext.Provider>
	);
};

export default Gender;
