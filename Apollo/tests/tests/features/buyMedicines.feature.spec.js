// Generated from: tests\features\buyMedicines.feature
import { test } from "playwright-bdd";

test.describe('Buy Medicines Functionality', () => {

  test('Buying a medicine for a specific health condition', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Buy Medicines page', null, { page }); 
    await When('user clicks on diabetic care tile', null, { page }); 
    await Then('user is taken to the medicines for diabetes page', null, { page }); 
    await When('user clicks on add to cart button next to the chosen medicine', null, { page }); 
    await Then('the medicine gets added to cart', null, { page }); 
    await When('user clicks on the cart menu', null, { page }); 
    await Then('The cart is opened', null, { page }); 
    await And('user is able to view the added medicine', null, { page }); 
  });

  test('Buying a medicine from Value Deals at Rs 100 section', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Buy Medicines page', null, { page }); 
    await When('user clicks on the add to cart button next to chosen medicine under the Value Deals at Rs 100 offer section', null, { page }); 
    await Then('the medicine gets added to cart', null, { page }); 
    await When('user clicks on the cart menu', null, { page }); 
    await Then('The cart is opened', null, { page }); 
    await And('user is able to view the added medicine', null, { page }); 
  });

  test('Buying a medicine from Minimum 50 Percent Off section', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Buy Medicines page', null, { page }); 
    await When('user clicks on the add to cart button next to chosen medicine under the Minimum 50 Percent Off offer section', null, { page }); 
    await Then('the medicine gets added to cart', null, { page }); 
    await When('user clicks on the cart menu', null, { page }); 
    await Then('The cart is opened', null, { page }); 
    await And('user is able to view the added medicine', null, { page }); 
  });

  test('Buying a medicine from Hot Sellers section', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Buy Medicines page', null, { page }); 
    await When('user clicks on the add to cart button next to chosen medicine under the Hot Sellers offer section', null, { page }); 
    await Then('the medicine gets added to cart', null, { page }); 
    await When('user clicks on the cart menu', null, { page }); 
    await Then('The cart is opened', null, { page }); 
    await And('user is able to view the added medicine', null, { page }); 
  });

  test('Buying a medicine from a specific brand', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Buy Medicines page', null, { page }); 
    await When('user clicks on Whisper tile', null, { page }); 
    await Then('user is taken to the medicines from Whisper brand', null, { page }); 
    await When('user clicks on add to cart button next to the chosen medicine', null, { page }); 
    await Then('the medicine gets added to cart', null, { page }); 
    await When('user clicks on the cart menu', null, { page }); 
    await Then('The cart is opened', null, { page }); 
    await And('user is able to view the added medicine', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\buyMedicines.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is on Buy Medicines page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user clicks on diabetic care tile","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then user is taken to the medicines for diabetes page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user clicks on add to cart button next to the chosen medicine","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the medicine gets added to cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user clicks on the cart menu","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The cart is opened","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And user is able to view the added medicine","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user is on Buy Medicines page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user clicks on the add to cart button next to chosen medicine under the Value Deals at Rs 100 offer section","stepMatchArguments":[{"group":{"start":90,"value":"100","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the medicine gets added to cart","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When user clicks on the cart menu","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The cart is opened","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And user is able to view the added medicine","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user is on Buy Medicines page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user clicks on the add to cart button next to chosen medicine under the Minimum 50 Percent Off offer section","stepMatchArguments":[{"group":{"start":80,"value":"50","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the medicine gets added to cart","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When user clicks on the cart menu","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then The cart is opened","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And user is able to view the added medicine","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given user is on Buy Medicines page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When user clicks on the add to cart button next to chosen medicine under the Hot Sellers offer section","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the medicine gets added to cart","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When user clicks on the cart menu","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then The cart is opened","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And user is able to view the added medicine","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given user is on Buy Medicines page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When user clicks on Whisper tile","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then user is taken to the medicines from Whisper brand","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When user clicks on add to cart button next to the chosen medicine","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then the medicine gets added to cart","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When user clicks on the cart menu","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then The cart is opened","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"And user is able to view the added medicine","stepMatchArguments":[]}]},
]; // bdd-data-end