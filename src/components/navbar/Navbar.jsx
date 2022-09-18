import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">CrisBooking</span>
            <div className="navItems">
                <button className="navButton">Cadastrar</button>
                <button className="navButton">Entrar</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar