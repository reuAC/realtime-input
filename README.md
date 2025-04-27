# realtime-input

**基于 Express 和 Socket.IO 的实时输入服务。**

---

## 目录

- [前置条件](#前置条件)
- [安装](#安装)
- [使用方法](#使用方法)
  - [开发模式](#开发模式)
  - [生产模式](#生产模式)
- [配置说明](#配置说明)
- [脚本命令](#脚本命令)
- [许可证](#许可证)

---

## 前置条件

开始之前，请确保已在本地安装以下软件：

- [Node.js](https://nodejs.org/) v14.0.0 或更高版本
- [npm](https://www.npmjs.com/)（随 Node.js 一同安装）

## 安装

1. **克隆仓库**

   ```bash
   git clone https://github.com/reuAC/realtime-input.git
   cd realtime-input
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

   此命令将安装生产依赖（`express`、`socket.io`）和开发依赖（`nodemon`）。

## 使用方法

### 开发模式

使用 `nodemon` 自动监听文件更改并重启服务：

```bash
npm run dev
```

服务默认监听端口 **3000**，启动后可在浏览器或 Socket.IO 客户端中访问：

```
http://localhost:3000
```

### 生产模式

以生产模式启动服务：

```bash
npm start
```

## 配置说明

- **入口文件**：`main.js`
- **默认端口**：3000（可在 `main.js` 中修改）
- **主要依赖**：
  - `express`：Web 应用框架
  - `socket.io`：WebSocket 通信库
- **开发依赖**：
  - `nodemon`：开发时自动重启工具

## 脚本命令

| 命令            | 执行     | 说明              |
| ------------- | ------ | --------------- |
| `npm start`   | 启动生产模式 | 在生产环境下运行服务      |
| `npm run dev` | 启动开发模式 | 使用 nodemon 实时重载 |

## 许可证

本项目采用 **MIT 许可证**，详情请见 [LICENSE](LICENSE)。

