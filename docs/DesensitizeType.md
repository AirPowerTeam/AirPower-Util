[返回文档首页](../README.md)

# DesensitizeType 脱敏类型枚举

DesensitizeType 是一个继承自 Enum 的枚举类，定义了各种数据脱敏的类型和策略。

## 预定义脱敏类型

- `TELEPHONE`: 座机号码，保留前3位和后4位
- `MOBILE`: 手机号码，保留前3位和后4位
- `ID_CARD`: 身份证号，保留前6位和后4位
- `BANK_CARD`: 银行卡号，保留前4位和后4位
- `CAR_NUMBER`: 车牌号，保留前2位和后1位
- `EMAIL`: 邮箱，保留前2位和后2位（@前的部分）
- `CHINESE_NAME`: 中文姓名，保留前1位和后1位
- `ADDRESS`: 地址，保留前3位
- `IP_V4`: IPv4地址，隐藏中间两段
- `CUSTOM`: 自定义，需要手动指定保留位数

## 属性

- `head`: 脱敏头部保留位数
- `tail`: 脱敏尾部保留位数

## 实例方法

### desensitize(str, symbol)

使用这个方式脱敏

**参数:**

- `str` (string): 要脱敏的字符串
- `symbol` (string, 可选): 脱敏符号，默认为 '*'

**返回值:**

- (string): 脱敏后的字符串