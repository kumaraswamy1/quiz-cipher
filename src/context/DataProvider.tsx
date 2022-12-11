import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducers/Data.reducer";
import {
	ACTIONTYPE,
	IntialState,
	intialState,
} from "../Reducers/Data.reducer.types";

type DataContextValue = {
	quizState: IntialState;
	quizDispatch: (args: ACTIONTYPE) => void;
};

export const DataContext = createContext<DataContextValue>(
	{} as DataContextValue
);

export function DataProvider(props: React.PropsWithChildren<{}>) {
	const { children } = props;

	const [quizState, quizDispatch] = useReducer(dataReducer, intialState);

	return (
		<DataContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</DataContext.Provider>
	);
}

export function useData() {
	return useContext(DataContext);
}
