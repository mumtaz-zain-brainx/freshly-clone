$(document).ready(function(){


    // Displaying Dates 
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    for(let i=1; i <= 10; i++){
        let d = new Date()
        d.setDate(d.getDate() + i);

        let listItem = 
        `<li class="dateListItem">
            <div>
                <span class="fw-semibold">${dayNames[d.getDay()]}</span><span>, ${monthNames[d.getMonth()]} ${d.getDate()}</span>
            </div>
        </li>`
        if(d.getDay()==0){
            listItem = 
            `<li class="dateListItem d-flex justify-content-between align-items-center">
                <div>
                    <span class="fw-semibold">${dayNames[d.getDay()]}</span><span>, ${monthNames[d.getMonth()]} ${d.getDate()}</span>
                </div>
                <div class=" d-flex align-items-center justify-content-center">
                    <span class="text-primary d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path d="M16.015 21.94l5.573 2.93-1.064-6.205 4.508-4.395-6.23-.905-2.786-5.646-2.786 5.646-6.231.905 4.508 4.395-1.064 6.205 5.573-2.93zm0 2.26l-8.229 4.326 1.572-9.163-6.657-6.489 9.2-1.337L16.015 3.2l4.114 8.337 9.2 1.337-6.657 6.489 1.572 9.163-8.229-4.326z"></path></svg></span>
                    <span class="ms-1">Most popular</span>
                </div>
            </li>`
        }
        $(".dateList").append(listItem);

    }

    // Adding active class to DateListItems 
    $(".dateListItem").click(function(){
        $(".dateListItem").filter(".dateListItemActive").removeClass("dateListItemActive");
        $(this).addClass("dateListItemActive");
    })
});