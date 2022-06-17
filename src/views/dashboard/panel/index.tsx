import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  const state = {
    series: [
      {
        name: t('Storage history'),
        data: [31, 40, 28, 1, 20, 8, 9],
      },
    ],
  };

  const options: ApexOptions = {
    chart: {
      height: '350',
      type: 'line',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <Row gutter={[12, 24]}>
      <Col span={12}>
        <Card>
          <Statistic
            title={t('Month status')}
            value={1.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix='%'
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title={t('Storage user')}
            value={9.3}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix='%'
          />
        </Card>
      </Col>
      <Col span={24}>
        <Card title={t('Storage history')}>
          <ReactApexChart
            options={options}
            series={state.series}
            type='area'
            height={350}
          />
        </Card>
      </Col>
    </Row>
  );
}
