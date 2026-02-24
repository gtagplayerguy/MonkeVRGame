AFRAME.registerComponent('monke-hand-logic', {
  schema: { hand: {type: 'string', default: 'left'} },
  init: function () {
    this.el.addEventListener('collide', (e) => {
      // Get hand speed
      const velocity = this.el.getAttribute('velocity') || {x: 0, y: 0, z: 0};
      
      // If hitting the ground/wall downward
      if (Math.abs(velocity.y) > 0.5) {
        const rig = document.getElementById('rig');
        // Reflect velocity: If you push DOWN, you go UP
        rig.setAttribute('velocity', {
          x: -velocity.x * 1.5,
          y: -velocity.y * 2.0, // Strength of the jump
          z: -velocity.z * 1.5
        });
      }
    });
  }
});
