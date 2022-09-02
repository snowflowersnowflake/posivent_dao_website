import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import NaviBar from '../components/NaviBar'
import Footer from '../components/Footer'
import 'bootstrap/scss/bootstrap.scss'
const IndexShared = ({children}) => {
    const { dataYaml } = useStaticQuery(
      graphql`
        query {
          dataYaml {
            index {
              logo
            }
            foot
          }
        }
      `
    )
      return (
        <ThemeProvider>
          <NaviBar key="navi" title={dataYaml.index.logo}/>
              {children}
          <Footer key="footer" foot={dataYaml.foot}/>
        </ThemeProvider>
      )
  }
  
  export default IndexShared