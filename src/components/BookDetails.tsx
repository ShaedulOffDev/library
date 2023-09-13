import { Link, useParams } from "react-router-dom";
import BooksService from "../service/BooksService";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PageLoader } from ".";
import {
  getBookDetailsFailure,
  getBookDetailsStart,
  getBookDetailsSuccess,
} from "../slice/BooksSlice";
import { BookImg } from "../assets";
import { BookI, StateI } from "../interface/interface";

const BookDetails: React.FC = () => {
  const { id } = useParams<string>();
  const dispatch = useDispatch();
  const {bookDetail}: BookI[] | any = useSelector((state: StateI) => state.books);
  const [loading, setLoading] = useState<boolean>(true);

  const GetBooks = async (id: string) => {
    dispatch(getBookDetailsStart());
    try {
      const response: BookI[] | null = await BooksService.getBookDetail(id);
      dispatch(getBookDetailsSuccess(response));
    } catch (error: any) {
      dispatch(getBookDetailsFailure(error));
      throw new Error(error);
    }
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    if (id) {
      GetBooks(id);
    }
    window.scrollTo(0,0)
  }, [id]);

  const renderHTML = (htmlString: string) => {
    return { __html: htmlString };
  };

  return bookDetail && (
    <div className="flex bg-white min-h-[75vh] pb-5 cont max-[991px]:flex-col">
      {loading && <PageLoader />}
      <Link to={"/"} className="absolute top-[22px] start-[30px]">
        <i className="fa fa-chevron-circle-left text-3xl"></i>
      </Link>
      <div className="w-[25%] flex items-start justify-center p-5 max-[991px]:p-0 max-[991px]:py-5 max-[991px]:w-full">
        <img
          src={bookDetail?.volumeInfo?.imageLinks?.thumbnail || BookImg}
          alt="Book"
          className="w-[300px] max-[400px]:w-full"
        />
      </div>
      <div className="p-10 max-[991px]:p-0 w-[75%] max-[991px]:w-full">
        <p className="text-gray-400">
          {bookDetail?.volumeInfo?.categories?.join(", ")}
        </p>
        <h2 className="text-4xl text-black font-semibold mt-8">
          {bookDetail?.volumeInfo?.title}
        </h2>
        <p className="my-5 text-gray-700">
          {bookDetail?.volumeInfo?.authors?.join(", ")}
        </p>
        <div className="my-4 pt-3 border-t text-gray-500">
          <p>{bookDetail?.volumeInfo?.publishedDate}</p>
          <p>{bookDetail?.volumeInfo?.subtitle}</p>
        </div>
        {bookDetail?.volumeInfo?.description && (
          <div className="bg-gray-200 text-black px-5 py-10 rounded-xl">
            <p
              dangerouslySetInnerHTML={renderHTML(
                bookDetail.volumeInfo.description
              )}
              className="a"
            ></p>
          </div>
        )}
        <div className="flex gap-[10px]">
          {bookDetail?.volumeInfo?.previewLink && (
            <a
              className="bg-blue-500 px-10 py-2 rounded text-white mt-4 inline-block"
              href={bookDetail?.volumeInfo?.previewLink}
              target="_blank"
            >
              PreView
            </a>
          )}
          {bookDetail?.volumeInfo?.infoLink && (
            <a
              className="border border-blue-500 px-10 py-2 rounded text-blue-500 mt-4 inline-block hover:text-white hover:bg-blue-500 transition-all"
              href={bookDetail?.volumeInfo?.infoLink}
              target="_blank"
            >
              Info
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
