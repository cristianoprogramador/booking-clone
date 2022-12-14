import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
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

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve agora!</button>
          <h1 className="hotelTitle">Copacabana Palace</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Rua Alameda, n?? 645</span>
          </div>
          <span className='hotelDistance'>
            Excelente localiza????o - 500m da praia
          </span>
          <span className='hotelPriceHighlight'>
            Reserve uma noite por R$850 nesse local e receba transporte do aeroporto gratuito.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} className='hotelImg' src={photo.src} alt="" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1>Receba tratamento de celebridade com servi??o de primeira classe em Copacabana Rio de Janeiro</h1>
              <p className='hotelDesc'>
                O Rio de Janeiro Copacabana ?? um hotel 5 estrelas, situado em frente ??s ??guas azuis da Praia de Copacabana. A propriedade disp??e de um spa elegante e uma piscina na cobertura, ambos com vista deslumbrante para o mar.
                Os quartos do Rio de Janeiro Copacabana s??o sofisticados, bem iluminados e possuem ar-condicionado, TV e frigobar. As acomoda????es apresentam decora????o elegante e contempor??nea com m??veis de madeira e tons neutros aconchegantes. A maioria dos quartos tem vista incr??vel do mar.
                Lojas encantadoras, restaurantes e bares animados ficam a apenas 2 quarteir??es do hotel. O Forte de Copacabana fica a 3,2 km. O Aeroporto Santos Dumont est?? localizado a 9,6 km, enquanto o Aeroporto Internacional do Gale??o fica a 27,6 km de dist??ncia.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfeito para ficar varias noites!</h1>
              <span>
                Localizado na ??rea mais bem avaliada no Rio de Janeiro, este hotel tem uma ??tima nota de localiza????o de 9,8
              </span>
              <h2>
                <b>R$: 945</b> (7 noites)
              </h2>
              <button>Reserve agora!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel