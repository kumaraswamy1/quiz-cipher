import { useState } from "react";
import { useData } from "../../context/DataProvider";
import { quizes } from "../../Reducers/Data.reducer.types";

import { getQuizData } from "../../services/API/quizes/quizes";

import { Modal } from "../Modal/Modal";
export type categoryValue = Array<{
	category: string;
}>;
type findCategory = { _id: string; questions: Array<quizes> };

export type quizData = { quizData: findCategory };

export function Categories() {
	const { quizDispatch } = useData();

	const categories: categoryValue = [
		{ category: "Blockchain" },
		{ category: "Bitcoin" },
		{ category: "Cryptography" },
	];
	const [showModal, setShowModal] = useState(false);

	const quizStartHandler = (category: string) => {
		getQuizData({ category, quizDispatch });
		setShowModal(true);
	};

	return (
		<>
			<div className="flex flex-row flex-wrap justify-center ">
				{categories.map(({ category }) => {
					return (
						<button
							onClick={() => quizStartHandler(category)}
							className="text-white  p-4 m-2 border border-white focus:ring-4 flex justify-centerfocus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-700 focus:ring-blue-800 md:txt-xl"
						>
							{category}
						</button>
					);
				})}
			</div>
			{showModal && <Modal setShowModal={setShowModal} />}
		</>
	);
}
