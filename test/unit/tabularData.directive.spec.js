fdescribe('Tabular Data Directive Specs',function(){

    var el,stubShowDetails;

    beforeEach(module('app'));
    beforeEach(module('app/partials/directives/tabularData.html'));

    beforeEach(inject(function($compile,$rootScope){
        //set up scope
        stubShowDetails=sinon.stub();
        var scope=$rootScope.$new();
        scope.airConditioners=[
            {
                brand:'MockedBrand',
                description:'MockedDescription',
                cost:'36526523',
                isWorking:true
            }
        ];

        scope.showDetails=stubShowDetails;

         //create and compile directive
        el=angular.element('<tabular-data data="airConditioners" show-details="showDetails"></tabular-data>');
        $compile(el)(scope);
        scope.$digest();
    }));

    it('should test that the directive was correctly rendered',function(){
        expect(el.text()).toContain('MockedBrand');
    });

    it('should check that the binding was clicked',function(){
        el.find('tr')[1].click();
        expect(stubShowDetails.called).toBeTruthy();
    })
});
