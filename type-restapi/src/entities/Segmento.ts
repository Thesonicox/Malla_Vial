import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Calzada } from "./Calzada";
import { Bordillo } from "./Bordillo";

@Entity()
export class Segmento extends BaseEntity {
     
    @PrimaryGeneratedColumn()
     id: number;

     @Column()
     longitud: number;

     @Column()
     direccion: string;

     @Column()
     numero: number;

     @OneToMany(() => Calzada, (calzada) => calzada.segmento, { cascade: true, onDelete: 'CASCADE' })
     calzadas: Calzada[];

     @OneToMany(() => Bordillo, (bordillo) => bordillo.segmento, { cascade: true, onDelete: 'CASCADE' })
     bordillos: Bordillo[];

     @CreateDateColumn()
     createsAt: Date;

     @UpdateDateColumn()
     updatedAd: Date;
}