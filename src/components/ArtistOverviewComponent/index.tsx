import { useState } from "react";
import { BarChartComponent } from "../BarChartComponent";
import { Input } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const data = [
  { songName: "God's Plan", streamCount: 25000 },
  { songName: "In My Feelings", streamCount: 24000 },
  { songName: "Hotline Bling", streamCount: 23000 },
  { songName: "One Dance", streamCount: 22000 },
  { songName: "Started From the Bottom", streamCount: 21000 },
];

function ArtistOverviewComponent({}) {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="h-full w-full rounded-lg shadow-lg">
      <div className="p-6 rounded flex items-center">
        <Search
          placeholder="Search Artist Name..."
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div className="p-6 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-full flex flex-col p-6 rounded-2xl bg-white shadow-md mb-6 lg:mb-0 lg:mr-6">
          <h1 className="text-2xl font-bold mb-6 text-card-foreground">
            Artist Overview
          </h1>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">
                  Artist Name:
                </td>
                <td className="font-bold text-xl text-gray-900">Drake</td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">Genre:</td>
                <td className="font-bold text-xl text-gray-900">
                  Hip Hop and Rap
                </td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">Country:</td>
                <td className="font-bold text-xl text-gray-900">Canada</td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">
                  Latest Song:
                </td>
                <td className="font-bold text-xl text-gray-900">
                  Laugh Now Cry Later
                </td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">
                  Last Song Release Date:
                </td>
                <td className="font-bold text-xl text-gray-900">
                  August 14, 2020
                </td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">
                  Latest Album:
                </td>
                <td className="font-bold text-xl text-gray-900">
                  Certified Lover Boy
                </td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">
                  Last Album Release Date:
                </td>
                <td className="font-bold text-xl text-gray-900">
                  September 3, 2021
                </td>
              </tr>
              <tr>
                <td className="mr-2 font-semibold text-gray-700">
                  Years active:
                </td>
                <td className="font-bold text-xl text-gray-900">
                  2001–present
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <BarChartComponent data={data} />
      </div>
    </div>
  );
}

export default ArtistOverviewComponent;
