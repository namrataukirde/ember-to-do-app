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

    acceptChanges(todo){
      if(Ember.isEmpty(todo.get('title'))){
        this.send('removeToDo', todo);
      } else {
        // this.get('model').save();
        todo.save();
      }
      todo.set('isEditing',false)
    },
    removeToDo(todo){
      // var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    },
  },

  remaining: Ember.computed("model.@each.isCompleted", function(){
    return this.get('model').filterBy('isCompleted', false).get('length');
  }),

  inflection: Ember.computed('remaining', function(){
    var remaining = this.get('remaining');
    return remaining == 1 ? 'item' : 'items'
  }),
});