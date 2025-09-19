[返回文档首页](../README.md)

# DateTimeFormatter 时间格式化器

DateTimeFormatter 是一个继承自 Enum 的时间格式化器类，提供了预定义的时间格式化模板。

## 预定义格式

- `FULL_DATE_TIME`: 'YYYY-MM-DD HH:mm:ss' - 完整日期时间格式
- `TIMESTAMP`: 'x' - 毫秒时间戳格式
- `SHORT_DATE_TIME`: 'MM-DD HH:mm' - 短日期时间格式
- `FULL_DATE`: 'YYYY-MM-DD' - 完整日期格式
- `FULL_TIME`: 'HH:mm:ss' - 完整时间格式
- `YEAR`: 'YYYY' - 年份格式
- `MONTH`: 'MM' - 月份格式
- `DAY`: 'DD' - 日期格式
- `HOUR`: 'HH' - 小时格式
- `MINUTE`: 'mm' - 分钟格式
- `SECOND`: 'ss' - 秒格式

## 实例方法

### formatMilliSecond(milliSecond)

使用这个模板格式化毫秒时间戳

**参数:**

- `milliSecond` (number): 毫秒时间戳

**返回值:**

- (string): 格式化后的时间字符串

### formatSecond(second)

使用这个模板格式化秒时间戳

**参数:**

- `second` (number): 秒时间戳

**返回值:**

- (string): 格式化后的时间字符串

### formatDate(date)

使用这个模板格式化日期

**参数:**

- `date` (Date): 日期对象

**返回值:**

- (string): 格式化后的时间字符串

### format()

使用这个模板格式化当前时间

**返回值:**

- (string): 格式化后的时间字符串