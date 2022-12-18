describe('start', () => {
	it('user should see header, content and footer', () => {
		cy.visit('');
		cy.get('#header').should('be.visible');
		cy.get('#content').should('be.visible');
		cy.get('#footer').should('be.visible');
	});
});
