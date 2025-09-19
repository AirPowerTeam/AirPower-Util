[返回文档首页](../README.md)

# DesensitizeUtil 脱敏工具类

DesensitizeUtil 是一个提供数据脱敏功能的工具类，可以对手机号、身份证号、银行卡号等敏感信息进行脱敏处理。

## 类方法

### replace(text, head, tail, symbol)

字符串替换脱敏

**参数:**

- `text` (string): 原始字符串
- `head` (number): 头部保留长度
- `tail` (number): 尾部保留长度
- `symbol` (string): 中间替换的单个符号

**返回值:**

- (string): 替换后的字符串

### desensitizeIpv4Address(ipv4, symbol)

IPv4 地址脱敏

**参数:**

- `ipv4` (string): IPv4 地址
- `symbol` (string, 可选): 脱敏符号，默认为 '*'

**返回值:**

- (string): 脱敏后的 IPv4 地址

### desensitize(source, type, head, tail, symbol)

文本脱敏

**参数:**

- `source` (string): 原始文本
- `type` (DesensitizeType): 脱敏类型
- `head` (number, 可选): 头部保留位数，默认使用 type.head
- `tail` (number, 可选): 尾部保留位数，默认使用 type.tail
- `symbol` (string, 可选): 脱敏符号，默认为 '*'

**返回值:**

- (string): 脱敏后的文本

## 使用示例

```typescript
import {DesensitizeUtil, DesensitizeType} from '@airpower/util'

// 使用预定义脱敏类型
const mobile = DesensitizeType.MOBILE.desensitize('13812345678')
// 结果: 138****5678

const idCard = DesensitizeType.ID_CARD.desensitize('110101199001011234')
// 结果: 110101********1234

// 使用工具类方法直接脱敏
const bankCard = DesensitizeUtil.desensitize('6222021234567890', DesensitizeType.BANK_CARD)
// 结果: 6222********7890

// 自定义脱敏
const custom = DesensitizeUtil.desensitize('customString', DesensitizeType.CUSTOM, 2, 3, '#')
// 结果: cu##########ing
```