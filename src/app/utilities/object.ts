export class Objects {
    label: string;
    description: string;
    hint: string;
    image = null;
  
    constructor(label, description) {
      this.label = label;
      this.description = description;
      this.hint = '';
      this.image = null;
    }
  }
  