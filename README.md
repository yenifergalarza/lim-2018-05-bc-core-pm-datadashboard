# Data Dashboard📈📈

## Preámbulo📊 📁

En Laboratoria, las Training Managers (TMs)👩🏻‍💻 hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente en la evaluación
  de una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, proponemos crear un
**data dashboard** (_tablero de visualización de datos_).

## Introducción📊 📁

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada en los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

Sin embargo, los datos por sí solos son de poca utilidad. Para transformar datos
en **información** necesitamos procesarlos y entenderlos. Una manera muy
sencilla de hacerlo es creando _visualizaciones_. Las
empresas líderes de hoy generan visualizaciones dinámicas de su data
que les permiten entender mejor su negocio y tomar decisiones apropiadas.

En este proyecto tendrás tu primer acercamiento a transformar data en
información creando tu primer **data dashboard**.

Si pensamos en un _dashboard_ podemos pensar en el tablero de control de un auto
o el de un avión. Un espacio desde el cual un usuario puede tener acceso a la
información y controles más relevantes, en este caso, del vehículo que está
utilizando. El _dashboard_ de un auto le permite a quien conduce saber a qué
velocidad está yendo, qué cambio/velocidad está utilizando, cuánto combustible
tiene disponible, cuál es la temperatura del motor, cuántas revoluciones por
minuto dan las ruedas, cuánta distancia ha recorrido, etc.

![car dashboard](https://img.buzzfeed.com/buzzfeed-static/static/2017-02/7/12/enhanced/buzzfeed-prod-fastlane-03/original-17515-1486490056-3.jpg?crop=2041:1068;80,248)

## Aplicaciones en el mundo real📊 📁

En el mundo de la web es muy común el uso de _dashboards_. De hecho, [wikipedia](https://goo.gl/P7PF4y)
nos dice que un _dashboard_ puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así, tenemos dashboards como los de:

* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.

* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png)
  para visualizar la información financiera de una empresa.

Seguramente, a lo largo de tu carrera como diseñadora o desarrolladora, te
tocará crear un _data dashboard_. Quizás sea para visualizar la data de un
negocio de delivery de comida, o las rutas históricas de un negocio de
transporte, o simplemente los indicadores clave de tu propio emprendimiento ;)

## Decisiones de diseño🎨 💡

* tuvimos varias ideas respecto al color pero finalmente utilizamos los tonos de la marca y decidimos guiarnos de esos parametros

