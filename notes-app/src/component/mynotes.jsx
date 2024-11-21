import React, { useEffect, useState } from "react";
import Logo from "/src/assets/sticky-note.png";
import Delete from "/src/assets/delete.png";
import Sidebar from "./sidebar";
import { CREATE_NOTES, MY_NOTES } from "../pages/constant";
import { useIntl } from "react-intl";

const MyNotes = () => {
  const [newNote, setnewNote] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const { formatMessage } = useIntl();

  const [open, setOpen] = useState(false);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  //add note
  const handleNotes = () => {
    setnewNote([...newNote, ""]);
  };

  //delete note
  const handleDeleteNote = (index) => {
    const deletedNotes = [...newNote];
    deletedNotes.splice(index, 1);
    setnewNote(deletedNotes);
  };

  //update note
  const handleNoteChange = (index, value) => {
    const modifiedNotes = [...newNote];
    modifiedNotes[index] = value;
    setnewNote(modifiedNotes);
  };

  //store in local
  const saveNotesToStorage = () => {
    localStorage.setItem("notes", JSON.stringify(newNote));
  };

  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    saveNotesToStorage();
  }, [newNote]);

  return (
    <div className="w-screen flex">
      <Sidebar className="h-screen min-w-40" />
      <div className="bg-gradient-to-br from-teal-300 to-teal-400 w-screen min-h-screen text-white pt-4 p-10">
        <div className="flex  items-center justify-center text-3xl font-bold space-y-1">
          <img src={Logo} alt="logo" />
          <h1 className="mx-2.5">{formatMessage({ id: MY_NOTES })}</h1>
        </div>
        <button
          className="bg-green-500 font-bold cursor-pointer outline-none border-none rounded-full p-2 mt-2"
          onClick={handleNotes}
        >
          {formatMessage({ id: CREATE_NOTES })}
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-0">
          {newNote.map((item, index) => (
            <div key={index} className="p-5">
              <h3 className="text-gray-700" key={index}>
                {currentDate}
              </h3>
              <textarea
                value={item}
                onChange={(e) => handleNoteChange(index, e.target.value)}
                className="w-2/3 max-w-md min-h-48 bg-gradient-to-br from-green-200 to-white text-gray-700 outline-none rounded-md p-5 "
              />
              <img
                src={Delete}
                alt="deleteNote"
                className="cursor-pointer w-7 h-7 items-end justify-end"
                onClick={() => handleDeleteNote(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyNotes;
