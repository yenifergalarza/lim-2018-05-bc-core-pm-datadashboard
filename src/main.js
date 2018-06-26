var name = prompt('Ingresa tu nombre por favor');
var name1 = document.getElementById('name');
name1.textContent = "Bienvenid@  " + name;
//boton para que cuando presione el boton se esconda la barra de navegacion
function yes() {
  var x = document.getElementById('oculto');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//aqui crea una variable obteniendo desde el id  del html
//seleccion del nodo padre
const selectElement = document.getElementById("cohorts");
//llamamos de forma asincrona el json de la lista de cohorts
fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(json => {
    const sedes = json;
    //    console.log(sedes.length);
    //llamamos la funcion para que pase como argumentos los datos del json y creen un nodo de opction dentro de un select
    for (let i = 0; i < sedes.length; i++) {
      //creo el elemento option por cada cohort
      const optionElements = document.createElement('option');
      //creo el texto (nodo  de texto)
      const contenidoOption = document.createTextNode(sedes[i].id);
      //a la etiqueta padre le doy su hijo
      optionElements.appendChild(contenidoOption);
      optionElements.value = sedes[i].id
      //console.log(sedes[i].id);
      selectElement.appendChild(optionElements);
    }
    //cuando detecte el cambio de esa selecion mediante ese evento escondera un div accediendo mediante el id
    //al elemento select le voy a colocar un evento
    selectElement.addEventListener("change", (e) => {
      if (e.target.value === "lim-2018-03-pre-core-pw") {
        document.getElementById("barra").style.display = "none";
      }
    })
  })
  .catch((err) => {
    // algo salió mal...
    console.error("failed", err);
  });
  //Hace que el menu  lateral aparezca y desaparezca
const buttonAddClass = document.getElementById("styleWhenClickHtml");
const styleChange = document.getElementById("styleChangeHtml");
buttonAddClass.addEventListener('click',() => {
  styleChange.classList.add('class2');
  styleChange.classList.remove('class1');
 
});
const fileCohort = '../data/cohorts.json';
const fileProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urls = [fileCohort, fileProgress, fileUsers];
let cohorts = [];
let progress = [];
let users = [];
//parametros por defecto: en caso de llamar a la funcion sin enviar parametros, usará los valores por defecto


const listStudents = document.getElementById('listStudents');
const botonAlumna = document.getElementById('botonalumna');
//ordenar
const orderBy = document.getElementById('orderBy');
const orderDirection = document.getElementById('orderDirection');
const buttonSort = document.getElementById('sort');
//Aqui llamo a mi funcion para que se ejecute
botonAlumna.addEventListener('click', () => {
    //loadStats(); //usara parametros por defecto
    processCohortData();
});
buttonSort.addEventListener('click', () => {
    //loadStats(orderBy.value, orderDirection.value); //usara los value de los select
});

selectElement.addEventListener('change', () => {
    
    Promise.all(
        urls.map(
            url => fetch(url)
        )
    )
    .then(
        //Convertir la data recibida de los tres fetch a texto
        response => Promise.all(
            response.map(
                data => data.text()
            )
        )
    )
    .then(
        response => {
            cohorts = JSON.parse(response[0]);
            progress = JSON.parse(response[1]);
            users = JSON.parse(response[2]);
            
            //usara los value de los select
            let options = {
                cohort: '',
                cohortData: {
                    users: {},
                    progress: {}
                },
                orderBy: '',
                orderDirection: '',
                search: ''
            };

            options.cohort = selectElement.value;
            options.cohortData.users = users;
            options.cohortData.progress = progress;
            options.orderBy = orderBy.value;
            options.orderDirection = orderDirection.value;

            let data = processCohortData(options);
            listStudents.innerHTML = '';
            data.map(
                userWithStats => {
                    const row = document.createElement('tr');
                    
                    const cellName = document.createElement('td');
                    const cellPercent = document.createElement('td');
                    const cellTotalExercises = document.createElement('td');
                    const cellCompletedExercises = document.createElement('td');
                    const cellPercentExercises = document.createElement('td');
                    const name = document.createTextNode(userWithStats.name);
                    let percent;
                    let totalExercises;
                    let completedExercises;
                    let percentExercises;
                    if(userWithStats.hasOwnProperty('stats')){
                        percent = document.createTextNode(userWithStats.stats.percent);
                        totalExercises = document.createTextNode(userWithStats.stats.exercises.total);
                        completedExercises = document.createTextNode(userWithStats.stats.exercises.completed);
                        percentExercises = document.createTextNode(userWithStats.stats.exercises.percent);
                    }
                    else{
                        percent = document.createTextNode('---');
                        totalExercises = document.createTextNode('---');
                        completedExercises = document.createTextNode('---');
                        percentExercises = document.createTextNode('---'); 
                    }
        
                    cellName.appendChild(name);
                    cellPercent.appendChild(percent);
                    cellTotalExercises.appendChild(totalExercises);
                    cellCompletedExercises.appendChild(completedExercises);
                    cellPercentExercises.appendChild(percentExercises);
                    row.appendChild(cellName);
                    row.appendChild(cellPercent);
                    row.appendChild(cellTotalExercises);
                    row.appendChild(cellCompletedExercises);
                    row.appendChild(cellPercentExercises);
                    listStudents.appendChild(row);
                }
            );
        }    
    );
     
});



/*const loadStats = (orderBy = 'name', orderDirection = 'ASC') => {
    //Promise.all espera que todos los fetch terminen
    Promise.all(
        urls.map(
            url => fetch(url)
        )
    )
    .then(
        //Convertir la data recibida de los tres fetch a texto
        response => Promise.all(
            response.map(
                data => data.text()
            )
        )
    )
    .then(
        //Utilizamos la data de la forma deseada
        response => {
            cohorts = JSON.parse(response[0]);
            progress = JSON.parse(response[1]);
            users = JSON.parse(response[2]);
            let courses = [];
            cohorts.map(
                cohort => {
                    if(cohort.id == 'lim-2018-03-pre-core-pw'){
                        //courses.push(cohort.coursesIndex);
                        for(key in cohort.coursesIndex){
                            courses.push(key);
                        }
                    }
                }
            );
            let students = users.filter(
                user => user.role == 'student'
            );
            let usersWithStats = computeUsersStats(students, progress, courses);

           let sortUsersWithStats = sortUsers(usersWithStats, orderBy, orderDirection);
           listStudents.innerHTML = '';
           sortUsersWithStats.map(
               userWithStats => {
                   const row = document.createElement('tr');
                   
                   const cellName = document.createElement('td');
                   const cellPercent = document.createElement('td');
                   const cellTotalExercises = document.createElement('td');
                   const cellCompletedExercises = document.createElement('td');
                   const cellPercentExercises = document.createElement('td');
                   const name = document.createTextNode(userWithStats.name);
                   let percent;
                   let totalExercises;
                   let completedExercises;
                   let percentExercises;
                   if(userWithStats.hasOwnProperty('stats')){
                       percent = document.createTextNode(userWithStats.stats.percent);
                       totalExercises = document.createTextNode(userWithStats.stats.exercises.total);
                       completedExercises = document.createTextNode(userWithStats.stats.exercises.completed);
                       percentExercises = document.createTextNode(userWithStats.stats.exercises.percent);
                   }
                   else{
                       percent = document.createTextNode('---');
                       totalExercises = document.createTextNode('---');
                       completedExercises = document.createTextNode('---');
                       percentExercises = document.createTextNode('---'); 
                   }
       
                   cellName.appendChild(name);
                   cellPercent.appendChild(percent);
                   cellTotalExercises.appendChild(totalExercises);
                   cellCompletedExercises.appendChild(completedExercises);
                   cellPercentExercises.appendChild(percentExercises);
                   row.appendChild(cellName);
                   row.appendChild(cellPercent);
                   row.appendChild(cellTotalExercises);
                   row.appendChild(cellCompletedExercises);
                   row.appendChild(cellPercentExercises);
                   listStudents.appendChild(row);
               }
           );
       }
   )
   .catch((err) => {
       // algo salió mal...
       console.error(err)
   });
}*/