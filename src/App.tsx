import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { Home } from "./components/Home/Home";
import { Question } from "./components/Questions/questions";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { Score } from "./Pages/Score";
import { useEffect } from "react";
import { getScore } from "./services/API/scores/scores";
import { useData } from "./context/DataProvider";
import { useLogin } from "./context/AuthProvider";
import { getLeaderboard } from "./services/API/leaderboard/leaderboard";
import { Leaderboard } from "./Pages/leaderboard";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";

function App() {
	const {
		authState: { token },
	} = useLogin();
	const { quizDispatch } = useData();
	useEffect(() => {
		getScore({ quizDispatch });
		getLeaderboard({ quizDispatch });
	}, [token, quizDispatch]);
	return (
		<div className="dark font-sans bg-gray-900 text-white min-h-screen pb-7">
			<Navbar />
			<Toaster position="bottom-right" reverseOrder={false} />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/quiz"
					element={<PrivateRoute>{<Question />}</PrivateRoute>}
				/>
				<Route
					path="/scores"
					element={<PrivateRoute>{<Score />}</PrivateRoute>}
				/>
				<Route path="/leaderboard" element={<Leaderboard />} />

				<Route
					path="/leaderboard"
					element={<PrivateRoute>{<Leaderboard />}</PrivateRoute>}
				/>
			</Routes>
		</div>
	);
}
export default App;
