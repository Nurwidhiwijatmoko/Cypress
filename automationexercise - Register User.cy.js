describe('Register User', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/') // visit url

    //cek aoakah benar masuk web AutomationExercise
    cy.contains('AutomationExercise')

    //click login

    cy.get('.shop-menu > .nav > :nth-child(4)').click();


    // cek apakah ada benar masuk halaman login / daftar

    cy.contains('New User Signup!')

    // input username 

    cy.get('[data-qa="signup-name"]').type('Widhi')
    .should('have.value','Widhi')

    // input email

    cy.get('[data-qa="signup-email"]').type('wijatmoko.nurwidhi4@gmail.com')
    .should('have.value', 'wijatmoko.nurwidhi4@gmail.com')


    //click button signup

    cy.get('[data-qa="signup-button"]').click();


    // cek sudah benar masuk halaman sign up atau belum
    cy.contains('Enter Account Information' || 'ENTER ACCOUNT INFORMATION')
    
    // click title

    cy.get('#id_gender1').click();


    // input password
    cy.get('[data-qa="password"]').type('Nurwidhi_99')
    .should('have.value','Nurwidhi_99')


    //pilih tanggal

    cy.get('[data-qa="days"]')
    .select('2')
    .invoke('val')
    .should('deep.equal', '2')


    //pilih bulan

    cy.get('[data-qa="months"]')
    .select('6')
    .invoke('val')
    .should('deep.equal', '6')


    // pilih tahun

    cy.get('[data-qa="years"]')
    .select('1999')
    .invoke('val')
    .should('deep.equal' , '1999')

    // ceklis checkbox Sign up for our newsletter!
    cy.get('#newsletter').check('1')


    // ceklis checkbox Receive special offers from our partners!

    cy.get('#optin').check('1')


    // input first name

    cy.get('[data-qa="first_name"]').type('nur widhi')
    .should('have.value', 'nur widhi')


    // input last name

    cy.get('[data-qa="last_name"]').type('wijatmoko')
    .should('have.value', 'wijatmoko')


    // input company
    cy.get('[data-qa="company"]').type('berijalan')
    .should('have.value', 'berijalan')


    // input adress 1
    cy.get('[data-qa="address"]').type('Depok Sleman')
    .should('have.value', 'Depok Sleman')


    // input adress 2
    cy.get('[data-qa="address2"]').type('Condong Catur, Sleman')
    .should('have.value', 'Condong Catur, Sleman')
  

    // pilih country
    cy.get('[data-qa="country"]')
    .select('Australia')
    .invoke('val')
    .should('deep.equal', 'Australia')

    // input state
    cy.get('[data-qa="state"]').type('Melbourne')
    .should('have.value', 'Melbourne')

    // input city
    cy.get('[data-qa="city"]').type('Docklands')
    .should('have.value', 'Docklands')

    // input zipcode
    cy.get('[data-qa="zipcode"]').type('554321')
    .should('have.value', '554321')

    // input mobile number
    cy.get('[data-qa="mobile_number"]').type('085831021345')
    .should('have.value', '085831021345')


    // klik button create account
    cy.get('[data-qa="create-account"]').click();


    // cek wording Account Created!
    cy.contains('Account Created!')


    // klik button continue
    cy.get('[data-qa="continue-button"]').click();


    // cek username yang login sudah benar atau belum
    cy.contains('Logged in as Widhi')

    // klik button delete account
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();


    //verifikasi wording Account Deleted!
    cy.contains('Account Deleted!')

    // click button continue
    cy.get('[data-qa="continue-button"]').click();

  })
})