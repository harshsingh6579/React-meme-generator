import memeFaceImg from "../images/meme-face.png"

export default function Header() {
    return (
        <header className="header">
            <img className="memeFaceImg" src={memeFaceImg} alt="Laughing Face"/>
            <h1 className="logo-text">Meme Generator</h1>
        </header>
    )
}