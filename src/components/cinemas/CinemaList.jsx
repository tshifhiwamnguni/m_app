import React, { useEffect,useState } from "react";
import classes from "./CinemaList.module.scss";
import { Circles } from "react-loader-spinner";
import { fetchMovies } from "../../services/moviesService";


function CinemaList() {
  const [movies, setMovies] = useState([]);
  const [loader,setLoader] = useState(false)
  useEffect(() => {
    fetchMovies().then((res) => {
      setLoader(true)
      setMovies(res.data.data);
    }).finally(() => {setLoader(false)});
  }, []);

  console.log(movies);
 return (


   <div>
    {loader ? 
                <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            
  
   :
    <div className={classes.container}>
      {movies.map((element, i) => {
        return (
          <div key={i} className={classes.movie}>
            <h3>{element.attributes.name}</h3>

            <div>
              <h3>{element.attributes.city}</h3>
            </div>

      
          </div>
        );
      })}
     </div>
   
   }
   
    </div>
  );
}

export default CinemaList;
