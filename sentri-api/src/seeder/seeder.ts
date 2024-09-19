import { seed } from "./seed.data";
import logger from '../config/logger';
import RoleRepository from "../modules/role/role.repository";
import dataSource from "../config/dataSource";
import { Role } from "../modules/role/entities/role.entity";

export async function seedRoles() {
  try {
    const roleRepo = dataSource.getRepository(Role);
    const roleRepository = new RoleRepository(roleRepo);
    if (!dataSource.isInitialized) {
    await  dataSource.initialize();
   }

    for (const role of seed.role) {
      const existingRole = await roleRepository.findOneByCondition({
        name: role.name,
      });
      if (!existingRole) {
        await roleRepository.create({ name: role.name });
      } else {
        logger.info("SeedRoles: Role already exists");
      }
    }

    logger.info("Roles seeding completed.");
    process.exit(0); 
  } catch (error) {
    logger.error("seedRoles(): error seeding data", error);
    process.exit(1); 
  }
}