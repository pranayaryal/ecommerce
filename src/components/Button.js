import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.3rem;
background: transparent;
border: 0.05rem solid #009ffd;
color: lightblue;
border-radius: 0.2rem;
padding: 0.2rem 0.5rem;
cursor: pointer,
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: #009ffd;
    color: blue;
}
&:focus {
    outline: none;
}

`