$(document).ready(function () {
    $('.btn').click(function (event) {
        event.preventDefault();
        $('#hidden').show();
    });
})
// let mySize, myCrust,myToppings,myNumber;
    function pizza (size, crust, toppings,number){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.number = number;
    }
    var sizecost,crustCost,toppingsCost,numberPizza;
    $(document).ready(function () {
        $('#myForm').submit(function (event) {
            event.preventDefault();
            var pizzaSize = $('#size').val();
            var pizzaCrust = $('#crust').val();
            var pizzaToppings = $('#toppings').val();
            var pizzaNumber = $('#number').val();
            var myPizza = new pizza(pizzaSize, pizzaCrust,pizzaToppings,pizzaNumber);
            if (myPizza.size == "Large") {
                sizecost = 800;
            }
            else if (myPizza.size == "Medium") {
                sizecost == 400;
            }
            else{
                sizecost == 200
            }
        })
    })
