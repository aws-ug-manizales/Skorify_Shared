import { UserEntity, UserAttributes } from "@skorify/domain/user";
import { BaseRepository, DataSource } from "../core";
import { UserMapper } from "../mappers/user.mapper";

export class UserRepository extends BaseRepository<UserEntity, UserAttributes> {
  constructor(ds: DataSource<UserEntity>, mapper: UserMapper) {
    super(ds, mapper);
  }
}
