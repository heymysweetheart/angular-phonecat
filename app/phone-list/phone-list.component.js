'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
  	templateUrl: 'phone-list/phone-list.template.html',
  	controller: function PhoneListController($http) {
  	  var self = this;
  	  self.orderProp = 'age';
  	  $http.get('phones/phones.json').then(function(reponse) {
  	  	   self.phones = reponse.data;
  	  	  });

    }
  });
