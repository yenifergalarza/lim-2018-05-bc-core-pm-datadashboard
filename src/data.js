const fileCohort = '../data/cohorts.json';
const fileProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

const urls = [fileCohort, fileProgress, fileUsers];
let cohorts = [];
let progress = [];
let users = [];

const loadStudents = () => {
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
            /* console.log(users);
            console.log(students);
            console.log(progress['DH6NiODCdYM9ick0YQLf54cfHMv2']); */
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
}



const loadStats = () => {
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

            //console.log(courses);
            let usersWithStats = computeUsersStats(students, progress, courses);

            listStudents.innerHTML = '';
            usersWithStats.map(
                userWithStats => {
                    const row = document.createElement('tr');
                    
                    const cellName = document.createElement('td');
                    const cellTotal = document.createElement('td');
                    const cellCompleted = document.createElement('td');
                    const cellPercent = document.createElement('td');

                    const name = document.createTextNode(userWithStats.name);
                    let total;
                    let completed;
                    let percent;
                    if(userWithStats.hasOwnProperty('stats')){
                        total = document.createTextNode(userWithStats.stats.exercises.total);
                        completed = document.createTextNode(userWithStats.stats.exercises.completed);
                        percent = document.createTextNode(userWithStats.stats.exercises.percent);
                    }
                    else{
                        total = document.createTextNode('---');
                        completed = document.createTextNode('---');
                        percent = document.createTextNode('---'); 
                    }
        
                    cellName.appendChild(name);
                    cellTotal.appendChild(total);
                    cellCompleted.appendChild(completed);
                    cellPercent.appendChild(percent);

                    row.appendChild(cellName);
                    row.appendChild(cellTotal);
                    row.appendChild(cellCompleted);
                    row.appendChild(cellPercent);

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

const computeUsersStats = (users, progress, courses) => {

     let usersWithStats = users.map(
        (user) => {
            //Primero declarar el objeto stats y luego trabajar con sus valores
            let stats = {
                percent: 0,
                exercises: {
                    total: 0,
                    completed: 0,
                    percent: 0
                },
                reads: {
                    total: 0,
                    completed: 0,
                    percent: 0
                },
                quizzes: {
                    total: 0,
                    completed: 0,
                    percent: 0,
                    scoreSum: 0,
                    scoreAvg: 0
                }
            };
            //Si progress de un usuario tiene data 
            if(JSON.stringify(progress[user.id]) != '{}'){
                let countPercent = 0;
                let sumPercent = 0;

                let countExercises = 0;
                let completedExercises = 0;
                let countReads = 0;
                let completedReads = 0;
                let countQuizzes = 0;
                let completedQuizzes = 0;
                let sumScore = 0;
                courses.map(
                    course => {
                        //Obtener el % completado de todos los cursos(promedio)
                        sumPercent = sumPercent + progress[user.id][course].percent;
                        countPercent++;
                        
                        //Obtener datos de los ejercicios de todos los cursos
                        let units = progress[user.id][course].units;
                        for(unit in units){
                            let parts = units[unit].parts;

                            for(part in parts){
                                if(parts[part].type == 'practice'){
                                    countExercises++;
                                    if(parts[part].completed == 1){
                                        completedExercises++;
                                    }
                                }
                                else if(parts[part].type == 'read'){
                                    countReads++;
                                    if(parts[part].completed == 1){
                                        completedReads++;
                                    }
                                }
                                else if(parts[part].type == 'quiz'){
                                    countQuizzes++;
                                    if(parts[part].completed == 1){
                                        completedQuizzes++;
                                        sumScore = sumScore + parts[part].score;
                                    }
                                }
                            }
                        
                            
                        }
                    }
                );
                stats.percent = sumPercent / countPercent;
                stats.exercises.total = countExercises;
                stats.exercises.completed = completedExercises;
                stats.exercises.percent = (completedExercises * 100) / countExercises;
                stats.reads.total = countReads;
                stats.reads.completed = completedReads;
                stats.reads.percent = (completedReads * 100) / countReads;
                stats.quizzes.total = countQuizzes;
                stats.quizzes.completed = completedQuizzes;
                stats.quizzes.percent = (completedQuizzes * 100) / countQuizzes;
                stats.quizzes.scoreSum = sumScore;
                stats.quizzes.scoreAvg = sumScore / completedQuizzes;

                user.stats = stats;
            } 
            return user;   
        } 
        
    );

    console.log(usersWithStats);
    return usersWithStats;
}

//loadStats();
