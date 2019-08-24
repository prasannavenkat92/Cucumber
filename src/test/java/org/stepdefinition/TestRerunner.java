package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@src/test/resources/failed.txt",
glue="org.stepdefinition",
plugin="html:target1")
public class TestRerunner {

}
