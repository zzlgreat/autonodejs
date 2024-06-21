import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
