import { useEffect, useState } from "react";
import {
  API_HOST,
  fetchJson,
  ResponseStatuses,
  SuccessResponse,
} from "../../api";
import { notification } from "antd";

export interface Operation {
  id: number;
  flowType: "inflow" | "outflow";
  operationType: "food" | "transport" | "salary" | "other";
  description: string;
  date: string;
  amount: number;
  currency: "SGD" | "USD";
}

export interface OperationListResponse extends SuccessResponse {
  operations: readonly Operation[];
}

const fakeOperations: readonly Operation[] = [
  {
    id: 4,
    description: "Buy electronics",
    operationType: "other",
    flowType: "outflow",
    currency: "SGD",
    amount: -100,
    date: "2022-10-20T10:15:50.000",
  },
  {
    id: 3,
    description: "MRT trip",
    operationType: "transport",
    flowType: "outflow",
    currency: "SGD",
    amount: -2,
    date: "2022-10-10T18:20:30.000",
  },
  {
    id: 2,
    description: "Buy food",
    operationType: "food",
    flowType: "outflow",
    currency: "SGD",
    amount: -10,
    date: "2022-10-10T15:10:24.000",
  },
  {
    id: 1,
    description: "Salary payment",
    operationType: "salary",
    flowType: "inflow",
    currency: "SGD",
    amount: 1000,
    date: "2022-10-01T12:01:00.000",
  },
];

export const useOperations = (): {
  operations: readonly Operation[];
  loading: boolean;
} => {
  const [operations, setOperations] = useState<readonly Operation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchJson<OperationListResponse>(
          `${API_HOST}/operations`
        );

        if (!isCancelled) {
          if (response.status === ResponseStatuses.success) {
            setOperations(response.operations);
          } else {
            throw new Error(response.message);
          }

          setLoading(false);
        }
      } catch (e) {
        const error = e as Error;
        if (!isCancelled) {
          notification.error({
            description: error.message,
            message: "Failed to load operations",
          });
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { operations, loading };
};
