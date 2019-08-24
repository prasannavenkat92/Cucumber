$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should be in telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_in_telecom_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user enter all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_all_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed the customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_the_customer_id_is_generated()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//td[align\u003d\u0027center\u0027])[2]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRASANNA-PC\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\Prasanna\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49981}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 43065b05f419cb6872579d8455578227\n*** Element info: {Using\u003dxpath, value\u003d(//td[align\u003d\u0027center\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.AddCustomerSteps.user_should_be_displayed_the_customer_id_is_generated(AddCustomerSteps.java:109)\r\n\tat ✽.user should be displayed the customer id is generated(src/test/resources/Features/AddCustomer.feature:12)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should be in telecom homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_in_telecom_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Two dimensional list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user enter all the field.",
  "rows": [
    {
      "cells": [
        "Prasanna Venkatesan",
        "R",
        "xyz@gmail.com",
        "Vriddhachalam",
        "6756757"
      ]
    },
    {
      "cells": [
        "Mani",
        "R",
        "abc@gmail.com",
        "Vriddhachalam",
        "5563363"
      ]
    },
    {
      "cells": [
        "Ramachandran",
        "P",
        "ram@gmail.com",
        "Vriddhachalam",
        "12121313"
      ]
    },
    {
      "cells": [
        "Usha",
        "R",
        "usha@gmail.com",
        "Vriddhachalam",
        "4232424"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enter_all_the_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed the customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_should_be_displayed_the_customer_id_is_generated()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//td[align\u003d\u0027center\u0027])[2]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRASANNA-PC\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\Prasanna\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0c99aa7fdf921ff943676be8a71109e\n*** Element info: {Using\u003dxpath, value\u003d(//td[align\u003d\u0027center\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.AddCustomerSteps.user_should_be_displayed_the_customer_id_is_generated(AddCustomerSteps.java:109)\r\n\tat ✽.user should be displayed the customer id is generated(src/test/resources/Features/AddCustomer.feature:40)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/Features/AddTariff.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Tariff",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should be on telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariff.user_should_be_on_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add Tariff Option",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariff.user_click_on_Add_Tariff_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter all the field",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariff.user_enter_all_the_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariff.user_should_click_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get Congratulations page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariff.user_should_get_Congratulations_page()"
});
formatter.result({
  "status": "passed"
});
});