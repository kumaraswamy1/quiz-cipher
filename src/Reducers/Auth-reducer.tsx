export type IntialState = {
	username: string;
	password: string;
	name: string;
	email: string;
	token?: any;
};

export type ACTIONTYPE =
	| {
			type: "SET_USERNAME";
			payload: string;
	  }
	| {
			type: "SET_PASSWORD";
			payload: string;
	  }
	| {
			type: "SET_NAME";
			payload: string;
	  }
	| {
			type: "SET_EMAIL";
			payload: string;
	  }
	| {
			type: "SET_TOKEN";
			payload: any;
	  };

export const loginReducer = (
	state: IntialState,
	{ type, payload }: ACTIONTYPE
) => {
	switch (type) {
		case "SET_USERNAME":
			return { ...state, username: payload };
		case "SET_PASSWORD":
			return { ...state, password: payload };
		case "SET_NAME":
			return { ...state, name: payload };
		case "SET_EMAIL":
			return { ...state, email: payload };
		case "SET_TOKEN":
			return { ...state, token: payload };
		// case "CLEAR_CREDENTIALS":
		// 	return { ...state, username: "", password: "", name: "", email: "" };
		default:
			return state;
	}
};
