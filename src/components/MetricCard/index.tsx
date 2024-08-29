import { Card, Statistic } from "antd";
import {
  UserOutlined,
  UserSwitchOutlined,
  PlayCircleOutlined,
  DollarOutlined,
  StarOutlined,
} from "@ant-design/icons";

interface MetricCardProps {
  value: number | string;
  title: string;
  index: number;
}

export default function MetricCard({ value, title, index }: MetricCardProps) {
  const val = typeof value === "number" ? value.toLocaleString() : value;
  const newTitle = title
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <Card
      bordered={true}
      key={index}
      className="transition-transform transform hover:scale-105 border-2 border-orange-400 bg-orange-200"
    >
      <Statistic
        title={<div className="text-gray-800 text-lg">{newTitle}</div>}
        value={title === "total_revenue" ? `$${val}` : val}
        precision={2}
        prefix={
          title === "total_users" ? (
            <UserOutlined />
          ) : title === "active_users" ? (
            <UserSwitchOutlined />
          ) : title === "total_streams" ? (
            <PlayCircleOutlined />
          ) : title === "total_revenue" ? (
            <DollarOutlined />
          ) : title === "top_artist" ? (
            <StarOutlined />
          ) : null
        }
      />
    </Card>
  );
}
