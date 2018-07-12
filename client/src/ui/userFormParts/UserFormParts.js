import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { media } from 'Src/helpers';
import { Button, StyledLink, P } from 'Src/ui';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  padding: 2rem;
  border-radius: 4px;
  
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  ${media.mobile`
    width: 90%;
  `}
  ${media.tablet`
    width: 50%;
  `}
  ${media.desktop`
    width: 40%;
  `}
`;

export const Label = styled.label`
  position: absolute;
  left: 0.3rem;
  top: 0.6rem;

  pointer-events: none;
  color: #999;
  transition: 0.2s ease all;
  font-size: 0.6rem;
  ${media.mobile`
    font-size: 0.8rem;
  `}
  ${media.tablet`
    font-size: 0.9rem;  
  `}
  ${media.desktop`
    font-size: 1rem;
  `}
`;

export const StyledField = styled(Field)`
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
      color:${props.warn ? 'red' : '#337ab7'};
    } 
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Submit = styled(Button)`
  flex: 1;
  justify-content: center;

  margin: 0;
  border-radius: 0;

  background-color: #3f51b5;
`;

export const Cancel = styled(StyledLink)`
  flex: 1;
  justify-content: center;

  margin: 0;
  border-radius: 0;

  color: #f4511e;
  background-color: #fff;
  
  transition: 0.3s all;
  :hover {
    color: #fff;
    background-color: #f4511e;
  }
`;

export const SubmitError = styled(P)`
  padding-top: 1rem;

  color: red;
  text-align: center;
`;
