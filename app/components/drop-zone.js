import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DropZone extends Component {
  @tracked statusText = '';
  @tracked overDropZone = false;
  @tracked errorMessage = '';
  @tracked fileDropped = false;

  allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf', '.doc']

  @action dropItem(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if(file.length < 1) {
      this.errorMessage = "No file added"
    } else if (!this.allowedFileTypes.includes(file.type)) {
      this.errorMessage = "Wrong file type. Drop a valid file please!"
    } else {
      this.args.onFileDropped(file)
      this.errorMessage = ''
      this.fileDropped = true;
    }
    this.overDropZone = false;
  }
  @action dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }
  @action dropLeave(e) {
    e.preventDefault();
    this.statusText = 'Drag has left drop zone';
    this.overDropZone = false;
  }
  @action dropEnter(e) {
    e.preventDefault();
    this.statusText = 'Drag is entered Drop Zone';
    this.overDropZone = true;
  }

}
