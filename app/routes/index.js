// This creates a routing file for the index route
import Route from '@ember/routing/route';

import {inject as service} from '@ember/service';

// Fetch, await, and response.json = all are asynchronous operation
export default class IndexRoute extends Route {
  @service store;
  async model() {
    return this.store.findAll('rental');
  }
}