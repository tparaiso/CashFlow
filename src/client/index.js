import '@lwc/synthetic-shadow'; // The more important to load lightning base component

import { createElement } from 'lwc';
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);


// let myScript = document.createElement("script");
// myScript.setAttribute("src", "/resources/test.js");
// myScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
// myScript.setAttribute("integrity", "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM");
// myScript.setAttribute("crossorigin", "anonymous");
// this.template.appendChild(myScript);

// document.body.appendChild(myScript);

