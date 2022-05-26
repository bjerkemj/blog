import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSmall">React & Node</span>
            <span className="headerTitleLarge">Blog</span>
            <img 
                className="headerImg"
                src={require("../images/strandaMountains.JPG")}
                alt=""
            />
        </div>
    </div>
  )
}
