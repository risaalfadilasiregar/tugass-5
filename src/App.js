import "./styles.css";
import Movie from "./Movie";

const movies = [
    {
        id : 1,
        title : "Ku Kira Kau Rumah",
        poster : "https://images.solopos.com/2022/02/kukira-kau-rumah.jpg",
        year : "2022"
    },
    {
        id : 2,
        title: "Mid Night",
        poster : "https://assets.pikiran-rakyat.com/crop/0x109:800x833/x/photo/2021/06/11/151788899.jpg",
        year : "2021"
    },
    {
        id : 3,
        title : "Hush",
        poster : "https://ae01.alicdn.com/kf/H9c4278d82e3a46e8a49d995fc8ae0b94s.jpg",
        year : 2020
    }
]

function App(){
    return(
        <div style={{
            display : "flex",
            gap : 16,
        }}>
            {movies.map(function (p){
                return(
                    <Movie poster={p.poster} judul = {p.title} year={p.year} klik={() => {
                        return alert(`anda sedang menonton ${p.title}`);               
                    }}/>
                );
            })}
        </div>
    );
}

export default App;