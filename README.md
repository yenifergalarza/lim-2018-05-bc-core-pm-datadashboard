
![capturabarra](https://user-images.githubusercontent.com/39390011/41674197-e88b293e-7484-11e8-8149-56fc3371fcc7.PNG)

pero ahora elegimos el caracteristico color amarillo de la marca:

![nav amarilo](https://user-images.githubusercontent.com/39390011/41790252-85c191aa-7617-11e8-8312-988344246f5e.PNG)

ademas en la barra de navegacion que originalmente era amarilla :

![capturanav](https://user-images.githubusercontent.com/39390011/41674279-2aa4721c-7485-11e8-8808-aa5284d8f6cc.PNG)

decidimos invertir el orden de los colores,ahora esta barra sera negra:

![barra black](https://user-images.githubusercontent.com/39390011/41790248-836598ac-7617-11e8-9fa1-ce73e128250e.PNG)

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

#### Preguntas de la entrevista💭
 - ¿Quisiera saber en que herramienta trabajas para poder obtener y manejar el grado de completitud de las alumnas en la plataforma (LMS)
 => Utilizo Excel,se me hace pesado trabajar con demasiada informacion en excel por que esa forma de organizacion es abrumadora,pero me gusta tener todos los datos a la mano 
  - ¿Cuanto tiempo trabajas en esta heramienta?
    => Un dia completo cada 3 semanas
 
 - ¿Que colores de la paleta de laboratoria prefieres?
   => Amarillo y fucsiatiene disponible, cuál es la temperatura del motor, cuántas revoluciones por


- ¿A que informacion o dato le otorgas mayor importancia?
   => Otorgo mayor importancia a los ejercicios y su completitud
  

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Debes hacer un _sketch_ (boceto) de tu solución usando papel y lápiz, tomarle
una foto, subirla a tu repositorio y hacer mención del _sketch_ en tu `README.md`.

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

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés).
Para eso debes aprender a utilizar alguna herramienta de diseño visual.
Nosotros te recomendamos [Figma](https://www.figma.com/) que  es una herramienta
que funciona en el navegador y, además, puedes crear una cuenta gratis. Sin
embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar tu _ideal_ de solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear.

Tu diseño debe seguir los fundamentos de _visual design_, como:
contraste, alineación, jerarquía, entre otros. Tip: revisa el contenido de UX
de la unidad de visual design.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás priorizar.

Como mínimo, tu implementación debe:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las estudiantes de ese cohort
   - Para cada estudiante:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar estudiantes por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar estudiantes por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.
4. Incluir pruebas unitarias.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.
