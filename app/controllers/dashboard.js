import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DashboardController extends Controller {
  @service auth;
  @service session;
  @service router;
  @tracked apiResponse = null;
  @tracked loading = false;
  @tracked error = '';
  file = null;

  @action
  async handleSubmit() {
    if (!this.file) {
      this.error = 'Add a CV!';
      return null;
    }

    this.loading = true;
    const formData = new FormData();
    formData.append('cv', this.file);
    const apiUrl = 'http://localhost:3001/api/v1/roast';
    const token = this.session.data.authenticated.token;

    const user = this.auth.getUser();

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: token,
        userId: user.id,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      this.router.transitionTo('roast-details', data.roast.id);
    }
    else {
      const data = await response.json()
      this.error = data.error
    }
    this.loading = false;
  }

  @action
  handleDroppedFile(file) {
    this.file = file;
  }

  get cutRoast() {
    const roast = this.model.map((r) => ({
      roast_id: r.id,
      text: `${r.text.slice(0, 300)}...`,
      imgUrl: r.img_url,
    }));
    return roast;
  }
}
