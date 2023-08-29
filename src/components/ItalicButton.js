// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import {GoItalic} from 'react-icons/go'

const Button = styled.button`
  background-color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  padding: 8px;
  border: none;
  cursor: pointer;
  color: #f1f5f9;

  &:focus {
    outline: none;
  }
`

const ItalicButton = ({isActive, onClick}) => (
  <Button isActive={isActive} onClick={onClick} data-testid="italic">
    <GoItalic size={25} />
  </Button>
)

export default ItalicButton
