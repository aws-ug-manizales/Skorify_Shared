import {
  UserEnrollmentEntity,
  UserEnrollmentAttributes,
} from "@skorify/domain/user-enrollment";
import { BaseRepository, DataSource } from "../core";
import { UserEnrollmentMapper } from "../mappers/user-enrollment.mappert";

export class UserEnrollmentRepository extends BaseRepository<
  UserEnrollmentEntity,
  UserEnrollmentAttributes
> {
  constructor(
    ds: DataSource<UserEnrollmentEntity>,
    mapper: UserEnrollmentMapper,
  ) {
    super(ds, mapper);
  }
}
