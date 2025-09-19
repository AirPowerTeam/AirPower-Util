[返回文档首页](../README.md)

# ValidateUtil 验证工具类

ValidateUtil 是一个提供各种数据验证功能的工具类，可以验证手机号、邮箱、身份证号等常见数据格式。

## 常量

- `DECIMALISM`: 十进制基数 (10)

## 类方法

### isTelephoneOrMobilePhone(phoneNumber)

验证是否为手机号或座机号

**参数:**

- `phoneNumber` (string): 电话号码

**返回值:**

- (boolean): 是否为有效的手机号或座机号

### isEmail(email)

验证是否为邮箱

**参数:**

- `email` (string): 邮箱地址

**返回值:**

- (boolean): 是否为有效的邮箱地址

### isMobilePhone(num)

验证是否为手机号

**参数:**

- `num` (string): 手机号码

**返回值:**

- (boolean): 是否为有效的手机号

### isTelephone(num)

验证是否为座机号

**参数:**

- `num` (string): 座机号码

**返回值:**

- (boolean): 是否为有效的座机号

### isChinese(str)

验证是否为纯汉字

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否为纯汉字字符串

### isOnlyLetter(str)

验证字符串是否只包含字母

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否只包含字母

### isOnlyNumberAndLetter(str)

验证字符串是否只包含数字和字母

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否只包含数字和字母

### isNumber(str)

验证字符串是否为数字（正负整数、小数和0）

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否为有效数字

### isInteger(str)

验证字符串是否为整数

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否为整数

### isNaturalNumber(str)

验证字符串是否为自然数（包括小数）

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否为自然数

### isNaturalInteger(str)

验证字符串是否为自然整数

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否为自然整数

### isChineseIdCard(str)

验证字符串是否为合法身份证

**参数:**

- `str` (string): 字符串

**返回值:**

- (boolean): 是否为合法身份证号

## 使用示例

```typescript
import {ValidateUtil} from '@airpower/util'

// 验证手机号
const isMobile = ValidateUtil.isMobilePhone('13812345678')

// 验证邮箱
const isEmail = ValidateUtil.isEmail('test@example.com')

// 验证身份证号
const isIdCard = ValidateUtil.isChineseIdCard('110101199001011234')

// 验证是否为纯汉字
const isChinese = ValidateUtil.isChinese('你好世界')

// 验证是否为数字
const isNumber = ValidateUtil.isNumber('-123.45')

// 验证是否为整数
const isInteger = ValidateUtil.isInteger('123')
```