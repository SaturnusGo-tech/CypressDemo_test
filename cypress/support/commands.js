// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');

import 'cypress-real-events/support'

Cypress.Commands.add('clearSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
  const iframe = $iframe.contents();
  return cy.wrap(iframe);
});

// Custom commd
Cypress.Commands.add('createPost', { prevSubject: true }, (subject, title, content) => {
cy.wrap(subject)
.visit('/posts/new')
.get('input[name="title"]').type(title)
.get('textarea[name="content"]').type(content)
.get('button[type="submit"]').realClick();

return cy.get('.post').should('contain', title).and('contain', content);
});

it('should create a post and then like it', () => {
cy.createPost('My Title', 'My Content')
.get('.like-button').click()
.get('.likes-count').should('contain', '1');
});






