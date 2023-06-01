"use client";
import { useState } from "react";
import { NewsArticles, Response } from "../../../models/NewsArticles";
import { getData } from "../../api";
import ArticleGrid from "../../components/ArticleGrid";


const Search = () => {
  const [searchResults, setSearchResults] = useState<NewsArticles[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if(searchQuery){
      try{
        setSearchResults(null);
        setIsLoading(true);
      const news: Response = await getData(
        `https://feedparsify.cyclic.app/search/${searchQuery}`
      );
      setSearchResults(news.Data);
      }
      catch(error){
        console.log(error);
      }finally{
        setIsLoading(false);
      }
  }};

  return (
    <div className="mx-4">
      <h1 className="text-4xl font-bold mb-4">Search news</h1>
      <form className="flex" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="searchQuery">
          Search Query:
        </label>
        <input
          type="text"
          name="searchQuery"
          id="searchQuery"
          placeholder="Eg. Sports, Politics"
          className="flex-grow px-4 py-2 mr-2 text-base lg:text-lg xl:text-xl border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="submit"
          value="Search"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        />
      </form>
      <div className="flex flex-col align-center ">
        {isLoading && 
        <div className="flex items-center justify-center h-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>}
        {searchResults?.length === 0 && <p>Noting found try a different Query</p>}
        {searchResults && <ArticleGrid articles={searchResults}/>}
      </div>
    </div>
  );
};

export default Search;
