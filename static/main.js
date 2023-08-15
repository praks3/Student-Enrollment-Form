function isValidForm() {

    var gender = document.forms["EnrollmentForm"]["Gender"].value;
         if (isValidGender(gender)) {
            if (isValidSkills())
                if (confirm('Do you want to submit the form?')) {
                    addRow();
                    return true;
                }
            }
         }


function isValidGender(gender) {
    if (gender == "") {
        alert("Gender must be filled out");
        return false;
    }
    return true;
}

function isValidSkills() {
    var java = document.getElementById("Java");
    var html = document.getElementById("HTML");
    var css = document.getElementById("CSS");
    if (java.checked == false && html.checked == false && css.checked == false) {
        alert("Mention at least 1 skill");
        return false;
    }
    return true;
}


function addRow() {
    var name = document.getElementById('UserName').value;
    var email = document.getElementById('Email').value;
    var web = document.getElementById('Website').value;
    var image = document.getElementById('ImageLink').value;
    var gender = document.forms["EnrollmentForm"]["Gender"].value;
    var java = document.getElementById("Java");
    var html = document.getElementById("HTML");
    var css = document.getElementById("CSS");
    var skills = " ";

    if (java.checked == true) {
        skills = skills + java.value + " ";
    }

    if (html.checked == true) {

        skills = skills + html.value + " ";
    }

    if (css.checked == true) {

        skills = skills + css.value + " ";
    }
    var table = document.getElementsByTagName('table')[0];

    var img = document.createElement('img');
    img.src = image;
 
    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var fade = "fade-in";
    
    cel1.innerHTML = "<div class=" + fade + "><ul><li> <b>" + name + "</b></li><li>" + gender + "</li><li>" + email + "</li><li> <a href=" + web + " target= _blank>" + web + "</a></li><li>" + skills + " </li></ul>";
    cel2.innerHTML = "<div class=" + fade + "><img src= " + image + " alt=User Image class = responsive>";

    var sPathToDefaultImg = src = "static/default_image.png";

    var replaceImageWithPlaceholderIfNotAvail = function (domImg) {

        if (!domImg || !domImg.nodeName || domImg.nodeName != 'IMG') {
            aImg = document.getElementsByTagName('IMG');
            i = aImg.length;
            if (i) {
                while (i--) {
                    replaceImageWithPlaceholderIfNotAvail(aImg[i]);
                }
            }
            return;
        }

        oImg = new Image();
        oImg.onerror = function () { 
            domImg.src = sPathToDefaultImg; 
        };
        oImg.src = domImg.src; 

    };
    replaceImageWithPlaceholderIfNotAvail()

    $('#subBtn').on('click', function () {
        if ($('#UserTable').css('opacity') == 0) $('#UserTable').css('opacity', 1);
        else { $('#UserTable').css('opacity', 0); }

        $('#UserTable').css('opacity', 1).delay(5000);

    });

    document.getElementById('UserName').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('Website').value = "";
    document.getElementById('ImageLink').value = "";
    document.querySelector('input[name="Gender"]:checked').checked = false;
    /*document.querySelectorAll('input[name="Skills"]:checked').checked = false;*/
    document.querySelector('input[name="Skills"]:checked').checked = false;
    document.querySelector('input[name="Skills"]:checked').checked = false;


}


