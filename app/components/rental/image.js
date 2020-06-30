import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// export default class RentalImageComponent extends Component {
//     constructor(...args) {
//     super(...args);
//     this.isLarge = false;
//     }
// }

// export default class RentalImageComponent extends Component {
//     isLarge = false;
// }

// @tracked --> When tracked variables undergo changes, here through action, the component will be rerendered
// @action --> indicates that we intend to use this method in our templates/component hbs

export default class RentalImageComponent extends Component {
    @tracked isLarge = false;

    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}
