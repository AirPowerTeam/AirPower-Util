# AirPower-Util 项目说明

## 项目概述

**AirPower-Util** 是一个基于 TypeScript 的开发工具包，内置了日常开发中的常用工具。该项目提供了一系列实用的工具类，涵盖了加密解密、日期时间处理、数据脱敏、文件操作、随机数生成、字符串处理、数据验证和版本管理等功能。

## 项目结构

```
AirPower-Util/
├── assets/                 # 项目资源文件
├── docs/                   # 项目文档
├── src/                    # 源代码目录
│   ├── crypto/             # 加解密工具模块
│   ├── datetime/           # 日期时间工具模块
│   ├── desensitize/        # 数据脱敏工具模块
│   ├── file/               # 文件操作工具模块
│   ├── random/             # 随机数工具模块
│   ├── string/             # 字符串处理工具模块
│   ├── validate/           # 数据验证工具模块
│   ├── version/            # 版本管理工具模块
│   └── index.ts            # 主入口文件
├── dist/                   # 构建输出目录
├── .gitignore              # Git 忽略配置
├── eslint.config.mjs       # ESLint 配置文件
├── LICENSE                 # 许可证文件
├── package.json            # 项目配置文件
├── README.md               # 项目说明文档
├── tsconfig.json           # TypeScript 配置文件
└── vite.config.ts          # Vite 构建配置文件
```

## 技术栈

- **语言**: TypeScript
- **构建工具**: Vite
- **打包工具**: Rollup (通过 Vite)
- **代码规范**: ESLint
- **类型检查**: TypeScript
- **依赖管理**: npm/yarn

## 核心功能模块

### 1. 加解密工具 (Crypto)
- AES 加解密（支持 CBC 模式）
- SHA1 和 MD5 散列摘要
- Base64 编码解码

### 2. 日期时间工具 (DateTime)
- 日期格式化（支持多种预定义格式）
- 时间戳转换（秒/毫秒）
- 友好时间显示（如"刚刚"、"X分钟前"等）

### 3. 数据脱敏工具 (Desensitize)
- 支持多种脱敏类型：手机号、身份证、银行卡、邮箱、姓名、地址、IP地址等
- 可自定义脱敏规则

### 4. 文件工具 (File)
- 文件操作相关工具函数

### 5. 随机数工具 (Random)
- 随机数生成相关工具函数

### 6. 字符串工具 (String)
- 字符串处理相关工具函数

### 7. 数据验证工具 (Validate)
- 数据验证相关工具函数

### 8. 版本管理工具 (Version)
- 版本号比较和处理相关工具函数

## 依赖关系

- **@airpower/enum**: 项目内部枚举库
- **crypto-js**: 用于加密解密功能
- **@types/crypto-js**: crypto-js 类型定义

## 构建和运行

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 构建项目
```bash
npm run build
# 或
yarn build
```

### 代码检查
```bash
npm run lint
# 或
yarn lint
```

## 开发约定

- 使用 TypeScript 编写，遵循严格的类型检查
- 使用 ESLint 进行代码规范检查
- 采用模块化设计，每个功能模块独立组织
- 使用 JSDoc 注释进行文档说明
- 遵循 MIT 许可证

## 使用方式

安装：
```bash
npm install @airpower/util
# 或
yarn add @airpower/util
```

使用：
```typescript
import { CryptoUtil, DateTimeUtil, DesensitizeUtil } from '@airpower/util'

// 示例：AES 加密
const encrypted = CryptoUtil.aesEncrypt('data', 'key')

// 示例：格式化当前时间
const now = DateTimeUtil.formatFromDate(new Date(), 'YYYY-MM-DD HH:mm:ss')

// 示例：手机号脱敏
const maskedPhone = DesensitizeUtil.desensitize('13812345678', DesensitizeType.MOBILE)
```

## 项目特点

1. **模块化设计**: 功能按模块划分，便于维护和扩展
2. **类型安全**: 完整的 TypeScript 类型定义
3. **轻量级**: 专注于常用工具函数，不包含冗余功能
4. **易用性**: 简洁的 API 设计，易于集成到现有项目中
5. **文档完善**: 提供详细的文档说明和使用示例

## 版本发布自动化流程

- 使用 `eslint --fix` 修复项目中可能出现的问题
- 更新 `package.json` 中的版本号
- 使用 `yarn build` 构建项目
- 使用 `npm publish` 发布包
- 提交本地变更的代码到 Github
- 创建 `git tag` 并推送到Github
