const welcome = document.getElementById('welcome');

//aqui crea una variable obteniendo desde el id  del html
//seleccion del nodo padre
const selectElement = document.getElementById("cohorts");
//llamamos de forma asincrona el json de la lista de cohorts
fetch('https://api.laboratoria.la/cohorts/')
//fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(json => {
    const listCohorts = json;
    //llamamos la funcion para que pase como argumentos los datos del json y creen un nodo de opction dentro de un select
    for (let i = 0; i < listCohorts.length; i++) {
      if (listCohorts[i].id.includes("lim-2018")) {
        //creo el elemento option por cada cohort
        const optionElements = document.createElement('option');
        //creo el texto (nodo  de texto)
        const contenidoOption = document.createTextNode(listCohorts[i].id);
        //a la etiqueta padre le doy su hijo
        optionElements.appendChild(contenidoOption);
        optionElements.value = listCohorts[i].id
        selectElement.appendChild(optionElements);
      }
    }
  })
  .catch((err) => {
    // algo salió mal...
    console.error("failed", err);
  });

let filterById = document.getElementById("orderByFilter");
/* const fileCohort = '../data/cohorts.json';
const fileProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; */
const fileCohort = 'https://api.laboratoria.la/cohorts/';
const fileProgress = 'https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/progress/';
const fileUsers = 'https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users/';
const urls = [fileCohort, fileProgress, fileUsers];
let cohorts = [];
let progress = [];
let users = [];
const divFilters = document.getElementById('divfilter');
const listStudents = document.getElementById('listStudents');
const orderBy = document.getElementById('orderBy');
const orderDirection = document.getElementById('orderDirection');
const buttonSort = document.getElementById('sort');

window.onload = () => {
  if(localStorage.getItem('username') != null){
    const username = localStorage.getItem('username');
    welcome.innerHTML = 'Bienvenid@ '+ username;
  }
  else{
    window.location.href = 'login.html';
  }
};

filterById.addEventListener('keypress', () => {
  loadStats();
});

buttonSort.addEventListener('click', () => {
  loadStats();
});

selectElement.addEventListener('change', () => {
  loadStats();
});

const loadStats = () => {
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

        let idCohort = selectElement.value; //value del select cohorts

        let usersCohort = users.filter(
          user => user.signupCohort == idCohort
        );
        if(usersCohort.length == 0){
          divFilters.style.display = 'none';
          listStudents.innerHTML ="<h2>Esta información no esta disponible</h2>";
          return;
        }
        divFilters.style.display = 'block';
        let selectedCohort = cohorts.filter(
          cohort => cohort.id == idCohort
        );

        options.cohort = selectedCohort; //objeto del cohort seleccionado
        options.cohortData.users = users;
        options.cohortData.progress = progress;
        options.orderBy = orderBy.value;
        options.orderDirection = orderDirection.value;
        options.search = filterById.value;

        let data = processCohortData(options);
        let ausers = filterUsers(users, filterById.value);
        listStudents.innerHTML = '';
        data.map(
          userWithStats => {
            //div card contenedor
            const divCard = document.createElement('div');
            divCard.className = 'card';

            //div avatar - imagen
            const divAvatar = document.createElement('div');
            divAvatar.className = 'avatar';
            divAvatar.innerHTML = '<img src="imagen/avatar.png" alt="' + userWithStats.name + '">';

            //div stats - data de la alumna
            const divStats = document.createElement('div');
            divStats.className = 'stats';

            //parrafos y titulos
            const titleName = document.createElement('h3');
            const name = document.createTextNode(userWithStats.name);

            const paragraph1 = document.createElement('p');

            const subtitle1 = document.createElement('h4');
            subtitle1.innerHTML = 'Ejercicios';

            const paragraph2 = document.createElement('p');

            const subtitle2 = document.createElement('h4');
            subtitle2.innerHTML = 'Cuestionarios';

            const paragraph3 = document.createElement('p');
            const paragraph4 = document.createElement('p');

            const subtitle3 = document.createElement('h4');
            subtitle3.innerHTML = 'Lecturas';

            const paragraph5 = document.createElement('p');

            let percent;
            let percentExercises;
            let percentQuizzes;
            let scoreAvgQuizzes;
            let percentReads;
            if (userWithStats.hasOwnProperty('stats')) {
              percent = document.createTextNode('% de completitud total: ' + userWithStats.stats.percent);
              percentExercises = document.createTextNode('% autocorregidos completados: ' + userWithStats.stats.exercises.percent);
              percentQuizzes = document.createTextNode('% completados: ' + userWithStats.stats.quizzes.percent);
              scoreAvgQuizzes = document.createTextNode('Puntuación promedio completados: ' + userWithStats.stats.quizzes.scoreAvg);
              percentReads = document.createTextNode('% completadas: ' + userWithStats.stats.reads.percent);
            } else {
              percent = document.createTextNode('% de completitud total: ---');
              percentExercises = document.createTextNode('% autocorregidos completados: ---');
              percentQuizzes = document.createTextNode('% completados: ---');
              scoreAvgQuizzes = document.createTextNode('Puntuación promedio completados: ---');
              percentReads = document.createTextNode('% completadas: ---');
            }


            titleName.appendChild(name);
            paragraph1.appendChild(percent);
            paragraph2.appendChild(percentExercises);
            paragraph3.appendChild(percentQuizzes);
            paragraph4.appendChild(scoreAvgQuizzes);
            paragraph5.appendChild(percentReads);

            //añadimos los titulos y parrafos al div stats
            divStats.appendChild(titleName);
            divStats.appendChild(paragraph1);
            divStats.appendChild(subtitle1);
            divStats.appendChild(paragraph2);
            divStats.appendChild(subtitle2);
            divStats.appendChild(paragraph3);
            divStats.appendChild(paragraph4);
            divStats.appendChild(subtitle3);
            divStats.appendChild(paragraph5);

            //añadimos imagen y stats a card
            divCard.appendChild(divAvatar);
            divCard.appendChild(divStats);

            listStudents.appendChild(divCard);
          }
        );
      }
    );
}