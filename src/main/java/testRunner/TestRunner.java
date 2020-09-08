package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features",
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
		strict=true,
		//plugin= {"com.qmetry.qaf.automation.cucumber.QAFCucumberPlugin"})
		plugin={"pretty","html:test-output"})
public class TestRunner {

}
