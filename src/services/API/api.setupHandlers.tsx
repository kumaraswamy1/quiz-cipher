import axios from "axios";

export const setupAuthHeaderForServiceCalls = async (token: string) => {
	if (token) {
		return (axios.defaults.headers.common["Authorization"] = token);
	}
	delete axios.defaults.headers.common["Authorization"];
};

export const setupAuthExceptionHandler = ({ logoutUser, navigate }: any) => {
	const UNAUTHORIZED = 401;
	axios.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error?.response?.status === UNAUTHORIZED) {
				logoutUser();
				navigate("login");
			}
			return Promise.reject(error);
		}
	);
};
