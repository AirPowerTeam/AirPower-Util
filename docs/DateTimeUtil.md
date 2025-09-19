[返回文档首页](../README.md)

# DateTimeUtil 时间日期工具类

DateTimeUtil 是一个提供时间日期处理功能的工具类，包括时间格式化、时间戳转换、友好时间显示等功能。

## 常量

- `SECOND_PER_MINUTE`: 每分钟的秒数 (60)
- `SECOND_PER_HOUR`: 每小时的秒数 (3600)
- `MILLISECONDS_PER_SECOND`: 每秒的毫秒数 (1000)
- `HOUR_PER_DAY`: 每天小时数 (24)
- `DAY_PER_MONTH`: 每月天数 (30)
- `MONTH_PER_YEAR`: 每年月份 (12)
- `DAY_PER_YEAR`: 每年天数 (365)
- `SECOND_PER_DAY`: 每天秒数 (86400)
- `DAY_PER_WEEK`: 每周天数 (7)
- `WEEK_PER_YEAR`: 每年平均周数 (52)
- `WEEK_PER_MONTH`: 每月平均周数 (4)
- `SECONDS_PER_DAY`: 每天秒数 (86400)

## 类方法

### sleep(milliSeconds)

异步等待指定毫秒数

**参数:**

- `milliSeconds` (number): 等待的毫秒数

**返回值:**

- (Promise<void>): Promise 对象

### getUnixTimeStamps(date)

格式化到 Unix 秒时间戳

**参数:**

- `date` (Date | string, 可选): Date 对象或时间字符串，默认为当前时间

**返回值:**

- (number): Unix 秒时间戳

### getMilliTimeStamps(date)

格式化到毫秒时间戳

**参数:**

- `date` (Date | string, 可选): Date 对象或时间字符串，默认为当前时间

**返回值:**

- (number): 毫秒时间戳

### formatFromSecond(second, formatString)

从秒时间戳格式化时间

**参数:**

- `second` (number): 秒时间戳
- `formatString` (string): 格式化模板

**返回值:**

- (string): 格式化后的时间字符串

### formatFromMilliSecond(milliSecond, formatString)

从毫秒时间戳格式化时间

**参数:**

- `milliSecond` (number): 毫秒时间戳
- `formatString` (string): 格式化模板

**返回值:**

- (string): 格式化后的时间字符串

### formatFromDate(date, formatString)

从 Date 对象或字符串格式化时间

**参数:**

- `date` (Date | string): Date 对象或时间字符串
- `formatString` (string): 格式化模板

**返回值:**

- (string): 格式化后的时间字符串

### getFriendlyDateTime(date)

格式化到友好字符串显示

**参数:**

- `date` (Date | string | number): Date 对象、时间字符串或时间戳

**返回值:**

- (string): 友好显示的时间字符串，如"刚刚"、"5分钟前"等

## 使用示例

```typescript
import {DateTimeUtil, DateTimeFormatter} from '@airpower/util'

// 获取当前时间戳
const timestamp = DateTimeUtil.getUnixTimeStamps()

// 从时间戳格式化时间
const formatted = DateTimeUtil.formatFromSecond(timestamp, 'YYYY-MM-DD HH:mm:ss')

// 使用预定义格式化器
const formatted2 = DateTimeFormatter.FULL_DATE_TIME.format()

// 获取友好时间显示
const friendly = DateTimeUtil.getFriendlyDateTime(new Date())

// 等待1秒
await DateTimeUtil.sleep(1000)
```