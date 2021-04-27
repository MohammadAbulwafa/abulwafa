
var API_Data= [
    {
        "StartDate": "2021-04-26 22:29",
        "EndDate": "2021-04-27T21:29:00.279430Z",
        "Status": "created"
    },
    {
        "StartDate": "2021-04-27 21:50",
        "EndDate": "2021-04-27T21:29:00.279430Z",
        "Status": "created"
    },
    {
        "StartDate": "2021-04-28 21:25",
        "EndDate": "2021-04-27T21:29:00.279430Z",
        "Status": "created"
    },
    {
        "StartDate": "2021-04-29 21:35",
        "EndDate": "2021-04-27T21:29:00.279430Z",
        "Status": "created"
    },
];


console.log("Start Date  |  End Date ");
$.each(API_Data, function(i ,item){

    console.log( item.StartDate + "  |  " + item.EndDate );
});

console.log("Start Date  |  End Date -- After Modification");
$.each(API_Data, function(i ,item){
    var indexStartDate = API_Data[0].StartDate.lastIndexOf("-");
    var indexEndDate = API_Data[0].EndDate.lastIndexOf("-");
    console.log( item.StartDate.substring( 0, indexStartDate +3 ) + "  |  " + item.EndDate.substring( 0, indexEndDate +3 ));
});