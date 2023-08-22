//根据年份判断某月有多少天，主要是区分闰年
function daysMonth(month, year){
    var tmp1 = year % 4;
    var tmp2 = year % 100;
    var tmp3 = year % 400;
    if((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)){
        return (month_olypic[month]);//闰年
    }else{
        return (month_normal[month]);//非闰年
    }
}

function get_date(x){
    var month_count = daysMonth(my_month,my_year);
    if ((my_day+x)<=month_count)
        return my_year+'-'+(my_month+1)+'-'+(my_day+x);
    else{
        var year = my_year;
        var day = my_day + x - month_count;
        var month = my_month + 1;
        if (month==12){
            month = 0;
            year = year + 1;
        }
        while ((day>daysMonth(month,year))){
            day = day - daysMonth(month,year);
            month = month + 1;
            if (month==12){
            month = 0;
            year = year + 1;
        }
        }
        return (year+'-'+(month+1)+'-'+(day));
    }
    alert("Error!");
    return '0000-00-00';
}


function work_count(t,row,col){
    var tab = document.getElementById(t);
    var is_workday = new Array();
    for (let i = 2; i<row+2; i++){
        for (let j = 2; j<col; j++){
            is_workday[i-2]=false;
            if (tab.rows[i].cells[j].innerHTML.includes('-')){
                is_workday[i-2]=true;
                break;
            }
        }
    }
    return is_workday;
}