"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var mock_1 = require('../../services/mock');
var auth_service_1 = require('../../services/auth.service');
var forms_1 = require('@angular/forms');
var LoginComponent = (function () {
    function LoginComponent(router, fb, authenticationService) {
        this.router = router;
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.model = new mock_1.User('', '');
        this.submitted = false;
        this.active = true;
    }
    LoginComponent.prototype.onSubmit = function () { this.submitted = true; };
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.myForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            password: ['']
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.model = this.myForm.value;
        console.log('model', this.model);
        this.authenticationService.login(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['dashboard']);
            _this.router.navigate(['/']);
            window.location.reload();
        }, function (error) {
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, auth_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map