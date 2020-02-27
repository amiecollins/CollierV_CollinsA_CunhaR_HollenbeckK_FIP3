// export default async function (table) {
//     const REQ = new XMLHttpRequest();
//     var response = "";
//     REQ.onload = function () {
//        response = this.responseText;
//     };
//     REQ.open("GET", "../../php/getdata.php");
//     REQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     REQ.send();
//     await (function(result = REQ.responseText) {

//         var final = JSON.parse(result);
        
//         console.log(home_top_data);
//         return final;
        
//     });
// }


export default function () {

    var REQ;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        REQ =new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        REQ = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var response;
    var result;

    REQ.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = this.responseText;
            console.log(response);
            if (response === false || response === null || response === undefined || JSON.parse(response) === undefined) {
                result = null;
            } else {
                result =  JSON.parse(response);
            }
            return result;
        }
    }
    REQ.open("GET", "http://127.0.0.1:5500/admin/php/getdata.php");
    REQ.setRequestHeader("Content-type", "application/json");
    REQ.send();


}