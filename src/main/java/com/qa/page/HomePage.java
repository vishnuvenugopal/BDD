package com.qa.page;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;
import com.qa.util.TestUtil;

public class HomePage extends TestBase{
	
	
	
	@FindBy(xpath="//a[@class='site-header__cta btn btn-primary']")
	WebElement gettingStartedbtn;
	
	@FindBy(xpath="(//*[@id=\"sidenav-1\"]/li[3]/a)[1]")
	WebElement testDrivelink;
	
	@FindBy(xpath="(//a[text()='Write your first Flutter app'])[1]")
	WebElement firstApplink;
    
	
	public HomePage() {
		// TODO Auto-generated constructor stub
		
		//PageFactory.initElements(driver, this);
		
	}
	
	
	public void gettingStartedbtnclick()
	{
		
		TestUtil.highlight(gettingStartedbtn);
		//TestUtil.setImplicitWait();
		gettingStartedbtn.click();
	}
	
	public void installPageCheck()
	{
		driver.getCurrentUrl().contains("install");
		driver.getTitle().contains("Install  - Flutter");
	}
	
	public void clickTestDriveLink() throws InterruptedException
	{
		Thread.sleep(20);
		TestUtil.highlight(testDrivelink);
		//setImplicitWait();
		testDrivelink.click();
	}
	
	public void testDrivePageCheck()
	{
		driver.getCurrentUrl().contains("test-drive");
		driver.getTitle().contains("Test drive  - Flutter ");
	}
	
	public void clickFirstAppLink()
	{
		TestUtil.highlight(firstApplink);
		//setImplicitWait();
		Assert.assertTrue(firstApplink.isDisplayed());
		firstApplink.click();
		
	}

	
	

}
