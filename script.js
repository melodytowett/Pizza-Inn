// $(document).ready(function () {
//     $('.btn').click(function (event) {
//         event.preventDefault();
//         $('#hidden').show();

//     });
// })
// let mySize, myCrust,myToppings,myNumber;
    function pizza (size, crust, toppings,number,deliver){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.number = number;
        this.deliver = deliver;
    }
    var sizeCost,crustCost,toppingsCost,totalCost,pizzaNumber,deliveryCost;
    $(document).ready(function () {
        $('#myForm').submit(function (event) {
            event.preventDefault();
            var pizzaSize = $('#size').val();
            var pizzaCrust = $('#crust').val();
            var pizzaToppings = $('#toppings').val();
            var pizzaNumber = parseInt($('#number').val());
            var pizzaDelivery = $('#deliver').val();
            var myPizza = new pizza(pizzaSize, pizzaCrust,pizzaToppings,pizzaNumber,pizzaDelivery);
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
                toppingsCost = 130;
            }else if (myPizza.toppings == 'beef') {
                toppingsCost = 240
            }else{
                toppingsCost = 360;
            }
           totalCost = (sizeCost + crustCost + toppingsCost)*pizzaNumber;
           if (myPizza.deliver == "yes") {
               deliveryCost = 200;
                var loc = prompt("enter location")
                alert( 'delivery cost is 200')
                alert('Your order will be delivered to ' +loc)
           }else{
               deliveryCost = 0;
               $('#out').hide();
           }
           var newPrice = (totalCost + deliveryCost)
          // alert (newPrice);

           //alert(toppingsCost)
           $('#hidden').show();
           $("#quantity").html(pizzaNumber);
           $("#Total").html(totalCost);
           $("#type").html(pizzaCrust);
           $("#top").html(pizzaToppings);
           $('#Location').html(loc);
           $('#amount').html(newPrice);
           //alert(totalCost);
        //    $(".Clickable").click(function () {
        //        $("#new-contact").toggle();
        //    })
        //    $("#add-address").click(function () {
        //        $("#out").toggle();
        //    })
           })

        })
    
