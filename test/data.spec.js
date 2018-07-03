describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const {
      users,
      progress
    } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreSum: 57,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });
    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {

    it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'name', 'ASC');

      assert.deepEqual(order, processed);

    });
    it('debería retornar arreglo de usuarios ordenado por nombre DESC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (b.name > a.name) {
          return 1;
        }
        if (b.name < a.name) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'name', 'DESC');

      assert.deepEqual(order, processed);

    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', () => {
      const users = fixtures.users;


      const order = users.sort((a, b) => {
        if (a.stats.percent > b.stats.percent) {
          return 1;
        }
        if (a.stats.percent < b.stats.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'percent', 'ASC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (b.stats.percent > a.stats.percent) {
          return 1;
        }
        if (b.stats.percent < a.stats.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'percent', 'DESC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (a.stats.exercises.percent > b.stats.exercises.percent) {
          return 1;
        }
        if (a.stats.exercises.percent < b.stats.exercises.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'exercisesPercent5', 'ASC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (b.stats.exercises.percent > a.stats.exercises.percent) {
          return 1;
        }
        if (b.stats.exercises.percent < a.stats.exercises.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'exercisesPercent', 'DESC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (a.stats.quizzes.percent > b.stats.quizzes.percent) {
          return 1;
        }
        if (a.stats.quizzes.percent < b.stats.quizzes.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'quizzesPercent', 'ASC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (b.stats.quizzes.percent > a.stats.quizzes.percent) {
          return 1;
        }
        if (b.stats.quizzes.percent < a.stats.quizzes.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'quizzesPercent', 'DESC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (a.stats.quizzes.scoreAvg > b.stats.quizzes.scoreAvg) {
          return 1;
        }
        if (a.stats.quizzes.scoreAvg < b.stats.quizzes.scoreAvg) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'quizzesScoreAvg', 'ASC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (b.stats.quizzes.scoreAvg > a.stats.quizzes.scoreAvg) {
          return 1;
        }
        if (b.stats.quizzes.scoreAvg < a.stats.quizzes.scoreAvg) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'quizzesScoreAvg', 'DESC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (a.stats.reads.percent > b.stats.reads.percent) {
          return 1;
        }
        if (a.stats.reads.percent < b.stats.reads.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'readsPercent', 'ASC');

      assert.deepEqual(order, processed);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () => {
      const users = fixtures.users;

      const order = users.sort((a, b) => {
        if (b.stats.reads.percent > a.stats.reads.percent) {
          return 1;
        }
        if (b.stats.reads.percent < a.stats.reads.percent) {
          return -1;
        }
        return 0;
      });

      const processed = sortUsers(users, 'readsPercent', 'DESC');

      assert.deepEqual(order, processed);
    });

  });

  describe('filterUsers(users, filterBy)', () => {

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)', () => {
      const users = fixtures.users;
      let foundUsers = users.filter(
        user => user.name.toLowerCase().indexOf('virginia') > -1
      );
      const processed = filterUsers(users, 'virginia');

      assert.deepEqual(foundUsers, processed);
    });

  });

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {

    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter', () => {
      let cohort = fixtures.cohorts.filter(
        cohort => cohort.id == 'lim-2018-03-pre-core-pw'
      );
      const {
        users,
        progress
      } = fixtures;
      const userData = [{
          id: "DH6NiODCdYM9ick0YQLf54cfHMv2",
          name: "Virginia Contreras",
          locale: "es-ES",
          signupCohort: "lim-2018-03-pre-core-pw",
          timezone: "America/Lima",
          role: "student",
          stats: {
            percent: 100,
            exercises: {
              total: 2,
              completed: 2,
              percent: 100
            },
            reads: {
              total: 11,
              completed: 11,
              percent: 100
            },
            quizzes: {
              total: 3,
              completed: 3,
              percent: 100,
              scoreSum: 263,
              scoreAvg: 88
            }
          }
        },
        {
          id: "TxK6t8BcKEWu7MaKJGQBqKrSFXh2",
          timezone: "America/Lima",
          name: "virginia",
          locale: "es-PE",
          signupCohort: "lim-2018-03-pre-core-pw",
          role: "student",
          stats: {
            percent: 34,
            exercises: {
              total: 2,
              completed: 0,
              percent: 0
            },
            reads: {
              total: 11,
              completed: 4,
              percent: 36
            },
            quizzes: {
              total: 3,
              completed: 1,
              percent: 33,
              scoreSum: 40,
              scoreAvg: 40
            }
          }
        }
      ];

      let options = {
        cohort: cohort,
        cohortData: {
          users: users,
          progress: progress
        },
        orderBy: 'name',
        orderDirection: 'ASC',
        search: 'virginia'
      };

      const processed = processCohortData(options);
      assert.deepEqual(userData, processed);


    });

    it('debería retornar arreglo de usuarios con propiedad stats para una alumna que sus stats estan vacios', () => {
      let cohort = fixtures.cohorts.filter(
        cohort => cohort.id == 'lim-2018-03-pre-core-pw'
      );
      const {
        users,
        progress
      } = fixtures;
      const userData = [{
        id: "JOWii3vYeBW5FAoEP1gOcFl0g0I2",
        name: "manuela",
        locale: "es-PE",
        signupCohort: "lim-2018-03-pre-core-pw",
        timezone: "America/Lima",
        role: "student",
        stats: {
          percent: 0,
          exercises: {
            total: 2,
            completed: 0,
            percent: 0
          },
          reads: {
            total: 11,
            completed: 0,
            percent: 0
          },
          quizzes: {
            total: 3,
            completed: 0,
            percent: 0,
            scoreSum: 0,
            scoreAvg: 0
          }
        }
      }];

      let options = {
        cohort: cohort,
        cohortData: {
          users: users,
          progress: progress
        },
        orderBy: 'name',
        orderDirection: 'ASC',
        search: 'manuela'
      };

      const processed = processCohortData(options);
      assert.deepEqual(userData, processed);


    });

  });

});