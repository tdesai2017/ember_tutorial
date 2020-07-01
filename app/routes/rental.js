import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';




export default class RentalRoute extends Route {
    // We pass in params since "we need to fetch our data from the /api/rentals/${id}.json endpoint, not the /api/rentals.json"
    @service store;
    async model(params) {
      return this.store.find('rental', params.rental_id);
  }
}