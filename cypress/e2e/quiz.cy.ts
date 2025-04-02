describe('Tech Quiz End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('loads the quiz page successfully', () => {
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('starts the quiz when start button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.spinner-border', { timeout: 10000 }).should('not.exist'); 
    cy.get('h2').should('exist'); 
  });

  it('completes the quiz and displays final score', () => {
    cy.get('[data-testid="start-button"]').click();

    cy.get('[data-testid="answer-button"]').each(($btn) => {
      cy.wrap($btn).click();
      cy.wait(500); 
    });

    cy.contains('Quiz Completed', { timeout: 10000 }).should('be.visible');
    
    cy.log('Quiz Completed should be visible');

    cy.contains('Your score:').should('be.visible');

    cy.log('Waiting for Start Quiz button');

    cy.get('[data-testid="start-button"]', { timeout: 10000 }).should('be.visible');

    cy.log('Start Quiz button found');
  });

  it('validates that an answer must be selected before proceeding', () => {
    cy.get('[data-testid="start-button"]').click();
    cy.get('[data-testid="question"]').should('be.visible');
  
    cy.get('[data-testid="next-button"]').should('be.disabled');
    
    cy.get('[data-testid="answer-button"]').first().click();
    cy.get('[data-testid="next-button"]').should('not.be.disabled');
  
    cy.get('[data-testid="next-button"]').click();
  });

  it('restarts the quiz after completion', () => {
    cy.get('[data-testid="start-button"]').click();

    cy.get('[data-testid="answer-button"]').each(($btn) => {
      cy.wrap($btn).click();
      cy.wait(500); 
    });

    cy.contains('Quiz Completed', { timeout: 10000 }).should('be.visible');

    cy.log('Clicking Take New Quiz button');
    
    cy.get('[data-testid="restart-button"]').click();

    cy.get('[data-testid="start-button"]', { timeout: 10000 }).should('be.visible');

    cy.log('Start Quiz button found after restart');
  });
});
