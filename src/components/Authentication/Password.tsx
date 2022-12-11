import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ACTIONTYPE } from "../../Reducers/Auth-reducer";

type PasswordProps = {
	password: string;
	userDispatch: (args: ACTIONTYPE) => void;
};

export const Password = ({ password, userDispatch }: PasswordProps) => {
	const [viewPassword, setViewPassword] = useState(true);

	return (
		<>
			<label htmlFor="password" className="input-label sr-only">
				Password
			</label>
			<div className="flex relative ">
				<input
					className="relative block w-full appearance-none rounded-none rounded-b-md border-y-1 border-gray-600  px-3 py-2 text-white placeholder-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-700"
					type={viewPassword ? "text" : "password"}
					name="password"
					id="password"
					placeholder="password"
					value={password}
					onChange={(e) => {
						userDispatch({ type: "SET_PASSWORD", payload: e.target.value });
					}}
				/>
				<button
					className="text-gray-300  absolute right-4 bottom-2"
					type="button"
					onClick={() => setViewPassword(!viewPassword)}
				>
					{viewPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
				</button>
			</div>
		</>
	);
};
