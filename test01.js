function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
    this.c = { demo: 5 };
    this.show = function () {
        console.log(this.a , this.b , this.c.demo );
    }
}
function Child() {
  this.a = 2;
  this.change = function () {
      this.b.push(this.a); //[1,2,1,11,12]
      this.a = this.b.length; //5
      this.c.demo = this.a++; //5
  }
	//{a: 5, b: [1,2,1,11,12],c: {demo:5},show: function(){}, change: function(){}}
	//{a: 6, b: [1,2,1,11,12],c: {demo:5},show: function(){}, change: function(){}}
}
Child.prototype = new Parent(); 
var parent = new Parent(); //parent = {a: 1, b: [1,2,1],c: {demo:5},show: function(){}}
var child1 = new Child(); //child1 = {a: 2, b: [1,2,1],c: {demo:5},show: function(){}, change: function(){}}
var child2 = new Child(); //child1 = {a: 2, b: [1,2,1],c: {demo:5},show: function(){}, change: function(){}}
child1.a = 11; //child1 = {a: 11, b: [1,2,1],c: {demo:5},show: function(){}, change: function(){}}
child2.a = 12; //child1 = {a: 12, b: [1,2,1],c: {demo:5},show: function(){}, change: function(){}}
parent.show(); //1,[1,2,1],5
child1.show(); //11,[1,2,1],5
child2.show(); //12,[1,2,1],5
child1.change();  //child1 = {a: 5, b: [1,2,1,11,12],c: {demo:5},show: function(){}, change: function(){}}
child2.change(); //child2 = {a: 6, b: [1,2,1,11,12],c: {demo:5},show: function(){}, change: function(){}}  
//parent = {a: 1, b: [1,2,1],c: {demo:5},show: function(){}}
parent.show(); //1,[1,2,1],5
child1.show(); //5,[1,2,2,11],5
child2.show(); //6,[1,2,2,11,12],5
