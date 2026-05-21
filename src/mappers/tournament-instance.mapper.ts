import { DomainEvent } from "@skorify/domain/core";
import {
  TournamentInstanceAttributes,
  TournamentInstanceEntity,
} from "@skorify/domain/tournament-instance";
import { BaseMapper } from "../core/base.mapper";

export class TournamentInstanceMapper extends BaseMapper {
  fromJson(json: Record<string, any>): DomainEvent {
    const event = TournamentInstanceEntity.build({
      id: json.id,
      name: json.name,
      ownerId: json.owner_id,
      tournamentId: json.tournament_id,
      state: json.state,
      inviteCode: json.invite_code,
      createdAt: new Date(json.created_at),
      updatedAt: json.updated_at ? new Date(json.updated_at) : undefined,
      deletedAt: json.deleted_at ? new Date(json.deleted_at) : undefined,
    });

    return event;
  }

  toJson(entity: TournamentInstanceEntity) {
    return {
      id: entity.id,
      name: entity.name,
      ownerId: entity.ownerId,
      tournamentId: entity.tournamentId,
      state: entity.state,
      inviteCode: entity.inviteCode,

      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
      deleted_at: entity.deletedAt,
    };
  }
}
