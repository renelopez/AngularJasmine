'use strict';

module.exports=function(){
    this.adminLink=element(by.cssContainingText('a','Admin'));

    this.goToAdmin=function(){
        this.adminLink.click();
    }
};