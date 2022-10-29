import { Release as TRelease } from "../api/release/Release";

export const RELEASE_TITLE_FIELD = "id";

export const ReleaseTitle = (record: TRelease): string => {
  return record.id || record.id;
};
