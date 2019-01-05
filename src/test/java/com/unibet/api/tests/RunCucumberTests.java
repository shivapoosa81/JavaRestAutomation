package com.unibet.api.tests;

import org.junit.runner.RunWith;

import cucumber.junit.Cucumber;
 
/**
 * @author shiva
 * This class is for test runner class and running the tests depending upon the cucumber options. 
 */
@RunWith(Cucumber.class)
@Cucumber.Options(tags = {"@test"}, format = {"pretty", "html:target/cucumber-htmlreport","json-pretty:target/cucumber-report.json"})

public class RunCucumberTests {
}