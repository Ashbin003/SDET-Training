Feature: Buy Medicines Functionality

Scenario: Buying a medicine for a specific health condition
    Given user is on Buy Medicines page
    When user clicks on diabetic care tile
    Then user is taken to the medicines for diabetes page
    When user clicks on add to cart button next to the chosen medicine
    Then the medicine gets added to cart
    When user clicks on the cart menu
    Then The cart is opened
    And user is able to view the added medicine

Scenario: Buying a medicine from Value Deals at Rs 100 section
    Given user is on Buy Medicines page
    When user clicks on the add to cart button next to chosen medicine under the Value Deals at Rs 100 offer section
    Then the medicine gets added to cart
    When user clicks on the cart menu
    Then The cart is opened
    And user is able to view the added medicine

Scenario: Buying a medicine from Minimum 50 Percent Off section
    Given user is on Buy Medicines page
    When user clicks on the add to cart button next to chosen medicine under the Minimum 50 Percent Off offer section
    Then the medicine gets added to cart
    When user clicks on the cart menu
    Then The cart is opened
    And user is able to view the added medicine

Scenario: Buying a medicine from Hot Sellers section
    Given user is on Buy Medicines page
    When user clicks on the add to cart button next to chosen medicine under the Hot Sellers offer section
    Then the medicine gets added to cart
    When user clicks on the cart menu
    Then The cart is opened
    And user is able to view the added medicine

Scenario: Buying a medicine from a specific brand
    Given user is on Buy Medicines page
    When user clicks on Whisper tile
    Then user is taken to the medicines from Whisper brand
    When user clicks on add to cart button next to the chosen medicine
    Then the medicine gets added to cart
    When user clicks on the cart menu
    Then The cart is opened
    And user is able to view the added medicine