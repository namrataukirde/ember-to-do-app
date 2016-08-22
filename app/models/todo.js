import DS from 'ember-data';

var ToDo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  

  // completedAt: DS.attr('date'),
  // setCompletedAt: Ember.observer('isCompleted', function() {
  //   if(this.get('isCompleted')){
  //     this.set('completedAt', moment().toDate());
  //   } else {
  //     this.set('completedAt', "");
  //   }
  // }),

  completedAt: Ember.computed("isCompleted", function() {
    if(this.get('isCompleted')){
      return moment().toDate();
    } else {
      return "";
    }
  })
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
