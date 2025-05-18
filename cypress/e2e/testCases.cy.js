import { domains } from '../support/constants';

const allDomains = [
  { domain: domains.cz },
  { domain: domains.com },
  { domain: domains.sk }
];

describe('Contact page', () => {
  beforeEach(() => {
    // TODO: napr. mazani contacts databaze (empty contact list -> clean state)
  });

  allDomains.forEach(({ domain }) => {
    // Vyber spravne credentials
    const creds = Cypress.env('credentials')[domain];
    it(`Create contact on: ${domain} domain`, function () {
      // Otevri stranku
      cy.visitOnDomain('/', domain)
      // Prihlas se do aplikace
      cy.loginToApplication(creds.username, creds.password)
      // Vypln kontakt dle domeny
      cy.fillNewContact(domain);
    });
  });
});
