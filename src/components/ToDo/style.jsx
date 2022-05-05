import styled from 'styled-components';
export const CompleteToDo = styled.div`
font-family: 'Courier New', Courier, monospace;
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px auto;
color: #fff;
background: linear-gradient(
    90deg,
    #e43516 0%,
    #f54e38 100%);
    border-left: 5px solid white;
    padding: 16px;
    border-radius: 5px;
    width: 90%;

    

&:nth-child(4n + 1) {
  background: linear-gradient(
    90deg,
    #3d9c4a 0%,
    #74ee70 100%
  );
  border-left: 5px solid #40a6f0;
}

&:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    #d1c73e 0%,
    #ece932 100%
  );
  border-left: 5px solid crimson;
}

&:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    #40a6f0 0%,
    #438cec 100%
  );
  border-left: 5px solid yellow;
}
.icons {
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  color: darkblue;
}

.delete-icon {
  margin-right: 5px;
}
`