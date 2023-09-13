import axios from "./api";

const BooksService = {
  async getBooks(
    startIndex: number,
    search: string,
    category: string,
    sortBy: string,
  ) {
    const response = await axios.get(
      `?q=intitle:${search}&printType=${category}&orderBy=${sortBy}&maxResults=30&startIndex=${startIndex}`
    );
    return response.data;
  },
  async getBookDetail(id: string){
    const response = await axios.get(`/${id}`)
    return response.data
  },
};

export default BooksService;
