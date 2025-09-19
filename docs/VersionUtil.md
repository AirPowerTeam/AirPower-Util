[返回文档首页](../README.md)

# VersionUtil 版本工具类

VersionUtil 是一个提供版本号处理功能的工具类，可以解析和格式化版本号。

## 常量

- `VERSION_LENGTH`: 版本号长度 (2)
- `VERSION_SEPARATOR`: 版本号分隔符 ('.')

## 类方法

### parseVersion(version, separator, padding)

获取版本号数字

**参数:**

- `version` (string): 版本号字符串
- `separator` (string, 可选): 分隔符，默认为 '.'
- `padding` (number, 可选): 填充位数，默认为 2

**返回值:**

- (number): 版本号对应的数字

### formatVersion(version, separator, padding)

解析版本号数字

**参数:**

- `version` (number): 版本号数字
- `separator` (string, 可选): 分隔符，默认为 '.'
- `padding` (number, 可选): 填充位数，默认为 2

**返回值:**

- (string): 格式化后的版本号字符串

## 使用示例

```typescript
import {VersionUtil} from '@airpower/util'

// 将版本号字符串转换为数字
const versionNumber = VersionUtil.parseVersion('1.2.3')
// 结果: 10203

// 将版本号数字转换为字符串
const versionString = VersionUtil.formatVersion(10203)
// 结果: "1.2.3"

// 自定义分隔符和填充位数
const customVersionNumber = VersionUtil.parseVersion('1-2-3', '-', 3)
// 结果: 1002003

const customVersionString = VersionUtil.formatVersion(1002003, '-', 3)
// 结果: "1-2-3"
```