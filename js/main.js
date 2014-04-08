$(document).on('ready', function() {

});



var createInfoForm = function(total, group) {
    return true;
}



var createUserInfo = function(userNumber, group) {
    var wantedInput = ['Name', 'Phone-Number', 'Street'];
    var $userInfoForm = $("<form>", {
        id: group + userNumber + "-info"
    });
    for (var i = 0; i < wantedInput.length; ++i) {
        $userInfoForm.append(createUserInput(userNumber, group, wantedInput[i]));
    }
    return $userInfoForm;

}

var createUserInput = function(userNumber, group, type) {
    var $inputName = $("<input>", {
        type: 'text',
        id: group + "-" + userNumber + "-" + type,
        value: group + userNumber + " " + type
    });
    return $inputName;
}