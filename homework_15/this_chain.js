const ladder = {
  step: 0,
  name: 'ladder',
  up: function () {
    this.step++;

    return this;
  },
  down: function () {
    this.step--;

    return this;
  },
  showStep: function () {
    alert(this.step);
  },
};

ladder.up().up().down().showStep();