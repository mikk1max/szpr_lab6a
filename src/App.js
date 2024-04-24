import './App.css';
import React from "react"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"
import { useStyleAndLike } from './components/functions';

function App() {

  const {
    myStyle,
    setMyStyle,
    like,
    handleColorChange,
    handleFontSizeChange,
    handleLikeClick,
    onlyTextChange
  } = useStyleAndLike();

  return (
    <div className="grid-parent">
      <Header myStyle={myStyle} like={like}></Header>
      <SideBar myStyle={myStyle} setMyStyle={setMyStyle} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange}></SideBar>
      <MainArea myStyle={myStyle}></MainArea>
      <Footer onlyTextChange={onlyTextChange} handleLikeClick={handleLikeClick}></Footer>
    </div>
  )
}
export default App