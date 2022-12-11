import { useData } from "../context/DataProvider";

export const Score = () => {
	const {
		quizState: { scores },
	} = useData();

	return (
		<>
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">Scoreboard</h1>
			<table className="bg-gray-100 text-black table-auto border-separate w-3/4 shadow-none items-center mx-auto m-10">
				<thead>
					<tr>
						<th className="bg-gray-700 text-white p-2">QuizName</th>
						<th className="bg-gray-700 text-white p-2">Score</th>
					</tr>
				</thead>

				<tbody>
					{scores.map((item) => (
						<tr className=" text-gray-900 odd:bg-slate-200 even:bg-slate-300">
							<td className="p-2">{item.quizName.quizName}</td>
							<td className="p-2">{item.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
