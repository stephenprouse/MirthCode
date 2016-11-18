// use order time from message
var inputDateTime = "201511291200";

// parse into a real date time to work with
// and subtract 4 hours
var dt = parse(inputDateTime);

// output to console
console.log(dt.toString());

// parse final result back to string
var result = yyyyMMddHHmm(dt);

// output to console
console.log(result);

function parse(str) {
    var yyyy = str.substr(0, 4),
        MM = str.substr(4, 2) - 1, // months are Zero based on js
        dd = str.substr(6, 2),
        HH = str.substr(8, 2),
        mm = str.substr(10, 2);
    var dt = new Date(yyyy, MM, dd, HH - 4, mm);
    return dt;
}

function yyyyMMddHHmm(dt) {
    now = dt;
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = "" + now.getDate();
    if (day.length == 1) {
        day = "0" + day;
    }
    hour = "" + now.getHours();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    minute = "" + now.getMinutes();
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    second = "" + now.getSeconds();
    if (second.length == 1) {
        second = "0" + second;
    }
    return year + month + day + hour + minute;
}
