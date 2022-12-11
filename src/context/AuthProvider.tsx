import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../services/API/api.instance";
import {
	setupAuthExceptionHandler,
	setupAuthHeaderForServiceCalls,
} from "../services/API/api.setupHandlers";

import {
	IntialState,
	loginReducer,
	ACTIONTYPE,
} from "../Reducers/Auth-reducer";
import axios from "axios";

type AuthContextValue = {
	authState: IntialState;
	authDispatch: (args: ACTIONTYPE) => void;
	loginWithCredentials: (username: string, password: string) => void;
	logoutHandler: () => void;
	SignupUser: (
		name: string,
		username: string,
		email: string,
		password: string
	) => void;
};

export const AuthContext = createContext<AuthContextValue>(
	{} as AuthContextValue
);

export const useLogin = () => useContext(AuthContext);

export function AuthProvider(props: React.PropsWithChildren<{}>) {
	const { children } = props;
	const navigate = useNavigate();
	const intialUserArgs: IntialState = {
		username: "",
		password: "",
		name: "",
		email: "",
		token: JSON.parse(localStorage.getItem("login")!) || false,
	};

	const [authState, authDispatch] = useReducer(loginReducer, intialUserArgs);

	if (authState.token) {
		setupAuthHeaderForServiceCalls(authState.token);
	}

	const loginWithCredentials = async (username: string, password: string) => {
		try {
			const { data } = await axios.post(`${baseURL}/user/login`, {
				username,
				password,
			});
			authDispatch({ type: "SET_TOKEN", payload: data.token });
			localStorage?.setItem("login", JSON.stringify(data.token));

			navigate("/");
			setupAuthExceptionHandler({ logoutHandler, navigate });
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	function logoutHandler() {
		localStorage?.removeItem("login");
		authDispatch({ type: "SET_TOKEN", payload: false });
	}

	const SignupUser = async (
		name: string,
		username: string,
		email: string,
		password: string
	) => {
		try {
			const { data } = await axios.post(`${baseURL}/user/signup`, {
				user: {
					name,
					username,
					email,
					password,
				},
			});

			navigate("/login");
			return data;
		} catch (error) {
			console.error({ error });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				loginWithCredentials,
				logoutHandler,
				SignupUser,
				authState,
				authDispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
