import { ResultsFR } from "./data"
//oeil de chat and papillon removed from male options.
export async function CreateResults(data) {
  const Result = [...ResultsFR];
  //First Result - Petit rond
  Result[0].score += data.answers[0] === "Enjoué" ? 1 : 0;
  Result[0].score += data.answers[1] === "Décontracté" ? 1 : 0;
  Result[0].score += data.answers[2] === "Extraverti" ? 0 : 0;
  Result[0].score += data.answers[3] === "Charmant" ? 1 : 0;
  Result[0].score += data.answers[4] === "Intello" ? 1 : 0;
  Result[0].score += data.answers[5] === "Traditionnel" ? 1 : 0;
  //Second result - Grand rond
  Result[1].score += data.answers[0] === "Enjoué" ? 1 : 0;
  Result[1].score += data.answers[1] === "Sophistiqué" ? 1 : 0;
  Result[1].score += data.answers[2] === "Extraverti" ? 1 : 0;
  Result[1].score += data.answers[3] === "Charmant" ? 1 : 0;
  Result[1].score += data.answers[4] === "Intello" ? 1 : 0;
  Result[1].score += data.answers[5] === "Avant-gardiste" ? 0 : 0;
  //Third result - Hexagone
  Result[2].score += data.answers[0] === "Enjoué" ? 1 : 0;
  Result[2].score += data.answers[1] === "Sophistiqué" ? 1 : 0;
  Result[2].score += data.answers[2] === "Extraverti" ? 1 : 0;
  Result[2].score += data.answers[3] === "Charmant" ? 0 : 0;
  Result[2].score += data.answers[4] === "Intello" ? 0 : 0;
  Result[2].score += data.answers[5] === "Avant-gardiste" ? 1 : 0;
  //Fourth result - Pantos
  Result[3].score += data.answers[0] === "Enjoué" ? 1 : 0;
  Result[3].score += data.answers[1] === "Décontracté" ? 1 : 0;
  Result[3].score += data.answers[2] === "Discret" ? 1 : 0;
  Result[3].score += data.answers[3] === "Charmant" ? 1 : 0;
  Result[3].score += data.answers[4] === "Intello" ? 1 : 0;
  Result[3].score += data.answers[5] === "Traditionnel" ? 1 : 0;
  //Fifth result - Rectangle
  if(data.gender !== "male"){
  Result[4].score += data.answers[0] === "Sérieux" ? 1 : 0;
  Result[4].score += data.answers[1] === "Sophistiqué" ? 1 : 0;
  Result[4].score += data.answers[2] === "Extraverti" ? 0 : 0;
  Result[4].score += data.answers[3] === "Rebelle" ? 1 : 0;
  Result[4].score += data.answers[4] === "Sportif" ? 0 : 0;
  Result[4].score += data.answers[5] === "Traditionnel" ? 0 : 0;
  }
  //Sixth result - Oeil de chat
  if(data.gender !== "male"){
  Result[5].score += data.answers[0] === "Sérieux" ? 0 : 0;
  Result[5].score += data.answers[1] === "Sophistiqué" ? 1 : 0;
  Result[5].score += data.answers[2] === "Extraverti" ? 1 : 0;
  Result[5].score += data.answers[3] === "Rebelle" ? 0 : 0;
  Result[5].score += data.answers[4] === "Intello" ? 1 : 0;
  Result[5].score += data.answers[5] === "Avant-gardiste" ? 1 : 0;
  }
  //Seventh result - Papillon
  Result[6].score += data.answers[0] === "Enjoué" ? 0 : 0;
  Result[6].score += data.answers[1] === "Sophistiqué" ? 1 : 0;
  Result[6].score += data.answers[2] === "Extraverti" ? 1 : 0;
  Result[6].score += data.answers[3] === "Charmant" ? 0 : 0;
  Result[6].score += data.answers[4] === "Sportif" ? 1 : 0;
  Result[6].score += data.answers[5] === "Avant-gardiste" ? 1 : 0;
  //Eighth result - Aviateur
  Result[7].score += data.answers[0] === "Sérieux" ? 1 : 0;
  Result[7].score += data.answers[1] === "Décontracté" ? 1 : 0;
  Result[7].score += data.answers[2] === "Extraverti" ? 1 : 0;
  Result[7].score += data.answers[3] === "Rebelle" ? 1 : 0;
  Result[7].score += data.answers[4] === "Sportif" ? 1 : 0;
  Result[7].score += data.answers[5] === "Traditionnel" ? 1 : 0;
  //Ninth result - Ovale
  Result[8].score += data.answers[0] === "Enjoué" ? 1 : 0;
  Result[8].score += data.answers[1] === "Décontracté" ? 1 : 0;
  Result[8].score += data.answers[2] === "Discret" ? 1 : 0;
  Result[8].score += data.answers[3] === "Charmant" ? 1 : 0;
  Result[8].score += data.answers[4] === "Intello" ? 1 : 0;
  Result[8].score += data.answers[5] === "Traditionnel" ? 1 : 0;
  //Tenth result - Triangle
  Result[9].score += data.answers[0] === "Sérieux" ? 1 : 0;
  Result[9].score += data.answers[1] === "Sophistiqué" ? 1 : 0;
  Result[9].score += data.answers[2] === "Extraverti" ? 1 : 0;
  Result[9].score += data.answers[3] === "Rebelle" ? 1 : 0;
  Result[9].score += data.answers[4] === "Sportif" ? 1 : 0;
  Result[9].score += data.answers[5] === "Avant-gardiste" ? 1 : 0;

  Result.sort((a, b) => b.score - a.score);
  if(data.gender === "male"){
    const matchMale = Result.filter(r => r.score >= 3).map(r => r.name);
    return matchMale
  }
  const match = Result.filter(r => r.score >= 4).map(r => r.name);
  if(match.length === 0 || match.length === 1 || match.length === 2){
    const matchFemale = Result.filter(r => r.score >= 3).map(r => r.name);
    return matchFemale
  }
  else{
    return match
  }
  /* const l = match.length;
  let res = "";
  if(l === 1) {
    return match[0]
  }
  for(let i = 0; i < l; i++) {
    if(i === l - 1) {
      res += 'et ' + match[i];
    }
    else if(i === l - 2) {
      res += match[i] + " ";
    }
    else {
      res += match[i] + ", ";
    }
  }
  return res */
}

