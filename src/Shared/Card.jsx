import { FaBookReader, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ cls }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full relative">
        <div
          className="
            aspect-square 
            w-full
            h-80
            overflow-hidden
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={cls.image}
            alt="Class"
          />
          <div
            className="
            absolute
            bottom-56
            right-5
            z-50
          "
          >
            <p className="font-bold text-white text-xl bg-red-700 p-4 rounded-full shadow-md">${cls.price}</p>
          </div>
        </div>
        <div className="flex gap-6 items-center mt-5">
          <div className="w-10 h-10 rounded-full">
            <img className="w-full h-full rounded-full" referrerPolicy="no-referrer" src={cls.insImage} alt="" />
          </div>
        <div className="font-medium text-neutral-500 mt-5">{cls.instructorName}</div>
        </div>
        <div className="font-bold text-2xl mb-3 hover:text-red-600">{cls.className}</div>
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="font-semibold"><FaUsers className="inline" /> Students: {cls.student}</div>
          <div className="font-light"><FaBookReader className="inline"/> Available Seats: {cls.availableSeat}</div>
        </div>
        <Link className="btn btn-error text-white hover:bg-slate-900"> Select Course </Link>
      </div>
    </div>
  );
};

export default Card;
