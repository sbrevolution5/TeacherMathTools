<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h2>Fractions</h2>
    <p>{{ numerator }}</p>
    <hr />
    <p>{{ denom }}</p>
    <p></p>
    <div class="row">
      <p>Numerator</p>
      <input v-model="numerator" />
      <p>Denominator</p>
      <input v-model="denom" />
    </div>
    <button id="draw button" v-on:click="draw">Draw</button>
    <div id="frac" width="700" height= "300" border="2px, solid, green" display="inline-block">
      <h1>Graph goes here</h1>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { SVG } from "@svgdotjs/svg.js";
const d3 = require("d3");
export default {
  name: "App",
  data: function () {
    return {
      numerator: 2,
      denom: 3,
    };
  },
  methods: {
    draw: function (d3data) {
      d3.select("#frac")
        .selectAll(".bar")
        .data(d3data)
        .enter()
        .append("div")

        .attr("class", "bar")
        /* .text((d)=>d) */
        .style("width", 100 / d3data.length + "vw")
        .style("background-color", (d) => {
          if (d == 0) {
            return "white";
          } else if (d == 1) {
            return "blue";
          } else if (d == 2) {
            return "red";
          } else if (d == 3) {
            return "yellow";
          }
        });
    },
  },
  computed: {
    d3data: function (numerator, denom) {
      let res = [];
      for (let i = 0; i < denom; i++) {
        res.push(0);
      }
      for (let i = 0; i < numerator; i++) {
        res[i] = 1;
      }
      return res;
    },
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bar {
    border: 2px, solid, green;
    margin: 1vw;
    height: 100px;
    background-color: blue;
    display: inline-block;
}
</style>
