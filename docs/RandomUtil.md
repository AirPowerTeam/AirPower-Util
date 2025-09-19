[返回文档首页](../README.md)

# RandomUtil 随机数据生成工具类

RandomUtil 是一个提供各种随机数据生成功能的工具类，可以生成随机数字、字母、颜色等。

## 常量

- `STRING_OF_NUMBER`: 数字字符集合 '0123456789'
- `STRING_OF_LOWER_CHAR`: 小写字母集合 'abcdefghijklmnopqrstuvwxyz'
- `STRING_OF_UPPER_CHAR`: 大写字母集合 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
- `DEFAULT_LENGTH`: 默认长度 (32)
- `DECIMALISM`: 十进制基数 (10)

## 类方法

### getRandNumber(min, max)

指定范围内获取随机整数

**参数:**

- `min` (number): 最小值
- `max` (number): 最大值

**返回值:**

- (number): 范围内的随机整数

### getRandNumberString(length)

获取随机数字字符串

**参数:**

- `length` (number, 可选): 长度，默认为 6 位

**返回值:**

- (string): 随机数字字符串

### getRandCharString(length, isUpper)

获取随机字母字符串

**参数:**

- `length` (number, 可选): 长度，默认为 32
- `isUpper` (boolean, 可选): 是否大写，默认为 false（小写）

**返回值:**

- (string): 随机字母字符串

### getRandMixedCharString(length)

获取大小写混合随机字母字符串

**参数:**

- `length` (number, 可选): 长度，默认为 32

**返回值:**

- (string): 大小写混合随机字母字符串

### getRandNumberAndCharString(length, isUpper)

获取字母加数字随机字符串

**参数:**

- `length` (number, 可选): 长度，默认为 32
- `isUpper` (boolean, 可选): 是否大写，默认为 false（小写）

**返回值:**

- (string): 字母加数字随机字符串

### getRandNumberAndMixedCharString(length)

获取大小写字母加数字随机字符串

**参数:**

- `length` (number, 可选): 长度，默认为 32

**返回值:**

- (string): 大小写字母加数字随机字符串

### getRandColor()

获取随机颜色

**返回值:**

- (string): 随机颜色值，格式为 '#xxxxxx'

## 使用示例

```typescript
import {RandomUtil} from '@airpower/util'

// 生成指定范围的随机数
const randNumber = RandomUtil.getRandNumber(1, 100)

// 生成6位随机数字字符串
const randNumberString = RandomUtil.getRandNumberString()

// 生成8位随机小写字母字符串
const randCharString = RandomUtil.getRandCharString(8)

// 生成16位大写字母字符串
const randUpperCharString = RandomUtil.getRandCharString(16, true)

// 生成32位大小写混合字母字符串
const randMixedCharString = RandomUtil.getRandMixedCharString()

// 生成随机颜色
const randColor = RandomUtil.getRandColor()
```