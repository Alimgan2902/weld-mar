'use strict';


var app = angular.module('baseApp', []);

app.controller('base', [ '$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    $http.get('/catalog/gruzoblochnye.json').then(function(response){
      $scope.gruzoblochnye = response.data;
      console.log(response.data);
    });
    $http.get('/catalog/pauerliftinga.json').then(function(response){
        $scope.pauerliftinga = response.data;
        // console.log(response.data);
    });
    $http.get('/catalog/skami.json').then(function(response){
        $scope.skami = response.data;
        // console.log(response.data);
    });
    $http.get('/catalog/sobstvennyy-ves.json').then(function(response){
        $scope.sobstvennyy = response.data;
        // console.log(response.data);
    });
    $http.get('/catalog/stoyki.json').then(function(response){
        $scope.stoyki = response.data;
        // console.log(response.data);
    });
    $http.get('/catalog/svobodniy-ves.json').then(function(response){
        $scope.svobodniy = response.data;
        // console.log(response.data);
    });

    $scope.showGruzoblochnye = function(){
        $scope.catalog = $scope.gruzoblochnye;
        $(".block_page").hide();
        $(".main_card").hide();
        $(".catalog_page").show();
        $(".list_card").show();
    };
    $scope.showSkami = function(){
        $scope.catalog = $scope.skami;
        $(".block_page").hide();
        $(".main_card").hide();
        $(".catalog_page").show();
        $(".list_card").show();
    };
    $scope.showStoyki = function(){
        $scope.catalog = $scope.stoyki;
        $(".block_page").hide();
        $(".main_card").hide();
        $(".catalog_page").show();
        $(".list_card").show();
    };
    $scope.showPauerliftinga = function(){
        $scope.catalog = $scope.pauerliftinga;
        $(".block_page").hide();
        $(".main_card").hide();
        $(".catalog_page").show();
        $(".list_card").show();
    };
    $scope.showSvobodniy = function(){
        $scope.catalog = $scope.svobodniy;
        $(".block_page").hide();
        $(".main_card").hide();
        $(".catalog_page").show();
        $(".list_card").show();
    };
    $scope.showSobstvennyy = function(){
        $scope.catalog = $scope.sobstvennyy;
        $(".block_page").hide();
        $(".main_card").hide();
        $(".catalog_page").show();
        $(".list_card").show();
    };

    $scope.showCard = function (item) {
        // console.log(item);
        $(".block_page").hide();
        $(".list_card").hide();
        $scope.card = item;
        $(".main_card").show();
    }
}]);




