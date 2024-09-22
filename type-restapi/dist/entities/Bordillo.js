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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bordillo = void 0;
const typeorm_1 = require("typeorm");
const Segmento_1 = require("./Segmento");
let Bordillo = class Bordillo extends typeorm_1.BaseEntity {
};
exports.Bordillo = Bordillo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bordillo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bordillo.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bordillo.prototype, "altura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Segmento_1.Segmento, (segmento) => segmento.bordillos, { onDelete: 'CASCADE' }),
    __metadata("design:type", Segmento_1.Segmento)
], Bordillo.prototype, "segmento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Bordillo.prototype, "createsAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Bordillo.prototype, "updatedAd", void 0);
exports.Bordillo = Bordillo = __decorate([
    (0, typeorm_1.Entity)()
], Bordillo);
