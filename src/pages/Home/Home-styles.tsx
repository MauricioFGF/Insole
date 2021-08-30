import styled from 'styled-components';

export const Main = styled.section`
    display:flex;
    flex-direction:column;   
`;

export const Banner = styled.section`
    width:100vw;
    min-height:600px;
    height:95vh;
    display:flex;
    flex-direction:column;
    background-size:cover;
    background-repeat:no-repeat;   
`;
export const  BannerBlur= styled.section`
    position:absolute;
    width:100vw;
    height:95vh;  
    min-height:600px; 
    background-color:#00000094;
`;

export const  BannerTitle= styled.p`
    z-index:10;
    color:white;
    font-weight:bold;
    font-size:5em;
    margin:120px 20px 0 100px;
    @media (max-width:500px){
        margin-left:50px
    }
`;

export const  BannerDescription= styled.p`
    z-index:10;
    color:white;
    font-size:1em;
    margin: 0 20px 0 100px;
    @media (max-width:500px){
        margin-left:50px
    }
`;

export const  BannerArrow= styled.a`
    position: relative;
    top:calc(95vh - 60vh );
    z-index:10;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    @media (max-width:800px){
        top:40px;
    }
    
`;

export const  Arrow= styled.img`
    width:8em;
    height:8em;
    @media (max-width:800px){
        width:5em;
        height:5em;
    }
`;

export const NavBar = styled.section`
    width:100%;
    height: 80px;
    display:flex;
    align-items: center;  
    background-color:#be060f;;
`;

export const NavBarButton = styled.a`
    width:80px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    margin-left:40px;
    color:white;
    font-size:20px;
    font-weight:bold;
    cursor: pointer;
    background-color:#750505;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-decoration:none;
    :hover{
        background-color:#4b000b;
    }
    :active{
        background-color:#3b0000;
    }
`;

export const Tittle = styled.p`
    font-weight:bold;
    font-size:40px;
    text-align:center;
    padding: 20px 0 20px 0;
`;

export const ContainerFilms = styled.section`
    width:100%;
    min-height:700px;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 0 12% 0 12%;
`;

export const ContainerLeft = styled.section`
    width:20%;
    height:100px;
    display: flex;
    margin-right:40px;
    background-color:black;
`;

export const ContainerRight = styled.section`
    width:90%;
    display: flex;
    justify-content:center;
    flex-wrap:wrap;
`;

export const ContainerSearch = styled.section`
    width:100%;
    display: flex;
    justify-content:center;
`;

export const Search = styled.input`
    width:30%;
    height:35px;
    display: flex;
    font-size:17px;
    font-weight:300;
    padding:10px;
    border-radius:10px 0 0 10px;
    margin-bottom:40px;
    outline:none;
    border:none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;      
`;

export const SearchButton = styled.button`   
    width:70px;
    height:35px;
    border-radius: 0 10px 10px 0;
    border:none;
    cursor:pointer;
    background-color:#be060f;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    :hover{
        background-color:#a7040d;
    }
    :active{
        background-color:#750207;
    }
`;

export const SearchButtonImg = styled.img`
    width:20px;
    height:20px;
`;

export const CardFilm = styled.button`
    display: flex;
    flex-direction:column; 
    text-decoration:none;
    margin:10px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    :hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        cursor: pointer;
        transform:scale(1.03)
    }
`;

export const CardImage = styled.img`
    width:200px;
    height:300px;
    border-radius:10px 10px 0 0;
`;

export const CardAverage = styled.section`
    position: relative;
    left:80px;
    bottom:20px;
    width:40px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:40px;
    border:white 2px solid;
    background-color:#A30019;
`;

export const Average = styled.p`
    font-weight:bold;
    font-size:16px;
    color:white
`;

export const CardTitle = styled.p`
    position: relative;
    bottom:15px;
    width:200px;
    font-size:16px;
    font-weight:600;
    padding:0 10px 0 10px;
    color:#A30019;
      
`;

export const CardGenre = styled.p`
    position: relative;
    bottom:15px;
    width:200px;
    display:flex;
    justify-content:left;
    align-items:left;
    font-size:10px;
    font-weight:600;
    padding-left:10px;
    color:gray;
`;

export const ContainerNextPrev = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
`;

export const ButtonNext = styled.button`
    width:40%;
    height:50px;
    margin:30px 0;
    border-radius:5px;
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
    outline:none;
    border:none;
    text-decoration:none;
    color:white;
    background-color:#be060f;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    :hover{
        background-color:#a7040d;
    }
    :active{
        background-color:#750207;
    }
`;

export const ContainerFooter = styled.p`
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:16px;
    font-weight:bold;
    color:white;
    background-color:black;
`;