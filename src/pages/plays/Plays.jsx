import React, { useState, useEffect } from "react";
import classes from "./Plays.module.scss";
import { Circles } from "react-loader-spinner";
import MoviePlayCard from "../../components/moviePlayCard/MoviePlayCard";
import { fetchPlays } from "../../services/theatreService";
import SkeletonCard from "../../components/MovieSkeletonCard/SkeletonCard";
import { AiOutlineSearch } from "react-icons/ai";
import axios, { all } from "axios";
import PlayCard from "../../components/PlayCard/PlayCard";

function Plays() {
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
    fetchPlays()
      .then((res) => {
        setLoader(true);
        setMovies(res.data.data);
        console.log(movies);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    if (searchValue.length >= 0) {
      setFilteredArray(
        movies.filter((item) =>
          item.attributes?.title
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      );
      setSuggestedOptions(filteredArray);
      axios
        .get(
          `https://strapi-movie-app.onrender.com/api/shows?populate=*&filters[title][$containsi]=${searchValue}`,
          {
            headers: {
              Authorization:
                "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
            },
          }
        )
        .then((movie) => {
          setMovies(movie.data.data);
        })
        .catch((error) => {});
    } else {
      fetchPlays()
        .then((res) => {
          setLoader(true);
          setMovies(res.data.data);
          console.log(movies);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }, [searchValue]);

  const handleSearchChange = (event) => {
    setSearchValue(event);
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
                setSearchValue(e.target.value);
              }}
            />
            <AiOutlineSearch className={classes.icon} />
          </div>
          <div className={classes.suggested}>
            {suggestedOptions.map((option, i) => (
              <div
                key={i}
                onClick={(e) => {
                  // setSearchValue(option.attributes.title);
                  handleSearchChange(option.attributes.title);
                }}
                className={classes.opt}
              >
                {option.attributes.title}
              </div>
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
                return <PlayCard key={i} data={element} />;
              })}
            </div>
          ) : (
            <div className={classes.container}>
              {movies.map((element, i) => {
                return <PlayCard key={i} data={element} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Plays;
