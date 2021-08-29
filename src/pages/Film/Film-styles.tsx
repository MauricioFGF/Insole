import styled from 'styled-components';

export const Main = styled.section`
    display:flex;
    flex-direction:column;  
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-decoration:none;
    background-color:#750505;
    :hover{
        background-color:#4b000b;
    }
    :active{
        background-color:#3b0000;
    }
`;

export const ContainerFilm = styled.section`
    width:100%;
    display:flex;
    align-items: center;
    background-repeat:no-repeat;
    background-size:cover; 
`;

export const ContainerBlur = styled.section`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    align-items: center; 
    background-color:#ece5dbe4;
   @media (max-width:750px){
    justify-content:center;
}
`;

export const ContainerImg = styled.img`
    padding:30px;
    border-radius: 45px; 
`;

export const ContainerData = styled.section` 
    width:50%;
    display:flex;
    padding-left:20px;
    flex-direction:column;
    justify-content:center;
    background-repeat:no-repeat;
    background-size:cover;
`;

export const Title = styled.h1` 
    font-weight:bolder;
    font-size:40px;
`;

export const Genrer = styled.p` 
    color:#363333;
    font-weight:light;
    font-size:18px;
`;

export const SinopseTitle = styled.h6` 
    margin-top:20px;
    font-size:22px;
`;

export const Sinopse = styled.p` 
    margin-top:10px;
    max-width:90%;
    font-weight:200;
    font-size:18px;
`;

export const ContainerAverage = styled.section` 
    width:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (max-width:950px){
        width:100%;
        flex-direction:row;
    }
`;

export const TextAverage = styled.p`
    margin-bottom: 15px;    
    font-weight:bold;
    font-size:20px;
    color:black;
    @media (max-width:950px){
        margin-right:10px
    }
`;

export const CardAverage = styled.section`
    width:80px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:40px;
    border:#000000 2px solid;
    background-color:black;
`;

export const Average = styled.p`
    font-weight:bold;
    font-size:40px;
    color:white;
`;

export const TextIdade = styled.p`
    margin-top:50px;
    margin-bottom: 15px;
    font-weight:bold;
    font-size:20px;
    color:black;
    @media (max-width:950px){
        margin-top:0;
        margin-left:10px;
        margin-right:10px;
    }
`;

export const ContainerIdade = styled.img`
    width:80px;
    height:80px;
    border: 2px solid #363535;
    border-radius:10px;
    @media (max-width:950px){
        margin:40px 0;
    }
`;

export const ContainerElenco = styled.section`
    width:100%; 
`;

export const TitleElenco = styled.h1`
    padding:30px 30px 30px 60px;
    font-size:40px;
`;

export const ElencoPessoas = styled.section`
    display:flex;
    flex-wrap:wrap;
    justify-content:left;
    padding:30px 30px 30px 60px;
`;

export const ContainerPessoas = styled.section`
    width:220px;
    display:flex;
    margin:10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const ImgPessoas = styled.img`
    width:60px;
    height:80px;
`;

export const DataPessoas = styled.section`
`;

export const OriginalName = styled.p`
    margin-left:8px;
    margin-top:10px;
`;
export const CaracterName = styled.p`
    margin-left:8px;
    font-size:14px;
    color:#747171;
`;

export const ContainerFooter = styled.section`
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:black;
    font-size:16px;
    font-weight:bold;
    color:white;
`;


