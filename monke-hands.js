// This component makes the hands look like Gorilla hands
AFRAME.registerComponent('monke-hand-visuals', {
  schema: { hand: {type: 'string', default: 'left'} },
  init: function () {
    // 1. Set the hand model to 'lowPoly' to match the Gorilla Tag style
    // 2. Set the color to brown (#8B4513)
    this.el.setAttribute('hand-controls', {
      hand: this.data.hand,
      handModelStyle: 'lowPoly',
      color: '#8B4513'
    });

    // 3. Add a physical "hitbox" to the hand so it can touch the ground
    this.el.setAttribute('static-body', {
      shape: 'sphere',
      sphereRadius: 0.15
    });
  }
});
