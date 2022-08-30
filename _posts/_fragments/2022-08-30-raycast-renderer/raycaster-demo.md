<style type="text/css" scoped>
    .rayCasterContainer {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
    }
    .overlay {
        float: left;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .rayCasterCanvas {
        border: 1px solid black;
    }
</style>

<div id="rayCasterContainer" class="rayCasterContainer">
    <canvas id="myCanvas" class="rayCasterCanvas"></canvas>
    <form id="config" class="overlay">
        <h3>Instructions</h3>
        <div>Use "w" and "s" to move forwards and backwards</div>
        <div>Use "q" and "e" to rotate</div>
        <div>Click on the minimap on the left to change the level shape</div>
        <h3>Options</h3>
        <input type="checkbox" id="configShowCoordinates" name="configShowCoordinates" value="showCoordinates">
        <label for="configShowCoordinates"> Show map coordinates</label><br>
        <label for="configRenderType">Renderer:</label>
        <select name="configRenderType" id="configRenderType">
            <option value="solid">Solid</option>
            <option value="shaded" selected>Shaded</option>
            <option value="textured">Textured</option>
        </select>
    </form>
</div>

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/2022-08-30-raycast-renderer/wolfenstein-raycasting-bundle.js"></script>
<script type="text/javascript">
    function getConfig() {
        return {
            showMapCoordinates: document.getElementById('configShowCoordinates').checked,
            selectedRenderer: document.getElementById('configRenderType').value
        };
    }
    const container = document.getElementById('rayCasterContainer');
    const canvas = document.getElementById('myCanvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const config = document.getElementById('config');
    RAYCASTING.main(canvas, config, getConfig);
</script>
