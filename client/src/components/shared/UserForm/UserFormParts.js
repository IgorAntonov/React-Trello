import styled, { css } from 'styled-components';

import { media } from 'Src/helpers';
import { Button, StyledLink, P } from '../';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;

  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  ${media.mobile`
    width: 90%;
  `}
  ${media.tablet`
    width: 50%;
  `}
  ${media.desktop`
    width: 35%;
  `}
`;

export const Label = styled.label`
  position: absolute;
  left: 0.3rem;
  top: 0.6rem;

  pointer-events: none;
  color: #999; 
  transition: 0.2s ease all;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.6rem 0.6rem  0.6rem  0.3rem;
  
  border:none;
  box-shadow:  inset 0 -1px 0 0 #999;
  transition: 0.2s ease all;
  :focus {
    outline: none;
    box-shadow:  inset 0 -2px 0 0 #337ab7;
    + label {
      top: -1rem;
      font-size:0.9rem;
      color:#337ab7;
    }  
  }
  ${props => props.value && css`
    + label {
      top: -1rem;
      font-size:0.9rem;
      color:${props.valid ? '#337ab7' : 'red'};
    } 
  `}
`;

export const Field = styled.div`
  position: relative;
  margin-bottom:2rem;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Submit = styled(Button)`
  flex: 1;

  margin: 0;
  border-radius: 0;

  background-color: #3f51b5;
`;

export const Cancel = styled(StyledLink)`
  flex: 1;

  margin: 0;
  border-radius: 0;

  color: #f4511e;
  background-color: #fff;
  text-align: center;
  
  transition: 0.3s all;
  :hover {
    color: #fff;
    background-color: #f4511e;
  }
`;

export const SubmitError = styled(P)`
  color: red;
  text-align: center;
  padding-top: 1rem;
`;
