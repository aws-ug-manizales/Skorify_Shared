import { DomainEvent } from "@skorify/domain/core";
import {
  TournamentAttributes,
  TournamentEntity,
} from "@skorify/domain/tournament";
import { BaseMapper } from "../core/base.mapper";

export class TournamentMapper extends BaseMapper {
  fromJson(json: Record<string, any>): DomainEvent {
    return TournamentEntity.build({
      id: json.id,
      name: json.name,
      startDate: new Date(json.start_date),
      endDate: new Date(json.end_date),
      matchType: json.match_type,
      token: json.token,
      createdAt: new Date(json.created_at),
      updatedAt: json.updated_at ? new Date(json.updated_at) : undefined,
      deletedAt: json.deleted_at ? new Date(json.deleted_at) : undefined,
    });
  }

  toJson(entity: TournamentEntity) {
    return {
      id: entity.id,
      name: entity.name,
      start_date: entity.startDate,
      end_date: entity.endDate,
      match_type: entity.matchType,
      token: entity.token,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
    };
  }
}
