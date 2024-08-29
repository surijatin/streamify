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
      className="transition-transform transform hover:scale-105 border-2 bg-white drop-shadow-sm "
    >
      <Statistic
        title={<div className="text-gray-800 text-lg">{newTitle}</div>}
        value={title === "total_revenue" ? `$${val}` : val}
        prefix={
          title === "total_users" ? (
            <UserOutlined className="text-orange-500" />
          ) : title === "active_users" ? (
            <UserSwitchOutlined className="text-orange-500" />
          ) : title === "total_streams" ? (
            <PlayCircleOutlined className="text-orange-500" />
          ) : title === "total_revenue" ? (
            <DollarOutlined className="text-orange-500" />
          ) : title === "top_artist" ? (
            <StarOutlined className="text-orange-500" />
          ) : null
        }
        valueStyle={{ fontWeight: "500" }}
      />
    </Card>
  );
}
