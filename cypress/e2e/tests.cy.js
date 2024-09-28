describe(`Unit test the landing page`, () => {
  beforeEach(() => {
    cy.visit(`/`);
  });
  it(`has latest CO2 value`, () => {
    assert(
      cy
        .get(`#currentCo2`)
        .invoke(`text`)
        .then((text) => {
          assert(!isNaN(text));
        })
    );
  });

  it(`has latest temperature value`, () => {
    assert(
      cy
        .get(`#currentTemp`)
        .invoke(`text`)
        .then((text) => {
          assert(!isNaN(text));
        })
    );
  });

  it(`has latest CO2 year`, () => {
    assert(
      cy
        .get(`#latestCo2Year`)
        .invoke(`text`)
        .then((text) => {
          assert(!isNaN(text));
        })
    );
  });

  it(`has latest temperature year`, () => {
    assert(
      cy
        .get(`#latestTempYear`)
        .invoke(`text`)
        .then((text) => {
          assert(!isNaN(text));
        })
    );
  });

  it(`has 10 year temp change`, () => {
    assert(
      cy
        .get(`#tenYearWarming`)
        .invoke(`text`)
        .then((text) => {
          assert(!isNaN(text));
        })
    );
  });

  it(`has stamp with text`, () => {
    assert(
      cy
        .get(`#stamp`)
        .invoke(`text`)
        .then((text) => {
          assert(text);
        })
    );
  });
});
