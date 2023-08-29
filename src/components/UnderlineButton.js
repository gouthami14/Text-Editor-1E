// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import {AiOutlineUnderline} from 'react-icons/ai'

const Button = styled.button`
  background-color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  color: #f1f5f9;
  padding: 8px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const UnderlineButton = ({isActive, onClick}) => (
  <Button isActive={isActive} onClick={onClick} data-testid="underline">
    <AiOutlineUnderline size={25} />
  </Button>
)

export default UnderlineButton
