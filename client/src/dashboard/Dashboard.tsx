import { FC } from "react";
import {
  Card,
  Col,
  Layout,
  Menu,
  MenuProps,
  PageHeader,
  Row,
  Space,
} from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { useLocation, useNavigate } from "react-router-dom";
import { OperationsTable } from "./Operations/OperationsTable";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/dashboard",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
];

export const Dashboard: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedNavItems = [location.pathname];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider collapsible defaultCollapsed theme="light">
        <div
          className={css`
            height: 32px;
            margin: 16px;
            background: rgba(0, 0, 0, 0.1);
          `}
        />
        <Menu theme="light" items={items} selectedKeys={selectedNavItems} />
      </Layout.Sider>
      <Layout
        className={css`
          padding-left: 10px;
        `}
      >
        <Layout.Content>
          <Space
            direction="vertical"
            className={css`
              display: flex;
              height: 100%;
            `}
          >
            <PageHeader
              title="Dashboard"
              ghost={false}
              onBack={() => navigate(-1)}
            />
            <Card title="Operation list">
              <Row justify="center">
                <Col
                  className={css`
                    width: 1000px;
                  `}
                >
                  <OperationsTable />
                </Col>
              </Row>
            </Card>
          </Space>
        </Layout.Content>
        <Layout.Footer
          className={css`
            text-align: center;
          `}
        >
          Made by Andrew Smelov
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
