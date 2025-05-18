const login = {
	loginButton: '.navbar-buttons__button.hidden-md-down',
    loginToMyAccButton: '[data-analytics-id="signIn.v2.login"]',
    emailInput: '#email',
    passwordInput: '#current-password',
    loggMeButton: '[data-analytics-id="button.login"]'
}

const contacts = {
    title: '.my-0',
    contactMenuIcon: '.icon.icon-contacts-new',
    newContactButton: '[data-analytics-id="contactsTable.buttons.addContact"]'
};

const newContact = {
    // Common for all domains
    companyNumber: '#invoice_attributes_company_number',
    taxNumber: '[name=tax_number]',
    telephone: '.vue-tel-input',
    email: '#invoice_attributes_email',
    web: '#invoice_attributes_web',
    street: '#invoice_attributes_address_attributes_street',
    city: '#invoice_attributes_address_attributes_city',
    postCode: '#invoice_attributes_address_attributes_postcode',
    country: '#invoice_contact_attributes_address_attributes_country_code',
    saveContact: '[data-analytics-id="contacts.buttons.save"]',
    newContactInTable: '.el-table__body-wrapper.is-scrolling-none',
    // Cz & Sk specific
    nameCzSk: '[name=invoice_attributes_name]',
    // Com specific
    nameCom: '#invoice_attributes_name',
    subdivision: '#contact_attributes_address_attributes_subdivision',
    // Sk specific
    vatNumber: '#invoice_attributes_vat_number'
}

export const selectors = {
    login,
    contacts,
    newContact
}
