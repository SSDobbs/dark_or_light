const config = {
    type: 'radar',
    data =  data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const labels = [
    'Production Budget',
    'Opening Weekend',
    'Domestic Box Office',
    'Worldwide Box Office',
];
const data = {
    labels: labels,
    datasets: [{
            label: 'Star Wars Ep. IV: A New Hope (1977)',
            data: [11000000, 1554475, 460998007, 775398007],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'white',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Star Wars Ep. V: The Empire Strikes Back (1980)',
            data: [23000000, 4910483, 291738960, 549001242],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }, {
            label: 'Star Wars Ep. VI: Return of the Jedi (1983)',
            data: [32500000, 23019618, 309205069, 475106177],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Star Wars Ep. I: The Phantom Menace (1999)',
            data: [115000000, 64810970, 474544677, 1027044677],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Star Wars Ep. II: Attack of the Clones (2002)',
            data: [115000000, 80027814, 310676740, 656695615],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Star Wars Ep. III: Revenge of the Sith (2005)',
            data: [115000000, 108435841, 380270577, 848998877],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Star Wars: The Clone Wars (2008)',
            data: [8500000, 14611273, 35161554, 68695443],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Star Wars Ep. VII: The Force Awakens (2015)',
            data: [306000000, 247966675, 936662225, 2064615817],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Rogue One: A Star Wars Story (2016)',
            data: [200000000, 155081681, 532177324, 1055135598],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Star Wars Ep. VIII: The Last Jedi (2017)',
            data: [262000000, 220009584, 620181382, 1331635141],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Solo: A Star Wars Story (2018)',
            data: [275000000, 84420489, 213202542, 393151347],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Star Wars: The Rise of Skywalker (2019)',
            data: [275000000, 177383864, 515202542, 1072848487],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
    ]
};
