export default async function (table) {
    const REQ = new XMLHttpRequest();
    var response = "";
    REQ.onload = function () {
       response = this.responseText;
    };
    REQ.open("GET", "../admin/php/getdata.php");
    REQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    REQ.send("table=" + table);
    await (function(result = REQ.responseText) {

        var final = JSON.parse(result);
        
        console.log(home_top_data);
        return final;
        
    });
}