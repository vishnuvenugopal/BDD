package com.qa.util;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class TestUtil extends TestBase {
	static int PAGE_LOAD_TIMEOUT=20;
	static int IMPLICIT_WAIT=30;

	public static void highlight(WebElement webElement)
	{
		JavascriptExecutor executor= (JavascriptExecutor)driver;
		WebElement element=webElement;
		for(int i=0;i<10;i++)
		{
			executor.executeScript("arguments[0].style.border='3px solid red'", element);
			
		}
	}

}
