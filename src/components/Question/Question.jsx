/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { QuizContext } from '../../lib/quizContext';
import { useNavigate } from 'react-router-dom';
import {answers} from "../../lib/translate";
import './Question.css';
import Cup from '../Cup/Cup';
import Arrow from '../Arrow/Arrow';import {
	AddtoList,
	getProfiles,
	removeFromList,
	UpdateProfile,
	subscribe,
} from "../../lib/klaviyo";
import { CreateResults, CreateResultsEn } from "../../lib/actions";

const Question = ({question, option1, option2, prevPage, nextPage, /* hide2 = false, */ page, totalPages, showNextPage, setShowNextPage, active, setActive, className, lang}) => {
	const navigate = useNavigate();
  const data = useContext(QuizContext);
  /* const visible2 = hide2 === "true" ? "hide" : ""; */

  const handleClick = (ev,option) => {
    data.answers[page - 1] = option;
    if(lang === "en")
    data.answersfr[page - 1] = answers.find((answer) => answer[option] )[option];
    setShowNextPage(true);
    setActive(option);
  }
  const resultPage = async () => {
    if(data.email.length == 0){
      navigate('/form');
    }
    else{
      sentResults();
    }
  }

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
  
    const sentResults = async () => {
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
                  const addedSubList = await AddtoList(exists.data[0].id, "QUXpum");
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
                  const addedSubList = await AddtoList(exists.data[0].id, "VrkekZ");
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
          console.log("The profile does not exist");
        }
      }
    }
  return (
    <section key={page} className={`question ${className}`}>
      <article className="question-card">
        <Cup color="#000000"/>
        <h2>{question}</h2>
        <div className="options roll-out">
          <button className={active===option1 ? "active": ""} onClick={(ev) => handleClick(ev,option1)}>{option1}</button>
          OU
          <button className={active===option2 ? "active": ""} onClick={(ev) => handleClick(ev,option2)}>{option2}</button>
        </div>
        <div className="nav-quiz">
          <button onClick={()=>prevPage()} className={page > 1 ? "prev" : "prev hide"}><Arrow flip="true" color="#000000"/> {lang === "fr" ? "Retour" : "Back"}</button>
          {
            page >= totalPages ? 
            <button disabled={!showNextPage} onClick={()=>resultPage()} className="next">{lang === "fr" ? "Résultats" : "Results"} <Arrow flip="false" color={!showNextPage ? "#adadad" : "#000000"}/></button> : 
            <button disabled={!showNextPage} onClick={()=>nextPage()} className="next">{lang === "fr" ? "Suivant" : "Next"} <Arrow flip="false" color={!showNextPage ? "#adadad" : "#000000"}/></button>
          }
        </div>
      </article>
    </section>
  );
};

export default Question;