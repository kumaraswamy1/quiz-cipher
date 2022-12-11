import axios from "axios";

import { ACTIONTYPE } from "../../../Reducers/Data.reducer.types";

type quizDataProps = {
	quizDispatch: (args: ACTIONTYPE) => void;
};

export async function getLeaderboard({ quizDispatch }: quizDataProps) {
	const { data } = await axios.get(
		"https://quiz-cipher.kumaraswamya.repl.co/leaderboard"
	);
	if (data) {
		console.log(data);
		quizDispatch({ type: "SET_LEADERBOARD", payload: data.leaderboard });
	}
}
