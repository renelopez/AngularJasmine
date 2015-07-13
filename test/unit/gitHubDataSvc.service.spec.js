describe('GitHubDataService Tests',function(){

    beforeEach(module('app'));

    it('should issue a correct GET request to the GitHubService with renelopez',
        inject(function(gitHubDataService,$httpBackend){

        $httpBackend.when('GET','https://api.github.com/users/berny').respond({name:'Bernardo'});
        gitHubDataService.get('berny').then(function(result){
            expect(result.data.name).toBe('Bernardo');
        });
        $httpBackend.flush();
    }));

    it('should issue a an error on a user that does not exists', inject(function(gitHubDataService,$httpBackend){
        $httpBackend.when('GET','https://api.github.com/users/Popeye')
            .respond(404,{message:'No sirve'});
        gitHubDataService.get('Popeye').catch(function(result){
            expect(result.data.message).toBe('No sirve');
        });
        $httpBackend.flush();
    }));
});
