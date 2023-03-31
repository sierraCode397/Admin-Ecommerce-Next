import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}  /* Estos son los datos que se le pasan por parametro a la grafica que va precentar */
        options={{
          plugins: {   /* Opsiones */
            title: {   /* Estos son las configuraciones que se le dan a los diferentes atributos de los datos que se le dieron al tipo de grafica */
              display: true,
              text: 'Product Graph',
              fontSize: 30,
            },
          },
          plugins: { 
            legend: {
              display: true,
              position: 'right',
            },
          },
        }}
      />
    </>
  );
};
