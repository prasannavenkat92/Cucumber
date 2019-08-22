package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariff {
	static WebDriver driver;

	@Given("user should be on telecom home page")
	public void user_should_be_on_telecom_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Prasanna\\eclipse-workspace\\Prasanna_Working\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("user click on Add Tariff Option")
	public void user_click_on_Add_Tariff_Option() {
	    driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("user enter all the field")
	public void user_enter_all_the_field() {
	    driver.findElement(By.id("rental1")).sendKeys("300");
	    driver.findElement(By.id("local_minutes")).sendKeys("3000");
	    driver.findElement(By.id("inter_minutes")).sendKeys("500");
	    driver.findElement(By.id("sms_pack")).sendKeys("100");
	    driver.findElement(By.id("minutes_charges")).sendKeys("1");
	    driver.findElement(By.id("inter_charges")).sendKeys("30");
	    driver.findElement(By.id("sms_charges")).sendKeys("1");
	}

	@When("user should click submit")
	public void user_should_click_submit() {
	    driver.findElement(By.name("submit")).click();
	}

	@Then("user should get Congratulations page")
	public void user_should_get_Congratulations_page() {
	    Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}

}
