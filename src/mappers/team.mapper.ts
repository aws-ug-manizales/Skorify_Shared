import { DomainEvent } from "@skorify/domain/core";
import { TeamAttributes, TeamEntity } from "@skorify/domain/team";
import { BaseMapper } from "../core/base.mapper";

export class TeamMapper extends BaseMapper {
  fromJson(json: Record<string, any>): DomainEvent {
    return TeamEntity.build({
      id: json.id,
      name: json.name,
      shieldUrl: json.shield_url,
      tournamentId: json.tournament_id,
      createdAt: new Date(json.created_at),
      updatedAt: json.updated_at ? new Date(json.updated_at) : undefined,
      deletedAt: json.deleted_at ? new Date(json.deleted_at) : undefined,
    });
  }

  toJson(entity: TeamEntity) {
    return {
      id: entity.id,
      name: entity.name,
      shield_url: entity.shieldUrl,
      tournament_id: entity.tournamentId,

      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
    };
  }
}
