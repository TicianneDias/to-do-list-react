import styled from 'styled-components';

export const ToDoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    background-image: linear-gradient(45deg, darkblue, blue);
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
    width: 550px;
    min-height: 600px;
    margin: 85px auto;
    padding-bottom: 32px;

    font-family: 'Nanum Pen Script', cursive;
    color: white;
    text-align: center;
    text-shadow: 1px 1px 1px black;

    span {
        color: yellow;
    }

    h1 {
        font-size: 2rem;
    }
    
    @media(max-width: 768px){
        width: 400px;
    }
    @media(max-width: 458px){
        width: auto;

        h1 {
            font-size: 1.7rem;
        }
    }
`;