import axios from "axios";


import { ACTIONTYPE, quizScore,  } from "../../../Reducers/Data.reducer.types";

type quizDataProps = {
    category: string;
    points: number;
     quizDispatch: (args: ACTIONTYPE) => void;

};
type getQuizDataProps = {
    
    quizDispatch: (args: ACTIONTYPE) => void;

};



export async function getScore({quizDispatch}:getQuizDataProps) {
		const { data } = await axios.get<quizScore>(
			"https://quiz-cipher.kumaraswamya.repl.co/quizScores",
		);
    if (data) {
        console.log(data)
        quizDispatch({ type: "SET_SCORE", payload: data.scores})
    }
	
	}


export async function postScore({category,points,quizDispatch}:quizDataProps) {
		const { data } = await axios.post<quizScore>(
			"https://quiz-cipher.kumaraswamya.repl.co/quizScores",
			{ quizId: category ,score:points }

		);
    if (data) {
        console.log(data)
         quizDispatch({ type: "CLEAR_SCORE"})
       
    }
	
	}