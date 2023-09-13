import { SearchPanel } from ".";
import BookList from "./BookList";

const Home: React.FC = () => {
  return (
    <div className="header">
      <div className="py-[100px] cont flex justify-center items-center">
        <div className="glass text-center px-5 max-[991px]:w-full">
          <h1 className="text-[3rem] font-bold max-[700px]:text-[2rem]">
            Welcome to Library
          </h1>
          <p className="text-xl max-[700px]:text-[16px]">
            Here you can find the book <br />you want and read it
          </p>
          <button onClick={() => window.scrollTo(0, window.innerHeight)} className="px-3 py-1 mt-10 border rounded">Let's Go</button>
        </div>
      </div>
      <SearchPanel />
      <BookList />
    </div>
  );
};

export default Home;
