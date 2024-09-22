import { BaseEntity, Column, CreateDateColumn, Entity,ManyToOne ,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Segmento } from "./Segmento";

@Entity()
export class Bordillo extends BaseEntity {

    @PrimaryGeneratedColumn()
     id: number;

     @Column()
     material: string;
     
     @Column()
     altura: number;

     @ManyToOne(() => Segmento, (segmento) => segmento.bordillos, { onDelete: 'CASCADE' }) 
     segmento: Segmento;

     @CreateDateColumn()
     createsAt: Date;

     @UpdateDateColumn()
     updatedAd: Date;
}