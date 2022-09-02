import SSRProvider from 'react-bootstrap/SSRProvider';
import React from 'react'

export const wrapPageElement = ({ element, props }) => {
    return <SSRProvider {...props}>{element}</SSRProvider>
}