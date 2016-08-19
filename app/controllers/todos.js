import Ember from 'ember';

export default Ember.Controller.extend({

  isEditing: false,

  remaining: Ember.computed("model.@each.isCompleted", function(){
    return this.get('model').filterBy('isCompleted', false).get('length');
  }),

  inflection: Ember.computed('remaining', function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }),

  hasCompleted: Ember.computed("completed", function(){
    return this.get('completed') > 0;
  }),

  completed: Ember.computed("model.@each.isCompleted", function(){
    return this.get('model').filterBy('isCompleted', true).get('length');
  }),

  allAreDone: Ember.computed("model.@each.isCompleted", function(){
    return this.get('model').get('length') && this.get('model').isEvery('isCompleted');
  }),

  actions: {
    createTodo(){
      var title = this.get('newTitle');

      if(!title) { return false; }
      if(!title.trim()) { return false; }

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
      todo.set('isEditing', true);
    },

    acceptChanges(todo){
      if(Ember.isEmpty(todo.get('title'))){
        this.send('removeToDo', todo);
      } else {
        // this.get('model').save();
        todo.save();
      }
      todo.set('isEditing',false);
    },

    removeToDo(todo){
      // var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    },

    clearCompleted(){
      var completed = this.get('model').filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },
});