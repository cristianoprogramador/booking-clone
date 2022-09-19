import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Copacabana Palace</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Rua Alameda, nº 645</span>
          </div>
          <span className='hotelDistance'>
            Excelente localização - 500m da praia
          </span>
          <span className='hotelPriceHighlight'>
            Reserve uma noite por R$850 nesse local e receba transporte do aeroporto gratuito.
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img className='hotelImg' src={photo.src} alt="" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1>Receba tratamento de celebridade com serviço de primeira classe em Copacabana Rio de Janeiro</h1>
              <p className='hotelDesc'>
                O Rio de Janeiro Copacabana é um hotel 5 estrelas, situado em frente às águas azuis da Praia de Copacabana. A propriedade dispõe de um spa elegante e uma piscina na cobertura, ambos com vista deslumbrante para o mar.
                Os quartos do Rio de Janeiro Copacabana são sofisticados, bem iluminados e possuem ar-condicionado, TV e frigobar. As acomodações apresentam decoração elegante e contemporânea com móveis de madeira e tons neutros aconchegantes. A maioria dos quartos tem vista incrível do mar.
                Lojas encantadoras, restaurantes e bares animados ficam a apenas 2 quarteirões do hotel. O Forte de Copacabana fica a 3,2 km. O Aeroporto Santos Dumont está localizado a 9,6 km, enquanto o Aeroporto Internacional do Galeão fica a 27,6 km de distância.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfeito para ficar varias noites!</h1>
              <span>
                Localizado na área mais bem avaliada no Rio de Janeiro, este hotel tem uma ótima nota de localização de 9,8
              </span>
              <h2>
                <b>R$: 945</b> (7 noites)
              </h2>
              <button>Reserve agora!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel