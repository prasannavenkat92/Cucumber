package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//using tags with OR , AND
//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/resources/Features", glue = "org.stepdefinition", plugin = "html:target", monochrome = true,tags = {"@tag1","@tag2" })
import cucumber.runtime.filter.RerunFilters;

////Ignoring Tags
//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/resources/Features", glue = "org.stepdefinition", plugin = "html:target", monochrome = true,tags = {"~@tag1" })

//Re-Run
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = "org.stepdefinition", plugin = {"html:target","rerun:src/test/resources/failed.txt"}, monochrome = true,tags = "@tag1")
public class TestRunner {

}
