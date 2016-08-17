import DS from 'ember-data';

var ToDo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

ToDo.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'ember models',
    isCompleted: true
  }, {
    id: 2,
    title: 'ember routing',
    isCompleted: false
  }]
});



export default ToDo;
