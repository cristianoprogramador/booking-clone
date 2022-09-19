import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className='siTitle'>Apartamento do Jeff Bacon</h1>
        <span className="siDistance">500 metros do centro</span>
        <span className="siTaxiOp">Transporte gratuito para o Aeroporto</span>
        <span className="siSubtitle">
          Apartamento com ar condicionado
        </span>
        <span className="siFeatures">
          Estudio completo - 1 banheiro - 40m² 1 suite
        </span>
        <span className="siCancelOp">Cancelamento sem taxa</span>
        <span className="siCancelOpSubtitle">
          Você pode cancelar depois, mas o desconto é agora!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excelente</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">R$: 250</span>
          <span className="siTaxOp">Impostos e taxas incluídos</span>
          <button className='siCheckButton'>Verificar disponibilidade</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem