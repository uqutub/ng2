System.register([], function(exports_1) {
    /*
      Custom validators to use everywhere.
    */
    // SINGLE FIELD VALIDATORS
    function emailValidator(control) {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }
    exports_1("emailValidator", emailValidator);
    //CONTROL GROUP VALIDATORS
    function matchingPasswords(passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    exports_1("matchingPasswords", matchingPasswords);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=validators.js.map