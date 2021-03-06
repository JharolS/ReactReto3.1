import styled from "styled-components";

export const Container = styled.div`
margin: 20%;
display: flex;
border: 1px solid white;
.picture{
    width: 126px;
    padding-right: 40px;
    margin-right: 40px;
    padding-top: 4em;
    padding-left: 3em;
    background: rgb(140, 27, 247);
    color: white;
    border-top-left-radius: 30px;
  }
  .line{
    background: yellow;
    width: 84%;
    height: 20%;
  }
  .square{
    background:  rgb(140, 27, 247);
    width: 84%;
    height: 60%;
  }
  .picture p{
    width: inherit;
    margin: 0px;
    font-weight: bold;
  }
  .picture h2{
    width: inherit;
    margin: 0px;
    font-weight: 400;
    margin-top: 10px;
  }
  .title{
    display: flex;
  }
  .Form{
    margin-right: 3em;
  }
  .Interaction{
    margin-right: 3em;
  }  
`