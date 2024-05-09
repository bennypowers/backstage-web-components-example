import { LitElement, html } from 'lit'

export class BatZion extends LitElement {
  static properties = {
    mood: {}
  }

  declare mood: 'happy'|'sad';

  constructor() {
    super()
    this.mood = 'happy';
  }

  render() {
    return html`<p>My mood is ${this.mood}</p>`
  }
}

customElements.define('bat-zion', BatZion);

// note: we use the js syntax here, but we could just as well configure
//       tsc to use the decorators from lit, for a better 'dx'
