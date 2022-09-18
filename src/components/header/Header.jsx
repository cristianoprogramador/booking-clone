import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './header.css'


const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hospedagens</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de Carro</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Táxi / Aeroporto</span>
          </div>
        </div>
        <h1 className="headerTitle">Uma vida inteira de descontos? É genial!</h1>
        <p className="headerDec">
          Pegue recompensas pelas suas viagens - destrave um desconto de 10% ou mais com uma conta CrisBooking
        </p>
        <button className="headerBtn">Entrar / Inscreva-se</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder='Onde você está indo?'
            />
          </div>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className='headerSearchText'>date to date</span>
          </div>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className='headerSearchText'>2 adultos 2 crianças 1 quarto</span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header