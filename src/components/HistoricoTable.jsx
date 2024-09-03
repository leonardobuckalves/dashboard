import { historicoData } from "../constants/index"

const HistoricoTable = () => {
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th className="p-4">Data</th>
          <th className="p-4">Nome</th>
          <th className="p-4">Localização</th>
          <th className="p-4">Valor</th>
          <th className="p-4">Situação</th>
        </tr>
      </thead>
      <tbody>
        {historicoData.map(item => (
          <tr key={item.id}>
            <td className="p-4">{item.date}</td>
            <td className="p-4">{item.nome}</td>
            <td className="p-4">{item.cidade}</td>
            <td className="p-4">{item.valor}</td>
            <td className="p-4">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default HistoricoTable;