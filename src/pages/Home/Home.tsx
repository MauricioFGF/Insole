import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Lupa from "../../img/lupa.png"
import Banners from "../../img/banner.gif"
import Arrows from "../../img/baixo.gif"
import { Link } from 'react-router-dom';

import {
    Main,
    Banner,
    BannerBlur, 
    BannerTitle,
    BannerDescription,
    BannerArrow,
    Arrow,
    NavBar,
    NavBarButton,
    Tittle,
    ContainerFilms,
    ContainerRight,
    ContainerSearch,
    Search,
    SearchButton,
    SearchButtonImg,
    CardFilm,
    CardTitle,
    CardAverage,
    Average,
    CardImage,
    CardGenre,
    ContainerNextPrev,
    ButtonNext,
    ContainerFooter,
} from './Home-styles';

interface HomeProps{
  cardId?:string
}

const Home: React.FC<HomeProps> = ({cardId}) => {
  const [pages, setPages] = useState<any>(1)
  const [testSearch, setTestSearch] = useState<any>(true)
  const [search, setSearch] = useState<any>("")
  const [maxFilms, setMaxFilms] = useState<any>(0)
  const [cardsSearch, setCardsSearch] = useState<any>([])
  const [cards, setCards] = useState<any>([]);
  let history = useHistory();
  const axios = require('axios').default;

  const genre = async(datas:any)=>{
    if(datas[datas.length-1] === "search"){
      setTestSearch(false)
      datas.pop()
      setCardsSearch(datas)
    }
    else{
      var lista = []
      for (var count in datas){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${datas[count].id}?api_key=5f4c3f1f90c1884c5e8304c3e6b820ef&language=pt-BR&`)
        var genres = ""
        for (var contador in res.data.genres){
          genres += res.data.genres[contador].name +", "
        }
        res.data.genres = genres.slice(0,-2)
        lista.push(res.data)
      }
      var listaFinal = cards.concat(lista)
      setCards(listaFinal) 
      setPages(pages+1) 
    }
  }

  const loadCards = async(valor:any) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5f4c3f1f90c1884c5e8304c3e6b820ef&language=pt-BR&page=${valor}`)
    if (res && res.data){
      setMaxFilms(res.data.total_pages)
      genre(res.data.results)
    }
  }

  const handleInput = (e:any)=>{
    var input = e.target.value
    setSearch(input)
  }

  const Searching = async(e:any)=>{
    if (e.keyCode === 13 && e.target.value!=="" ){
      var value = e.target.value
      var filmsList: any[] = []
      var count = 1
      while(count <= maxFilms){
          const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5f4c3f1f90c1884c5e8304c3e6b820ef&language=pt-BR&page=${count}`)
          count+=1
          res.data.results?.map((resultados:any) =>(filmsList.push(resultados)))
      } 
      var finalFilmsList = filmsList.filter((resultado:any)=>(resultado.title.toLowerCase().includes(value.toLowerCase())))
      finalFilmsList = finalFilmsList.concat(["search"])
      genre(finalFilmsList)    
    }
    else if(e.keyCode === 13 && e.target.value===""){
      setTestSearch(true)
    }
    else if (e==="send" && search!=="" ){
      var listFilm: any[] = []
      var counter = 1
      while(counter <= maxFilms){
          const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5f4c3f1f90c1884c5e8304c3e6b820ef&language=pt-BR&page=${counter}`)
          counter+=1
          res.data.results?.map((resultados:any) =>(listFilm.push(resultados)))
      } 
      var finalListFilm = listFilm.filter((resultado:any)=>(resultado.title.toLowerCase().includes(search.toLowerCase())))
      finalListFilm = finalListFilm.concat(["search"])
      genre(finalListFilm) 
    }
    else if(e==="send" && search==="" ){
      setTestSearch(true)
    }
}
  
  useEffect(() => {
    loadCards(1);// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
        <Main>
          <NavBar>
            <NavBarButton onClick={()=>history.push("/home")}>Home</NavBarButton>
          </NavBar>
          <Banner style={{backgroundImage:`url(${Banners})`}}>
            <BannerBlur/>
            <BannerTitle>Now Playing Movies</BannerTitle>
            <BannerDescription> Encontre os principais filmes que estão na tela do cinema.</BannerDescription>
            <BannerArrow href="#title-filme"><Arrow src= {Arrows} alt="" /></BannerArrow>
          </Banner>
            <Tittle id="title-filme"> Encontre seu Filme </Tittle>
            <ContainerFilms>
                <ContainerSearch>
                    <Search type="text" id="search" onKeyUp={(e) => Searching(e)} onChange={(e)=> handleInput(e)}/>
                    <SearchButton type="submit" onClick={()=> Searching("send")}><SearchButtonImg src={Lupa}/></SearchButton>
                </ContainerSearch>
                <ContainerRight> 
                  {testSearch? 
                  <>
                    {cards?.map((card:{id:string; title:string; vote_average:number; poster_path:string; genres:string }) =>(
                      <CardFilm type="submit" as={Link} to={`/film/${cardId = card.id }`} target="_blank">
                          <CardImage src= {"https://image.tmdb.org/t/p/w200/" + card.poster_path }/>
                          <CardAverage>
                            <Average>{card.vote_average}</Average>
                          </CardAverage>
                          <CardTitle>{card.title}</CardTitle>
                          <CardGenre>{card.genres}</CardGenre>
                      </CardFilm>
                    ))}
                  </>:
                  <>
                    {cardsSearch?.map((card:{id:string; title:string; vote_average:number; poster_path:string; genres:string }) =>(
                      <CardFilm type="submit" as={Link} to={`/film/${cardId = card.id }`} target="_blank">
                          <CardImage src= {"https://image.tmdb.org/t/p/w200/" + card.poster_path }/>
                          <CardAverage>
                            <Average>{card.vote_average}</Average>
                          </CardAverage>
                          <CardTitle>{card.title}</CardTitle>
                          <CardGenre>{card.genres}</CardGenre>
                      </CardFilm>
                      ))}
                    </>
                  }
                </ContainerRight>
            </ContainerFilms>
            <ContainerNextPrev>
              {testSearch && 
              <>
                <ButtonNext onClick={()=>(loadCards(pages))}>Carregar Mais</ButtonNext>
              </>}
            </ContainerNextPrev>
            <ContainerFooter>Made with &lt;/&gt; and ❤ by Mauricio</ContainerFooter>
        </Main>
    </>
  );
};
  
export default Home;


  