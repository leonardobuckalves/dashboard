import NavigationButton from "./components/NavigationButton";
import { dashboardIcons, headerIcons } from "./constants/index";
import dashlogo from "./assets/dashlogo.png";
import Grafico from "./components/Grafico";
import HistoricoCard from "./components/HistoricoCard";
import InfoCard from "./components/InfoCard";
import HistoricoTable from "./components/HistoricoTable";

function App() {
  return (
    <>
      <div className="flex w-full h-screen font-poppins font-medium">
        <div id="left-section" className="flex flex-col gap-4 w-2/12">

          <div className="flex justify-center">
            <img src={dashlogo} alt="dashboard logo" width="50%" />
          </div>

          {dashboardIcons.map((icon) => {
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
                <p className="text-3xl">Olá, $user</p>
                <p className="text-lg text-gray-500">Aqui estão as informações sobre suas vendas</p>
              </div>
              <div className="flex items-center gap-4">
                {headerIcons.map(icon => {
                  const IconComponent = icon.component;
                  return (
                    <IconComponent key={icon.id} />
                  )
                })}
                <p>Nome $user</p>
              </div>
            </div>

            <div id="graficos" className="flex justify-between space-x-4 m-4">
              <div className="rounded w-1/2 bg-white pt-4 pr-4">
                <div className="ml-4 mb-4">Gráfico de Receitas</div>
                <Grafico />
              </div>
              <div className="rounded w-1/2 bg-white p-4">
                <div className="mb-4">Histórico das transações</div>
                <div className="flex flex-col space-y-4">
                  <HistoricoCard dia="Ontem" valor="R$ 450,32" />
                  <HistoricoCard dia="Quinta-feira" valor="R$ 450,32" />
                  <HistoricoCard dia="Segunda-feira" valor="R$ -450,32" />
                  <HistoricoCard dia="Domingo" valor="R$ -450,32" />
                </div>
              </div>
            </div>

            <div id="infocards" className="flex justify-between space-x-4 m-4">
              <InfoCard
                titulo="Total de vendas"
                valor="R$ 100,00"
                icone="%"
                porcentagem="40%"
                className="bg-white p-4 rounded w-1/4"
              />
              <InfoCard
                titulo="Total líquido"
                valor="R$ 100,00"
                icone="%"
                porcentagem="70%"
                className="bg-white p-4 rounded w-1/4"
              />
              <InfoCard
                titulo="Compras canceladas"
                valor="R$ 100,00"
                icone="%"
                porcentagem="70%"
                className="bg-white p-4 rounded w-1/4"
              />
              <InfoCard
                titulo="Reembolsos"
                valor="R$ 100,00"
                icone="%"
                porcentagem="70%"
                className="bg-white p-4 rounded w-1/4"
              />
            </div>

            <div id="histórico" className="rounded bg-white p-4 m-4">
              <div className="p-4 font-bold">
                Histórico de compradores
              </div>
              <HistoricoTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
