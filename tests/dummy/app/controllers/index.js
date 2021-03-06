import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';
import formBufferProperty from 'ember-validated-form-buffer';

const Validations = buildValidations({
  name: validator('presence', true)
});

export default Ember.Controller.extend({
  data: formBufferProperty('model', Validations),

  actions: {
    submit(e) {
      e.preventDefault();

      this.get('data').applyBufferedChanges();
      this.get('model').save();
    },

    reset() {
      this.get('data').discardBufferedChanges();
    }
  }
});
