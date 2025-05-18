import { selectors as s } from '../support/selectors';
import { domains } from '../support/constants';

Cypress.Commands.add('visitOnDomain', (args, domain = Cypress.env('currentDomain')) => {
  const customVisitCommand = `visit${domain.charAt(0).toUpperCase()}${domain.slice(1)}`;
  cy[customVisitCommand](args);
});

Cypress.Commands.add('visitCz', (args) => {
  cy.visit(`https://staging.fakturaonline.cz${args}`);
});

Cypress.Commands.add('visitCom', (args) => {
  cy.visit(`https://staging.invoiceonline.com${args}`);
});

Cypress.Commands.add('visitSk', (args) => {
  cy.visit(`https://staging.fakturaonline.sk${args}`);
});

Cypress.Commands.add('loginToApplication', (username, password) => {
  cy.get(s.login.loginButton).click()
  cy.get('body').then(($body) => {
    if ($body.find(s.login.loginToMyAccButton).length) {
      cy.get(s.login.loginToMyAccButton).click();
    } else {
      cy.log('Neni potreba provest click na "login to my acc" tlacitko.');
    }
  });
  cy.get(s.login.emailInput).type(username)
  cy.get(s.login.passwordInput).type(password)
  cy.get(s.login.loggMeButton).click()
  cy.get(s.contacts.title, { timeout: 10000 }).should('be.visible');
});

Cypress.Commands.add('fillNewContact', (domain) => {
  switch (domain) {
    case domains.cz:
      cy.fillNewContactCz(domain);
      break;
    case domains.com:
      cy.fillNewContactCom(domain);
      break;
    case domains.sk:
      cy.fillNewContactSk(domain);
      break;
    default:
      throw new Error(`Not existing/implemented domain: ${domain}`);
  }
  cy.saveAndCheckContact();
});

// Spolecne inputy pro vsechny domeny
Cypress.Commands.add('fillNewContactCommon', (domain) => {
  cy.intercept('GET', '/api/contacts/new').as('getContactsNew');
  cy.fixture(`contactData${domain}`).then((data) => {
    cy.get(s.contacts.contactMenuIcon).click()
    cy.get(s.contacts.newContactButton).click()
    cy.wait('@getContactsNew')
    cy.get(s.newContact.companyNumber).should('be.visible').type(data.companyNumber)
    cy.get(s.newContact.taxNumber).type(data.taxNumber)
    cy.get(s.newContact.telephone).find('input').type(data.telephone)
    cy.get(s.newContact.email).type(data.email)
    cy.get(s.newContact.web).type(data.web)
    cy.get(s.newContact.street).clear().type(data.street)
    cy.get(s.newContact.city).clear().type(data.city)
    cy.get(s.newContact.postCode).type(data.postcode)
    cy.get(s.newContact.country).type(`${data.country}{enter}`);
  });
});

// Inputy specificke pro CZ domenu
Cypress.Commands.add('fillNewContactCz', (domain) => {
  cy.fillNewContactCommon(domain)
  cy.fixture('contactDataCz').then((data) => {
    cy.get(s.newContact.nameCzSk).should('be.visible').type(`${data.name}{enter}`);
  })
});

// Inputy specificke pro COM domenu
Cypress.Commands.add('fillNewContactCom', (domain) => {
  cy.fillNewContactCommon(domain)
  cy.fixture('contactDataCom').then((data) => {
    cy.get(s.newContact.nameCom).should('be.visible').type(`${data.name}{enter}`)
    cy.get(s.newContact.subdivision).type(`${data.subdivision}{enter}`);
  })
});

// Inputy specificke pro SK domenu
Cypress.Commands.add('fillNewContactSk', (domain) => {
  cy.fillNewContactCommon(domain)
  cy.fixture('contactDataSk').then((data) => {
    cy.get(s.newContact.nameCzSk).should('be.visible').type(`${data.name}{enter}`)
    cy.get(s.newContact.vatNumber).type(data.vatNumber);
  })
});

Cypress.Commands.add('saveAndCheckContact', () => {
    cy.get(s.newContact.saveContact).click()
    cy.get(s.newContact.newContactInTable).should('be.visible').and('have.length', 1);
});