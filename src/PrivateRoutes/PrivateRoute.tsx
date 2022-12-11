import { Navigate, useLocation } from "react-router-dom";
import { useLogin } from "../context/AuthProvider";

export function PrivateRoute({ children }: any) {
	const {
		authState: { token },
	} = useLogin();

	const location = useLocation();

	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}
