import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service'

export default class DashboardController extends Controller {
  @service session;
  file = null;

  @action
  async handleSubmit() {
    const formData = new FormData();
    formData.append('cv', this.file)
    const apiUrl = "http://localhost:3001/api/v1/cv"

    await fetch(apiUrl, {
      method: "POST",
      body: formData
    }).then(res => console.log(res.json()))
  }

  @action
  handleDroppedFile(file) {
    this.file = file
  }

}
