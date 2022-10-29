import { ReleaseWhereInput } from "./ReleaseWhereInput";
import { ReleaseOrderByInput } from "./ReleaseOrderByInput";

export type ReleaseFindManyArgs = {
  where?: ReleaseWhereInput;
  orderBy?: Array<ReleaseOrderByInput>;
  skip?: number;
  take?: number;
};
