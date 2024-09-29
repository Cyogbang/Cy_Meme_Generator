import React from "react";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/3l60ph.jpg")

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1yxkcp.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])
  console.log(allMemeImages)

  function getMemesImage() {
    // console.log("memesIMG")
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {  
    const {name, value} = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <main>
      <div className="memeForm">
        <div>
          <label>
            Top text
            <br />
            <input
              type="text"
              id="topTXT"
              placeholder="shut up"
              name="topMemeText"
              value={meme.topMemeText}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bottom text
            <br />
            <input
              type="text"
              id="bottomTXT"
              placeholder="and take some cash"
              name="bottomMemeText"
              value={meme.bottomMemeText}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="memeButton" onClick={getMemesImage}>
          Get a new meme image <img src="./images/Meme-creator.png" alt="meme" />
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="memeImage" />
        <h2 className="topText top">{meme.topMemeText}</h2>
        <h2 className="bottomText bottom">{meme.bottomMemeText}</h2>
      </div>
    </main>
  );
}
