export default function MemeImage({formDataProp, memeImage}) {
 
    return (
        <div className="meme-img-container">
            <img className="meme-image" src={memeImage} />
            <p className="meme-top-text">{formDataProp.topText}</p>
            <p className="meme-bottom-text">{formDataProp.bottomText}</p>
        </div>
    )
}