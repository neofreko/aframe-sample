<template>
<div id="container">
  <div class="title">
      <h1>
        {{ msg }}
      </h1>
    </div>
    <a-scene>
      <a-assets>
        <a-asset-item id="tree-obj" src="assets/mining-dump-truck.obj"></a-asset-item>
        <a-asset-item id="tree-mtl" src="assets/mining-dump-truck.mtl"></a-asset-item>
      </a-assets>
    </a-scene>
    

    <a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl"></a-entity>
</div>
</template>

<script>
require('aframe');
export default {
    data() {
        return {
            msg: 'Basic A-frame scene rendered in Vue.js',
            ascene:
            '<a-scene>\
                <a-sphere color="#999" radius="2" position="0 4 -15"></a-sphere>\
            </a-scene>'
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