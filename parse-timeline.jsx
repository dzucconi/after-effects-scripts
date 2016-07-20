// Debug...
function log(x) { $.writeln(x); return x; };

// Generated timeline stream from cli.rb
var TIMELINE = [{ "word": "Foo", "duration": 0.5 }];

var position = [0, 0];
var comp = app.project.activeItem;
var layers = comp.layers;

function add(word, start, stop) {
  var text = layers.addText(word);

  text.position.setValue(position);
  text.inPoint = start;
  text.outPoint = stop;

  return text;
}

var start = 0.0;

for (var i = 0; i < TIMELINE.length; i++) {
  var end = start + TIMELINE[i].duration;
  add(TIMELINE[i].word, start, end);
  start = end;
};
