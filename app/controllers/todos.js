import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo(){
      var title = this.get('newTitle');

      if(!title) { return false }
      if(!title.trim()) { return false }

      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      this.set('newTitle', '');
    },

    markComplete(todo) {
      // todo.set('isCompleted', true);
      todo.toggleProperty('isCompleted');
    },

    editToDo(todo){
      todo.set('isEditing', true)
    },

    isEditing: false,
  },

  remaining: Ember.computed("model.@each.isCompleted", function(){
    return this.get('model').filterBy('isCompleted', false).get('length');
  }),

  inflection: Ember.computed('remaining', function(){
    var remaining = this.get('remaining');
    return remaining == 1 ? 'item' : 'items'
  }),

  // isCompleted: Ember.computed("model.isCompleted", function(key, value){
  //   var model = this.get('model');

  //   if(value == undefined){
  //     return model.get('isCompleted');
  //   } else {
  //     model.set('isCompleted', value)
  //     model.save();
  //     return value;
  //   }
  // })
});