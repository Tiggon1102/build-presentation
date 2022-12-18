describe('serverTime', () => {
	it('user on serverTime page should see current server date, save this one, refresh the page and see the saved one plus the new one', () => {
		cy.visit('?path=serverTime');
		const savingTime = new Date().toString().split(':')[0];
		cy.contains(savingTime);
		cy.get('#timestamp').click();
		cy.reload();
		cy.contains(savingTime);
		cy.contains(new Date().toString().split(':')[0]);
	});
});
