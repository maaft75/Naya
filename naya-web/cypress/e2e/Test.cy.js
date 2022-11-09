/// <reference types="cypress" />

describe('E2E Test', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Login and verify landing page', () => {
    cy.get('[placeholder="Username"]').type('Test Username')
    cy.get('[placeholder="Password"]').type('Test Username')
    cy.contains('button', 'Your Favourite Color?').click()
    cy.get('[id^="rc-editable-input"]').clear()
    cy.get('[id^="rc-editable-input"]').type('#453F6F')
    cy.contains('button', 'Your Favourite Color?').click({force: true})
    cy.contains('button', 'Login').click()
    cy.url().should('include', 'explore')
    //cy.screenshot('login-verified')
  })

  it('Create a project and verify', () => {
    cy.contains('button', 'Create a New Sketch').click()
    cy.get('[placeholder="Sketch Name"]').type('Hello')
    cy.contains('button', 'Save').click()
    cy.url().should('include', 'explore')
    cy.get('body').contains('Hello')
    //cy.screenshot('project-creation-verified')
  })

  it('View a project', () => {
    cy.contains('button', 'Edit').click()
    cy.url().should('include','edit')
    //cy.screenshot('view-project-verified')
  })

  it('Use canvas elements to draw/make text notes & test the rendered components are valid', () => {
    cy.get('[label="Text"]').type('Test')
    cy.contains('button', 'Add Text').click()
    cy.wait(3000)
    cy.compareSnapshot('canvas')
  })

  it('Logout', () => {
    cy.go('back')
    cy.contains('button', 'Logout').click()
    cy.contains('button', 'Login')
  })
})