export async function CreateResultsEn(data) {
  const Result = [...ResultsFR];
  //First Result - Petit rond
  Result[0].score += data.answers[0] === "Playful" ? 1 : 0;
  Result[0].score += data.answers[1] === "Casual" ? 1 : 0;
  Result[0].score += data.answers[2] === "Extroverted" ? 0 : 0;
  Result[0].score += data.answers[3] === "Charming" ? 1 : 0;
  Result[0].score += data.answers[4] === "Intellectual" ? 1 : 0;
  Result[0].score += data.answers[5] === "Traditional" ? 1 : 0;
  //Second result - Grand rond
  Result[1].score += data.answers[0] === "Playful" ? 1 : 0;
  Result[1].score += data.answers[1] === "Sophisticated" ? 1 : 0;
  Result[1].score += data.answers[2] === "Extroverted" ? 1 : 0;
  Result[1].score += data.answers[3] === "Charming" ? 1 : 0;
  Result[1].score += data.answers[4] === "Intellectual" ? 1 : 0;
  Result[1].score += data.answers[5] === "Avant-garde" ? 0 : 0;
  //Third result - Hexagone
  Result[2].score += data.answers[0] === "Playful" ? 1 : 0;
  Result[2].score += data.answers[1] === "Sophisticated" ? 1 : 0;
  Result[2].score += data.answers[2] === "Extroverted" ? 1 : 0;
  Result[2].score += data.answers[3] === "Charming" ? 0 : 0;
  Result[2].score += data.answers[4] === "Intellectual" ? 0 : 0;
  Result[2].score += data.answers[5] === "Avant-garde" ? 1 : 0;
  //Fourth result - Pantos
  Result[3].score += data.answers[0] === "Playful" ? 1 : 0;
  Result[3].score += data.answers[1] === "Casual" ? 1 : 0;
  Result[3].score += data.answers[2] === "Subtle" ? 1 : 0;
  Result[3].score += data.answers[3] === "Charming" ? 1 : 0;
  Result[3].score += data.answers[4] === "Intellectual" ? 1 : 0;
  Result[3].score += data.answers[5] === "Traditional" ? 1 : 0;
  //Fifth result - Rectangle
  Result[4].score += data.answers[0] === "Serious" ? 1 : 0;
  Result[4].score += data.answers[1] === "Sophisticated" ? 1 : 0;
  Result[4].score += data.answers[2] === "Extroverted" ? 0 : 0;
  Result[4].score += data.answers[3] === "Rebellious" ? 1 : 0;
  Result[4].score += data.answers[4] === "Athletic" ? 0 : 0;
  Result[4].score += data.answers[5] === "Traditional" ? 0 : 0;
  //Sixth result - Oeil de chat
  if(data.gender !== "male"){
  Result[5].score += data.answers[0] === "Serious" ? 0 : 0;
  Result[5].score += data.answers[1] === "Sophisticated" ? 1 : 0;
  Result[5].score += data.answers[2] === "Extroverted" ? 1 : 0;
  Result[5].score += data.answers[3] === "Rebellious" ? 0 : 0;
  Result[5].score += data.answers[4] === "Intellectual" ? 1 : 0;
  Result[5].score += data.answers[5] === "Avant-garde" ? 1 : 0;
  }
  //Seventh result - Papillon
  if(data.gender !== "male"){
  Result[6].score += data.answers[0] === "Playful" ? 0 : 0;
  Result[6].score += data.answers[1] === "Sophisticated" ? 1 : 0;
  Result[6].score += data.answers[2] === "Extroverted" ? 1 : 0;
  Result[6].score += data.answers[3] === "Charming" ? 0 : 0;
  Result[6].score += data.answers[4] === "Athletic" ? 1 : 0;
  Result[6].score += data.answers[5] === "Avant-garde" ? 1 : 0;
}
  //Eighth result - Aviateur
  Result[7].score += data.answers[0] === "Serious" ? 1 : 0;
  Result[7].score += data.answers[1] === "Casual" ? 1 : 0;
  Result[7].score += data.answers[2] === "Extroverted" ? 1 : 0;
  Result[7].score += data.answers[3] === "Rebellious" ? 1 : 0;
  Result[7].score += data.answers[4] === "Athletic" ? 1 : 0;
  Result[7].score += data.answers[5] === "Traditional" ? 1 : 0;
  //Ninth result - Ovale
  Result[8].score += data.answers[0] === "Playful" ? 1 : 0;
  Result[8].score += data.answers[1] === "Casual" ? 1 : 0;
  Result[8].score += data.answers[2] === "Subtle" ? 1 : 0;
  Result[8].score += data.answers[3] === "Charming" ? 1 : 0;
  Result[8].score += data.answers[4] === "Intellectual" ? 1 : 0;
  Result[8].score += data.answers[5] === "Traditional" ? 1 : 0;
  //Tenth result - Triangle
  Result[9].score += data.answers[0] === "Serious" ? 1 : 0;
  Result[9].score += data.answers[1] === "Sophisticated" ? 1 : 0;
  Result[9].score += data.answers[2] === "Extroverted" ? 1 : 0;
  Result[9].score += data.answers[3] === "Rebellious" ? 1 : 0;
  Result[9].score += data.answers[4] === "Athletic" ? 1 : 0;
  Result[9].score += data.answers[5] === "Avant-garde" ? 1 : 0;

  Result.sort((a, b) => b.score - a.score);
  if (data.gender === "male") {
      const matchMale = Result.filter((r) => r.score >= 3).map((r) => r.name);
      return matchMale;
  }
  const match = Result.filter((r) => r.score >= 4).map((r) => r.name);
  if (match.length === 0 || match.length === 1 || match.length === 2) {
		const matchFemale = Result.filter((r) => r.score >= 3).map((r) => r.name);
		return matchFemale;
	} else {
		return match;
	}
  /* const l = match.length;
  let res = "";
  if(l === 1) {
    return match[0]
  }
  for(let i = 0; i < l; i++) {
    if(i === l - 1) {
      res += 'et ' + match[i];
    }
    else if(i === l - 2) {
      res += match[i] + " ";
    }
    else {
      res += match[i] + ", ";
    }
  }
  return res */
}

export function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.split("-")[0];
  if(lang === "fr") {
    return "fr";
  }
  else if(lang === "en") {
    return "en";
  }
  else{
    return "fr";
  }
}

export function getURLLang () {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if(lang === "fr") {
    return "fr";
  }
  else if(lang === "en") {
    return "en";
  }
  else{
    return null;
  }
}

export function getURLEmail () {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');
  return email;
}