$(function () {
    var errorCounter = [];
    $('button').on('click', () => {
        var user = $('#nameId').val();
        var ageUser = $('#ageId').val();
        var nickName = $('#nicknameId').val();

        //Name cannot empty
        var isUserValid = user != "";
        //we can store user != "" in variable boolean than we use isUserValid  to compare
        // if(user != ""){
        if (isUserValid) {
            borderGreen('nameId');
            errorCounter[0] = 0;

        } else {
            borderDanger('nameId');
            errorCounter[0] = 1

            // $('#nameId').addClass('border border-danger').removeClass('border border-success');
        }
        //Age must be positive number and in terger
        //isNaN is function check letter  
        //parseInt  use for  convert string to int and float to int doesn't float
        // parseFloat() convert from float to int 
        //ageUser == parseInt(ageUser) it we can cont input numbers float to form example: 9.9 is error
        var isAgeValid = ageUser != "" && ageUser > 0 && !isNaN(ageUser) && ageUser == parseInt(ageUser);
        //    if(ageUser !="" && ageUser>0 && !isNaN(ageUser) && ageUser == parseInt(ageUser)){
        if (isAgeValid) {
            borderGreen('ageId');
            errorCounter[1] = 0;
            // $('#ageId').addClass('border border-success').removeClass('border border-danger');
        } else {
            //     $('#ageId').addClass('border border-danger').removeClass('border border-success');
            borderDanger('ageId');
            errorCounter[1] = 2
        }
        // Aleat 1 upper case and 9 characters || or 
        var atleast9chars = nickName.length >= 9;
        var atLeast1UpperCase = false;
        //សិក្សាយកតម្លៃមួយៗ
        for (let i = 0; i < nickName.length; i++) {
            // លូកឲ្យចេញមួយតួៗ
            var chars = nickName.charAt(i);
            // compare with letter ដើម
            var isUppercase = chars.toUpperCase() == chars;
            //សិក្សាបើមិនមាន​អក្សរធំ
            if (isNaN(chars)) {
                var isUppercase = chars.toUpperCase() == chars;
                atLeast1UpperCase = atLeast1UpperCase || isUppercase;

            }
        }
        var isNickNameValid = atLeast1UpperCase && atleast9chars && nickName != "";
        if (isNickNameValid) {
            borderGreen('nicknameId');
            errorCounter[2] = 0;
        } else {
            borderDanger('nicknameId');
            errorCounter[2] = 3;
        }

        //all information coorect

        var isAllValid = isUserValid && isAgeValid && isNickNameValid;
        if (isAllValid) {
            showSuccess();
        } else {
            showError(errorCounter);
        }
    });
});
var borderGreen = (element) => {
    $('#' + element).addClass('border border-success').removeClass('border border-danger');
}
var borderDanger = (element) => {
    $('#' + element).addClass('border border-danger').removeClass('border border-success');
}

var showSuccess = () => {
    var success = "";
    success += `
        <div class="alert alert-success">
            <strong>Success !</strong>
        </div>
    `;
    $('#message').html(success);
}
var errorMessage = ["Name is empty !", "Age must be number!", "Nickname at least 1 upper and 9 chars"];
var showError = (errors) => {
    var errorSMS = "";
    if (errors[0] == 1) {
        errorSMS += errorMessage[0];
    } else {
        errorSMS += "";
    }
    if (errors[1] == 2) {
        errorSMS += errorMessage[1];
    } else {
        errorSMS += "";
    }
    if (errors[2] == 3) {
        errorSMS += errorMessage[2];
    } else {
        errorSMS += "";
    }
    $('#message').html(errorSMS);
}