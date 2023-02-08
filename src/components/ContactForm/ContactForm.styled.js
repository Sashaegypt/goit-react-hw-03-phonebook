import styled from 'styled-components'

export const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  max-width: 250px;
  margin-bottom: 25px;
`

export const Label = styled.label`
 display: block;
 margin-bottom: 10px;
 margin-top: 10px;
 font-weight: 500;
`

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #487996;
  border-radius: 10px;
  color: #000;
  font-weight:300;

  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    outline: rgba(0, 0, 0, 0);
  }
`

export const Button = styled.button`
  width: 160px;
  padding: 5px;

  margin-top: 20px;

  background-color: #fff;
  border: 1px solid #fff;
  font-weight: 500;
  margin-left: auto;
  border-radius: 10px;

  transition: all 250ms linear;

  &:hover,
  &:focus{ 
    border: 1px solid #2196f3;
    background-color: #2196f3;
    color: #fff;
    outline: rgba(0, 0, 0, 0);
  }
`