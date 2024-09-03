const HistoricoCard = ({ dia, valor }) => {
  return (
    <div className="flex justify-between rounded bg-purple-100 font-semibold text-purple-500 px-3 py-4" >
      <span>
        {dia}
      </span>
      <span className="font-bold">
        {valor}
      </span>
    </div>
  )
}

export default HistoricoCard;