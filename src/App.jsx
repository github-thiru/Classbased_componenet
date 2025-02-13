import React, { Component } from "react"
import Header from "./Component/Header"
import Banner from "./Component/Banner"
import Card from "./Component/Card"
import Footer from "./Component/Footer"

class App extends React.Component{
      render(){
        return(
          <>
          {/* <h1>App</h1> */}
          <Header />
          <Banner />
          <Card />
          <Footer />
          </>

        )
      }
}

export default App