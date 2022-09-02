import * as React from "react"
import styled from "styled-components"
const CenteredNotFound = styled.div`
text-align-last: center;
font-size: 10rem;

`

const NotFoundPage = () => {
  return (
    <>
      <CenteredNotFound>404</CenteredNotFound>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
