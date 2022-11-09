import Login from '../../src/Login/login';
import Sketch from '../../src/Sketch/sketch';
import Explore from '../../src/Explore/explore';

describe('Login Component Test', () => {
  it('Login Component', () => {
    cy.mount(<Login />);

    cy.get('[placeholder="Username"]').type('Test Username')
    cy.get('[placeholder="Password"]').type("Test Password")
    cy.contains('button', 'Your Favourite Color?').click()
    cy.get('[id^="rc-editable-input"]').clear()
    cy.get('[id^="rc-editable-input"]').type('#453F6F')
    cy.contains('button', 'Your Favourite Color?').click({force: true})
    cy.contains('button', 'Login').click()
  })

  it('Explore Component', () => {
    cy.mount(<Explore />);
    cy.contains('button', 'Create a New Sketch').click({force: true})
  })

  // it('Sketch Component', () => {
  //   cy.mount(<Sketch />);
  // })

  // it('Edit Component', () => {
  //   cy.mount(<Edit />);
  //})
})