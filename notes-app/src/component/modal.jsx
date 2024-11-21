import { NO_NOTE } from "../pages/constant";

const ModalView = ({ open, setOpen, selectedNote }) => {
  const closeModal = () => setOpen(false);

  console.log(selectedNote);
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden={!open}
      className={`${
        open ? "flex" : "hidden"
      } fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {selectedNote ? selectedNote.slice(0, 4) : ""}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            {selectedNote ? (
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {selectedNote}
              </p>
            ) : (
              <p className="text-base text-gray-500 dark:text-gray-400">
                {NO_NOTE}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
