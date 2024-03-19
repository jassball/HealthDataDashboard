import React, { useState } from "react";
import { Card, Select, Space, TimePicker, DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Text } from "../text";
import dayjs from "dayjs";
import { DatePickerProps, TimePickerProps } from "antd";

const { Option } = Select;

const LatestActivities = () => {
  const [type, setType] = useState<PickerType>("time");
  const [selectedValue, setSelectedValue] = useState<any>(null);

  type PickerType = "time" | "date" | "week" | "month" | "quarter" | "year";

  const PickerWithType = ({
    type,
    onChange,
  }: {
    type: PickerType;
    onChange: (value: any) => void;
  }) => {
    if (type === "time") return <TimePicker onChange={onChange} />;
    if (type === "date") return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  };

  const handlePickerChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <Card
      style={{ height: "100%", padding: "8px 16px" }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CalendarOutlined />
          <Text size="sm" style={{ marginLeft: "0.7rem" }}>
            Målinger
          </Text>
        </div>
      }
    >
      <Space>
        <Select value={type} onChange={setType}>
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
        <PickerWithType type={type} onChange={handlePickerChange} />
      </Space>
      {selectedValue && (
        <div style={{ marginTop: "10px" }}>
          Selected Value: {dayjs(selectedValue).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      )}
    </Card>
  );
};

export default LatestActivities;
