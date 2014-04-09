$(document).on('ready', function() {

    disableInput('forms-submit-Victim');
    disableInput('forms-submit-Volunteer');

    $('#vic-total-submit').on("click", function() {
        $('#vic-info').append(createGroupForms($('#vic-total').val(), 'Victim'));
        // $('#vic-total-submit').prop('disabled', true);
        // $('#vic-total').prop('disabled', true);
        disableInput('vic-total-submit');
        disableInput('vic-total');
        undisableInput('forms-submit-Victim');
    });

    $('#vol-total-submit').on("click", function() {
        $('#vol-info').append(createGroupForms($('#vol-total').val(), 'Volunteer'));
        // $('#vol-total-submit').prop('disabled', true);
        // $('#vol-total').prop('disabled', true);
        disableInput('vol-total-submit');
        disableInput('vol-total');
        undisableInput('forms-submit-Volunteer');
    });

    $('#forms-submit-Victim').on("click", function() {
        console.log('running victim calc');
        for (var i = 1; i <= $('#vic-total').val(); ++i) {
            Victims['Victim-' + i] = userInfo($('#Victim-' + i + '-Name').val(), $('#Victim-' + i + '-Phone-Number').val(), $('#Victim-' + i + '-Street').val());
        }
        disableInput('forms-submit-Victim');
        $('#vic-info-output').append(printInfo(Victims));
    })

    $('#forms-submit-Volunteer').on("click", function() {
        console.log('running volunteer calc');
        for (var i = 1; i <= $('#vol-total').val(); ++i) {
            Volunteers['Volunteer-' + i] = userInfo($('#Volunteer-' + i + '-Name').val(), $('#Volunteer-' + i + '-Phone-Number').val(), $('#Volunteer-' + i + '-Street').val());
        }
        disableInput('forms-submit-Volunteer');
        $('#vol-info-output').append(printInfo(Volunteers));
    })

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
            id: group + userNumber + "-info",
            class: "user-info"
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

    var userInfo = function(name, phoneNumber, street) {
        var userInfo = {};
        userInfo['Name'] = name;
        userInfo['Phone-Number'] = phoneNumber;
        userInfo['Street'] = street;
        return userInfo;
    }

    var disableInput = function(id) {
        $('#' + id).prop('disabled', true);
    }

    var undisableInput = function(id) {
        $('#' + id).prop('disabled', false);
    }

    var Victims = {}
    var Volunteers = {}

    var getInfo = function(person) {
        var $userInfoDiv = $("<div>", {
            class: "user-info"
        });
        for (key in person) {
            $userInfoDiv.append('<p>' + person[key] + '</p>');
        }
        return $userInfoDiv;
    }

    var printInfo = function(allOfGroup) {
        var $allInfoDiv = $("<div>");
        for (key in allOfGroup) {
            $allInfoDiv.append(getInfo(allOfGroup[key]));
        }
        return $allInfoDiv;
    }

});