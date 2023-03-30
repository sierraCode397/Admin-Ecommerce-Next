import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useState } from"react";

export default function Pagination({setOffset, productNumberLimit, totalItems }) {
    const pivot = 3; 
      /*con el pivote podemos decidir cuántos números queremos que esténdel lado izquierdo y del lado derecho*/
    const itemsArray = [];
    const [current, setCurrent] = useState(1);
    const totalNumberPages = Math.ceil(totalItems / productNumberLimit);
      //Con Math.ceil se obtiene un número entero por encima del resultado
    const final = Math.min(Math.max(pivot * 2 + 2, pivot + current + 1), totalNumberPages + 1);
    const initial = Math.min(Math.max(final - (pivot * 2 + 1), 1), Math.max(current - pivot, 1));
      //Con el pivote se calculan los números que estarán al inicio y al final del reglón de páginas

    const getShade =(i) => {
      return i === current ?
        'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' :
        'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
    }
      //Con la función getShade se resalta la página seleccionada

    for (let i = initial; i < final; i++) {
      itemsArray.push(
        <a
          key={`Page-${i}`}
          onClick={() => {
            setCurrent(i);
            setOffset((i - 1) * productNumberLimit);
          }}
          href="#"
          aria-current="page"
          className={`${getShade(i)}
                      relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
          {i}
        </a>
      );
    }
      //Se irá agregando al array los botones que aparecerán en el reglón de páginas

    const startButton = () => {
      setCurrent(1);
      setOffset(0);
    };
      //Con startButton la interfaz muestra los primeros 5 productos del total

    const endButton = () => {
      setCurrent(totalNumberPages);
      setOffset((totalNumberPages -1)* productNumberLimit);
    };
      //Con endButton la interfaz muestra los últimos 5 productos del total

/*     const prevButton = () => {
      if (current > 1) {
        setCurrent(current - 1);
        setOffset((current - 2) * productNumberLimit);
      }
    };

    const nextButton = () => {
      if (current < totalNumberPages) {
        setCurrent(current + 1);
        setOffset(current * productNumberLimit);
      }
    }; */

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mb-6 mt-6">
{/*       <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div> */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing &nbsp; <span className="font-medium">{productNumberLimit * (current - 1) + 1}&nbsp;</span> to{' '}&nbsp;<span className="font-medium">{current * productNumberLimit < totalItems ?
            current * productNumberLimit : totalItems}&nbsp;</span> of &nbsp;
            <span className="font-medium">{totalItems}&nbsp;</span> results
          </p>
        </div>
        <div className='ml-4'>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              onClick={startButton}
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {itemsArray}
            <a
              onClick={endButton}
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
