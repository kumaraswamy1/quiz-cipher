import axios from "axios";

import { quizData } from "../../../components/Categories/Categories";
import { ACTIONTYPE } from "../../../Reducers/Data.reducer.types";


type quizDataProps = {
	category: string;
    quizDispatch: (args: ACTIONTYPE) => void;

};



export async function getQuizData({category,quizDispatch}:quizDataProps) {
		const { data } = await axios.post<quizData>(
			"https://quiz-cipher.kumaraswamya.repl.co/quizes",
			{ quizCategory: category }
		);
    if (data) {
		quizDispatch({ type: "SET_QUIZ", payload: data.quizData.questions })
		  quizDispatch({ type: "SET_CATEGORY", payload: data.quizData._id })
    }
	
	}