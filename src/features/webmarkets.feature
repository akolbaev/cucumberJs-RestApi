
Feature: web markets API validation

    Scenario: validate GET call and response
        Given a url:
        |   https://gateway-web-markets.tzero.com/symbols/ASPD  |
        When I send a GET request
        Then I receive response code 200
        Then I should get data description:
        |   name                |   description             |   type            |
        |   Aspen Digital, Inc. |   Aspen Security Token    |   SECURITY_TOKEN  |
        Then I should get custodialAccounts:
        |address|brokerId|
        |tz1aPeXr4238SL8JMzm9tDiHrqXnScHjKvtJ|9e92fb6a-4ad9-42d6-b07c-2f58553f752a|
        |tz1aPeXr4238SL8JMzm9tDiHrqXnScHjKvtJ|a34d6da6-8fa6-41eb-8937-409678d318c9|
        Then I should get <10> trade_docs

       
        