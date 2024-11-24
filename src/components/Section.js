export default function Section({formDataProp, onFormDataChange, onButtonClick}) {
    
    return (
        <div className="section">
            <div className="meme-text-container">
                <div className="top text-container">
                    <label htmlFor="top-text-input">Top Text</label>
                    <input onChange={onFormDataChange} id="top-text-input" placeholder="Top Text" name="topText" value={formDataProp.topText}/>
                </div>
                <div className="bottom text-container">
                    <label htmlFor="bottom-text-input">Bottom Text</label>
                    <input onChange={onFormDataChange} id="bottom-text-input" placeholder="Bottom Text" name="bottomText" value={formDataProp.bottomText}/>
                </div>
            </div>
            <button onClick={onButtonClick} className="btn">Get another Meme Image</button>
        </div>
    )
}

// value={formDataProp.bottomText}