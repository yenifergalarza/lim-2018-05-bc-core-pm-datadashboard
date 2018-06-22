const fileCohort = '../data/cohorts.json';
const fileProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

const urls = [fileCohort, fileProgress, fileUsers];
let cohorts = [];
let progress = [];
let users = [];

//parametros por defecto: en caso de llamar a la funcion sin enviar parametros, usará los valores por defecto
const loadStats = (orderBy = 'name', orderDirection = 'ASC') => {
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
            /*
                filtros:
                - name -> nombre
                - percent -> porcentaje de completitud total
                - exercisesPercent -> porcentaje de ejercicios autocorregidos completados 
                - quizzesPercent -> porcentaje de quizzes completados
                - quizzesScoreAvg -> puntuación promedio en quizzes completados
                - readsPercent -> porcentaje de lecturas completadas
            */
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
}

const listStudents = document.getElementById('listStudents');
const botonAlumna = document.getElementById('botonalumna');
//ordenar
const orderBy = document.getElementById('orderBy');
const orderDirection = document.getElementById('orderDirection');
const buttonSort = document.getElementById('sort');

//Aqui llamo a mi funcion para que se ejecute
botonAlumna.addEventListener('click', () => {
    loadStats(); //usara parametros por defecto
});

buttonSort.addEventListener('click', () => {
    loadStats(orderBy.value, orderDirection.value); //usara los value de los select
});

/*const loadStudents = () => {
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
            cohorts = JSON.parse(response[0]); //convierte de texto a objecto JSON
            progress = JSON.parse(response[1]);
            users = JSON.parse(response[2]);

            let students = users.filter(
                //user => user.role == 'student'
                user => user.role == selectUsers.value
            );
            //console.log(users);
            //console.log(students);
            //console.log(progress['DH6NiODCdYM9ick0YQLf54cfHMv2']);
            infoAlumnas.innerHTML = '';
            students.map(
                student => {
                    const row = document.createElement('tr');
                    const cellId = document.createElement('td');
                    const cellName = document.createElement('td');

                    const id = document.createTextNode(student.id);
                    const name = document.createTextNode(student.name);
        
                    cellId.appendChild(id);
                    cellName.appendChild(name);

                    row.appendChild(cellId);
                    row.appendChild(cellName);

                    listStudents.appendChild(row);
                }
            );
        }
    );
}*/