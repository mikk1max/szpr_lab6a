function SideBar({ myStyle, setMyStyle, handleFontSizeChange, handleColorChange }) {
    return (
        <div className="sidebar">
            <input type="text" value={myStyle.fontSize} onChange={handleFontSizeChange} />
            <input type="text" value={myStyle.color} onChange={handleColorChange} />
            <button onClick={() => {
                setMyStyle({
                    color: "#FF1493",
                    fontSize: 20 + "px"
                })
            }}>Ustaw parametry tekstu na 20px i pink.</button>
        </div>
    )
}

export default SideBar