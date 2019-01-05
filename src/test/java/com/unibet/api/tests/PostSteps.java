package com.unibet.api.tests;

import junit.framework.Assert;

import com.unibet.RestAPITest.PostObject;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

/**
 * @author shiva
 * This class is for the API resource step definitions. 
 */

public class PostSteps extends AbstractTest{
	
	String input = null;
	String id,userId,title,body;
	String url = null;
	PostObject postObject = null;
	int statusCode;
	
	@Given("^New post details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void New_post_details(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		userId = arg1;
		id = arg2;
		title = arg3;
		body = arg4;
		input = constructInputAsJsonString(userId,id,title,body);
		url = constructCreateUrl();
	}

	@When("^Add new post details$")
	public void Add_new_post_details() throws Throwable {
		postObject = createPost(url,input);
	   
	}

	@Then("^Post added successfully$")
	public void Post_added_successfully() throws Throwable {
		Assert.assertNotNull(postObject);
		Assert.assertTrue(postObject.getUserId().contains(userId));
		Assert.assertTrue(postObject.getId().contains(id));
		Assert.assertTrue(postObject.getTitle().contains(title));
		Assert.assertTrue(postObject.getBody().contains(body));
	}

	@Given("^Post Identifier as \"([^\"]*)\"$")
	public void Post_Identifier_as(String arg1) throws Throwable {
	    id = arg1;
	    url = constructGetUrl(id);
	}

	@When("^Get the post details$")
	public void Get_the_post_details() throws Throwable {
		postObject = getPost(url); 
	}

	@Then("^Verify the retrieved post details with id$")
	public void Verify_the_retrieved_post_details_with_id() throws Throwable {
		Assert.assertNotNull(postObject);
		Assert.assertTrue(postObject.getId().contains(id));
	}

	@Given("^Post Id \"([^\"]*)\" to update \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void Post_Id_to_update(String arg1, String arg2,String arg3,String arg4) throws Throwable {
		 id = arg1;
		 userId = arg2;
		 title = arg3;
		 body = arg4;
		 input = constructInputAsJsonString(userId,id,title,body);
		 url = constructGetUrl(id);
	}

	@When("^Update the post details$")
	public void Update_the_post_details() throws Throwable {
		postObject = updatePost(url,input); 
	}

	@Then("^Get the post details as modified \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void Get_the_post_details_as_modified(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		Assert.assertNotNull(postObject);
		Assert.assertTrue(postObject.getUserId().contains(arg1));
		Assert.assertTrue(postObject.getId().contains(arg2));
		Assert.assertTrue(postObject.getTitle().contains(arg3));
		Assert.assertTrue(postObject.getBody().contains(arg4));
	}
	
	@When("^Delete the post details$")
	public void Delete_the_post_details() throws Throwable {
		statusCode = deletePost(url); 
	}

	@Then("^Post deleted successfully$")
	public void Post_deleted_successfully() throws Throwable {
	    Assert.assertTrue(statusCode == 204);
	}
}
