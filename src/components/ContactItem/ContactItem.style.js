import styled from 'styled-components';

export const Button = styled.button`
  padding: 2px 4 px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 250ms linear;

  &:hover,
  &:focus{
    border: 1px solid #2196f3;
    color: #fff;
    background-color: #2196f3;
  }
`

export const Li = styled.li`
 list-style: none;
 
 margin-left: auto;
 margin-right: auto;
 height: 50px;
`