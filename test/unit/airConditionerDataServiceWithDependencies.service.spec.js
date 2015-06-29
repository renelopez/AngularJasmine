describe('Air Conditioner Data Service with dependencies Tests',function(){
    var mockedGitHubService;

    beforeEach(module('app'));

    beforeEach(function(){
        mockedGitHubService=sinon.stub({get:function(){},save:function(){}});
        module(function($provide){
            $provide.value('gitHubDataService',mockedGitHubService);
        })
    });

    it('should check that the gitHub service was called with a username named Rene',inject(function(airConditionerWithDependenciesDataService){
        airConditionerWithDependenciesDataService.getGitHubDataByUser('Orly');
        expect(mockedGitHubService.get.args[0][0]).toBe('Orly Unosquare');
    }));

    it('should return the data that the GitHubService returns',inject(function(airConditionerWithDependenciesDataService){
        mockedGitHubService.get.returns('Viri');
        expect(airConditionerWithDependenciesDataService.getGitHubDataByUser('Viri')).toEqual('Viri');
    }));

    it('should check a correct value was sent to the GitHub Service on Save',inject(function(airConditionerWithDependenciesDataService){
        var user={id:1,name:'Popeye'};
        airConditionerWithDependenciesDataService.save(user);
        expect(mockedGitHubService.save.calledWith(user)).toBeTruthy();
    }));

});
