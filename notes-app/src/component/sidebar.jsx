import { useEffect, useState } from "react";
import ModalView from "./modal";
import { MY_LIST } from "../pages/constant";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const data = localStorage.getItem("notes");
  const noteTitle = JSON.parse(data) || [];
  const openModal = (noteTitle) => {
    setSelectedNote(noteTitle);
    setOpen(true);
  };

  useEffect(() => {
    setSelectedNote(noteTitle);
  }, [data]);

  return (
    <>
      <div className="flex min-w-40 bg-gradient-to-br from-gray-600 to-gray-800 text-white flex-col gap-4 p-4">
        <h1 className="m-4 h-20 p-3 border-4 items-center border-cyan-300 text-cyan-300 underline italic justify-center">
          {MY_LIST}
        </h1>
        <ol>
          {noteTitle.map((item, index) => (
            <li
              className="underline italic p-2 w-14 text-gray-200 "
              key={index}
              onMouseEnter={() => openModal(item)}
            >
              {item.slice(0, 4)}
            </li>
          ))}
        </ol>
      </div>
      <ModalView open={open} setOpen={setOpen} selectedNote={selectedNote} />
    </>
  );
};
export default Sidebar;
