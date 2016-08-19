import DS from 'ember-data';

var ToDo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  completedAt: DS.attr('date')
});

ToDo.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'ember models',
    isCompleted: false,
  }, {
    id: 2,
    title: 'ember routing',
    isCompleted: false
  }]
});

export default ToDo;
