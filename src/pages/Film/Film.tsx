import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import Livre from "../../img/Livre.png"
import Maior from "../../img/+18.png"
import {
    Main, 
    NavBar,
    NavBarButton,
    ContainerFilm,
    ContainerBlur,
    ContainerImg,
    ContainerData,
    Title,
    Genrer,
    Sinopse,
    SinopseTitle,
    TextAverage,
    ContainerAverage,
    CardAverage,
    Average,
    TextIdade,
    ContainerIdade,
    ContainerElenco,
    TitleElenco,
    ElencoPessoas,
    ContainerPessoas,
    ImgPessoas,
    DataPessoas,
    OriginalName,
    CaracterName,
    ContainerFooter
} from './Film-styles';

interface ParamTypes{
  cardId: string;
}

const Film: React.FC = () => {
  let history = useHistory();
  const [film, setFilm] = useState<any>([]);
  const [options, setOptions] = useState<any>([]);
  const [filmCredits, setFilmCredits] = useState<any>([]);
  const{cardId} = useParams<ParamTypes>();
  const axios = require('axios').default;
  const handleOptions = ()=>{
    if(cardId){
      setOptions(cardId) 
    }
  }

  const loadFilm = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${options}?api_key=5f4c3f1f90c1884c5e8304c3e6b820ef&language=pt-BR`)
    const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${options}/credits?api_key=5f4c3f1f90c1884c5e8304c3e6b820ef&language=pt-BR`)
    if(res && res.data && res2 && res2.data){
      var genres = ""
      for (var contador in res.data.genres){
        genres += res.data.genres[contador].name +", "
      }
      res.data.genres = genres.slice(0,-2)
    }
    if (res.data.adult ===false) res.data.adult = Livre
    else res.data.adult = Maior
    res.data.release_date = res.data.release_date.split('-').reverse().join('/')
    setFilm(res.data) 
    setFilmCredits(res2.data.cast)    
  }  

  window.onload =() =>{
    loadFilm()
  }

  useEffect(() => {
    handleOptions()// eslint-disable-next-line
  }, []);

  return (
    <>
      <Main>
        <NavBar>
          <NavBarButton onClick={()=>history.push("/home")}>Home</NavBarButton>
        </NavBar>
        <ContainerFilm style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500/${film.backdrop_path}")`}}>
          <ContainerBlur>
            <ContainerImg src={"https://image.tmdb.org/t/p/w300/" + film.poster_path }/>
            <ContainerData>
              <Title>{film.title}</Title>
              <Genrer> • &nbsp; {film.release_date} &nbsp; • &nbsp; {film.genres} &nbsp; • &nbsp; {film.runtime} min </Genrer>
              <SinopseTitle>Sinopse</SinopseTitle>
              <Sinopse> {film.overview}</Sinopse>
            </ContainerData>
            <ContainerAverage>
              <TextAverage>Avaliação</TextAverage>
              <CardAverage>
                <Average>{film.vote_average}</Average>
              </CardAverage>
              <TextIdade>Classificação</TextIdade>
              <ContainerIdade src={film.adult}></ContainerIdade>
            </ContainerAverage>
          </ContainerBlur>
        </ContainerFilm>
        <ContainerElenco>
          <TitleElenco>Elenco Principal</TitleElenco>
          <ElencoPessoas>
            {filmCredits?.map((credits:{profile_path:string; original_name:string; character:string})=>(
              <ContainerPessoas>
                <ImgPessoas src={"https://image.tmdb.org/t/p/w200/" + credits.profile_path }></ImgPessoas>
                <DataPessoas>
                  <OriginalName>{credits.original_name}</OriginalName>
                  <CaracterName>{credits.character}</CaracterName>
                </DataPessoas>
              </ContainerPessoas>
            ))}
          </ElencoPessoas>
        </ContainerElenco>
        <ContainerFooter>Made with &lt;/&gt; and ❤ by Mauricio</ContainerFooter>
      </Main>
    </>
  );
};
  
export default Film;




  