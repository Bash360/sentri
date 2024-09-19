import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/base/base.entity";

@Entity()
export class Role extends BaseEntity {
  @Column({ unique: true })
  name: string;
}
