'use strict';

module.exports=function(){
    this.admins=element.all(by.repeater('alguien in vm.alguienes'));
    this.header=element.all(by.css('h1')).first();
    this.firstAdmin=element.all(by.binding('name')).first();

    this.getItemCount=getItemCount;

    function getItemCount(){
        return this.admins.then(function(elements){
            return elements.length;
        })
    }
};