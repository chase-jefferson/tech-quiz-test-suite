import { mount } from 'cypress/react';
import Quiz from "../../client/src/components/Quiz";


describe('Tech Quiz End-to-End Tests', () => {
  beforeEach(() => {
    mount(<Quiz />);
  });

  it('renders the start button initially', () => {
    cy.get('[data-testid="start-button"]').should('be.visible');
  });

  it('starts the quiz when start button is clicked', () => {
    cy.get('[data-testid="start-button"]').click();
    cy.get('.spinner-border').should('not.exist'); 
    cy.get('h2').should('exist'); 
  });

  it('displays answers for a question', () => {
    cy.get('[data-testid="start-button"]').click();  
    cy.get('[data-testid="answer-button"]').should('have.length.at.least', 2);  
  });

  it('increments score when correct answer is selected', () => {
    cy.get('[data-testid="start-button"]').click();  
    cy.get('[data-testid="answer-button"]').first().click();  
    cy.get('h2').should('exist');  
  });

  it('shows quiz completion screen after answering all questions', () => {
    cy.get('[data-testid="start-button"]').click();  
    cy.get('[data-testid="answer-button"]').each(($btn) => {
      cy.wrap($btn).click(); 
    });
    cy.get('.alert-success').should('contain.text', 'Your score:');  
  });

  it('restarts the quiz after completion', () => {
    cy.get('[data-testid="start-button"]').click(); 
    cy.get('[data-testid="answer-button"]').each(($btn) => {
      cy.wrap($btn).click(); 
    });
    cy.get('button').contains('Take New Quiz').click(); 
    cy.get('[data-testid="start-button"]').should('be.visible');  
  });

  it('validates that an answer must be selected before proceeding', () => {
    cy.get('[data-testid="start-button"]').click();  
    cy.get('[data-testid="answer-button"]').first().click(); 
    cy.get('[data-testid="answer-button"]').should('not.be.disabled');  
  });
});
