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
          color: DataVizPalette.color4,
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

    const data2: IChartProps = {
      chartTitle: '折线图',
      lineChartData: [
        {
          legend: '钻压',
          data: [
            {x:3732, y:37456.5333333333},
            {x:3762, y:28225.75},
            {x:3792, y:19232.0333333333},
            {x:3822, y:27247.85},
            {x:3852, y:25395.7666666667},
            {x:3882, y:24328.9666666667},
            {x:3912, y:22387.9833333333},
            {x:3942, y:29737.05},
            {x:3972, y:25114.25},
            {x:4002, y:34848.8},
            {x:4032, y:33055.9833333333},
            {x:4062, y:23691.85},
            {x:4092, y:30981.65},
            {x:4122, y:24936.45},
            {x:4152, y:32641.1166666667},
            {x:4182, y:33426.4},
            {x:4212, y:24136.35},
            {x:4242, y:32907.8166666667},
            {x:4272, y:30048.2},
            {x:4302, y:13379.45},
            {x:4332, y:15335.25},
            {x:4362, y:44361.1},
            {x:4392, y:43590.6333333333},
            {x:4422, y:37782.5},
            {x:4452, y:41738.55},
            {x:4482, y:37678.7833333333},
            {x:4512, y:34404.3},
            {x:4542, y:30566.7833333333},
            {x:4572, y:26195.8666666667},
            {x:4602, y:23973.3666666667},
            {x:4632, y:15024.1},
            {x:4662, y:25351.3166666667},
            {x:4692, y:33485.6666666667},
            {x:4722, y:34671},
            {x:4752, y:40612.4833333333},
            {x:4782, y:32389.2333333333},
            {x:4812, y:25647.65},
            {x:4842, y:14149.9166666667},
            {x:4872, y:25054.9833333333},
            {x:4902, y:26299.5833333333},
            {x:4932, y:20728.5166666667},
            {x:4962, y:27040.4166666667},
            {x:4992, y:15231.5333333333},
            {x:5022, y:16520.5833333333},
            {x:5052, y:17128.0666666667},
            {x:5082, y:29025.85},
            {x:5112, y:34745.0833333333},
            {x:5142, y:56392.2333333333},
            {x:5172, y:52702.8833333333},
            {x:5202, y:30537.15},
            {x:5232, y:34374.6666666667},
            {x:5262, y:19409.8333333333},
            {x:5292, y:17765.1833333333},
            {x:5322, y:24254.8833333333},
            {x:5352, y:45664.9666666667},
            {x:5382, y:49976.6166666667},
            {x:5412, y:53532.6166666667},
            {x:5442, y:41427.4},
            
          ],
          color: DataVizPalette.color3,
          lineOptions: {
            lineBorderWidth: '4',
          },
          onLineClick: () => console.log('From_Legacy_to_O365'),
        },
        {
          legend: '钻头扭矩',
          data: [
            {x:3732, y:10600},
            {x:3762, y:10600},
            {x:3792, y:10600},
            {x:3822, y:10600},
            {x:3852, y:10600},
            {x:3882, y:10600},
            {x:3912, y:10600},
            {x:3942, y:10600},
            {x:3972, y:10600},
            {x:4002, y:10600},
            {x:4032, y:10600},
            {x:4062, y:10600},
            {x:4092, y:10600},
            {x:4122, y:10600},
            {x:4152, y:10600},
            {x:4182, y:10200},
            {x:4212, y:10200},
            {x:4242, y:10200},
            {x:4272, y:10200},
            {x:4302, y:10200},
            {x:4332, y:10200},
            {x:4362, y:10200},
            {x:4392, y:10200},
            {x:4422, y:10200},
            {x:4452, y:10200},
            {x:4482, y:10200},
            {x:4512, y:10200},
            {x:4542, y:10200},
            {x:4572, y:10200},
            {x:4602, y:10200},
            {x:4632, y:10200},
            {x:4662, y:10200},
            {x:4692, y:10200},
            {x:4722, y:10000},
            {x:4752, y:10000},
            {x:4782, y:10000},
            {x:4812, y:10000},
            {x:4842, y:10000},
            {x:4872, y:10000},
            {x:4902, y:10000},
            {x:4932, y:10000},
            {x:4962, y:10000},
            {x:4992, y:10000},
            {x:5022, y:10000},
            {x:5052, y:10000},
            {x:5082, y:10000},
            {x:5112, y:10000},
            {x:5142, y:10000},
            {x:5172, y:10000},
            {x:5202, y:10000},
            {x:5232, y:10000},
            {x:5262, y:10000},
            {x:5292, y:10000},
            {x:5322, y:10000},
            {x:5352, y:10000},
            {x:5382, y:10000},
            {x:5412, y:10000},
            {x:5442, y:10000},                  
          ],
          color: DataVizPalette.color4,
          lineOptions: {
            lineBorderWidth: '4',
          },
        },
        {
          legend: "转速",
          data:
          [
            {x:3732, y:70.8666666666667},
            {x:3762, y:81.9333333333333},
            {x:3792, y:103.066666666667},
            {x:3822, y:112.766666666667},
            {x:3852, y:120.033333333333},
            {x:3882, y:120.266666666667},
            {x:3912, y:120.9},
            {x:3942, y:115.366666666667},
            {x:3972, y:106.6},
            {x:4002, y:120.7},
            {x:4032, y:120.766666666667},
            {x:4062, y:120.7},
            {x:4092, y:121.166666666667},
            {x:4122, y:121.666666666667},
            {x:4152, y:120.666666666667},
            {x:4182, y:119.933333333333},
            {x:4212, y:120.266666666667},
            {x:4242, y:118.933333333333},
            {x:4272, y:118.933333333333},
            {x:4302, y:119.4},
            {x:4332, y:120.8},
            {x:4362, y:122.366666666667},
            {x:4392, y:120.966666666667},
            {x:4422, y:120.566666666667},
            {x:4452, y:120},
            {x:4482, y:120},
            {x:4512, y:119.6},
            {x:4542, y:119.433333333333},
            {x:4572, y:119.366666666667},
            {x:4602, y:120.033333333333},
            {x:4632, y:119.233333333333},
            {x:4662, y:121.333333333333},
            {x:4692, y:121.766666666667},
            {x:4722, y:121.533333333333},
            {x:4752, y:119.266666666667},
            {x:4782, y:119.9},
            {x:4812, y:120.466666666667},
            {x:4842, y:120.533333333333},
            {x:4872, y:120.1},
            {x:4902, y:120.7},
            {x:4932, y:121.166666666667},
            {x:4962, y:121.4},
            {x:4992, y:120.533333333333},
            {x:5022, y:121.333333333333},
            {x:5052, y:122.3},
            {x:5082, y:121.833333333333},
            {x:5112, y:121.266666666667},
            {x:5142, y:121.166666666667},
            {x:5172, y:120.5},
            {x:5202, y:120.666666666667},
            {x:5232, y:121.133333333333},
            {x:5262, y:121.3},
            {x:5292, y:121.466666666667},
            {x:5322, y:123.333333333333},
            {x:5352, y:123.7},
            {x:5382, y:121.7},
            {x:5412, y:120.3},
            {x:5442, y:121.266666666667},

          ],
          color: DataVizPalette.color5

        },
        {
          legend: "管柱运动速度",
          data:
          [
            {x:3732, y:0.00745990740740741},
            {x:3762, y:0.0090875925925926},
            {x:3792, y:0.0100631481481482},
            {x:3822, y:0.0101855555555556},
            {x:3852, y:0.0101051851851852},
            {x:3882, y:0.00997935185185185},
            {x:3912, y:0.00964046296296296},
            {x:3942, y:0.00840888888888889},
            {x:3972, y:0.00698092592592593},
            {x:4002, y:0.00946361111111111},
            {x:4032, y:0.00949666666666667},
            {x:4062, y:0.00937777777777778},
            {x:4092, y:0.00904453703703704},
            {x:4122, y:0.0108967592592593},
            {x:4152, y:0.0101687037037037},
            {x:4182, y:0.00942231481481481},
            {x:4212, y:0.0095826851},
            {x:4242, y:0.00734731486666667},
            {x:4272, y:0.00717814816666667},
            {x:4302, y:0.00750490743333333},
            {x:4332, y:0.00742000003333333},
            {x:4362, y:0.0070882408},
            {x:4392, y:0.00755768523333333},
            {x:4422, y:0.00721805553333333},
            {x:4452, y:0.0067810185},
            {x:4482, y:0.0076068518},
            {x:4512, y:0.00742620366666667},
            {x:4542, y:0.0079238889},
            {x:4572, y:0.00750555553333333},
            {x:4602, y:0.00805046293333333},
            {x:4632, y:0.00784037026666667},
            {x:4662, y:0.00752407413333333},
            {x:4692, y:0.00777611106666667},
            {x:4722, y:0.00782175923333333},
            {x:4752, y:0.00753148146666667},
            {x:4782, y:0.00693046296666667},
            {x:4812, y:0.00767574073333333},
            {x:4842, y:0.00744250003333333},
            {x:4872, y:0.0071433333},
            {x:4902, y:0.00770490736666667},
            {x:4932, y:0.00786564813333334},
            {x:4962, y:0.00718259266666667},
            {x:4992, y:0.00681435176666667},
            {x:5022, y:0.0068792593},
            {x:5052, y:0.00705175923333333},
            {x:5082, y:0.00714611103333333},
            {x:5112, y:0.0071108333},
            {x:5142, y:0.00808833323333333},
            {x:5172, y:0.0091703704},
            {x:5202, y:0.0072324999},
            {x:5232, y:0.0075967593},
            {x:5262, y:0.00737203706666667},
            {x:5292, y:0.00687907406666667},
            {x:5322, y:0.0070899074},
            {x:5352, y:0.00679962966666667},
            {x:5382, y:0.00668888886666667},
            {x:5412, y:0.00667490736666667},
            {x:5442, y:0.0068687037},

          ],
          color: DataVizPalette.color6
        },
        {
          legend: "排量",
          data: [
            {x:3732, y:0.037175},
            {x:3762, y:0.0375155555555555},
            {x:3792, y:0.0361427777777778},
            {x:3822, y:0.0390094444444445},
            {x:3852, y:0.0402955555555556},
            {x:3882, y:0.0402961111111111},
            {x:3912, y:0.0405505555555556},
            {x:3942, y:0.0384988888888889},
            {x:3972, y:0.0346811111111111},
            {x:4002, y:0.04097},
            {x:4032, y:0.0408261111111111},
            {x:4062, y:0.0407216666666667},
            {x:4092, y:0.0407405555555556},
            {x:4122, y:0.0407916666666666},
            {x:4152, y:0.0427688888888889},
            {x:4182, y:0.0413688888888889},
            {x:4212, y:0.0403477777555555},
            {x:4242, y:0.0403594444},
            {x:4272, y:0.0402499999333333},
            {x:4302, y:0.0408583333},
            {x:4332, y:0.0408022222666667},
            {x:4362, y:0.0407994444333333},
            {x:4392, y:0.0407616666666667},
            {x:4422, y:0.0405783332},
            {x:4452, y:0.0403488889},
            {x:4482, y:0.0405483333333333},
            {x:4512, y:0.0407938889333333},
            {x:4542, y:0.0406177777},
            {x:4572, y:0.0404666666},
            {x:4602, y:0.0405105555333333},
            {x:4632, y:0.0405105555333333},
            {x:4662, y:0.0403444445},
            {x:4692, y:0.0402405554333333},
            {x:4722, y:0.0402116667},
            {x:4752, y:0.0399866666333333},
            {x:4782, y:0.0393983333333333},
            {x:4812, y:0.0403133333},
            {x:4842, y:0.0402516667},
            {x:4872, y:0.039896111},
            {x:4902, y:0.0402088889},
            {x:4932, y:0.0401666666666667},
            {x:4962, y:0.0401811111},
            {x:4992, y:0.0401261111},
            {x:5022, y:0.0400527777666667},
            {x:5052, y:0.0401844444333334},
            {x:5082, y:0.0401166667666667},
            {x:5112, y:0.0399555556333334},
            {x:5142, y:0.0401077777},
            {x:5172, y:0.039795},
            {x:5202, y:0.0398633333333333},
            {x:5232, y:0.0395822222},
            {x:5262, y:0.0396061111},
            {x:5292, y:0.0395722221666667},
            {x:5322, y:0.0399233334},
            {x:5352, y:0.0393722222333333},
            {x:5382, y:0.0390211111333333},
            {x:5412, y:0.0389183333333333},
            {x:5442, y:0.0386900000333333},

          ],
          color: DataVizPalette.color7
        },
        {
          legend: "钻井液密度",
          data: [
            {x:3732, y:1125},
            {x:3762, y:1125},
            {x:3792, y:1125},
            {x:3822, y:1125},
            {x:3852, y:1125},
            {x:3882, y:1125},
            {x:3912, y:1125},
            {x:3942, y:1125},
            {x:3972, y:1125},
            {x:4002, y:1125},
            {x:4032, y:1125},
            {x:4062, y:1125},
            {x:4092, y:1125},
            {x:4122, y:1125},
            {x:4152, y:1125},
            {x:4182, y:1125},
            {x:4212, y:1104},
            {x:4242, y:1095},
            {x:4272, y:1095},
            {x:4302, y:1095},
            {x:4332, y:1095},
            {x:4362, y:1095},
            {x:4392, y:1095},
            {x:4422, y:1095},
            {x:4452, y:1095},
            {x:4482, y:1095},
            {x:4512, y:1095},
            {x:4542, y:1095},
            {x:4572, y:1095},
            {x:4602, y:1095},
            {x:4632, y:1095},
            {x:4662, y:1095},
            {x:4692, y:1095},
            {x:4722, y:1095},
            {x:4752, y:1095},
            {x:4782, y:1095},
            {x:4812, y:1095},
            {x:4842, y:1095},
            {x:4872, y:1095},
            {x:4902, y:1095},
            {x:4932, y:1095},
            {x:4962, y:1095},
            {x:4992, y:1095},
            {x:5022, y:1095},
            {x:5052, y:1095},
            {x:5082, y:1095},
            {x:5112, y:1095},
            {x:5142, y:1095},
            {x:5172, y:1095},
            {x:5202, y:1095},
            {x:5232, y:1095},
            {x:5262, y:1095},
            {x:5292, y:1095},
            {x:5322, y:1095},
            {x:5352, y:1095},
            {x:5382, y:1095},
            {x:5412, y:1095},
            {x:5442, y:1095},

          ],
          color: DataVizPalette.color8
        }
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

        <hr/>

        {this.state.showAxisTitles && (
          <div style={rootStyle}>
            <LineChart
              culture={window.navigator.language}
              data={data2}
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
