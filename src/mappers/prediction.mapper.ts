import { DomainEvent } from "@skorify/domain/core";
import {
  PredictionAttributes,
  PredictionEntity,
} from "@skorify/domain/prediction";
import { BaseMapper } from "../core/base.mapper";

export class PredictionMapper extends BaseMapper {
  fromJson(json: Record<string, any>): DomainEvent {
    return PredictionEntity.build({
      id: json.id,
      userEnrollmentId: json.user_enrollment_id,
      userId: json.user_id,
      tournamentInstanceId: json.tournament_instance_id,
      matchId: json.match_id,
      awayScore: json.away_score,
      homeScore: json.home_score,
      earnedPoints: json.earned_points ?? 0,
      hasExactResult: json.has_exact_result ?? false,
      createdAt: new Date(json.created_at),
      updatedAt: json.updated_at ? new Date(json.updated_at) : undefined,
      deletedAt: json.deleted_at ? new Date(json.deleted_at) : undefined,
      isCalculated: json.is_calculated ?? false,
    });
  }

  toJson(entity: PredictionEntity) {
    return {
      id: entity.id,
      user_id: entity.userId,
      tournament_instance_id: entity.tournamentInstanceId,
      match_id: entity.matchId,
      away_score: entity.awayScore,
      home_score: entity.homeScore,
      earned_points: entity.earnedPoints,
      has_exact_result: entity.hasExactResult,
      user_enrollment_id: entity.userEnrollmentId,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
      is_calculated: entity.isCalculated,
    };
  }
}
