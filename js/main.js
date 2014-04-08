$(document).on('ready', function() {

});

var createUserInput = function(userNumber, group, type) {
    var $inputName = $("<input>", {
        type: 'text',
        id: group + "-" + userNumber + "-" + type,
        value: group + userNumber + " " + type
    });
    return $inputName;
}

var createUserForm = function(userNumber, group) {
    var wantedInput = ['Name', 'Phone-Number', 'Street'];
    var $userInfoForm = $("<form>", {
        id: group + userNumber + "-info"
    });
    for (var i = 0; i < wantedInput.length; ++i) {
        $userInfoForm.append(createUserInput(userNumber, group, wantedInput[i]));
    }
    return $userInfoForm;
}

var createGroupForms = function(total, group) {
    var $groupForms = $("<div>", {
        id: group + "-forms"
    });
    for (var i = 1; i <= total; ++i) {
        $groupForms.append(createUserForm(i, group));
    }
    return $groupForms;
}

// $('#vic-total-submit').on


// $('#vic-total-submit').mouseup(function(){$('#vic-info').append(createGroupForms($('#vic-total').val(),'victim'))})