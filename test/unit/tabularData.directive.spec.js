fdescribe('Tabular Data Directive Specs',function(){

    beforeEach(module('app'));
    beforeEach(module('app/partials/directives/tabularData.html'));

    var el,stubShowDetails;

    beforeEach(inject(function($compile,$rootScope){
        var scope=$rootScope.$new();
        stubShowDetails=sinon.stub();

        scope.airConditioners=[
            {
                brand:'Mocked Brand',
                description:'Mocked Description',
                cost:'4355',
                isWorking:true
            }
        ];
        scope.showDetails=stubShowDetails;

       el=angular.element('<tabular-data data="airConditioners" show-details="showDetails"></tabular-data>');
       $compile(el)(scope);
        scope.$digest();
    }));

    it('should test that the directive was correctly rendered',function(){
        expect(el.text()).toContain('Mocked Brand')
    });

    it('should check that the binding was clicked',function(){
        console.log(el);
        el.find('tr')[1].click();
        expect(stubShowDetails.called).toBeTruthy();
    });
});
