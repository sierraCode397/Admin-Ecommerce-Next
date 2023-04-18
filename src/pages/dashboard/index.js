import { useState, useEffect } from 'react';
import Pagination from '@common/Pagination';
import { Chart } from '@common/Chart';
import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import { deleteProduct } from '@services/api/products';
import useAlert from '@hooks/useAlert';
import Alert from '@common/Alert';
import Link from 'next/link';
import { XCircleIcon } from '@heroicons/react/solid';

const PRODUCT_LIMIT = 10;
const PRODUCT_OFFSET = 0;

export default function Dashboard() {
  const { alert, setAlert, toggleAlert } = useAlert();
  const [offset, setOffset] = useState(PRODUCT_OFFSET);
  const products = useFetch(endPoints.products.limitOffset(PRODUCT_LIMIT, offset));
  let totalItems = useFetch(endPoints.products.limitOffset(0, 0)).length;
  const refreshProducts = () => {
    setOffset(PRODUCT_OFFSET); // establecer offset en el valor original
    fetch(endPoints.products.limitOffset(0, 0))
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el valor de totalItems con la longitud de la nueva lista de productos
        const newTotalItems = data.length;
        // Asignar el nuevo valor a la constante totalItems
        totalItems = newTotalItems;
        console.log(totalItems);
      })
      .catch((error) => console.error(error));
  };
  const [myComponentKey, setMyComponentKey] = useState(0);

  const handleRefreshClick = () => {
    // Incrementar la clave de MyComponent para forzar su actualización
    setMyComponentKey(myComponentKey + 1);
  };

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);
  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Chart',
        data: countOccurrences(categoryCount),
        borderWidht: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        refreshProducts();
        setAlert({
          active: true,
          message: 'Delete product SuccessFully',
          type: 'error',
          autoClose: true,
        });
        handleRefreshClick();
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
      });
  };

  return (
    <>
      <Chart chartData={data} />
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categories
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-Item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/dashboard/edit/${product.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-indigo-600 cursor-ponter hover:text-indigo-900" aria-hidden="true" onClick={() => handleDelete(product.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Alert alert={alert} handleClose={toggleAlert} />
        <Pagination setOffset={setOffset} productNumberLimit={PRODUCT_LIMIT} totalItems={totalItems} key={myComponentKey} />
      </div>
    </>
  );
}
