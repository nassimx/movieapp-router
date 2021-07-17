import './App.css';
import React, { useState } from 'react'
import { MovieList } from './Components/Movie/MovieList';
import NavBar from './Components/Movie/NavBar';
import MovieDetails from './Components/Movie/MovieDetails';
import Home from './Components/Movie/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  const data = [
    {
      title: "The Shawshank Redemption",
      desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      id: 1,
      rate: 5,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/NmzuHjWmXOc"

    }, {
      title: "The Godfather",
      desc: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      id: 2,
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/sY1S34973zA"

    }, {
      title: "The Godfather: Part II",
      desc: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      id: 3,
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/9O1Iy9od7-A"

    }, {
      title: "The Dark Knight",
      desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      id: 4,
      rate: 3,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"

    }, {
      title: "Minimalism",
      desc: "Examining the many levels of minimalism by looking inside the lives of minimalists from various walks of life.",
      id: 5,
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BZjZjODAwMGQtOGM4NC00ZjJiLWI2ZGEtNzY5ZTY2ZGQ2NDBlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/0Co1Iptd4p4"

    }, {
      title: "The Great Hack",
      desc: "The Cambridge Analytica scandal is examined through the roles of several affected persons.",
      id: 6,
      rate: 3,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMGViZWEwOGItMGZlMC00YzE1LTk5ZWItMGYxYjhhMjBmNDMwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/iX8GxLP1FHo"

    }, {
      title: "The Social Dilemma",
      desc: "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
      id: 7,
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/uaaC57tcci0"

    }, {
      title: "Gandhi",
      desc: "The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
      id: 8,
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/B7I6D3mSYTE"

    }, {
      title: "The Wolf of Wall Street",
      desc: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      id: 9,
      rate: 5,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL100_UX258.jpg",
      trailer: "https://www.youtube.com/embed/iszwuX1AK6A"

    }]


  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const [rate, setRate] = useState(0)
  const ratingChanged = (newRating) => {
    setRate(newRating)
  }

  const handleAdd = (imgSrc, title, rate, desc, id, trailer) =>
    setMovieList([...movieList, { imgSrc, title, rate, desc, id, trailer }]);


  const handleDelete = (id) => {
    setMovieList(movieList.filter(movie => movie.id !== id))
  }



  return (
    <div >
      <Router>

        <NavBar handleAdd={handleAdd} ratingChanged={ratingChanged} handleSearch={handleSearch} movieList={movieList} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact render={() => <MovieList movieList={movieList.filter((movie) => movie.rate >= rate)} handleDelete={handleDelete} search={search} />} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} movieList={movieList}  />} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
