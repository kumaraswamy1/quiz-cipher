export const isPasswordValid = (password:string) => {
	if (
		password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) ==
		null
	)
		return false;
	else return true;
};