![logo](https://user-images.githubusercontent.com/39390011/41486589-bb145bf2-70aa-11e8-9db0-622c51b65dfa.png)

* tomamos como prohibido usar lo que nosotros queremos o deseamos para la pagina y tomamos en cuenta las necesidades del usuario,debido a esto creamos uuna "version 2.0" del boceto


luego avanzamos con el diseño de la pagina ,el header originalmente fue negro

![capturabarra](https://user-images.githubusercontent.com/39390011/41674197-e88b293e-7484-11e8-8149-56fc3371fcc7.PNG)

pero ahora elegimos el caracteristico color amarillo de la marca:

![nav amarilo](https://user-images.githubusercontent.com/39390011/41790252-85c191aa-7617-11e8-8312-988344246f5e.PNG)

ademas en la barra de navegacion que originalmente era amarilla :

![capturanav](https://user-images.githubusercontent.com/39390011/41674279-2aa4721c-7485-11e8-8808-aa5284d8f6cc.PNG)

decidimos invertir el orden de los colores,ahora esta barra sera negra:

![barra black](https://user-images.githubusercontent.com/39390011/41790248-836598ac-7617-11e8-9fa1-ce73e128250e.PNG)

deidimos esconder momentaneamente la barra de navegacion ,llegaremos a un acuerdo respecto a ello

![codigo del nav borrado](https://user-images.githubusercontent.com/39390011/42058024-a6ea3f68-7ae4-11e8-9f8c-4261498f4ce8.PNG)

pusimos un prompt,el cual requiere que el usuario ponga sus datos

![promp pag](https://user-images.githubusercontent.com/39390011/42058008-a3bdd200-7ae4-11e8-9dec-dca342ff35aa.PNG)

en nuestra version inicial ,todos los datos eran mostrados mediante una tabla 📅 

![version anterio](https://user-images.githubusercontent.com/39390011/42058010-a42d34ba-7ae4-11e8-9440-3e22c31516db.PNG)

![funcionalidad tabla](https://user-images.githubusercontent.com/39390011/42058021-a6c002d4-7ae4-11e8-883e-1d5bb4b5dd8a.gif)

![tabla descendente y nav oculto](https://user-images.githubusercontent.com/39390011/42058009-a3f4b39c-7ae4-11e8-8854-4876711e6b4f.gif)


luego de contemplar los pro's y los contras de esta version decidimos crear otra version que mostraba los datos mediante cards📛 📄,ya que la version previa tenia los datos de las alumnas organizado de tal forma que la pagina se veia saturada de informacion

### Entrevistas📝
Hicimos 2 entrevistas en la primera presentamos un bosquejo de la pagina:

* Quiénes son los principales usuarios de producto.
Los trainning manager de cada sede 🌎 (lima,santiago,sao paulo,guadalajara y ciudad de mexico),pero pricipalmente los trainnig manager de lima

* Cuáles son los objetivos de estos usuarios en relación con el producto.
 acceder a la informacion del lms(la plataforma de clases)y simplicarla presentacion de la informacion ,haciendo de esta manera mas legible

* Cuáles son los datos más relevantes que quieren ver en la interfaz y
  por qué. Cómo los descubriste.
  => Mediante la entrevista con ale👩🏻‍💻(trainnig manager sede lima),menciono la gran importancia de ver los avances de los ejercios y quizzes,ademas de poder obtener un promedio general por avance del aula

* Cuándo revisan normalmente estos datos los usuarios.
=> Segun la informacion proporcionada por ale👩🏻‍💻(trainnig manager sede lima),actualmente se utiliza un excel ,para administrar y visualizar los datos,esa vista de datos es abrumadora. 

* Cómo crees que el producto les está resolviendo sus problemas.
=> Simplica la obtencion de datos y ademas reduce el tiempo de trabajo debido a que la informacion esta organizada de tal manera que la visualizacion y obtencion de datos es realmente una experencia grata ,apoyandonos en la base de la creacion de una interfaz ligera.

* Cómo fue tu proceso de diseño.
=> Fue un proceso de prueba y error,por que teniamos ideas pero no se adecuaban a la necesidad del usuario ,tuvimos que reconsiderar algunos aspectos y regresar al prototipado.

### Preguntas de la entrevista💭
 - ¿Quisiera saber en que herramienta trabajas para poder obtener y manejar el grado de completitud de las alumnas en la plataforma (LMS)
 => Utilizo Excel,se me hace pesado trabajar con demasiada informacion en excel por que esa forma de organizacion es abrumadora,pero me gusta tener todos los datos a la mano 
  - ¿Cuanto tiempo trabajas en esta heramienta?
    => Un dia completo cada 3 semanas
 
 - ¿Que colores de la paleta de laboratoria prefieres?
   => Amarillo y fucsia💛 💖❇️

- ¿A que informacion o dato le otorgas mayor importancia?
   => Otorgo mayor importancia a los ejercicios y su completitud✔️
  

### Sketch de la solución 💡 ✏️

* primero boceteamos,nuestras ideas hubieron 2 versiones,pero finalmente descartamos lo que no sirve y utilizamos lo que realmente es util para los usuarios 

En la pagina numero 1 ,se pretende mostrar una version preliminar de la vista 1 que mostrara un porcentaje o promedio de todas las alumnas del cohort por curso

![proto virg2](https://user-images.githubusercontent.com/39390011/41487242-7d287d16-70ad-11e8-9404-c95da88b61dc.jpg)

En la pagina numero 2 ,se pretende mostrar una version preliminar de la vista 2 que mostrara un porcentaje o promedio de por alumna pero antes mostrara una tabla por orden de "merito"🎖

![proto virg1](https://user-images.githubusercontent.com/39390011/41487241-7ca32f08-70ad-11e8-941b-93edd7d96147.jpg)

se pretende presentar una version de las 2 vistas juntas con graficas(barras ,dona) donde se espefica horas de trabajo,quizzes ,practices resueltos y existentes por unidad

![proto yeni](https://user-images.githubusercontent.com/39390011/41487240-7c7a2d74-70ad-11e8-90b3-602ea4418570.jpg)


luego de acomodar nuestras ideas y tener claro que queremos hacer ,realizamos las vistas.

![1](https://user-images.githubusercontent.com/39390011/41488515-342ce6e2-70b2-11e8-9eee-e277f93e6132.jpg)

![2](https://user-images.githubusercontent.com/39390011/41488516-3457353c-70b2-11e8-9bd0-56dd993de7c7.jpg)

![3](https://user-images.githubusercontent.com/39390011/41488518-3484922a-70b2-11e8-8b1a-484fc2154ccb.jpg)

![4](https://user-images.githubusercontent.com/39390011/41488519-349fec00-70b2-11e8-89ad-db51cce99c48.jpg)

![5](https://user-images.githubusercontent.com/39390011/41488520-34da0ce6-70b2-11e8-9fd2-f994c11f3168.jpg)

![6](https://user-images.githubusercontent.com/39390011/41488513-33d546a8-70b2-11e8-9df0-668af0416019.jpg)

![7](https://user-images.githubusercontent.com/39390011/41488514-34022a9c-70b2-11e8-9664-675e67d5be20.jpg)


### Wireframe de baja fidelidad📐 📝

* vista 1:

![1](https://user-images.githubusercontent.com/39390011/41486838-b7ec5a8c-70ab-11e8-8dae-e62276cc7cb0.jpg)

* vista 2:

![2](https://user-images.githubusercontent.com/39390011/41486839-b8205ada-70ab-11e8-9171-d90c0ec79bea.jpg)

* vista 3:

![3](https://user-images.githubusercontent.com/39390011/41486841-b8611d54-70ab-11e8-978c-b5026bb972bc.jpg)

* vista 4:

![4](https://user-images.githubusercontent.com/39390011/41486842-b88ef206-70ab-11e8-962a-c8881d1083b3.jpg)

* vista 5:

![5](https://user-images.githubusercontent.com/39390011/41486836-b78e5400-70ab-11e8-838b-3fa8c6dab348.jpg)

* vista 6:

![6](https://user-images.githubusercontent.com/39390011/41486837-b7bcb7e6-70ab-11e8-8fe2-88f77b802371.jpg)

* vista 7:

![7](https://user-images.githubusercontent.com/39390011/41486857-bdae9106-70ab-11e8-8d75-02ef53895e43.jpg)

* vista 8:

![8](https://user-images.githubusercontent.com/39390011/41486858-bdcc2c98-70ab-11e8-8b25-bab82e4974ef.jpg)

* vista 9:

![9](https://user-images.githubusercontent.com/39390011/41486856-bd8bc2ca-70ab-11e8-9607-88a4e3c10d52.jpg)

### Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) 💡👩🏽‍💻

Este diseño tiene representado nuestro _ideal_ de solución.
se creo el wireframe de alta fidelidad mediante figma.
* vista 1:
![1 2](https://user-images.githubusercontent.com/39390011/42146351-e03a1ad6-7d8c-11e8-9a38-271da0c5784d.jpg)

* vista 2:

![2](https://user-images.githubusercontent.com/39390011/42146352-e05e0d56-7d8c-11e8-9237-ef3d51f37b2b.jpg)

* vista 3:

![3](https://user-images.githubusercontent.com/39390011/42146353-e0a946ea-7d8c-11e8-8610-4a03def23d1d.jpg)

* vista 4:

![4](https://user-images.githubusercontent.com/39390011/42146355-e0cdad96-7d8c-11e8-9dd8-e26534e15a2a.jpg)


* vista 5:

![5](https://user-images.githubusercontent.com/39390011/42146356-e0eede58-7d8c-11e8-8769-f7003791d2a7.jpg)

* vista 6:

![6](https://user-images.githubusercontent.com/39390011/42146357-e135a72a-7d8c-11e8-880c-cc79a1ffe5a4.jpg)

* vista 7:

![7](https://user-images.githubusercontent.com/39390011/42146349-dfa0bf6c-7d8c-11e8-80b0-6b29d021516b.jpg)

* vista 8:

![8](https://user-images.githubusercontent.com/39390011/42146350-e0110a6a-7d8c-11e8-85c5-fb2408af7ea7.jpg)




### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Esta es la version real y lograda del proyecto,usamos herramientas como HTML,Java Script y Css
Tomamos en cuenta los principios del diseño responsivo y mobile first (uso de media queries).
 
 ![mobilefirst](https://user-images.githubusercontent.com/39390011/42178871-85d20da4-7df7-11e8-9e0c-157c0f96368f.PNG)


* vista de 1200 pixeles a mayor medida

![1](https://user-images.githubusercontent.com/39390011/42146634-994eabb2-7d8e-11e8-8a6d-1e351843489e.JPG)

* vista de 720 pixeles a mayor medida 

![2](https://user-images.githubusercontent.com/39390011/42146635-996a9d5e-7d8e-11e8-9c2e-3ab89be93e74.JPG)

* vista de 576 pixeles a mayor medida

![3](https://user-images.githubusercontent.com/39390011/42146636-99864392-7d8e-11e8-914e-a06999ab501d.JPG)

* vista de 260 pixeles a mayor medida

![4](https://user-images.githubusercontent.com/39390011/42146633-992ceab8-7d8e-11e8-8c00-ada5131171bd.JPG)

* otorgamos funcionalidad,por ejemplo el filtrado por nombres y cuando pasemos el mouse(hover) sobre las cards,su sombra cambia de color

![gif nombres](https://user-images.githubusercontent.com/39390011/42178098-b246d50c-7df4-11e8-8fbb-4ef5e8eabd97.gif)

* ademas de poder hacer un filtrado ascendente y descendente ,donde el usuario elige que el tipo de filtrado que quiere ,desea o necesita

![gif1 nombres](https://user-images.githubusercontent.com/39390011/42178110-c1bb6a5c-7df4-11e8-8f51-e1fe693e2754.gif)

* no obstante añadimos otros tipos de filtrado por porcentaje de completitud total,porcentaje de ejercicios auto-corregidos, porcentaje de cuestionarios completados, puntuacion promedio en cuestionarios completados , y finalmente de lecturas completadas, cada una con su opcion de filtrado ascendente y descendente

![gif avances](https://user-images.githubusercontent.com/39390011/42178099-b28be3ea-7df4-11e8-8430-73d642901ebd.gif)



