import { Link } from "react-router-dom";
import { BookImg } from "../assets";
import { BookI } from "../interface/interface";
import { motion } from "framer-motion";
const Book: React.FC<BookI> = ({ id, volumeInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y:200 }}
      whileInView={{ opacity: 1, y:0 }}
      whileHover={{scale: 1.04, y:-10}}
      className="flex justify-between flex-col items-center py-8 px-3 rounded book"
    >
      <Link
        to={`/book/${id}`}
        className="flex justify-center item-center pb-5 w-full h-full"
      >
        <img
          className="max-w-[100%] min-w-[100px] w-[150px] object-contain"
          style={{ filter: "drop-shadow(-5px 5px 5px #27272740)" }}
          src={
            volumeInfo.imageLinks
              ? volumeInfo.imageLinks.smallThumbnail
              : BookImg
          }
          alt="img"
        />
      </Link>
      <Link to={`/book/${id}`} className="w-[100%]">
        <p>
          {volumeInfo.categories?.map((ctg) => (
            <span
              key={ctg}
              className="border border-gray-400 text-gray-400 text-[14px] rounded-[30px] px-3 py-1"
            >
              {ctg}{" "}
              <span className="text-[18px] leading-[20px] relative top-[2px]">
                #
              </span>
            </span>
          ))}
        </p>
        <h3 className="text-md font-semibold mt-2 mb-1">
          {volumeInfo.title.length >= 50
            ? `${volumeInfo.title.slice(0, 50)}...`
            : volumeInfo.title}
        </h3>
        <p className="text-gray-400">
          {volumeInfo.authors && volumeInfo.authors.length > 4
            ? `${volumeInfo.authors?.slice(0, 3).join(", ")} ...`
            : volumeInfo.authors?.join(", ")}
        </p>
      </Link>
    </motion.div>
  );
};

export default Book;
