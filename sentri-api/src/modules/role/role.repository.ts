import { Repository } from "typeorm";
import BaseRepository from "../../common/base/base.repository";
import { Role } from "./entities/role.entity";

export default class RoleRepository extends BaseRepository<Role> {
  constructor(roleRepository: Repository<Role>) {
    super(roleRepository);
  }
}
