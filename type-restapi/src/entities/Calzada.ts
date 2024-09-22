import { BaseEntity, Column, CreateDateColumn, Entity,ManyToOne , PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Segmento } from "./Segmento";

@Entity()
export class Calzada extends BaseEntity {

    @PrimaryGeneratedColumn()
     id: number;

     @Column()
     tipo: string;
     
     @Column()
     ancho: number;
     
     @ManyToOne(() => Segmento, (segmento) => segmento.calzadas, { onDelete: 'CASCADE' }) 
     segmento: Segmento;

     @CreateDateColumn()
     createsAt: Date;

     @UpdateDateColumn()
     updatedAd: Date;
}