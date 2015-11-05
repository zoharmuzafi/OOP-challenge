// creates a new flower

function Flower(name, color, petals, smells, price, age){
    this.name = name;
    this.color = color;
    this.petals = petals; //number
    this.smells = smells; //true or false
    this.price = price + "$"; 
    this.age = age + " days old";

//returns the flower status

    this.lifecycle = function(){
        if(this.age < 5){
            return "young";
        }
        else{
            return "mature"; 
        }
    };

//returs the size of the flower (depands on the petals number)

    this.size = function (){
        if(this.petals>10){
            return "big";
        }
        else{
            return "small";
        }
    };

//creates cross-pollinating two flower objects to create an entirely new Flower object

    this.crossPollinate = function (anotherflower){
        var newColor= this.color + "-" + anotherflower.color;
        var newPetals = (this.petals + anotherflower.petals)/2;
        var newSmell = false;
        if ((this.smells)&&(anotherflower.smells)){
            newSmell = true;
        }
        return new Flower(newColor, newPetals, newSmell, 0, 1);
    }; 

}

//vase object - can contain flower objects

var vase = {bouquet: []};

// push a flower to the vase

function placeFlower(flower){
    vase.bouquet.push(flower);

}

// decrements each flower by one petal

function wilt(flower){
    flower.petals-=1;
}

//increments each flower by one petal

function water(flower){
    flower.petals+=1;
}

//render a description of the flowers in the array 

$(document).ready(function(){
    var source = $("#newDiv").html();
    var template = Handlebars.compile(source);
    var arr = [chrysanthenum, rose, lily, Almond, Alyssum, Amaryllis, Asters];
    var trackHtml = template({flower: arr});
          $("body").append(trackHtml);
});


var chrysanthenum = new Flower("Chrysanthenum", "pink", 65, false, 5, 3);
var rose = new Flower("Rose", "white", 12, true, 2, 1);
var lily = new Flower("Lily", "pink", 43, true, 4, 5);
var Almond = new Flower("Almond", "pink", 22, false, 1, 4);
var Alyssum = new Flower("Alyssum", "pink", 10, false, 1, 10);
var Amaryllis = new Flower("Amaryllis", "pink", 5, false, 15, 2);
var Asters = new Flower("Asters", "pink", 8, false, 12, 6);


