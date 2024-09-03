import NavigationButton from "./components/NavigationButton"
import { icons } from "./constants/index"
import Grafico from "./components/Grafico";

function App() {
  return (
    <>
      <div className="flex w-full h-screen font-poppins">
        <div id="left-section" className="flex flex-col gap-4 w-2/12">
          <h2>Logo/Name</h2>

          {icons.map((icon) => {
            const IconComponent = icon.component;

            return (
              <NavigationButton
                key={icon.id}
                IconComponent={icon.text === "Desconectar"
                  ? <IconComponent className="" />
                  : <IconComponent className="group-hover:stroke-purple-500 transition-colors duration-300" />}
                text={icon.text}
                className={icon.text === "Desconectar"
                  ? "text-red-500 bg-red-50 hover:bg-red-300 hover:text-red-500"
                  : ""}
              />
            )
          })}
        </div>

        <div id="right-section" className="flex justify-center w-10/12 h-full space-x-4 bg-blue-100">
          <div className="overflow-auto flex flex-col justify-around content-center w-5/6">
            <div id="header" className="flex justify-between content-center m-4">
              <div>
                <p>Olá, $user</p>
                <p>Aqui estão as informações sobre suas vendas</p>
              </div>
              <div className="flex">
                <p>Lupa</p>
                <p>Sino</p>
                <p>Nome</p>
              </div>
            </div>

            <div id="graficos" className="flex justify-between space-x-4 m-4">
              <div className="rounded w-1/2 bg-white pt-4 pr-4">
                <div className="font-bold ml-4 mb-4">Gráfico de Receitas</div>
                <Grafico />
              </div>
              <div className="rounded w-1/2 bg-white p-4">
                <div className="font-bold mb-4">Histórico das transações</div>
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between font-semibold rounded text-purple-500 bg-purple-100 px-3 py-4">
                    <span>Ontem</span>
                    <span>R$ -450,32</span>
                  </div>

                  <div className="flex justify-between font-semibold rounded text-purple-500 bg-purple-100 px-3 py-4">
                    <span>Quinta-feira</span>
                    <span>R$ -450,32</span>
                  </div>

                  <div className="flex justify-between font-semibold rounded text-purple-500 bg-purple-100 px-3 py-4">
                    <span>Segunda-feira</span>
                    <span>R$ -450,32</span>
                  </div>

                  <div className="flex justify-between font-semibold rounded text-purple-500 bg-purple-100 px-3 py-4">
                    <span>Domingo</span>
                    <span>R$ -450,32</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="infocards" className="flex justify-between space-x-4 m-4">
              <div className="bg-white p-4 rounded w-1/4">
                <p>Total de vendas</p>
                <p>R$</p>
                <p>%</p>
              </div>
              <div className="bg-white p-4 rounded w-1/4">
                <p>Total líquido</p>
                <p>R$</p>
                <p>%</p>
              </div>
              <div className="bg-white p-4 rounded w-1/4">
                <p>Compras canceladas</p>
                <p>R$</p>
                <p>%</p>
              </div>
              <div className="bg-white p-4 rounded w-1/4">
                <p>Reembolsos</p>
                <p>R$</p>
                <p>%</p>
              </div>
            </div>

            <div id="histórico" className="rounded bg-white p-4 m-4">
              <div className="p-4 font-bold">
                Histórico de compradores
              </div>

              <div>
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
                    <tr>
                      <td className="p-4">02/08/2023</td>
                      <td className="p-4">Roberto Santos</td>
                      <td className="p-4">Rio Grande do Sul</td>
                      <td className="p-4">R$ 15,00</td>
                      <td className="p-4">Aprovado</td>
                    </tr>
                    <tr>
                      <td className="p-4">02/07/2023</td>
                      <td className="p-4">Martaboula Finaciaga</td>
                      <td className="p-4">Sampaolo</td>
                      <td className="p-4">R$ 27,00</td>
                      <td className="p-4">Aprovado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
