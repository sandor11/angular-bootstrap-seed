angular.module('webApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: './views/components/app/app.html',
                    controller: 'appController'
                })
                .state('app.home', {
                    url: '/',
                    templateUrl: './views/components/home/home.html',
                    controller: 'homeController',
                    metaTags: {
                        title: 'My killer angular + bootstrap app',
                        description: 'My angular app is going to rock!'
                    }
                })
                .state('app.page1', {
                    url: '/page-1',
                    templateUrl: './views/components/page1/page1.html',
                    controller: 'pageController',
                    metaTags: {
                        title: 'Page 1',
                        description: 'A page of my awesome angular app!'
                    }
                });

        $locationProvider.html5Mode(true);
    }
]);