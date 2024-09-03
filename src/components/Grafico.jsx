import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { graficoData } from '../constants';

const Grafico = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={graficoData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
                <Bar dataKey="dinheiro" barSize={30} fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Grafico;