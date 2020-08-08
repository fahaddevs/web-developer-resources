// $(document).ready(function() {
//     $('#world-map-markers').vectorMap({
//       map: 'world_mill_en',
//       // scaleColors: ['#000000', '#000000'],
//       normalizeFunction: 'polynomial',
//       hoverOpacity: 0.7,
//       hoverColor: false,
//       regionStyle: {
//         initial: {
//             fill: "rgba(0, 0, 0, 0.15)"
//         }
//     },

//     markerStyle: {
//         initial: {
//             r: 9,
//             fill: "rgb(0, 0, 0)",
//             "fill-opacity": .9,
//             stroke: "#fff",
//             "stroke-width": 7,
//             "stroke-opacity": .4
//         },
//         hover: {
//             stroke: "#fff",
//             "fill-opacity": 1,
//             "stroke-width": 1.5
//         }
//     },
//       backgroundColor: '#ffffff',
//       markers: [
//         {latLng: [41.90, 12.45], name: 'Vatican City'},
//         {latLng: [43.73, 7.41], name: 'Monaco'},
//         {latLng: [43.93, 12.46], name: 'San Marino'},
//         {latLng: [47.14, 9.52], name: 'Liechtenstein'},
//         {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
//         {latLng: [3.2, 73.22], name: 'Maldives'},
//         {latLng: [35.88, 14.5], name: 'Malta'},
//         {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
//         {latLng: [-4.61, 55.45], name: 'Seychelles'},
//         {latLng: [42.5, 1.51], name: 'Andorra'},
//         {latLng: [1.3, 103.8], name: 'Singapore'},
//         {latLng: [-20.2, 57.5], name: 'Mauritius'},
//         {latLng: [26.02, 50.55], name: 'Bahrain'},
//         {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
//       ]
//     });
//   });
    
  $('#world-map-markers').vectorMap(
  {
      map: 'world_mill_en',
      backgroundColor: 'transparent',
      borderColor: '#fff',
      borderOpacity: 0.25,
      borderWidth: 0,
      color: '#e6e6e6',
      regionStyle : {
          initial : {
          fill : '#3b4046'
          }
      },

      markerStyle: {
      initial: {
                  r: 5,
                  'fill': '#fff',
                  'fill-opacity':1,
                  'stroke': '#000',
                  'stroke-width' : 1,
                  'stroke-opacity': 0.4
              },
          },
  
      markers : [{
          latLng : [35.8617, 104.1954],
          name : 'China : 250'
        },

        {
          latLng : [25.2744, 133.7751],
          name : 'Australia : 250'
        },

        {
          latLng : [36.77, -119.41],
          name : 'USA : 82%'
        },

        {
          latLng : [55.37, -3.41],
          name : 'UK   : 250'
        },

        {
          latLng : [25.20, 55.27],
          name : 'UAE : 250'
      }],

      series: {
          regions: [{
              values: {
                  "US": '#007bff ',
                  "SA": '#e03997',
                  "AU": '#1e9ff2',
                  "CN": '#7367f0',
                  "GB": '#6435c9',
              },
              attribute: 'fill'
          }]
      },
      hoverOpacity: null,
      normalizeFunction: 'linear',
      zoomOnScroll: false,
      scaleColors: ['#000000', '#000000'],
      selectedColor: '#000000',
      selectedRegions: [],
      enableZoom: false,
      hoverColor: '#fff',
  }); 