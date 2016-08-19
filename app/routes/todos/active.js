import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.filter('todo', function(todo){
    //   return !todo.get('isCompleted');
    // });

    return this.get('store').peekAll('todo').filterBy('isCompleted', false);
  },
  
  renderTemplate(controller){
    this.render('todos/index', {controller: controller})
  }
});