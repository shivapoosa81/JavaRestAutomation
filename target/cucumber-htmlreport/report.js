$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com/unibet/api/tests/posts.feature');
formatter.feature({
  "line": 2,
  "name": "Posts CRUD operations",
  "description": "",
  "id": "posts-crud-operations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Creating a Post",
  "description": "",
  "id": "posts-crud-operations;creating-a-post;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "New post details \"122\" \"224\" \"football\" \"excellent\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Add new post details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Post added successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "122",
      "offset": 18
    },
    {
      "val": "224",
      "offset": 24
    },
    {
      "val": "football",
      "offset": 30
    },
    {
      "val": "excellent",
      "offset": 41
    }
  ],
  "location": "PostSteps.New_post_details(String,String,String,String)"
});
formatter.result({
  "duration": 427314212,
  "status": "passed"
});
formatter.match({
  "location": "PostSteps.Add_new_post_details()"
});
formatter.result({
  "duration": 639341768,
  "status": "passed"
});
formatter.match({
  "location": "PostSteps.Post_added_successfully()"
});
formatter.result({
  "duration": 3629061,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Retrieving an existing Post",
  "description": "",
  "id": "posts-crud-operations;retrieving-an-existing-post;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Post Identifier as \"224\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Get the post details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Verify the retrieved post details with id",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "224",
      "offset": 20
    }
  ],
  "location": "PostSteps.Post_Identifier_as(String)"
});
formatter.result({
  "duration": 90493162,
  "status": "passed"
});
formatter.match({
  "location": "PostSteps.Get_the_post_details()"
});
formatter.result({
  "duration": 385183241,
  "error_message": "java.lang.ArrayIndexOutOfBoundsException: 1\n\tat com.unibet.api.tests.AbstractTest.convertResponseToPost(AbstractTest.java:49)\n\tat com.unibet.api.tests.AbstractTest.getPost(AbstractTest.java:76)\n\tat com.unibet.api.tests.PostSteps.Get_the_post_details(PostSteps.java:57)\n\tat ✽.When Get the post details(com/unibet/api/tests/posts.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "PostSteps.Verify_the_retrieved_post_details_with_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Updating a Post",
  "description": "",
  "id": "posts-crud-operations;updating-a-post;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Post Id \"224\" to update \"122\" \"football\" \"very good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Update the post details",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Get the post details as modified \"122\" \"224\" \"football\" \"very good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "224",
      "offset": 9
    },
    {
      "val": "122",
      "offset": 25
    },
    {
      "val": "football",
      "offset": 31
    },
    {
      "val": "very good",
      "offset": 42
    }
  ],
  "location": "PostSteps.Post_Id_to_update(String,String,String,String)"
});
formatter.result({
  "duration": 82636349,
  "status": "passed"
});
formatter.match({
  "location": "PostSteps.Update_the_post_details()"
});
formatter.result({
  "duration": 214386867,
  "error_message": "java.lang.ArrayIndexOutOfBoundsException: 1\n\tat com.unibet.api.tests.AbstractTest.convertResponseToPost(AbstractTest.java:49)\n\tat com.unibet.api.tests.AbstractTest.updatePost(AbstractTest.java:88)\n\tat com.unibet.api.tests.PostSteps.Update_the_post_details(PostSteps.java:78)\n\tat ✽.When Update the post details(com/unibet/api/tests/posts.feature:22)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "122",
      "offset": 34
    },
    {
      "val": "224",
      "offset": 40
    },
    {
      "val": "football",
      "offset": 46
    },
    {
      "val": "very good",
      "offset": 57
    }
  ],
  "location": "PostSteps.Get_the_post_details_as_modified(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Deleting a Post",
  "description": "",
  "id": "posts-crud-operations;deleting-a-post;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Post Identifier as \"224\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Delete the post details",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Post deleted successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "224",
      "offset": 20
    }
  ],
  "location": "PostSteps.Post_Identifier_as(String)"
});
formatter.result({
  "duration": 64624149,
  "status": "passed"
});
formatter.match({
  "location": "PostSteps.Delete_the_post_details()"
});
formatter.result({
  "duration": 940039681,
  "status": "passed"
});
formatter.match({
  "location": "PostSteps.Post_deleted_successfully()"
});
formatter.result({
  "duration": 700334,
  "error_message": "junit.framework.AssertionFailedError\n\tat junit.framework.Assert.fail(Assert.java:48)\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\n\tat com.unibet.api.tests.PostSteps.Post_deleted_successfully(PostSteps.java:97)\n\tat ✽.Then Post deleted successfully(com/unibet/api/tests/posts.feature:31)\n",
  "status": "failed"
});
});