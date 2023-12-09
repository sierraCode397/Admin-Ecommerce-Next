# Admin-Ecommerce-Next

## Descripción

**Admin-Ecommerce-Next** es un servicio de frontend encargado de administrar la tienda E-Commerce mostrada en proyectos anteriores, a la que puedes acceder [aqui](https://e-commerce-next-six.vercel.app/). Esta creado utilizando Next.js y algunas librerias complementarias. Su funcion es poder editar, eliminar o crear nuevos productos con sus respectivas propiedades y que se vean reflejadas en la API que se consume en el E-Commerce.

La APP cuenta con un sistema de inicio de sesion para que solo los que cuenten con un perfil valido puedan acceder y manipular la API. Por motivos de seguridad la sesion es temporal, eh impide el acceso a la ruta secundaria **"/dashboard"**. Se usan los siguinetes EndPoints: 

- products

- users

- auth

- categories

Todos con sus Metodos CRUD

## Rutas

Este proyecto cuenta con dos rutas destacables: 

- "/" la ruta por defecto 

- "/dashboard" la ruta secundaria del resto de la app

La ruta por defecto **"/"** cuenta con la sub ruta **/login** para obtener el inicio de sesion y acceder al resto de la APP.

La ruta secundaria **"/dashboard"** cuenta con la sub ruta **"/dashboard/products"** que es el listado de productos para editarlos, eliminarlos o crear nuevos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Next.js y npm en tu sistema. Puedes descargar ver la documentacion de instalacion de Next.js en [nextjs.org](https://nextjs.org/).

## Instalación desde Terminal

##### 1. Clona este repositorio desde GitHub:

  -  git clone https://github.com/sierraCode397/Admin-Ecommerce-Next.git

##### 2. Navega al directorio de tu aplicación:

-   cd Admin-Ecommerce-Next

##### 3. Instala las dependencias del proyecto:

-  npm install

## Uso

##### Para ejecutar la aplicación en un entorno local, utiliza el siguiente comando:

 - npm run dev

##### Para ejecutar la aplicación en producción, utiliza:

- npm run start

##### Para ejecutar la busqueda de errores en el codigo fuente:

-  npm run lint

##### Para ejecutar la solucion automatica de los errores encontrados:

-  npm run lint:fix

La aplicación estará disponible en el puerto 3000 por defecto, pero puede ser configurado.

## Configuración
Crea un archivo **.ENV** en la raíz del proyecto y proporciona las siguientes variables de entorno para la conexion a la API que contempla este proyecto o alguna otra de tu preferencia (ya sea local o en la nube):

> TAILWIND_MODE = watch

> NEXT_PUBLIC_API_URL = https://api.escuelajs.co
 
> NEXT_PUBLIC_API_VERSION = v1

Este proyecto esta configurado para tratar una variedad de EndPoints ubicados en la direccion de la API Recomendada, de una forma mas dinamica segun se requiera. Desde peticiones para obtener los productos del E-Commerce hasta los de autenticacion para acceder al resto de la APP

## Estructura del Proyecto

La aplicación sigue la arquitectura estandar de **NEXT.js** y se organiza en capas de: "common", "components", "hooks", "pages", "services", "styles" y "layout". Puedes expandir el proyecto agregando más componetes, servicios y demas capas según tus necesidades.

## Licencia
Este proyecto está bajo la licencia ISC.

## Contacto
**Isaac Luisjuan**

Correo Electrónico: izaack107@gmail.com

Sitio Web: [SierraCode397](https://isaac-luisjuan.vercel.app/)
##### Enlace al Repositorio:
Puedes encontrar el código fuente de este proyecto en [GitHub](https://github.com/sierraCode397/Admin-Ecommerce-Next.git).

## Agradecimientos
Este proyecto fue creado en la escuela de Platzi como parte del curso **"Curso Profecional de Next.js"**.

Asegúrate de tener las dependecias instaladas en tu sistema antes de ejecutar estos scripts.

¡Gracias por tu interés en este proyecto! Espero que sea una experiencia interesante y satisfactoria.