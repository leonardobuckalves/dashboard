const InfoCard = ({ titulo, valor, icone, porcentagem, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span>
        {titulo}
      </span>
      <span className="font-bold">
        {valor}
      </span>
      <span className="flex">
        {icone}
        {porcentagem}
      </span>
    </div>
  )
}

export default InfoCard;