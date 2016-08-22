import Ember from 'ember';

export function formatDate() {
  return moment().format("YYYY-MM-DD");
}

export default Ember.Helper.helper(formatDate);
