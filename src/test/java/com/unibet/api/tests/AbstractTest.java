package com.unibet.api.tests;

import java.util.logging.Logger;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.unibet.RestAPITest.PostObject;

/**
 * @author shiva
 * This class is for the CRUD operations for the API resource
 */
public abstract class AbstractTest {

	private static Logger logger = Logger.getLogger(AbstractTest.class
			.getName());

	protected Client client = Client.create();
	protected WebResource webResource;
	protected ClientResponse response;

	protected String constructInputAsJsonString(String arg1, String arg2,
			String arg3, String arg4) {
		return "{\"userId\":"+arg1+",\"id\":"+arg2+", \"title\":\""+arg3+"\", \"body\":\""+arg4+"\"}";

	}

	protected String constructCreateUrl() {
		return "http://jsonplaceholder.typicode.com/posts/";
	}

	public PostObject createPost(String url, String input) {
		webResource = client.resource(url);

		response = webResource.type("application/json").post(
				ClientResponse.class, input);

		logger.info("Output from Server .... \n");
        
		return convertResponseToPost(response.getEntity(String.class));
	}

	private PostObject convertResponseToPost(String entity) {
		
		String tokens[] = entity.split(",");
		System.out.println(tokens[0]);
		PostObject post = new PostObject();
		post.setId(tokens[1].split(":")[1]);
		post.setUserId(tokens[0].split(":")[1]);
		post.setBody(tokens[3].split(":")[1]);
		post.setTitle(tokens[2].split(":")[1]);
		return post;
		
	}

	protected String constructGetUrl(String input) {
		return "http://jsonplaceholder.typicode.com/posts/" + input;
	}

	public PostObject getPost(String url) {
		
		try
		{
			
		}catch(Exception e){
			
		}
		webResource = client.resource(url);

		response = webResource.type("application/json").get(
				ClientResponse.class);

		logger.info("Output from Server .... \n");

		return convertResponseToPost(response.getEntity(String.class));
	}

	protected PostObject updatePost(String url, String input) {
		webResource = client.resource(url);

		response = webResource.type("application/json").put(
				ClientResponse.class, input);


		logger.info("Output from Server .... \n");

		return convertResponseToPost(response.getEntity(String.class));
	}

	protected int deletePost(String url) {
		webResource = client.resource(url);

		response = webResource.type("application/json").delete(
				ClientResponse.class);


		logger.info("Output from Server .... \n");

		return response.getStatus();
	}
}
