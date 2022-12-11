import { useData } from "../context/DataProvider";

export const Leaderboard = () => {
	const {
		quizState: { leaderboard },
	} = useData();

	return (
		<>
			{" "}
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">Leaderboard</h1>
			{console.log({ leaderboard })}
			{leaderboard.map((item) => (
				<>
					<table className="bg-gray-100 text-black table-auto border-separate w-3/4 shadow-none items-center mx-auto m-10">
						<thead>
							<tr>
								<th className="bg-gray-700 text-white p-2">
									{item.quizId.quizName}
								</th>
								<th className="bg-gray-700 text-white p-2">Score</th>
							</tr>
						</thead>
						<tbody className="m-2">
							<tr className=" text-gray-900 odd:bg-slate-200 even:bg-slate-300">
								{item.topScores.map((item) => (
									<>
										<td className=" p-2">{item.userId.username}</td>
										<td className=" p-2">{item.score}</td>
									</>
								))}
							</tr>
						</tbody>
					</table>
				</>
			))}
		</>
	);
};
