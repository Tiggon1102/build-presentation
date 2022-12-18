describe('clientTime', () => {
	it('user on clientTime page should see current client date, save this one, refresh the page and see the saved one plus the new one', () => {
		cy.visit('?path=clientTime');
		const savingTime = new Date().toString().split(':')[0];
		cy.contains(savingTime);
		cy.get('#timestamp').click();
		cy.reload();
		cy.contains(savingTime);
		cy.contains(new Date().toString().split(':')[0]);
	});
});
