import { FC } from "react";
import { Table, Tag, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Operation, useOperations } from "./useOperations";
import { css } from "@emotion/css";
import { format } from "date-fns";

const columns: ColumnsType<Operation> = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "40%",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (_, { amount, currency }) => (
      <>
        <Typography.Text type={amount > 0 ? "success" : "danger"}>
          {amount}
        </Typography.Text>{" "}
        <Typography.Text
          type="secondary"
          className={css`
            font-size: 12px;
          `}
        >
          {currency}
        </Typography.Text>
      </>
    ),
  },
  {
    title: "Operation type",
    dataIndex: "operationType",
    key: "operationType",
    render: (_, { operationType }) => (
      <Tag
        className={css`
          text-transform: uppercase;
        `}
      >
        {operationType}
      </Tag>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (_, { date }) => (
      <>
        <Typography.Text
          type="secondary"
          className={css`
            font-size: 12px;
          `}
        >
          {format(new Date(date), "yyyy-MM-dd")}
        </Typography.Text>
      </>
    ),
  },
];

export const OperationsTable: FC = () => {
  const { operations, loading } = useOperations();

  return (
    <Table
      columns={columns}
      dataSource={operations}
      loading={loading}
      rowKey="id"
    />
  );
};
