package stepDefinitions;

import com.qa.page.HomePage;
import com.qa.util.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlutterSteps extends TestBase {
	
    /*Setup setup=new Setup();
    LoginPage page=new LoginPage();
	Utils utils=new Utils();*/
	HomePage page;
	@Given("^the user launch flutter url$")
	public void the_user_launch_flutter_url() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		TestBase.initialization();
	}

	@When("^user click on \"([^\"]*)\" button$")
	public void user_click_on_button(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		page=new HomePage();
		Thread.sleep(2000);
		page.gettingStartedbtnclick();
	    
	}

	@Then("^user navigates to installation page$")
	public void user_navigates_to_installation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		page=new HomePage();
		page.installPageCheck();
	    
	}

	@When("^user click on \"([^\"]*)\" side nav link$")
	public void user_click_on_side_nav_link(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		page=new HomePage();
		page.clickTestDriveLink();
	   
	}

	@Then("^user should navigate \"([^\"]*)\" page$")
	public void user_should_navigate_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		page=new HomePage();
		page.testDrivePageCheck();
	    
	}

	@When("^user click on \"([^\"]*)\" link$")
	public void user_click_on_link(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		page=new HomePage();
		page.clickFirstAppLink();
	    
	}
	
	@After
	public void tearDown()
	{
		driver.quit();
	}



}
