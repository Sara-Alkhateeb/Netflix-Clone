import React from 'react';
import NavBar from '../NavBar/NavBar';

function FavList() {
    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `https://movies-library-bqib9wri1-sara-alkhateeb.vercel.app/getMovies`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavArr(data);
    }

    useEffect(()=>{
        sendReq();
    }, [])

    return (
        <>
        <NavBar/>
        <div>
            Hello from favlist
        </div>
        </>
    );
}

export default FavList;