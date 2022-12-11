import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/AuthProvider";

type ModalType = {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Modal = ({ setShowModal }: ModalType) => {
	const navigate = useNavigate();
	const {
		authState: { token },
	} = useLogin();
	const quizStartHandler = () => {
		token ? navigate("/quiz") : navigate("/login");
	};
	return (
		<>
			<div className="fixed flex justify-center z-50 w-full p-4 md:mt-32  overflow-x-hidden overflow-y-auto md:inset-0  ">
				<div className="relative w-full h-full max-w-2xl md:h-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex   p-4 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								Rules for the quiz
							</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
								onClick={() => {
									setShowModal(false);
								}}
							>
								<RiCloseFill size={28} />
							</button>
						</div>

						<div className="p-4 space-y-6">
							<ol className=" p-2  space-y-4 text-sm md:text-base leading-normal text-slate-200">
								<li>The quiz consists of 10 multiple-choice questions.</li>
								<li> Each question must be answered within 30 seconds.</li>
								<li>
									Points will be awarded for correct answers: 10 points for each
									correct answer.
								</li>
								<li>
									Points will be deducted for incorrect answers: 5 points for
									each incorrect answer.
								</li>
								<li>
									The quiz must be completed within the allotted time limit.
								</li>
							</ol>
						</div>

						<div className="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
							<button
								onClick={() => quizStartHandler()}
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 flex justify-centerfocus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
							"
							>
								Start
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// {
// 	<button
// 		type="button"
// 		class="px-6
//       py-2.5
//       bg-blue-600
//       text-white
//       font-medium
//       text-xs
//       leading-tight
//       uppercase
//       rounded
//       shadow-md
//       hover:bg-blue-700 hover:shadow-lg
//       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//       active:bg-blue-800 active:shadow-lg
//       transition
//       duration-150
//       ease-in-out"
// 		data-bs-target="#exampleModal"
// 	>
// 		Launch demo modal
// 	</button>;
// }

// <!-- Modal -->
// <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
//   id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog relative w-auto pointer-events-none">
//     <div
//       class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
//       <div
//         class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
//         <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
//         <button type="button"
//           class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
//           data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body relative p-4">
//         Modal body text goes here.
//       </div>
//       <div
//         class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
//         <button type="button" class="px-6
//           py-2.5
//           bg-purple-600
//           text-white
//           font-medium
//           text-xs
//           leading-tight
//           uppercase
//           rounded
//           shadow-md
//           hover:bg-purple-700 hover:shadow-lg
//           focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
//           active:bg-purple-800 active:shadow-lg
//           transition
//           duration-150
//           ease-in-out" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="px-6
//       py-2.5
//       bg-blue-600
//       text-white
//       font-medium
//       text-xs
//       leading-tight
//       uppercase
//       rounded
//       shadow-md
//       hover:bg-blue-700 hover:shadow-lg
//       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//       active:bg-blue-800 active:shadow-lg
//       transition
//       duration-150
//       ease-in-out
//       ml-1">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
