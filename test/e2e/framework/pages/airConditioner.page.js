'use strict';

module.exports=function(){
    this.airConditioners=element.all(by.repeater('ac in data'));
    this.firstBrand=element.all(by.binding('brand')).first();
    this.header=element.all(by.css('h1')).first();
    this.getItemCount=getItemCount;

    function getItemCount(){
        return this.airConditioners.then(function(elements){
            return elements.length;
        })
    }
};