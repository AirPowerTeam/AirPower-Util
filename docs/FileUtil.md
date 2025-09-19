[返回文档首页](../README.md)

# FileUtil 文件工具类

FileUtil 是一个提供文件相关处理功能的工具类，主要用于文件大小的格式化显示。

## 常量

- `RADIX_FILE_SIZE`: 文件大小进制 (1024)
- `FILE_UNIT_LIST`: 文件单位列表 ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

## 类方法

### getFileSizeFriendly(size, fractionDigits)

字节数转可读文件大小

**参数:**

- `size` (number): 字节数
- `fractionDigits` (number, 可选): 小数位数，默认为 2

**返回值:**

- (string): 可读的文件大小，如 "1.25MB"

## 使用示例

```typescript
import {FileUtil} from '@airpower/util'

// 格式化文件大小
const fileSize1 = FileUtil.getFileSizeFriendly(1024)
// 结果: "1.00KB"

const fileSize2 = FileUtil.getFileSizeFriendly(1048576, 1)
// 结果: "1.0MB"

const fileSize3 = FileUtil.getFileSizeFriendly(0)
// 结果: "0B"
```