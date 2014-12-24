import Route from 'react-route';
import github from '../github';
import Code from '../pages/code';

export default Route.extend({
  componentClass: Code,
  model: function () {
    var repo = this.get('org') + '/' + this.get('repo');
    return {
      code: github.code(repo)
    };
  }
});