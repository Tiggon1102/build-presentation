describe('menu', () => {
	it('user should see client and server icon and be able to navigate between these two pages', () => {
		cy.visit('');
		cy.get('#client').should('be.visible');
		cy.get('#server').should('be.visible');
		cy.get('#server').click();
		cy.url().should('include', 'serverTime');
		cy.get('#client').click();
		cy.url().should('include', 'clientTime');
	});
});
