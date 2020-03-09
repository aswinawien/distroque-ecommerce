import React from "react";
import styled, { css } from "styled-components";

export const SubmitButtonContainer = styled.button`
  min-width: 100%;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  background-color: black;
  font-family: "Roboto";
  color: white;
  min-width: 100%;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${props =>
    props.isGoogleSignIn &&
    css`
      color: white;
      background-color: #4285f4;
      font-family: "Roboto";
      &:hover {
        background-color: #357ae8;
        border: none;
        color: white;
      }
    `}
`;
