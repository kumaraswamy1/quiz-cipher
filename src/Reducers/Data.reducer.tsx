import { ACTIONTYPE, IntialState } from "./Data.reducer.types";

export function dataReducer(state: IntialState, action: ACTIONTYPE) {
	switch (action.type) {
		case "SET_QUIZ":
			return { ...state, quizes: action.payload };
		case "SET_SCORE":
			return { ...state, scores: action.payload };
		case "INCREMENT":
			return { ...state, points: state.points + action.payload };
		case "DECREMENT":
			return { ...state, points: state.points - action.payload };
		case "SET_CATEGORY":
			return { ...state, category: action.payload };
		case "SET_LEADERBOARD":
			return { ...state, leaderboard: action.payload };
		case "CLEAR_SCORE":
			return { ...state, points: 0 };
		default:
			return state;
	}
}
