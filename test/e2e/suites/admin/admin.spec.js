
var NavigationBarPage=require('../../framework/pages/navigationBar.page');
var AdminPage=require('../../framework/pages/admin.page');

describe('Admin List Tests',function(){

    var navigationBarPage=new NavigationBarPage();
    var adminPage=new AdminPage();

    beforeEach(function(){
        browser.get('http://localhost:63342/AngularJasmine/index.html#/');
        navigationBarPage.goToAdmin();
    });


    it('Should navigate to the Admin Page correctly',function(){
        expect(adminPage.header.getText()).toBe('This is admin')
    });

    it('Should render the first element on the Admins Correctly',function(){
        expect(adminPage.firstAdmin.getText()).toBe('Orlando')
    });

    it('Should get the correct admin count Correctly',function(){
        expect(adminPage.getItemCount()).toBe(4);
    });
});
