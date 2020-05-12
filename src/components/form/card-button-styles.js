import styled from "styled-components";


export const CardButtonStyles = styled.button`
  
   width: 10vw;
   height: 4vw;
   margin: 0 auto;
   box-sizing: border-box;
   outline: none;
   font-family: Arial;
   cursor: pointer;
  padding: 2vw 3vw;
  font-weight: bolder;
  font-size: 1.5vw;
  text-align: center;
  cursor: pointer;
    line-height: 5px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  color: red;
   background-color: blue;
      -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
   transition:border-top-left-radius .5s ease-out;
   transition:border-bottom-right-radius .8s ease-in-out;
   transition:transform 1.5s ease-out;
    &:hover{
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    }
    &:active{
    transform: scale(1.1);
    
   
    }
    
    
   
   
`;
