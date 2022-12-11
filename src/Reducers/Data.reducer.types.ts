export const intialState: IntialState = {
	quizes: [],
	scores: [],
	category: "",
	points: 0,
	leaderboard: [],
};

export type quizScores = {
	quizName: quizName;
	score: number;
	_id: string;
};

export type quizName = {
	quizName: string;
	_id: string;
};

export type quizScore = {
	scores: Array<quizScores>;
};

export type IntialState = {
	quizes: Array<quizes>;
	scores: Array<quizScores>;
	category: string;
	points: number;
	leaderboard: Array<leaderboard>;
};

export type leaderboard = {
	quizId: quizName;
	topScores: Array<topScores>;
};
export type topScores = {
	userId: userId;
	score: number;
};
export type userId = {
	username: string;
	_id: string;
};
export type quizes = {
	question: string;
	options: Array<OptionsArray>;
	points: number;
	negativePoints: number;
};

export type OptionsArray = {
	value: string;
	isCorrect: boolean;
};

export type ACTIONTYPE =
	| {
			type: "SET_QUIZ";
			payload: Array<quizes>;
	  }
	| {
			type: "SET_SCORE";
			payload: Array<quizScores>;
	  }
	| {
			type: "INCREMENT";
			payload: number;
	  }
	| {
			type: "DECREMENT";
			payload: number;
	  }
	| {
			type: "SET_CATEGORY";
			payload: string;
	  }
	| {
			type: "SET_LEADERBOARD";
			payload: Array<leaderboard>;
	  }
	| {
			type: "CLEAR_SCORE";
	  };
