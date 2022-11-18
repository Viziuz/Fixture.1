// const { createApp } = Vue  //creo un objeto VUE llamdo createApp

//   createApp({
//     data() {
//       return {
       
//         url:'https://simpsons-quotes-api.herokuapp.com/quotes',
//         personajes:[]
//       } 
//     },   
//     methods: {
//       fetchData(url) {

//           fetch(url)
//               .then(response => response.json())
//               .then(data => { 
//                   this.personajes=data
//                   console.log(this.personajes)
//               })

//       }
//     },
//     created(){
// this.fetchData(this.url) 
//     }

    
//   }).mount('#app')
// efy-xchf-net

function cambiarColor(){
  var caja = document.getElementById("1810");
  caja.style.backgroundColor = "blue"
}

