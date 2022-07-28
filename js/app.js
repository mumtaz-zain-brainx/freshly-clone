$(document).ready(function(){

    // Global Variable 
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    var selectedDate = "";


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
    });

    

    
    const menuItems = [
        {
            id: "1",
            title:"Steak Peppercorn",
            subTitle: "500 Cal | Gluten Free | Single-Serve",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012873/production-meal-image-2fd3df62-8abf-413e-8650-afca039518ec.jpg",
            imgUrlSub: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012875/production-meal-without-background-image-3c327134-2073-4b4a-9e97-a81597e5d689.png",
        },
        {
            id: "2",
            title:"Homestyle Chicken",
            subTitle: "500 Cal | Gluten Free | Single-Serve",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012265/production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpg",
            imgUrlSub: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012267/production-meal-without-background-image-6cadf26d-addc-4674-bfb3-3255cd770ebd.png",
        },
        {
            id: "3",
            title:"Cauliflower Shell Beef Bolognese",
            subTitle: "490 Cal | Gluten Free | Single-Serve",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012554/production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpg",
            imgUrlSub: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012556/production-meal-without-background-image-964a7d18-a670-4e0d-8007-b50d22d07b79.png",
        },
        {
            id: "4",
            title:"Sausage Baked Penne",
            subTitle: "470 Cal | Gluten Free | Single-Serve",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012391/production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpg",
            imgUrlSub:"https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012393/production-meal-without-background-image-4e5dd437-69eb-4ae8-847b-7ea52f687633.png",
        },
        {
            id: "5",
            title:"Savory-Sweet Chicken Teriyaki Bowl",
            subTitle: "480 Cal | Gluten Free | Single-Serve",
            imgUrl:"https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1637012614/production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpg",
            imgUrlSub:"https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_90,w_90/v1637012616/production-meal-without-background-image-71dafd36-0f62-46f3-ad7a-16542a12a3f5.png",
        },
    ]

    const cartItems = []

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


    // Add Item to cart function
    $(".menuCardBtn").click(function(){
        let currId = $(this).attr('id');
        let currObj = $.grep(menuItems, function(e){ return e.id == currId; });
        currObj = currObj[0]
        cartItems.push(currObj);

        let cartItem = 
        `<li class="cartItem" id="${currObj.id}">
            <div class="cartItemContent">
                <figure class="d-flex align-items-center w-100 m-0" role="button" tabindex="0">
                    <img src="${currObj.imgUrlSub}" class="cartItemImg" alt="Sausage Baked Penne">
                    <div class="d-flex flex-column cartItemTitle">
                        <h2>${currObj.title}</h2>
                        <h6></h6>
                    </div>
                </figure>
                <div class="d-flex flex-column">
                    <div class="cartItemBtn plusBtn" role="button" tabindex="0">
                        <div class="btn1"></div>
                    </div>
                    <div class="cartItemBtn minusBtn" role="button" tabindex="0">
                        <div class="btn2"></div>
                    </div>
                </div>
            </div>
        </li>`

        $("#cartItems").append(cartItem);


        $(".cartIconCounter").text(cartItems.length)// Cart counter Update

        // Clear cart
        if(cartItems.length > 0){
            $(".btnLink").show();
            $(".ordSum").show();
            $(".cartPlaceHolder").hide();
        }

            // Checkout cart button features
            if(cartItems.length < 4){
                $(".cartBtn").text(`Add ${4 - cartItems.length} To Continue`)
            }
            if(cartItems.length>=4){
                $(".cartBtn").removeClass("cartBtnDisabled");
                $(".cartBtn").text(`Next`)
            }
    })

    // Clear cart button features
    
    $(".btnLink").click(function(){
        $("#cartItems").empty();
        $(".btnLink").hide();
        $(".ordSum").hide();
        $(".cartPlaceHolder").show()
        $(".cartBtn").text(`Add 4 To Continue`)
        $(".cartBtn").addClass("cartBtnDisabled");
        while(cartItems.length>0){
            cartItems.pop()
        }
        $(".cartIconCounter").text(cartItems.length) // Cart counter Update
    })

    // Cart item buttons feature 
    $(".plusBtn").click(function(){
        let li = $(this).parentsUntil("ul");
        let temp = $(li[2]).clone();

        $("#cartItems").append(temp)
    })

    $(".minusBtn").click(function(){
        let id = $(this).parentsUntil("ul");
        console.log(id)
        id[2].remove()
    })

});