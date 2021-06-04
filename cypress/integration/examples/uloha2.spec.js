
context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.bart.sk/mam-zaujem-test')
    });

    it('Submit a form', () => {
        cy.get('#contact-form').submit();
    });

    it('Prazdne polia', () => {
        cy.get('input[name="name"]').should('be.empty');
        cy.get('input[id="company-name"]').should('be.empty');
        cy.get('input[id="email"]').should('be.empty');
        cy.get('input[id="tel"]').should('be.empty');
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('textarea[id="message"]').should('be.empty');

        cy.get('#contact-submit').click();
        cy.get('input[name="name"]').next().should('contain','Vyplňte prosím svoje meno');
        cy.get('input[id="company-name"]').next().should('contain','Vyplňte prosím meno spoločnosti');
        cy.get('input[id="email"]').next().should('contain','Zadajte prosím valídny email');
        cy.get('input[id="tel"]').next().should('contain','Vyplňte prosím svoje telefónne číslo');
        cy.get('textarea[id="message"]').next().should('contain','Opíšte prosím svoj projekt');

    });
    it('Empty fields', () => {
        cy.visit('https://www.bart.sk/en/interested-in-test');
        cy.get('input[name="name"]').should('be.empty');
        cy.get('input[id="company-name"]').should('be.empty');
        cy.get('input[id="email"]').should('be.empty');
        cy.get('input[id="tel"]').should('be.empty');
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('textarea[id="message"]').should('be.empty');

        cy.get('#contact-submit').click();
        cy.get('input[name="name"]').next().should('contain','Please enter your name');
        cy.get('input[id="company-name"]').next().should('contain','Company');
        cy.get('input[id="email"]').next().should('contain','Please enter valid email');
        cy.get('input[id="tel"]').next().should('contain','Please enter your phone number');
        cy.get('textarea[id="message"]').next().should('contain','Please describe your project');

    });
    it('Bežné polia', () => {
        cy.get('input[name="name"]').type("Patrik").should("have.value", "Patrik");
        cy.get('input[id="company-name"]').type("Bratislava s.r").should("have.value", "Bratislava s.r");
        cy.get('input[id="email"]').type("Patrik@gmail.com").should("have.value", "Patrik@gmail.com");
        cy.get('input[id="tel"]').type("+42190999590030").should("have.value", "+42190999590030");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Thank you for completing the application.');
        });


    });
    it('Normal fields', () => {
        cy.visit('https://www.bart.sk/en/interested-in-test');
        cy.get('input[name="name"]').type("Patrik").should("have.value", "Patrik");
        cy.get('input[id="company-name"]').type("Bratislava s.r").should("have.value", "Bratislava s.r");
        cy.get('input[id="email"]').type("Patrik@gmail.com").should("have.value", "Patrik@gmail.com");
        cy.get('input[id="tel"]').type("+42190999590030").should("have.value", "+42190999590030");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Ďakujem za vyplnenie žiadosti.');
        });


    });
    it('Nesprávny e-mail', () => {
        cy.get('input[name="name"]').type("Kate").should("have.value", "Kate");
        cy.get('input[id="company-name"]').type("RAJO").should("have.value", "RAJO");
        cy.get('input[id="email"]').type('343');
        cy.get('input[id="tel"]').type("+42190999590030").should("have.value", "+42190999590030");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.get('input[id="email"]').next().should('contain','Zadajte prosím valídny email');


    });
    it('Wrong e-mail', () => {
        cy.visit('https://www.bart.sk/en/interested-in-test');
        cy.get('input[name="name"]').type("Kate").should("have.value", "Kate");
        cy.get('input[id="company-name"]').type("RAJO").should("have.value", "RAJO");
        cy.get('input[id="email"]').type('343');
        cy.get('input[id="tel"]').type("+42190999590030").should("have.value", "+42190999590030");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.get('input[id="email"]').next().should('contain','Please enter valid email');


    });
    it('Nesprávne číslo', () => {
        cy.get('input[name="name"]').type("Tomas").should("have.value", "Tomas");
        cy.get('input[id="company-name"]').type(" Apple").should("have.value", " Apple");
        cy.get('input[id="email"]').type("Tomas@gmail.com").should("have.value", "Tomas@gmail.com");
        cy.get('input[id="tel"]').type("+421").should("have.value", "+421");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.get('input[id="tel"]').next().should('contain','Vyplňte prosím svoje telefónne číslo');

    });
    it('Wrong number', () => {
        cy.visit('https://www.bart.sk/en/interested-in-test');
        cy.get('input[name="name"]').type("Tomas").should("have.value", "Tomas");
        cy.get('input[id="company-name"]').type(" Apple").should("have.value", " Apple");
        cy.get('input[id="email"]').type("Tomas@gmail.com").should("have.value", "Tomas@gmail.com");
        cy.get('input[id="tel"]').type("+421").should("have.value", "+421");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.get('input[id="tel"]').next().should('contain','Please enter your phone number');

    });
    it('Nesprávne symboly', () => {
        cy.get('input[name="name"]').type("Da&@#*&#niel");
        cy.get('input[id="company-name"]').type("Víno Matyšák").should("have.value", "Víno Matyšák");
        cy.get('input[id="email"]').type("Daniel@gmail.com").should("have.value", "Daniel@gmail.com");
        cy.get('input[id="tel"]').type("+421967676767").should("have.value", "+421967676767");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.get('input[name="name"]').next().should('contain','Vyplňte prosím svoje meno');

    });
    it('Wrong symbols', () => {
        cy.visit('https://www.bart.sk/en/interested-in-test');
        cy.get('input[name="name"]').type("Da&@#*&#niel");
        cy.get('input[id="company-name"]').type("Víno Matyšák").should("have.value", "Víno Matyšák");
        cy.get('input[id="email"]').type("Daniel@gmail.com").should("have.value", "Daniel@gmail.com");
        cy.get('input[id="tel"]').type("+421967676767").should("have.value", "+421967676767");
        cy.get('input[type="checkbox"]').first().check();
        cy.get('textarea[id="message"]').type("Just for testing").should("have.value", "Just for testing");
        cy.get('#contact-submit').click();
        cy.get('input[name="name"]').next().should('contain','Please enter your name');

    });
});