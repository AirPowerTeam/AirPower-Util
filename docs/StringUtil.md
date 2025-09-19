[返回文档首页](../README.md)

# StringUtil 字符串处理工具类

StringUtil 是一个提供字符串处理功能的工具类，特别针对 Unicode 字符进行了优化处理。

## 常量

- `SINGLE_POINT_LENGTH`: 单码元长度 (65535)

## 类方法

### getLength(str)

获取字符串可视化长度

**参数:**

- `str` (string): 输入字符串

**返回值:**

- (number): 字符串的可视化长度（考虑 Unicode 字符）

### get(str, index)

获取字符串可视化位置的内容

**参数:**

- `str` (string): 输入字符串
- `index` (number): 所在位置（可视化位置）

**返回值:**

- (string): 指定位置的字符

**异常:**

- 如果 index 为负数或超出范围，会抛出错误

### slice(str, from, to)

字符串可视化截取

**参数:**

- `str` (string): 输入字符串
- `from` (number, 可选): 截取开始位置，默认为 0
- `to` (number, 可选): 截取结束位置，默认为字符串长度-1

**返回值:**

- (string): 截取后的字符串

**异常:**

- 如果 from 或 to 为负数或超出范围，会抛出错误

## 使用示例

```typescript
import {StringUtil} from '@airpower/util'

// 获取字符串长度（支持 Unicode）
const length = StringUtil.getLength('Hello 世界')

// 获取指定位置的字符（支持 Unicode）
const char = StringUtil.get('Hello 世界', 6) // 获取"世"字符

// 截取字符串（支持 Unicode）
const sliced = StringUtil.slice('Hello 世界', 0, 5) // 获取"Hello"

// 注意：这些方法与普通字符串方法不同，它们正确处理了 Unicode 字符
// 比如 emoji 或其他需要两个码元表示的字符
```