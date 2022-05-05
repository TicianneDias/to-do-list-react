import styled from 'styled-components';

export const Head = styled.header`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
    background-image: linear-gradient(to top, darkblue, blue, #4747fa);
    font-family: 'Nanum Pen Script', cursive; //'PT Sans Narrow', sans-serif;
    font-size: 50px;
    color: white;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-bottom: 2px dashed white;
    
    div {
        color: yellow;
        
    }
    .checkMark {
    display: flex !important;
    padding: 10px;
    }
`;
