import { useState } from "react";
import { useTimer } from "react-timer-hook";
import { useData } from "../../context/DataProvider";
import { createTimer } from "../../utils/timer";
import { RiTimer2Line } from "react-icons/ri";
import { postScore } from "../../services/API/scores/scores";
import { Score } from "../../Pages/Score";

export const Question = () => {
	const [questionNo, setQuestionNo] = useState(0);
	const [clicked, setClicked] = useState(false);

	const {
		quizState: { quizes, points, category },
		quizDispatch,
	} = useData();

	const question = quizes.map((item) => item);
	const totalQuestions = question.length;
	const questionIndex = question[questionNo];

	const { seconds, minutes, restart, pause } = useTimer({
		expiryTimestamp: createTimer(),
		onExpire: () => answerHandler(false),
	});

	const questionHandler = async () => {
		setClicked(false);
		restart(createTimer());
		if (questionNo < question.length) {
			return setQuestionNo(questionNo + 1);
		}
		return questionNo;
	};

	const answerHandler = (isCorrect: boolean) => {
		if (isCorrect) {
			quizDispatch({ type: "INCREMENT", payload: question[questionNo].points });
		} else {
			quizDispatch({
				type: "DECREMENT",
				payload: question[questionNo].negativePoints,
			});
		}
		setClicked(true);
		pause();
	};
	const submitHandler = async () => {
		await postScore({ category, points, quizDispatch });
	};
	return (
		<>
			{" "}
			{questionNo + 1 > totalQuestions && <Score />}
			<div className="flex  flex-col p-6">
				{questionNo + 1 <= totalQuestions && (
					<div className="flex  justify-between p-6">
						<div className="  flex lg:text-6xl text-3xl">
							<RiTimer2Line />
							<span className="pl-4">{minutes}</span>:<span>{seconds}</span>
						</div>
						<div className="  flex lg:text-6xl text-3xl">score : {points}</div>
						<div>
							{questionNo + 1} out of {question.length}
						</div>
					</div>
				)}

				<div className="flex flex-col justify-center mx-auto">
					{" "}
					<h1>{questionIndex?.question}</h1>
					{questionIndex?.options.map(({ value, isCorrect }) => {
						return (
							<button
								disabled={clicked}
								className={
									clicked
										? isCorrect
											? "bg-slate-800 text-white p-5 m-2 rounded-full  border-green-600 border active:bg-slate-500"
											: "bg-slate-800 text-white p-5 m-2 rounded-full  border-red-600 border active:bg-slate-500"
										: "bg-slate-800 text-white p-5 m-2 rounded-full  border-white border active:bg-slate-500 "
								}
								onClick={() => answerHandler(isCorrect)}
							>
								{value}
							</button>
						);
					})}{" "}
					<button
						className=" text-white p-5 m-2 rounded- bg-blue-600 border"
						onClick={() =>
							questionNo < totalQuestions ? questionHandler() : submitHandler()
						}
					>
						{questionNo < totalQuestions ? "next" : "submit quiz"}
					</button>
				</div>
			</div>
		</>
	);
};
