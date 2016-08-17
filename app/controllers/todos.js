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
    }
  },

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