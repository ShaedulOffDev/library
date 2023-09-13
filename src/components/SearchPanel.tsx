import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import { setSearchingBy, setSortingBy ,setCategory} from '../slice/BooksSlice'
import { StateI } from '../interface/interface'

const SearchPanel: React.FC = () => {
  const dispacth = useDispatch()
  const {searchingBy, sortingBy, category}:string|any = useSelector((state: StateI) => state.books);
  const [inputValue, setInputValue] = useState<string>(searchingBy)

  const setSearch = (e: any) => {
    e.preventDefault()
    try {
      dispacth(setSearchingBy(inputValue))
    } catch (error:any) {
      throw new Error(error)
    }
  }
  const setCtg = (value:string) => {
    try {
      dispacth(setCategory(value))
    } catch (error:any) {
      throw new Error(error)
    }
  }
  const setSorting = (value:string) => {
    try {
      dispacth(setSortingBy(value))
    } catch (error:any) {
      throw new Error(error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center bg-[#1D1F21] py-[75px] cont">
      <form className="flex mb-4 w-full justify-center" onSubmit={setSearch}>
        <label className="w-[500px] max-[678px]:w-[100%] relative">
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-full border text-white rounded p-3 outline-none bg-transparent placeholder:text-white text-[18px] max-[678px]:py-2 max-[678px]:text-[16px]" placeholder="Search..." type="text"/>
          <span className="absolute top-[50%] end-[20px] text-white text-xl translate-y-[-50%]">
            <i className="fa fa-search"></i>
          </span>
        </label>
      </form>
      <div className="text-white flex justify-between w-[500px] max-[500px]:flex-col max-[500px]:w-full">
        <label>
          <span className="me-3 uppercase font-semibold">Categories</span>
          <select value={category} className="max-[500px]:w-full max-[500px]:mt-1 px-3 max-[678px]:py-1 py-2 bg-transparent border rounded outline-none" onChange={e => setCtg(e.target.value)}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </label>
        <label className='max-[500px]:mt-3'>
          <span className="me-3 uppercase font-semibold">Sorting By</span>
          <select value={sortingBy} className="max-[500px]:w-full max-[500px]:mt-1 max-[678px]:py-1 px-3 py-2 bg-transparent border rounded outline-none" onChange={e => setSorting(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default SearchPanel
