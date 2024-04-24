import { useState } from 'react'

export const useStyleAndLike = () => {
    const [myStyle, setMyStyle] = useState({
        color: "#008000",
        fontSize: "18px"
    });

    const [like, setLike] = useState(0);

    const handleFontSizeChange = (e) => {
        setMyStyle({
            ...myStyle,
            fontSize: e.target.value
        });
    };

    const handleColorChange = (e) => {
        setMyStyle({
            ...myStyle,
            color: e.target.value
        });
    };

    const handleLikeClick = () => {
        setLike(like + 1);
    };

    const onlyTextChange = () => {
        setMyStyle({
            ...myStyle,
            fontSize: "30px"
        });
    };

    return {
        myStyle,
        setMyStyle,
        like,
        handleColorChange,
        handleFontSizeChange,
        handleLikeClick,
        onlyTextChange
    };
};