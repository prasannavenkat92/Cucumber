package org.stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class AddCustomerSteps {

	static WebDriver driver;
	@Given("user should be in telecom homepage")
	public void user_should_be_in_telecom_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Prasanna\\eclipse-workspace\\Prasanna_Working\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
		//driver.manage().timeouts().implicitlyWait(100,TimeUnit.SECONDS);
	    
	}

	@Given("user click on add customer button")
	public void user_click_on_add_customer_button() {
	   WebElement cus= driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]"));
	   cus.click();
	}

	@When("user enter all the fields")
	public void user_enter_all_the_fields() {
		driver.findElement(By.xpath("//label[text()=\"Done\"]")).click();
		driver.findElement(By.id("fname")).sendKeys("Prasanna Venkatesan");
		driver.findElement(By.id("lname")).sendKeys("R");
		driver.findElement(By.id("email")).sendKeys("vrihero@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("Vriddhachalam");
		driver.findElement(By.id("telephoneno")).sendKeys("9940815294");
	    
	}
	
	@When("user enter all the fields.")
	public void user_enter_all_the_fields(DataTable dt)
	{
		List<String> d=dt.asList(String.class);
		driver.findElement(By.xpath("//label[text()=\"Done\"]")).click();
		driver.findElement(By.id("fname")).sendKeys(d.get(0));
		driver.findElement(By.id("lname")).sendKeys(d.get(1));
		driver.findElement(By.id("email")).sendKeys(d.get(2));
		driver.findElement(By.name("addr")).sendKeys(d.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(d.get(4));
	    
	}

	@When("user click on submit button")
	public void user_click_on_submit_button() {
		driver.findElement(By.name("submit")).click();
	    
	}

	@Then("user should be displayed the customer id is generated")
	public void user_should_be_displayed_the_customer_id_is_generated() {
	    Assert.assertTrue((driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed()));
	    
	}

}
