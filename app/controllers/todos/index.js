import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
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

    markComplete(todo) {
      // todo.set('isCompleted', true);
      todo.toggleProperty('isCompleted');
      if(todo.get('isCompleted')){
        todo.set('completedAt', moment().toDate());
      } else {
        todo.set('completedAt', "");
      }
    },
  }
});