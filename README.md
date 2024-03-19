# loong
Rapid application development and microservices framework with Dapr, React, Umi, TypeScript, ABP, MySQL, Node.js and etc.

* [dapr](https://dapr.io/) - v1.13(latest)
* [tye](https://github.com/dotnet/tye) - public archive
* [Umi](https://umijs.org/) - 前端开发框架

Installation steps:
* Install Docker Desktop
* Install dapr with `winget install Dapr.CLI`
* run `dapr init`
* run `dapr --version` to check CLI and runtime versions (if successfully installed with docker supported)

---

* 安装[git](https://git-scm.com/downloads)
* 安装[nvm-windows](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12)
* 通过nvm安装LTS版本node
* 安装pnpm，使用windows powershell安装`iwr https://get.pnpm.io/install.ps1 -useb | iex`
* 进入web或前台目录，创建umi项目`pnpm dlx create-umi@latest`
* 选择Ant Design Pro
* 运行开发项目`pnpm dev`


[Demo 1](https://blog.logrocket.com/making-a-chat-app-with-dapr/)
`npm install -g wscat`

`npm install -g umi`

`umi g tailwindcss`

`pnpm add chart.js react-chartjs-2`

Use [https://www.codecat.ai/](https://www.codecat.ai/) to program with AI

Electron Plugin [https://www.npmjs.com/package/@liangskyli/umijs-plugin-electron](https://www.npmjs.com/package/@liangskyli/umijs-plugin-electron)
* `pnpm add @liangskyli/umijs-plugin-electron -D`
* Update .umirc.ts file
* `pnpm max electron init`
* 开发 `pnpm electron:dev`
* 打包 `umi build electron --win --x64`

Fluent UI 2 - @fluentui/fluent2-theme
* `pnpm add @fluentui/fluent2-theme`
* `pnpm add @fluentui/react`

React Charting
* `pnpm add @fluentui/react-components`
* `pnpm add @fluentui/react-charting`
