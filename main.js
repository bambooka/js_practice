function changeCheckbox() {
    
var checkbox;
checkbox = document.getElementById('check');

if (checkbox.checked) {
    alert('yes');
} else {
    alert('no');
}
    
}

function changeRadio() {
    var radio = document.getElementsByName('rad');
    
    for(var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('checked ' + i + ' element');
        }
    }
    
}