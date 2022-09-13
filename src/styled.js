import styled from "styled-components"
import { FaRegTrashAlt, FaCheckSquare} from "react-icons/fa";

export const Container = styled.div`
background: #b6ccc7;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const Todolist = styled.div`
background: #ffffff;
border-radius: 5px;
padding: 30px 20px;
text-align: center;
@media (max-width: 600px) {
    padding: 20px 10px;
 
      }


ul{
    padding: 0;
    margin-top: 60px;
    font-size: 18px;
}

`
export const Imag = styled.img`
width: 300px;
@media (max-width: 400px) {
    width: 200px;
 
      }
`
export const Input = styled.input`
border: 2px solid rgb(209, 211, 212, 0.4);
border-radius: 5px;
height: 40px;
margin-right: 40px;
width: 340px;
padding: 0 10px;
font-size: 18px;

@media (max-width: 600px) {
    width: 200px;
    margin-right: 10px;
      }
      @media (max-width: 400px) {
    width: 150px;
    height: 30px;
      }
      



`
export const Button = styled.button`
background: #8052EC;
border-radius: 5px;
width: 130px;
height: 40px;

color: #FFFFFF;

font-size: 17px;
font-weight: 900;
font-style: normal;
line-height: 2px;
border: none;
cursor: pointer;

@media (max-width: 600px) {
    width: 70px;
    font-size: 12px;
      }
@media (max-width: 400px) {
    width: 50px;
    font-size: 8px;
    height: 30px;
      }


&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}

`
export const ListItem = styled.div`
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
text-decoration: ${props => props.isFinished ? "line-through" : '' };
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;
margin-bottom: 30px;
width: 500px;

@media (max-width: 600px) {
    width: 300px;
      }

      @media (max-width: 400px) {
    width: 200px;
    height: 50px;
      }


li{
    list-style: none;
}

`
export const Check = styled(FaCheckSquare)`
cursor: pointer; 
color: green;
`

export const Trash = styled(FaRegTrashAlt)`
cursor: pointer; 
color: red;
`