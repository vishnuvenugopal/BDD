$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fultter.feature");
formatter.feature({
  "line": 1,
  "name": "flutter demo",
  "description": "",
  "id": "flutter-demo",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Flutter test drive flow",
  "description": "",
  "id": "flutter-demo;flutter-test-drive-flow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the user launch flutter url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on \"Get started\" button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user navigates to installation page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on \"Test Drive\" side nav link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should navigate \"Test Drive\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on \"Write your first Flutter app\" link",
  "keyword": "When "
});
formatter.match({
  "location": "FlutterSteps.the_user_launch_flutter_url()"
});
formatter.result({
  "duration": 22016283606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get started",
      "offset": 15
    }
  ],
  "location": "FlutterSteps.user_click_on_button(String)"
});
formatter.result({
  "duration": 3921378553,
  "status": "passed"
});
formatter.match({
  "location": "FlutterSteps.user_navigates_to_installation_page()"
});
formatter.result({
  "duration": 48392193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Drive",
      "offset": 15
    }
  ],
  "location": "FlutterSteps.user_click_on_side_nav_link(String)"
});
formatter.result({
  "duration": 31969999249,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-58UC9BK\u0027, ip: \u0027192.168.1.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\vishnuzz\\AppData\\Local\\Temp\\scoped_dir29704_641453655}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51608}, acceptInsecureCerts\u003dfalse, browserVersion\u003d84.0.4147.135, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 2d32e43138b712c8d1d489a910f547cc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.qa.page.HomePage.clickTestDriveLink(HomePage.java:52)\r\n\tat stepDefinitions.FlutterSteps.user_click_on_side_nav_link(FlutterSteps.java:45)\r\n\tat ✽.When user click on \"Test Drive\" side nav link(fultter.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Drive",
      "offset": 22
    }
  ],
  "location": "FlutterSteps.user_should_navigate_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Write your first Flutter app",
      "offset": 15
    }
  ],
  "location": "FlutterSteps.user_click_on_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5138525714,
  "status": "passed"
});
});