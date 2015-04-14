// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' controller
angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles',
	function($scope, $routeParams, $location, Authentication, Articles) {
		// Expose the Authentication service
        $scope.authentication = Authentication;
	
        // Create a new controller method for creating new articles    
        $scope.create = function() {
            // Use the form fields to create a new article $resource object
            var article = new Articles({
                title: this.title,
                content: this.content
            });

            // Use the article '$save' method to send an appropriate POST request
            article.$save(function(response) {

                $location.path('articles/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function(){
            $scope.articles = Articles.query();
        };

        $scope.findOne = function(){
            $scope.article = Articles.get({
                articleId: $routeParams.articleId
            });         
        };

        $scope.update = function(){
            $scope.article.$update(function(){
                $location.path('articles/' + $scope.article._id);
            }, function(errorResponse){
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(article){
            if(article){
                article.$remove(function(){
                    for (var i in $scope.articles){
                        if($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.article.$remove(function(){
                    $location.path('articles');
                });
            }
        };
    } 
]);
