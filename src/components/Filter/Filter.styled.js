import styled from 'styled-components';

export const Div = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 15px;
`;
export const Label = styled.label`
font-weight: 600;
`;
export const Input = styled.input`
 width: 200px;
 margin-left: 10px;
 border-radius: 10px;
 border: 1px solid #fff;

 transition: border 250ms linear;

 &:hover,
 &:focus{ 
    border: 1px solid #2196f3;
     outline: rgba(0, 0, 0, 0);
 }
`;