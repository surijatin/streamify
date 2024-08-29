import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setMetricsData } from "../../store/reducers/MetricsReducer/action";
import {
  setUsersData,
  setRevData,
  setRevSource,
  setTopStreams,
  setStreamingData,
} from "../../store/reducers/CommonReducer/action";
import MetricCard from "../MetricCard";
import { Skeleton } from "antd";
import LineChartComponent from "../LineChartComponent";
import { PieChartComponent } from "../PieChartComponent";
import { BarChartComponent } from "../BarChartComponent";
import DataTableComponent from "../DataTableComponent";
import type { DataType } from "../../types/types";
import mockMetricsData from "../../mockData/metricsData.json";
import mockUsersData from "../../mockData/usersData.json";
import mockRevData from "../../mockData/revData.json";
import mockTop5Streams from "../../mockData/top5StreamsData.json";
import mockStreamData from "../../mockData/streamingData.json";

interface MainContentProps {
  metricsData: Record<string, any>;
  userData: Array<Record<string, any>>;
  revData: Array<Record<string, any>>;
  revSource: string;
  topStreamData: Array<Record<string, any>>;
  setMetricsData: (data: typeof mockMetricsData) => void;
  setUsersData: (data: typeof mockUsersData) => void;
  setRevData: (data: typeof mockRevData) => void;
  setTopStreams: (data: typeof mockTop5Streams) => void;
  setRevSource: (data: string) => void;
  setStreamingData: (data: typeof mockStreamData) => void;
  streamingData: DataType[];
}

function MainContent({
  metricsData,
  userData,
  revData,
  setMetricsData,
  setUsersData,
  setRevData,
  setRevSource,
  revSource,
  topStreamData,
  setTopStreams,
  setStreamingData,
  streamingData,
}: MainContentProps) {
  useEffect(() => {
    setMetricsData(mockMetricsData);
    setUsersData(mockUsersData);
    setRevData(mockRevData);
    setTopStreams(mockTop5Streams);
    setStreamingData(mockStreamData);
  }, [
    setMetricsData,
    setUsersData,
    setRevData,
    setTopStreams,
    setStreamingData,
  ]);

  const isEmptyMetricsData = Object.keys(metricsData).length === 0;
  const isEmptyUserData = userData.length === 0;
  const isEmptyRevData = revData.length === 0;
  const isEmptyTopStreamData = topStreamData.length === 0;
  const isEmptyStreamingData = streamingData.length === 0;

  const filteredData = useMemo(() => {
    if (streamingData.length > 0 && revSource !== "") {
      return streamingData.filter((data) => data.sourceType === revSource);
    }
    return [];
  }, [streamingData, revSource]);

  return (
    <div className="bg-white-400 h-full w-full rounded-lg">
      <div className="p-4">
        {isEmptyMetricsData ? (
          <Skeleton active />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(metricsData).map(([key, value], index) => {
              return (
                <MetricCard value={value} title={key} index={index} key={key} />
              );
            })}
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:space-x-3 mt-4">
          <div className="flex-1">
            {isEmptyUserData ? (
              <Skeleton active />
            ) : (
              <LineChartComponent data={userData} />
            )}
          </div>
          <div className="flex-1">
            {isEmptyRevData ? (
              <Skeleton active />
            ) : (
              <PieChartComponent data={revData} setRevSource={setRevSource} />
            )}
          </div>
          <div className="flex-1">
            {isEmptyTopStreamData ? (
              <Skeleton active />
            ) : (
              <BarChartComponent data={topStreamData} />
            )}
          </div>
        </div>
        <div className="mt-4">
          {isEmptyStreamingData ? (
            <Skeleton active />
          ) : (
            <DataTableComponent data={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
}

MainContent.propTypes = {
  metricsData: PropTypes.object.isRequired,
  userData: PropTypes.array.isRequired,
  setMetricsData: PropTypes.func.isRequired,
  setUsersData: PropTypes.func.isRequired,
  setRevData: PropTypes.func.isRequired,
  setRevSource: PropTypes.func.isRequired,
  topStreamData: PropTypes.array.isRequired,
  setTopStreams: PropTypes.func.isRequired,
  setStreamingData: PropTypes.func.isRequired,
  streamingData: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any) => ({
  metricsData: state.metricsReducer.metricsData,
  userData: state.commonReducer.usersData,
  revData: state.commonReducer.revData,
  revSource: state.commonReducer.revSourceSelected,
  topStreamData: state.commonReducer.topStreams,
  streamingData: state.commonReducer.streamingData,
});

const mapDispatchToProps = (dispatch: any) => ({
  setMetricsData: (data: any) => dispatch(setMetricsData(data)),
  setUsersData: (data: any) => dispatch(setUsersData(data)),
  setRevData: (data: any) => dispatch(setRevData(data)),
  setRevSource: (data: any) => dispatch(setRevSource(data)),
  setTopStreams: (data: any) => dispatch(setTopStreams(data)),
  setStreamingData: (data: any) => dispatch(setStreamingData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
