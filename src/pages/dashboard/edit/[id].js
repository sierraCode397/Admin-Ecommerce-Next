import FormProduct from '@components/FormProduct';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api/index';
import NotFound from "@pages/NotFound";

export default function Edit() {
  const [product, setProduct] = useState();
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return; /* Solo se ejecuta una vez para evitar el error inicial PORQUE todavia no tenemos acceso al ID de la API */
    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getId(id));

        if (response) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    }
    getProduct();
  }, [router?.isReady]); /* Controla cuando se vuelva a usar el efecto secundario de useEffect  */

  return notFound ? <NotFound /> : <FormProduct product={product} />;
}
