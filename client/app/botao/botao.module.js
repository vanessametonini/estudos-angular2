"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var botao_component_1 = require("./botao.component");
var botaoModule = (function () {
    function botaoModule() {
    }
    return botaoModule;
}());
botaoModule = __decorate([
    core_1.NgModule({
        exports: [botao_component_1.BotaoComponent],
        declarations: [botao_component_1.BotaoComponent]
    })
], botaoModule);
exports.botaoModule = botaoModule;
//# sourceMappingURL=botao.module.js.map