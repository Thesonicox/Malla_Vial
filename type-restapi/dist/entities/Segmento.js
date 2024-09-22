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
exports.Segmento = void 0;
const typeorm_1 = require("typeorm");
const Calzada_1 = require("./Calzada");
const Bordillo_1 = require("./Bordillo");
let Segmento = class Segmento extends typeorm_1.BaseEntity {
};
exports.Segmento = Segmento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Segmento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Segmento.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Segmento.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Segmento.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Calzada_1.Calzada, (calzada) => calzada.segmento, { cascade: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Segmento.prototype, "calzadas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Bordillo_1.Bordillo, (bordillo) => bordillo.segmento, { cascade: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Segmento.prototype, "bordillos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Segmento.prototype, "createsAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Segmento.prototype, "updatedAd", void 0);
exports.Segmento = Segmento = __decorate([
    (0, typeorm_1.Entity)()
], Segmento);
