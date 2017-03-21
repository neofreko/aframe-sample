<template>


    <a-scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
      <a-assets>
        <a-asset-item id="tree-obj" src="/assets/truck/mining-dump-truck.obj"></a-asset-item>
        <a-asset-item id="tree-mtl" src="/assets/truck/mining-dump-truck.mtl"></a-asset-item>
      </a-assets>
      <a-entity cursor-listener obj-model="obj: #tree-obj; mtl: #tree-mtl" position="-150 -100 -400"></a-entity>
      <a-camera>
        <a-cursor
          position="0 1 4"
          cursor-visible="true"
          cursor-scale="2"
          cursor-color="#0095DD"
          cursor-opacity="0.5">
        </a-cursor>
      </a-camera>

      <a-sky color="#DDDDDD"></a-sky>
    </a-scene>
    

</template>

<script>
let AFRAME = require('aframe');

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

export default {
    data() {
        return {
            
        }
    }
}
</script>

<style>
.title {
    color: #333;
    text-align: center;
    font-family: sans-serif;
}
</style>