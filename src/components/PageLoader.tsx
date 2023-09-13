import { Loader } from "../assets"

const PageLoader = () => {
  return (
    <div className="fixed top-0 bottom-0 end-0 start-0 bg-[#000000] z-10 flex items-center justify-center flex-col">
      <img src={Loader} alt="Loader" width={200} />
      <p className="mt-3">Please Wait..</p>
    </div>
  )
}

export default PageLoader
