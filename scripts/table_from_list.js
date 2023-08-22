function add_from_array(tableid,list){
    var wholeTable = document.getElementById(tableid);
    var tBodies = wholeTable.tBodies;
    var tbody = tBodies[0];
    var current_len = tbody.rows.length;
    var device_num = wholeTable.rows[0].cells.length;
    const days_to_show = list.length;
    console.log(device_num,list[0].length,);
    if (list[0].length<device_num){
        alert("格式错误，请重新核对")
    }
    console.log(current_len,days_to_show);
    console.log(wholeTable.rows[1].cells[0].innerHTML)
    if (list[0].length == device_num){
        for (let i = 2 ; i<days_to_show;i++){
            if (i<current_len+2){
                wholeTable.rows[i].cells[0].innerHTML = '<td>'+list[i][0]+'</td>';
                wholeTable.rows[i].cells[1].innerHTML = '<td>'+list[i][1]+'</td>';
                for (let j=2;j<device_num;j++){
                    wholeTable.rows[i].cells[j].innerHTML = '<td><div contenteditable="true">'+list[i][j]+'</div></td>';
                }
            }
            else{
                var tr = tbody.insertRow();
                for (let j=0;j<device_num;j++){
                    var td_1 = tr.insertCell(-1);
                    if (j==0){
                        td_1.innerHTML = '<td>'+list[i][0]+'</td>';
                        continue;
                    }
                    if (j==1){
                        td_1.innerHTML = '<td>'+list[i][1]+'</td>';
                        continue;
                    }
                    td_1.innerHTML = '<td>'+list[i][j]+'</td>';
                }
            }
        }
        if(days_to_show-current_len<2){
            for(let i=current_len+1;i>=days_to_show;i--){
                wholeTable.deleteRow(i);
            }
        }
    }
}