// eslint-disable-next-line
import React, {useState} from 'react'
import styled from 'styled-components'
import BoldButton from './BoldButton'
import ItalicButton from './ItalicButton'
import UnderlineButton from './UnderlineButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
`
const EditorImage = styled.img`
  max-width: 70%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
`
const ButtonList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`
const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'none')};
`

const TextEditor = () => {
  const [isBold, setBold] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [isUnderline, setUnderline] = useState(false)

  return (
    <Container>
      <Heading>Text Editor</Heading>
      <EditorImage
        src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        alt="text editor"
      />
      <ButtonList>
        <li>
          <BoldButton isActive={isBold} onClick={() => setBold(!isBold)} />
        </li>
        <li>
          <ItalicButton
            isActive={isItalic}
            onClick={() => setItalic(!isItalic)}
          />
        </li>
        <li>
          <UnderlineButton
            isActive={isUnderline}
            onClick={() => setUnderline(!isUnderline)}
          />
        </li>
      </ButtonList>
      <TextArea
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
        placeholder="Type your text here"
      />
    </Container>
  )
}

export default TextEditor
