import { ACTIONTYPE } from "../../Reducers/Auth-reducer";

type usernameProps = {
	username: string;
	userDispatch: (args: ACTIONTYPE) => void;
};

export const Username = ({ username, userDispatch }: usernameProps) => {
	return (
		<>
			<label htmlFor="username" className="input-label sr-only">
				Username
			</label>{" "}
			<input
				id="username"
				name="username"
				type="text"
				autoComplete="username"
				required
				className="relative  border-t-1 border-gray-600 block w-full appearance-none mt-4 rounded-t-md  text-white  bg-gray-700  px-3 py-2  placeholder-white focus:z-10 focus:-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
				value={username}
				placeholder="username"
				onChange={(e) =>
					userDispatch({ type: "SET_USERNAME", payload: e.target.value })
				}
			/>
		</>
	);
};
