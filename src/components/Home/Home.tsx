import { Categories } from "../Categories/Categories";

export function Home() {
	return (
		<div className="bg-cover  h-screen flex  flex-col p-4 ">
			<h1 className="flex flex-col leading-snug  font-normal md:text-6xl p-2 justify-center items-center text-white text-center text-4xl ">
				Test your web 3 and crypto knowledge! <br />
			</h1>
			<div className=" flex flex-col text-center items-center justify-center">
				<span className="text-3xl m-6 text-yellow-300">
					Select the required quiz category.
				</span>
				<Categories />
			</div>
		</div>
	);
}
