import './navbar.css'

export default function NavBar() {
  return (
    <div className="top">

        <div className="left">
        <i className="icon fa-brands fa-linkedin"></i>
        <i className="icon fa-brands fa-instagram"></i>
        <i className="icon fa-brands fa-github"></i>
        </div>

        <div className="center">
            <ul className='list'>
                <li className='listItem'>Home</li>
                <li className='listItem'>About</li>
                <li className='listItem'>Contant</li>
                <li className='listItem'>PlaceHolder</li>
            </ul>
        </div>

        <div className="right">
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
