import { DomainEvent } from "@skorify/domain/core";
import { UserEntity, UserAttributes } from "@skorify/domain/user";
import { BaseMapper } from "../core/base.mapper";

export class UserMapper extends BaseMapper {
  fromJson(json: Record<string, any>): DomainEvent {
    return UserEntity.build({
      id: json.id,
      name: json.name,
      isActive: json.is_active,
      notificationToken: json.notification_token,
      email: json.email,
      role: json.role,
      createdAt: new Date(json.created_at),
      updatedAt: json.updated_at ? new Date(json.updated_at) : undefined,
      deletedAt: json.deleted_at ? new Date(json.deleted_at) : undefined,
    });
  }

  toJson(entity: UserEntity): any {
    return {
      id: entity.id,
      name: entity.name,
      is_active: entity.isActive,
      notification_token: entity.notificationToken,
      email: entity.email,
      role: entity.role as UserAttributes["role"],
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
    };
  }
}
