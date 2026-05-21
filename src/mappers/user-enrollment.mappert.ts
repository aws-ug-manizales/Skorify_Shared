import { DomainEvent } from "@skorify/domain/core";
import {
  UserEnrollmentEntity,
  UserEnrollmentAttributes,
} from "@skorify/domain/user-enrollment";
import { BaseMapper } from "../core/base.mapper";

export class UserEnrollmentMapper extends BaseMapper {
  fromJson(json: Record<string, any>): DomainEvent {
    return UserEnrollmentEntity.build({
      id: json.id,
      userId: json.user_id,
      tournamentInstanceId: json.tournament_instance_id,
      tournamentId: json.tournament_id,
      joinedAt: new Date(json.joined_at),
      lastPosition: json.last_position,
      currentPosition: json.current_position,
      currentScore: json.current_score,
      streak: json.streak,
      maxStreak: json.max_streak,
      createdAt: new Date(json.created_at),
      updatedAt: json.updated_at ? new Date(json.updated_at) : undefined,
      deletedAt: json.deleted_at ? new Date(json.deleted_at) : undefined,
    });
  }

  toJson(entity: UserEnrollmentEntity) {
    return {
      id: entity.id,
      user_id: entity.userId,
      tournament_instance_id: entity.tournamentInstanceId,
      tournament_id: entity.tournamentId,
      joined_at: entity.joinedAt,
      last_position: entity.lastPosition,
      current_position: entity.currentPosition,
      current_score: entity.currentScore,
      streak: entity.streak,
      max_streak: entity.maxStreak,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
    };
  }
}
