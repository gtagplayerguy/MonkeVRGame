AFRAME.registerComponent('map-generator', {
  init: function () {
    const sceneEl = this.el.sceneEl;

    // Create Floor
    let floor = document.createElement('a-plane');
    floor.setAttribute('static-body', '');
    floor.setAttribute('rotation', '-90 0 0');
    floor.setAttribute('width', '100');
    floor.setAttribute('height', '100');
    floor.setAttribute('color', '#2d5a27');
    sceneEl.appendChild(floor);

    // Create a simple practice wall
    let wall = document.createElement('a-box');
    wall.setAttribute('static-body', '');
    wall.setAttribute('position', '0 5 -10');
    wall.setAttribute('scale', '10 10 1');
    wall.setAttribute('color', '#444');
    sceneEl.appendChild(wall);
  }
});
