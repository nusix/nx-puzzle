class AppController {
    constructor($location, $scope) {
        'ngInject';

        this.currentPage = $location.path();
        var self = this;

        $scope.$on('changedLocation', function(event, page) { 
            self.currentPage = page;
        });

        
    };
};

export default AppController;