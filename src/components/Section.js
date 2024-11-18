export default function Section() {
    return (
        <div className="section">
            <div className="meme-text-container">
                <div className="top text-container">
                    <label htmlFor="top-text-input">Top Text</label>
                    <input id="top-text-input" placeholder="Top Text" />
                </div>
                <div className="bottom text-container">
                    <label htmlFor="bottom-text-input">Bottom Text</label>
                    <input id="bottom-text-input" placeholder="Bottom Text" />
                </div>
            </div>
            <button className="btn">Get another Meme Image</button>
        </div>
    )
}