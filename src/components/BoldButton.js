// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'

const Button = styled.button`
  background-color: ${props => (props.isActive ? '#f1f5f9' : '#faff00')};
  color: #f1f5f9;
  padding: 8px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const BoldButton = ({isActive, onClick}) => (
  <Button isActive={isActive} onClick={onClick} data-testid="bold">
    <VscBold size={25} />
  </Button>
)

export default BoldButton
