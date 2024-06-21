import { UserInteraction as TUserInteraction } from "../api/userInteraction/UserInteraction";

export const USERINTERACTION_TITLE_FIELD = "id";

export const UserInteractionTitle = (record: TUserInteraction): string => {
  return record.id?.toString() || String(record.id);
};
