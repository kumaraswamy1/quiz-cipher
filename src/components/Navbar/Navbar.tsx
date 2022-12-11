import { NavLink } from "react-router-dom";

import { default as logo } from "../../logo.svg";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { useLogin } from "../../context/AuthProvider";

export const Navbar = () => {
	const {
		authState: { token },
	} = useLogin();
	return (
		<div className=" border-b-2  border-yellow-500 flex z-10 sticky top-0 text-white p-3 px-10 align-middle items-center bg-black  flex-row justify-between mx-auto">
			<NavLink to={"/"}>
				<img src={logo} alt=" Logo" />
			</NavLink>
			<div className="flex ">
				<NavLink className="flex  " to={token ? "/leaderboard" : "/login"}>
					<h1 className="mx-2 text-lg">Leaderboard</h1>
				</NavLink>
				<NavLink className="flex  " to={token ? "/scores" : "/login"}>
					<h1 className="mx-2 text-lg">Scoreboard</h1>
				</NavLink>
				<NavLink className="flex  " to={token ? "/scores" : "/login"}>
					{token ? (
						<button className="mx-2">
							<AiOutlineUser size={28} />
						</button>
					) : (
						<button className="mx-2">
							<AiOutlineLogin size={28} />
						</button>
					)}
				</NavLink>
			</div>
		</div>
	);
};
