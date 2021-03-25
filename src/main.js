import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
createApp(App).mount('#app')
// new Vue({
//     el: "#app",
//     data: function () {
//         return {
//             topfrac: 2,
//             denom: 3,
//         }
//     },
//     methods: {
//         draw: function (topfrac, denom) {
//             let canvas = document.getElementById('canvas')
//             if (canvas.getContext) {
//                 var ctx = canvas.getContext('2d');

//                 ctx.fillRect(25, 25, 100, 100);
//                 ctx.clearRect(45, 45, 60, 60);
//                 ctx.strokeRect(50, 50, 50, 50);
//             }
//         }
//     }
// })