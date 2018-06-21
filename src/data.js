const processCohortData = (options) => {
    cohorts.map(
        (cohort) => {
            let options = {
                cohort: {},
                cohortData: {
                    user: [],
                    progress: {}
                },
                orderBy: '',
                orderDirection: '',
                search: ''
            };

        }
    );
    
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
