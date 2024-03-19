//import React from 'react';
import styles from './linechart2.less';

import { ThemeProvider } from '@fluentui/react';
import { Fluent2WebLightTheme, Fluent2WebDarkTheme } from '@fluentui/fluent2-theme';

import * as React from 'react';
import { IChartProps, ILineChartProps, LineChart, DataVizPalette } from '@fluentui/react-charting';
import { Toggle } from '@fluentui/react/lib/Toggle';

interface ILineChartBasicState {
  width: number;
  height: number;
  allowMultipleShapes: boolean;
  showAxisTitles: boolean;
}

export class LineChartBasicExample extends React.Component<{}, ILineChartBasicState> {
  constructor(props: ILineChartProps) {
    super(props);
    this.state = {
      width: 1280,
      height: 300,
      allowMultipleShapes: false,
      showAxisTitles: true,
    };
  }

  public render(): JSX.Element {
    return <div>{this._basicExample()}</div>;
  }

  private _onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ width: parseInt(e.target.value, 10) });
  };
  private _onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ height: parseInt(e.target.value, 10) });
  };
  private _onShapeChange = (ev: React.MouseEvent<HTMLElement>, checked: boolean) => {
    this.setState({ allowMultipleShapes: checked });
  };
  private _onToggleAxisTitlesCheckChange = (ev: React.MouseEvent<HTMLElement>, checked: boolean) => {
    this.forceUpdate();
    this.setState({ showAxisTitles: checked });
  };

  private _basicExample(): JSX.Element {
    const data: IChartProps = {
      chartTitle: '载荷-扭矩折线图',
      lineChartData: [
        {
          legend: '大钩载荷',
          data: [
            {x:3732, y:217.301756933333},
            {x:3762, y:218.221369866667},
            {x:3792, y:226.809368066667},
            {x:3822, y:230.472987333334},
            {x:3852, y:236.420806466667},
            {x:3882, y:243.228908666667},
            {x:3912, y:254.531248266667},
            {x:3942, y:251.3571004},
            {x:3972, y:247.871470733333},
            {x:4002, y:238.037545333334},
            {x:4032, y:244.845647533334},
            {x:4062, y:252.899676933333},
            {x:4092, y:244.9049774},
            {x:4122, y:246.670040933333},
            {x:4152, y:245.527941},
            {x:4182, y:241.6121698},
            {x:4212, y:249.191560266667},
            {x:4242, y:246.877695466667},
            {x:4272, y:250.645142},
            {x:4302, y:288.586591733333},
            {x:4332, y:327.432821933333},
            {x:4362, y:293.837284933333},
            {x:4392, y:285.679428266667},
            {x:4422, y:294.504745933333},
            {x:4452, y:292.546860333333},
            {x:4482, y:276.468466466667},
            {x:4512, y:262.229298466667},
            {x:4542, y:251.6240848},
            {x:4572, y:249.651366733333},
            {x:4602, y:250.971456266667},
            {x:4632, y:291.834901933333},
            {x:4662, y:321.870646933333},
            {x:4692, y:305.273116733333},
            {x:4722, y:295.572683533333},
            {x:4752, y:288.171282666666},
            {x:4782, y:273.0718316},
            {x:4812, y:270.031175933333},
            {x:4842, y:302.143466266667},
            {x:4872, y:291.078446133333},
            {x:4902, y:290.3813202},
            {x:4932, y:305.673593333333},
            {x:4962, y:286.5100464},
            {x:4992, y:272.003894},
            {x:5022, y:310.256825533333},
            {x:5052, y:316.797943333333},
            {x:5082, y:303.092744133333},
            {x:5112, y:313.4309734},
            {x:5142, y:298.227695066666},
            {x:5172, y:284.9526374},
            {x:5202, y:273.4278108},
            {x:5232, y:270.431652533334},
            {x:5262, y:282.787097266666},
            {x:5292, y:287.518654133333},
            {x:5322, y:345.394939066667},
            {x:5352, y:314.602738266666},
            {x:5382, y:297.9013808},
            {x:5412, y:304.902305066667},
            {x:5442, y:282.935421933334},
            
          ],
          color: DataVizPalette.color3,
          lineOptions: {
            lineBorderWidth: '4',
          },
          onLineClick: () => console.log('From_Legacy_to_O365'),
        },
        {
          legend: '地面扭矩',
          data: [
            {x:3732, y:30.5727559571715},
{x:3762, y:30.6151994959596},
{x:3792, y:30.7923874722367},
{x:3822, y:31.0597368165585},
{x:3852, y:31.3726644594805},
{x:3882, y:31.6118012916883},
{x:3912, y:31.9005919364502},
{x:3942, y:32.1431969025108},
{x:3972, y:32.3648051755844},
{x:4002, y:32.5744843990909},
{x:4032, y:32.821630037013},
{x:4062, y:33.1448064851948},
{x:4092, y:33.4453598187013},
{x:4122, y:33.610800763723},
{x:4152, y:33.6506627739827},
{x:4182, y:33.6336822269697},
{x:4212, y:33.603261682684},
{x:4242, y:33.5546079922511},
{x:4272, y:33.6496469943723},
{x:4302, y:33.9798771414286},
{x:4332, y:34.3935108189611},
{x:4362, y:34.7387604125108},
{x:4392, y:34.9889847042424},
{x:4422, y:35.2265910168831},
{x:4452, y:35.4594550674892},
{x:4482, y:35.652476679697},
{x:4512, y:35.8299915060606},
{x:4542, y:36.1262938312554},
{x:4572, y:36.4065374441125},
{x:4602, y:36.7487475275758},
{x:4632, y:37.1450209639827},
{x:4662, y:37.7244517944156},
{x:4692, y:38.2515572532035},
{x:4722, y:38.6139478830303},
{x:4752, y:38.7209589928138},
{x:4782, y:38.7562666309091},
{x:4812, y:38.6824572269264},
{x:4842, y:38.7785491951948},
{x:4872, y:38.8563786595238},
{x:4902, y:39.1884720477922},
{x:4932, y:39.48526562671},
{x:4962, y:39.7316303473593},
{x:4992, y:39.9297347719914},
{x:5022, y:40.2535981925109},
{x:5052, y:40.6101701079221},
{x:5082, y:41.0122505156277},
{x:5112, y:41.2999353502164},
{x:5142, y:41.5926266669697},
{x:5172, y:41.8991729044589},
{x:5202, y:42.0181248069264},
{x:5232, y:42.1303048453247},
{x:5262, y:42.3788342138528},
{x:5292, y:42.6701104850216},
{x:5322, y:42.9200490275758},
{x:5352, y:43.1662767451948},
{x:5382, y:43.4691826164502},
{x:5412, y:43.7178235445888},
{x:5442, y:43.7548906930303},

            
          ],
          color: DataVizPalette.color4,
          lineOptions: {
            lineBorderWidth: '4',
          },
        },
       
      ],
    };

    const rootStyle = { width: `${this.state.width}px`, height: `${this.state.height}px` };

    const style = {
      display: 'flex',
      flexDirection: 'row',
    };

    const mainColumnStyle = {
      width: '80%',
      background: '#f0f0f0', // 灰色背景，用于区分两列
      padding: '20px', // 添加一些内边距
    };
  
    const sideColumnStyle = {
      width: '20%',
      background: '#e0e0e0', // 深一点的灰色背景，用于区分两列
      padding: '20px', // 添加一些内边距
    }; 

    return (
      <>
        <div style={style}>
        <div style={mainColumnStyle}>
       
        {this.state.showAxisTitles && (
          <div style={rootStyle}>
            <LineChart
              culture={window.navigator.language}
              data={data}
              legendsOverflowText={'Overflow Items'}
              yMinValue={200}
              yMaxValue={301}
              height={this.state.height}
              width={this.state.width}
              xAxisTickCount={10}
              allowMultipleShapesForPoints={this.state.allowMultipleShapes}
              enablePerfOptimization={true}
              yAxisTitle={this.state.showAxisTitles ? '值' : undefined}
              xAxisTitle={this.state.showAxisTitles ? '井深' : undefined}
            />
          </div>
        )}
        {!this.state.showAxisTitles && (
          <div style={rootStyle}>
            <LineChart
              culture={window.navigator.language}
              data={data}
              legendsOverflowText={'Overflow Items'}
              yMinValue={200}
              yMaxValue={301}
              height={this.state.height}
              width={this.state.width}
              xAxisTickCount={10}
              allowMultipleShapesForPoints={this.state.allowMultipleShapes}
              enablePerfOptimization={true}
            />
          </div>
        )}
        </div>
      <div style={sideColumnStyle}>
      <ul className="divide-y divide-gray-200">
          <li className="flex items-center justify-between py-3">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label htmlFor="checkbox1">大钩载荷</label>
          </li>
          <li className="flex items-center justify-between py-3">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label htmlFor="checkbox2">地面扭矩</label>
          </li>
          {/* Repeat for items 3 to 10 */}
        </ul>
      </div>
    </div>
      </>
    );
  }
}

export default function Page() {
  const LineChartBasicExampleWrapper = () => <ThemeProvider><LineChartBasicExample /></ThemeProvider>;
  return (
    <LineChartBasicExampleWrapper />
  );
}
