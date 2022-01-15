// $(document).ready(function () {
//     $('.btn').click(function (event) {
//         event.preventDefault();
//         $('#hidden').show();

//     });
// })
// let mySize, myCrust,myToppings,myNumber;
    function pizza (size, crust, toppings,number){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.number = number;
    }
    var sizeCost,crustCost,toppingsCost,totalCost,pizzaNumber;
    $(document).ready(function () {
        $('#myForm').submit(function (event) {
            event.preventDefault();
            var pizzaSize = $('#size').val();
            var pizzaCrust = $('#crust').val();
            var pizzaToppings = $('#toppings').val();
            var pizzaNumber = parseInt($('#number').val());
            var myPizza = new pizza(pizzaSize, pizzaCrust,pizzaToppings,pizzaNumber);
            // pizza cost against size
            if (myPizza.size == "Large") {
                sizeCost = 800;
            }
            else if (myPizza.size == "Medium") {
                sizeCost = 400;
            }
            else{
                sizeCost = 200
            }
            // pizza cost with crust
            if (myPizza.crust =='Cripsy') {
                crustCost = 100;
            }else if (myPizza.crust == 'Stuffed') {
                crustCost = 130;
            }else{
                crustCost = 210
            }
            //pizza price with toppings
            if (myPizza.toppings == 'pinneaple') {
                toppingsCost = 30;
            }else if (myPizza.toppings == 'beef') {
                toppingsCost = 40
            }else{
                toppingsCost = 60;
            }
           totalCost = (sizeCost + crustCost + toppingsCost)*pizzaNumber;
           $('#hidden').show();
           $("#quantity").html(pizzaNumber);
           $("#Total").html(totalCost);
           $("#type").html(pizzaCrust);
           $("#top").html(pizzaToppings);
           //alert(totalCost);
           $(".Clickable").click(function () {
               $("#new-contact").toggle();
           })
           $("#add-address").click(function () {
               $("#out").toggle();
           })
           })
           $('#new-contact').submit(function (event) {
               event.preventDefault();
               var phoneNo = $("#phne").val();
               var street = $("#street").val();
               var county = $("#county").val();

           })
        })
    
