function Sport(kind, season) {
  this.kind = kind;
  this.season = season;
}

sport_object = new Sport('Outdoor', 'All');

function Cricket(size, overs) {
  this.teamSize = size;
  this.overs = overs;
  this.__proto__ = sport_object;
}

cricket_object = new Cricket(10, 50);
// cricket_object.__proto__ = sport_object;

console.log(cricket_object.kind, cricket_object.season);
