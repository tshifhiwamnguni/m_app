import React, { useState, useEffect } from "react";
import classes from "./MovieList.module.scss";
import { Circles } from "react-loader-spinner";
import MoviePlayCard from "../../components/moviePlayCard/MoviePlayCard";
import { fetchMovies } from "../../services/moviesService";
import SkeletonCard from "../../components/MovieSkeletonCard/SkeletonCard";
import { AiOutlineSearch } from "react-icons/ai";
function MovieList() {
  const initMovie = {
    data: {
      id: "",
      attributes: {
        description: "All about joking and having fun",
        duration: 130,

        movieImage:
          "https://res.cloudinary.com/dqgb5h17l/image/upload/v1674424032/photo_1593085512500_5d55148d6f0d_aba7f71687.jpg",
        price: null,

        title: "The Minions: Jokes",
      },
    },
  };
  const [loader, setLoader] = useState(true);
  const [movies, setMovies] = useState([initMovie]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [suggestedOptions, setSuggestedOptions] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((res) => {
        setLoader(true);
        setMovies(res.data.data);
        console.log(movies);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log(movies);

  console.log(searchValue);
  const handleSearchChange = (event) => {
    setSearchValue(event);

    setFilteredArray(
      movies.filter((item) =>
        item.attributes.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setSuggestedOptions(filteredArray);
  };

  

  return (
    <div className={classes.main_container}>
      <h1>list of Movies</h1>
      <div className={classes.search_container}>
        <div className={classes.search_i}>
          <div className={classes.search}>
            {" "}
            <input
              type="text"
              className={classes.search_input}
              value={searchValue}
              onChange={(e) => {
                handleSearchChange(e.target.value);
              }}
            />
            <AiOutlineSearch className={classes.icon} />
          </div>
          <div className={classes.suggested}>
             {suggestedOptions.map((option, i) => (
            <div key={i} onClick={()=> {setSearchValue(option.attributes.title) ; handleSearchChange(option.attributes.title)} }className={classes.opt}>{option.attributes.title}</div>
          ))}
          </div>
         
        </div>
      </div>

      {loader ? (
        <div className={classes.container}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((value, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div>
          {filteredArray.length > 0 ? (
            <div className={classes.container}>
              {filteredArray.map((element, i) => {
                return <MoviePlayCard key={i} data={element} />;
              })}
            </div>
          ) : (
            <div className={classes.container}>
              {console.log(movies)}
              {movies.map((element, i) => {
                return <MoviePlayCard key={i} data={element} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieList;
