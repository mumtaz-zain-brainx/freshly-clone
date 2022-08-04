$(document).ready(function(){

    // Bootstrap Tool-Tips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Global Variable 
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var selectedDate = "";


 
    /* ----------------- jQuery Steps -----------------*/
    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });


    /* ----------------- Date Section -----------------*/

    // Displaying Dates 
    for(let i=1; i <= 10; i++){
        let d = new Date()
        d.setDate(d.getDate() + i);

        let listItem = 
        `<li class="dateListItem">
            <div>
                <span class="fw-semibold" id="deliveryDay">${dayNames[d.getDay()]}</span><span id="deliveryDate">, ${monthNames[d.getMonth()]} ${d.getDate()}</span>
            </div>
        </li>`
        if(i==1){
            listItem = 
            `<li class="dateListItem dateListItemActive d-flex justify-content-between align-items-center">
                <div>
                    <span class="fw-semibold" id="deliveryDay">${dayNames[d.getDay()]}</span><span id="deliveryDate">, ${monthNames[d.getMonth()]} ${d.getDate()}</span>
                </div>
                <div class=" d-flex align-items-center justify-content-center">
                    <span class="text-primary d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path d="M16.015 21.94l5.573 2.93-1.064-6.205 4.508-4.395-6.23-.905-2.786-5.646-2.786 5.646-6.231.905 4.508 4.395-1.064 6.205 5.573-2.93zm0 2.26l-8.229 4.326 1.572-9.163-6.657-6.489 9.2-1.337L16.015 3.2l4.114 8.337 9.2 1.337-6.657 6.489 1.572 9.163-8.229-4.326z"></path></svg></span>
                    <span class="ms-1">Most popular</span>
                </div>
            </li>`
        }
        $(".dateList").append(listItem);
    }

    // Setting Current date on firstDeliveryDate & cartDate elements.
    let delivDate = new Date()
    delivDate.setDate(delivDate.getDate() + 1);
    selectedDate = `${dayNames[delivDate.getDay()]}, ${monthNames[delivDate.getMonth()]} ${delivDate.getDate()}`
    $("#firstDeliveryDate").text(selectedDate)
    $(".cartDate").text(selectedDate)

    
    // Adding active class to DateListItems 
    $(".dateListItem").click(function(){
        $(".dateListItem").filter(".dateListItemActive").removeClass("dateListItemActive");

        $(this).addClass("dateListItemActive");

        // Updating date on firstDeliveryDate, cartDate & menuDateSelector elements.
        selectedDate = `${$(this).find("#deliveryDay").text()}${$(this).find("#deliveryDate").text()}`
        $("#firstDeliveryDate").text(selectedDate)
        $(".cartDate").text(selectedDate)
        $('#menuDateSelector').val(selectedDate).trigger('change');
        $('#menuDateSelector').val(selectedDate).trigger('change');

    })



    /* ----------------- Menu Section -----------------*/
    
    // Displaying dates on Menu Header date-selector 
    for(let i=1; i <= 10; i++){
        let d = new Date()
        d.setDate(d.getDate() + i);

        let itemDate = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        let itemDayDate = `${dayNames[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()}`

        let selectItem = `<option value="${itemDayDate}">${itemDayDate}</option>`

        $("#menuDateSelector").append(selectItem);
    }

    // Upating date on different elements
    $("#menuDateSelector").change(function(){
        let optDate = this.value;
        selectedDate = optDate
        // Updating date on firstDeliveryDate & cartDate elements
        $("#firstDeliveryDate").text(selectedDate)
        $(".cartDate").text(selectedDate)
        
        
        // Updating date on Date Section Page
        $(".dateListItem").filter(function(){
            let temp = `${$(this).find("#deliveryDay").text()}${$(this).find("#deliveryDate").text()}`
            if(temp== selectedDate){
                $(".dateListItem").filter(".dateListItemActive").removeClass("dateListItemActive");
                $(this).addClass("dateListItemActive");
            }
        });
        $('#checkoutDate').val(selectedDate).trigger('change');
    });

    

    // Menu Items
    const menuItems = [
        {
            id: "1",
            title:"Steak Peppercorn",
            subTitle: "500 Cal | Gluten Free | Single-Serve",
            cost: 11.79,
            addCost: "",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012873/production-meal-image-2fd3df62-8abf-413e-8650-afca039518ec.jpg",
            imgUrlSub: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png",
        },
        {
            id: "2",
            title:"Homestyle Chicken",
            subTitle: "500 Cal | Gluten Free | Single-Serve",
            cost: 11.79,
            addCost: "",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012265/production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpg",
            imgUrlSub: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012267/production-meal-without-background-image-6cadf26d-addc-4674-bfb3-3255cd770ebd.png",
        },
        {
            id: "3",
            title:"Cauliflower Shell Beef Bolognese",
            subTitle: "490 Cal | Gluten Free | Single-Serve",
            cost: 11.79,
            addCost: "",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012554/production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpg",
            imgUrlSub: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012556/production-meal-without-background-image-964a7d18-a670-4e0d-8007-b50d22d07b79.png",
        },
        {
            id: "4",
            title:"Sausage Baked Penne",
            subTitle: "470 Cal | Gluten Free | Single-Serve",
            cost: 11.79,
            addCost: "",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012391/production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpg",
            imgUrlSub:"https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012393/production-meal-without-background-image-4e5dd437-69eb-4ae8-847b-7ea52f687633.png",
        },
        {
            id: "5",
            title:"Savory-Sweet Chicken Teriyaki Bowl",
            subTitle: "480 Cal | Gluten Free | Single-Serve",
            cost: 11.79,
            addCost: "",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012614/production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpg",
            imgUrlSub:"https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012616/production-meal-without-background-image-71dafd36-0f62-46f3-ad7a-16542a12a3f5.png",
        },
    ]

    // Cart Items
    var cartItems = []


    // Cart variables
    var cartSubTotal = 0.0;
    var cartSubTotalDiscounted = 0.0;


    // Generating menu items 
    for(var m of menuItems){
        let menuItem = 
        `<li tabindex="0" role="button" data-test-meal-id="696807" class="mb-3  col-12 col-md-6 col-lg-4 col-xl-3  menuCard">
            <div class="menuCardImg w-100 position-relative overflow-hidden">
                <img src="${m.imgUrl}" class="Image-module__image___1Ndm6 scaleable_image" alt="">
            </div>
            <div class="BaseUiMealCard-module__infoContainer___3919w menuCardContent">
                <div>
                    <h6 class="menuCardTitle">${m.title}</h6>
                    <div class="menuCardSubtitle">${m.subTitle}</div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="BaseUiMealCard-module__additionalPrice___toZU9"></h6>
                    <div aria-label="Add Steak Peppercorn to delivery" tabindex="0" role="button" id="${m.id}" class="menuCardBtn" data-test="add-meal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                            <g fill="#FFF" fill-rule="evenodd"><path d="M4 11h16v2H4z"></path><path d="M13 4v16h-2V4z"></path></g>
                        </svg>
                    </div>
                </div>
            </div>
        </li>`
        $("#menuCardsList").append(menuItem)
    }


    function addTocart(id){
        let currObj = $.grep(menuItems, function(e){ return e.id == id; });
        currObj = currObj[0]
        cartItems.push(currObj);
    
        let cartItem = 
        `<li class="cartItem" id="${currObj.id+cartItems.length}" data-id="${currObj.id}">
            <div class="cartItemContent">
                <figure class="d-flex align-items-center w-100 m-0" role="button" tabindex="0">
                    <img src="${currObj.imgUrlSub}" class="cartItemImg" alt="Sausage Baked Penne">
                    <div class="d-flex flex-column cartItemTitle">
                        <h2>${currObj.title}</h2>
                        <h6></h6>
                    </div>
                </figure>
                <div class="d-flex flex-column">
                    <div class="cartItemBtn plusBtn" id="plusBtn" role="button" tabindex="0">
                        <div class="btn1"></div>
                    </div>
                    <div class="cartItemBtn minusBtn" id="minusBtn" role="button" tabindex="0">
                        <div class="btn2"></div>
                    </div>
                </div>
            </div>
        </li>`
    
        $("#cartItems").append(cartItem);
        $("#mobileCartItems").append(cartItem);
    }
    
    
    function updateCartContent(){
        
        $(".cartIconCounter").text(cartItems.length)// Cart counter Update
        
    
        // Displaying cart content
        if(cartItems.length > 0){
            $(".clearBtn").show(); // Showing clear button 
            $(".mobileCartItemsListContainer").css("width","100%"); // Showing mobileCartItemsListContainer
            $(".ordSum").show(); // Showing order summary
            $(".cartPlaceHolder").hide(); // Hiding cart placeholder 
    
            // Calculating cart total & discount
            cartSubTotal = (cartItems.length * 11.79).toFixed(2);
            cartSubTotalDiscounted = (cartItems.length * 11.79).toFixed(2);
    
            // Displaying cart subtotal
            $(".subtotalIcon").html(
                `
                <p class="m-0 me-1">Subtotal</p>
                <p class="m-0 me-1" style="color:#357471;">$${cartSubTotalDiscounted}</p>
                `
            )
            // Dynamic offer upgrade
            if(cartItems.length >= 4){
                if(cartItems.length < 6){
                    $(".discountMsg").find("p").text(`Add ${6 - cartItems.length} more meals to save $10.80!`) // Updating discount offer message
                    $(".discountContainer").hide();
                }
                // Checking the current offer 
                else if(cartItems.length >= 6){
                    $(".discountMsg").find("p").text(`The more you add, the more you'll save!`) // Updating discount offer message
    
                    // Checking offer price
                    if(cartItems.length < 8){
                        cartSubTotalDiscounted = (cartItems.length * 9.99).toFixed(2);
                    }
                    else if(cartItems.length < 10){
                        cartSubTotalDiscounted = (cartItems.length * 9.49).toFixed(2);
                    }
                    else if(cartItems.length < 12){
                        cartSubTotalDiscounted = (cartItems.length * 9.29).toFixed(2);
                    }
                    else if(cartItems.length == 12){
                        cartSubTotalDiscounted = (cartItems.length * 8.99).toFixed(2);
                    }
    
                    // Showing discount in order summary
                    $(".noOfMealsDiscounted").html(
                        `<p>${cartItems.length} meals discount</p>
                        <p class="text-secondary">-$${(cartSubTotal-cartSubTotalDiscounted).toFixed(2)}</p>`
                    )
                    $(".discountContainer").show(); // Showing offer badge on cart button section
                    $(".discountContainerCost").text(`You saved $${(cartSubTotal-cartSubTotalDiscounted).toFixed(2)}`) // Updating offer badge on cart button section
    
                    // Updating cart subtotal with discount price
                    $(".subtotalIcon").html(
                        `
                        <p class="m-0 me-1">Subtotal</p>
                        <p class="m-0 me-1 text-decoration-line-through text-secondary">$${cartSubTotal}</p>
                        <p class="m-0 me-1" style="color:#357471;">$${cartSubTotalDiscounted}</p>
                        `
                    )
                }
            }
            // Checking cart limit
            if(cartItems.length > 12){
                $(".noOfMealsDiscounted").empty()
    
                $(".discountContainer").hide();
                $(".subtotalIcon").html(
                    `
                    <p class="m-0 me-1">Subtotal</p>
                    <p class="m-0 me-1" style="color:#357471;">$${cartSubTotalDiscounted}</p>
                    `
                )
                $(".cartIconCounter").css("color","red")
                $(".cartBtn").text(`Remove ${cartItems.length-12} To Continue`)
                $(".cartBtn").addClass("cartBtnDisabled");
                $(".cartBtn").attr("href", "#!");
                $(".discountMsg").find("p").text(``)
                
    
            }
    
            // Displaying order summary
            $(".noOfMeals").html(
                `<p>${cartItems.length} meals</p>
                <p>$${cartSubTotal}</p>`
            )
            $(".summarySubtotal").html(
                `<p>Subtotal</p>
                <p>$${cartSubTotalDiscounted}</p>`
            )
        }
        else if(cartItems.length == 0){
            clearCart()
        }
    
        // Updating checkout cart button
        if(cartItems.length < 4){
            $(".cartBtn").text(`Add ${4 - cartItems.length} To Continue`)
            $(".cartIconCounter").css("color","red");
            $(".cartBtn").addClass("cartBtnDisabled");
            $(".discountContainer").hide();
        }

        if(cartItems.length >= 4 && cartItems.length <=12){
            $(".cartIconCounter").css("color","black");
            $(".cartBtn").removeClass("cartBtnDisabled");
            $(".cartBtn").text(`Next`)
            $(".cartBtn").attr("href", "#checkout");
        }
    }


    
    // Add Item to cart function
    $(".menuCardBtn").on("click",function(){
        
        let currId = $(this).attr('id');
        addTocart(currId)
        updateCartContent()

                
        // Cart item buttons calls
        addItems()
        deleteItem()
    })
    
    
    // Cart item buttons feature 
    function addBtns(){
        $(".plusBtn").on("click",function(){
            let li = $(this).parentsUntil("ul");
            let id = $(li[2]).attr("data-id")
            addTocart(id)
            updateCartContent()
        })
    }

    function deleteBtns(){
        $(".minusBtn").on("click",function(){
            let id = $(this).parents("li").attr("data-id");
            $(this).parents("li").remove();
            for(var i = 0; i < cartItems.length; i++) {
                if(cartItems[i].id == id) {
                    cartItems.splice(i, 1);
                    break;
                }
            }
            updateCartContent()
        })
    }


    
    // Add Cart Items
    const plusBtns = document.getElementsByClassName("plusBtn");

    addItems()

    function addItems(){
        for (let i = 0; i < plusBtns.length; i++) {
            plusBtns[i].onclick = function(){
                var id = this.parentElement.parentElement.parentElement.getAttribute("data-id");
                addTocart(id)
                updateCartContent()

                addItems()
                deleteItem()
            }
        }
    }


    // Delete Cart Items
    const delBtns = document.getElementsByClassName("minusBtn");

    deleteItem();

    function deleteItem(){

        for (let i = 0; i < delBtns.length; i++) {
            delBtns[i].onclick = function() {
                var listItem = this.parentElement.parentElement.parentElement;
                listItem.style.display = "none";
                let id = $(this).parents("li").attr("data-id");
                for(var i = 0; i < cartItems.length; i++) {
                    if(cartItems[i].id == id) {
                        cartItems.splice(i, 1);
                        break;
                    }
                }
                updateCartContent()
            }
        }
    }

    // Clear cart button features
    
    function clearCart(){

        $("#cartItems").empty(); // Removing cart elements
        $("#mobileCartItems").empty(); // Removing Mobile cart elements
        $(".mobileCartItemsListContainer").css("width","auto"); // Hiding clear cart button
        $(".clearBtn").hide(); // Hiding clear cart button
        $(".ordSum").hide(); // Hiding cart summary
        $(".cartPlaceHolder").show() // Displaying cart placeholder
    
        // Changing cart button accourding to empty cart
        $(".cartBtn").text(`Add 4 To Continue`)
        $(".cartBtn").addClass("cartBtnDisabled");
        $(".cartBtn").attr("href", "#!");
        $(".discountMsg").find("p").text(``) // Hiding Discount Message
    
        // Emptying cart
        while(cartItems.length > 0){
            cartItems.pop()
        }
        // Cart counter and subtotal Update
        $(".discountContainer").hide();
        $(".cartIconCounter").text(cartItems.length) 
        $(".cartIconCounter").css("color","red");
    
        // Hiding order summary and cart subtotal
        $(".noOfMeals").empty()
        $(".noOfMealsDiscounted").empty()
        $(".summarySubtotal").empty()
        $(".subtotalIcon").text(``)
    
        // Reseting cart total & discount
        cartSubTotal = 0.0
        cartSubTotalDiscounted = 0.0
    }

    $(".clearBtn").click(function(){
        clearCart()
    })

   

    
    // Mobile Cart
    if (window.innerWidth < 767) {

        
        $(".mobileCartContainer").hide()

        $(".cartBtnContainer").click(function(){
            if(window.innerWidth < 767){
                $(".mobileCartContainer").toggle()
            }
            
        })
        $(".cartToggleBtn").click(function(){
    
            $(".mobileCartContainer").hide()
        })
        $(".mobileCartBtn").click(function(){
    
            $(".mobileCartContainer").hide()
        })
    }
     

    
    
    /* ---------------------- Checkout Section ---------------------- */

    // Checkout Form

    // Form Validation 
    var _firstName = "";
    var _lastName = "";
    var _fullName = "";
    var _addressLine1 = "";
    var _addressLine2 = "";
    var _city = "";
    var _phone = "";
    var _email = "";

    $("#firstName").focusout(function(){
        var val = $(this).val();
        if(val.length <= 0 || !val.trim()){    
            $(this).siblings(".errerMsg").text("Can't be blank");
            $(this).css("border-color","red");
            _firstName = ""
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _firstName = val;
        }
    })

    $("#lastName").focusout(function(){
        var val = $(this).val();
        if(val.length <= 0 || !val.trim()){    
            $(this).siblings(".errerMsg").text("Can't be blank");
            $(this).css("border-color","red");
            _lastName = ""
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _lastName = val;
        }
        _fullName = `${_firstName} ${_lastName}`;
    })

    $("#fullName").focusout(function(){
        var val = $(this).val();
        if(val.length <= 0 || !val.trim()){    
            $(this).siblings(".errerMsg").text("Can't be blank");
            $(this).css("border-color","red");
            _fullName = ""
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _fullName = val;
        }
    })

    $("#addressCheckBox").click(function(){
        $(".addressCheckBoxContainer").empty();
        $("#fullName").prop("disabled", false)
    })

    $("#line1").focusout(function(){
        var val = $(this).val();
        if(val.length <= 0 || !val.trim()){    
            $(this).siblings(".errerMsg").text("Can't be blank");
            $(this).css("border-color","red");
            _addressLine1 = ""
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _addressLine1 = val;
        }
    })
    
    $("#line2").focusout(function(){
        var val = $(this).val();
        _addressLine2 = val;
    })
    
    $("#city").focusout(function(){
        var val = $(this).val();
        if(val.length <= 0 || !val.trim()){    
            $(this).siblings(".errerMsg").text("Can't be blank");
            $(this).css("border-color","red");
            _city = ""
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _city = val;
        }
    })

    $("#phone").focusout(function(){
        var val = $(this).val();
        if(val.length < 9 ){    
            $(this).siblings(".errerMsg").text("Is not a valid phone number. Please enter a 10-digit phone number.");
            $(this).css("border-color","red");
            _phone = ""
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _phone = val;
        }
    })

    $("#email").focusout(function(){
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var val = $(this).val();

        if (!val.toLowerCase().match(emailRegEx)){
            $(this).siblings(".errerMsg").text("Email is invalid");
            $(this).css("border-color","red");
            _email = ""        
        } else{
            $(this).siblings(".errerMsg").text("")
            $(this).css("border-color","black");
            _email = val;
        }
    })

    $(".formSubmitBtn").click(function(e){
        e.preventDefault()
        if(_firstName != "" && _lastName != "" && _fullName != "" && _addressLine1 != "" && _city != "" && _phone != "" && _email != ""){
            alert("Finished!!")
        }else{
            alert("Please enter all the fields correctly")
        }
    })



    // Checkout Card 

    // Promo Button
    $(".promoInputContainer").hide()

    $(".promoBtn").click(function(){
        $(this).hide()
        $(".promoInputContainer").show()
    })
    
    $(".promoCancel").click(function(){
        $(".promoInputContainer").hide();
        $(".promoBtn").show();
    })

    $(".promoInput").keyup(function(){
        if($(".promoInput").val()!="" && $(".promoInput").val()!= " "){
            $(".promoInputContainer").find(".cardSpecialBtn").removeClass("cardSpecialBtnDisable")
        }else{
            $(".promoInputContainer").find(".cardSpecialBtn").addClass("cardSpecialBtnDisable")
        }
    })

    // Gift Card Button
    $(".giftInputContainer").hide()

    $(".giftBtn").click(function(){
        $(this).hide()
        $(".giftInputContainer").show()
    })

    $(".giftCancel").click(function(){
        $(".giftInputContainer").hide();
        $(".giftBtn").show();
    })

    $(".giftInput").keyup(function(){
        if($(".giftInput").val()!="" && $(".giftInput").val()!= " "){
            $(".giftInputContainer").find(".cardSpecialBtn").removeClass("cardSpecialBtnDisable")
        }else{
            $(".giftInputContainer").find(".cardSpecialBtn").addClass("cardSpecialBtnDisable")
        }
    })

    // Displaying dates on Checkout Card date-selector 
    for(let i=1; i <= 10; i++){
        let d = new Date()
        d.setDate(d.getDate() + i);

        let itemDate = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        let itemDayDate = `${dayNames[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()}`

        let selectItem = `<option value="${itemDayDate}">${itemDayDate}</option>`

        $("#checkoutDate").append(selectItem);
    }

    // Upating date on different elements
    $("#checkoutDate").change(function(){
        let optDate = this.value;
        selectedDate = optDate
        // Updating date on firstDeliveryDate & cartDate elements
        $("#firstDeliveryDate").text(selectedDate)
        $(".cartDate").text(selectedDate)
        
        // Updating date on Date Section Page
        $(".dateListItem").filter(function(){
            let temp = `${$(this).find("#deliveryDay").text()}${$(this).find("#deliveryDate").text()}`
            if(temp== selectedDate){
                $(".dateListItem").filter(".dateListItemActive").removeClass("dateListItemActive");
                $(this).addClass("dateListItemActive");
            }
        });
        $('#menuDateSelector').val(selectedDate).trigger('change');
    });

    
    // Checkout Bill 
    function checkoutBill(){
        $(".checkoutCardSubtotal").html(`
            <div class="float-start">${cartItems.length}<!-- --> meals</div>
            <div class="float-end fw-semibold">$${cartSubTotal}</div>
        `)
        if(cartItems.length >= 6){
            $(".checkoutBillDiscount").html(`
            <li class="subinfo px-2 py-2 mt-3 border-0 font-size-small list-group-item">
                <div>
                    <div class="float-start"> <!-- -->${cartItems.length}<!-- --> meals discount </div>
                    <div class="float-end fw-semibold discount">-$${(cartSubTotal-cartSubTotalDiscounted).toFixed(2)}</div>
                </div>
            </li>
            <li class="subinfo px-2 py-2 border-0 font-size-small list-group-item">
                <div class="fw-semibold">
                    <div class="float-start font-weight-500">Subtotal</div>
                    <div class="float-end font-weight-500">$${cartSubTotalDiscounted}</div>
                </div>
            </li>
            `)
        }else{
            $(".checkoutBillDiscount").empty()
        }
        $(".checkoutCardTotal").html(`
        <div class="float-start">Total</div>
        <div class="float-end">$${(parseFloat(cartSubTotalDiscounted)+9.99).toFixed(2)}</div>
        `)

        $(".formTotal").text(`$${(parseFloat(cartSubTotalDiscounted)+9.99).toFixed(2)}`)
    }
    
    // My Meal 
    function myMeal(){
        var meals = {}
        for(var c of cartItems){
            if(meals[c.id]){
                meals[c.id]++;
            }else{
                meals[c.id] = 1;
            }
        }
    
    
        $(".mealItems").empty()
        for (const key in meals) {
            let currObj = $.grep(menuItems, function(e){ return e.id == key; });
            currObj = currObj[0]
            
            $(".mealItems").append(`
            <li class="px-0 flex-shrink-0 py-2 list-group-item bg-transparent">
                <figure class="mealItem d-flex align-items-center mb-0">
                    <div class="d-flex align-items-center col-3 col-md-3">
                        <div class="count fw-semibold text-center">x<!-- -->${meals[key]}</div>
                        <div class="imgWrapper"><img class="w-100" src="${currObj.imgUrlSub}" alt="Chicken Tikka Masala"></div>
                    </div>
                    <div class="info px-2 col">
                        <h5 class="h6 mb-0 ms-2 fw-semibold name">${currObj.title}</h5>
                    </div>
                    <div class="d-flex justify-content-end col-3 col-md-2">
                        <h6 class="additionalPrice">${currObj.addCost}</h6>
                    </div>
                </figure>
            </li>
            `)
        }
    }

    // Updating checkout bill
    $(".cartBtn").click(function(){
        checkoutBill()
        myMeal()
    })


    // ---------------- 
    $(".ctaBtn").click(function(){
        $(".actions a")[1].click()
    })
    $(".dateBtn").click(function(){
        $(".actions a")[1].click()
    })
    $(".menuGridHeaderBtn").click(function(){
        $(".actions a")[0].click()
    })
    $(".cartBtn").click(function(){
        if($(".cartBtn").attr("href")=="#checkout"){
            $(".actions a")[1].click()
        }else{
            alert("Please Add items to cart")
        }
    })
});