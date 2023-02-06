import React,{useEffect} from 'react'
import classes from './TheatreList.module.scss'
import {fetchTheatres} from '../../services/theatreService'
function TheatreList() {
  const [theatre, setTheatre] = React.useState([]);

  useEffect(() => {
    fetchTheatres().then((res) => {
      setTheatre(res.data.data);
    
    });
  }, []);
  console.log(theatre);
  return (
    <div className={classes.container}>
      {theatre.map((element, i) => {
        return (
          <div key={i} className={classes.movie}>
            theatre
          </div>
        );
      })}
    </div>
  );
}

export default TheatreList;
