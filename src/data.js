window.computeUsersStats = (users, progress, courses) => {
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
      if (JSON.stringify(progress[user.id]) != '{}') {
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
            for (unit in units) {
              let parts = units[unit].parts;
              for (part in parts) {
                if (parts[part].type == 'read') {
                  countReads++;
                  if (parts[part].completed == 1) {
                    completedReads++;
                  }
                } else if (parts[part].type == 'quiz') {
                  countQuizzes++;
                  if (parts[part].completed == 1) {
                    completedQuizzes++;
                    sumScore = sumScore + parts[part].score;
                  }
                }
                let exercises = parts[part].exercises;
                for (exercise in exercises) {
                  countExercises++;
                  if (exercises[exercise].completed == 1) {
                    completedExercises++;
                  }
                }

              }
            }
          }
        );
        if (countPercent != 0) {
          stats.percent = Math.round(sumPercent / countPercent);
        } else {
          stats.percent = 0;
        }
        stats.exercises.total = countExercises;
        stats.exercises.completed = completedExercises;
        if (countExercises != 0) {
          stats.exercises.percent = Math.round((completedExercises * 100) / countExercises);
        } else {
          stats.exercises.percent = 0;
        }
        stats.reads.total = countReads;
        stats.reads.completed = completedReads;
        if (countReads != 0) {
          stats.reads.percent = Math.round((completedReads * 100) / countReads);
        } else {
          stats.reads.percent = 0;
        }
        stats.quizzes.total = countQuizzes;
        stats.quizzes.completed = completedQuizzes;
        if (countQuizzes != 0) {
          stats.quizzes.percent = Math.round((completedQuizzes * 100) / countQuizzes);
        } else {
          stats.quizzes.percent = 0;
        }
        stats.quizzes.scoreSum = sumScore;
        if (completedQuizzes != 0) {
          stats.quizzes.scoreAvg = Math.round(sumScore / completedQuizzes);
        } else {
          stats.quizzes.scoreAvg = 0;
        }
      }
      user.stats = stats;
      return user;
    }
  );
  return usersWithStats;
}
window.sortUsers = (users, orderBy, orderDirection) => {
  users.sort((a, b) => {
    let variable1;
    let variable2;
    switch (orderBy) {
      case 'name':
        variable1 = a.name;
        variable2 = b.name;
        break;
      case 'percent':
        if (a.hasOwnProperty('stats')) {
          variable1 = a.stats.percent;
        }
        if (b.hasOwnProperty('stats')) {
          variable2 = b.stats.percent;
        }
        break;
      case 'exercisesPercent':
        if (a.hasOwnProperty('stats')) {
          variable1 = a.stats.exercises.percent;
        }
        if (b.hasOwnProperty('stats')) {
          variable2 = b.stats.exercises.percent;
        }
        break;
      case 'quizzesPercent':
        if (a.hasOwnProperty('stats')) {
          variable1 = a.stats.quizzes.percent;
        }
        if (b.hasOwnProperty('stats')) {
          variable2 = b.stats.quizzes.percent;
        }
        break;
      case 'quizzesScoreAvg':
        if (a.hasOwnProperty('stats')) {
          variable1 = a.stats.quizzes.scoreAvg;
        }
        if (b.hasOwnProperty('stats')) {
          variable2 = b.stats.quizzes.scoreAvg;
        }
        break;
      case 'readsPercent':
        if (a.hasOwnProperty('stats')) {
          variable1 = a.stats.reads.percent;
        }
        if (b.hasOwnProperty('stats')) {
          variable2 = b.stats.reads.percent;
        }
        break;
    }
    if (orderDirection == 'ASC') {
      if (variable1 > variable2) {
        return 1;
      }
      if (variable1 < variable2) {
        return -1;
      }
    } else if (orderDirection == 'DESC') {
      if (variable2 > variable1) {
        return 1;
      }
      if (variable2 < variable1) {
        return -1;
      }
    } else {
      return 0;
    }
  });

  return users;
}
window.filterUsers = (users, search) => {
  let foundUsers = users.filter(
    user => user.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  );
  return foundUsers;
}
window.processCohortData = (options) => {
  let courses = [];
  for (let key in options.cohort[0].coursesIndex) {
    courses.push(key);
  }
  let students = options.cohortData.users.filter(
    user => user.role == 'student'
  );
  let usersWithStats = computeUsersStats(students, options.cohortData.progress, courses);
  let sortUsersWithStats = sortUsers(usersWithStats, options.orderBy, options.orderDirection);
  let searchUsers = filterUsers(sortUsersWithStats, options.search);
  return searchUsers;
}