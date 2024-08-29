# Mock Data Structure

For the sources of revenue, I have considered three main categories: Basic Subscription, Premium Subscription, and Ads. Each of these sources contributes to the overall revenue metrics, providing a comprehensive view of the financial performance of the Streamify platform.

The project uses mock data to simulate various metrics. Below is the structure of the mock data used in this project:

#### Metrics Data (`metricsData.json`)

| Key           | Type   | Description             |
| ------------- | ------ | ----------------------- |
| total_users   | number | Total number of users   |
| active_users  | number | Number of active users  |
| total_streams | number | Total number of streams |
| total_revenue | number | Total revenue generated |
| top_artist    | string | Name of the top artist  |

#### Users Data (`usersData.json`)

| Column Name | Type   | Description            |
| ----------- | ------ | ---------------------- |
| month       | string | Month of the data      |
| totalUsers  | number | Total number of users  |
| activeUsers | number | Number of active users |

#### Revenue Data (`revData.json`)

| Column Name | Type   | Description                                                             |
| ----------- | ------ | ----------------------------------------------------------------------- |
| source      | string | Source of the revenue (Basic Subscription, Premium Subscription or Ads) |
| amount      | number | Amount of revenue generated                                             |

#### Top 5 Streams Data (`top5StreamsData.json`)

| Column Name | Type   | Description                           |
| ----------- | ------ | ------------------------------------- |
| songName    | string | Name of the song                      |
| streamCount | number | Number of times the song was streamed |

#### Streaming Data (`streamingData.json`)

| Column Name  | Type   | Description                                                                      |
| ------------ | ------ | -------------------------------------------------------------------------------- |
| songName     | string | Name of the song                                                                 |
| artist       | string | Name of the artist                                                               |
| dateStreamed | string | Date and time when the song streamed                                             |
| streamCount  | number | Number of times the song was streamed                                            |
| userId       | number | ID of the user who streamed the song                                             |
| sourceType   | string | Type of subscription or source (Basic Subscription, Premium Subscription or Ads) |
