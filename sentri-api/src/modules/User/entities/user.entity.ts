import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/base/base.entity";
import "reflect-metadata";
import { Role } from "../../role/entities/role.entity";

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;
  @Column({ nullable: true })
  googleId?: string;

  @ManyToOne(() => Role)
  role: Role; 
}
