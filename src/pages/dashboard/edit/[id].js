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
    if (!router.isReady) return;
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
  }, [router?.isReady]);

  return notFound ? <NotFound /> : <FormProduct product={product} />;
}
