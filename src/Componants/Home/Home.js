
import MovieList from '../MovieList/MovieList';
import NavBar from '../NavBar/NavBar';
import './Home.css' 


function Home() {
    return (
        <div id ='home'>
            <NavBar />
            <MovieList />
        </div>

    );
}

export default Home;