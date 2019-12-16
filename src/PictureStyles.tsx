import styled from "styled-components";



export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Cedarville Cursive', cursive;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: #f8f8ff;

  padding: 0.5em;
  margin: 1em;
  box-shadow: 5px 10px 8px #888888;

  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.12);
  }
`;

export const Image = styled.img`
  width: 20em;
  height: auto;
`;