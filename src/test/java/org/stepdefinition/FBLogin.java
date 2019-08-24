package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FBLogin {
	static WebDriver driver;
	@Given("user should be in FB Login page")
	public void user_should_be_in_FB_Login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Prasanna\\eclipse-workspace\\Prasanna_Working\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.facebook.com");
	}

	@When("user enter valid details")
	public void user_enter_valid_details() {
	    driver.findElement(By.id("email")).sendKeys("vrihero@gmail.com");
	    driver.findElement(By.id("pass")).sendKeys("Thalarasigan001");
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
	    driver.findElement(By.xpath("//input[@value='Log In']")).click();
	}

	@Then("user should navigate to FB Home Page")
	public void user_should_navigate_to_FB_Home_Page() {
	    Assert.assertTrue(driver.findElement(By.xpath("//strong[text()='Two-factor authentication required']")).isDisplayed());
	}



}
