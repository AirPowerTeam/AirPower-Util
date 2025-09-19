[返回文档首页](../README.md)

# CryptoUtil 加解密和散列摘要算法工具类

CryptoUtil 是一个提供常用加密、解密和散列摘要算法的工具类，基于 crypto-js 库实现。

## 类方法

### aesEncrypt(data, key, mode, padding, iv)

AES 加密方法

**参数:**

- `data` (string): 需要加密的数据
- `key` (string): 加密密钥
- `mode` (unknown, 可选): 加密方式，默认为 CBC 模式
- `padding` (unknown, 可选): 填充方式，默认为 Pkcs7
- `iv` (string, 可选): 初始化向量，默认为 '0000000000000000'

**返回值:**

- (string): 加密后的数据

### aesDecrypt(data, key, mode, padding, iv)

AES 解密方法

**参数:**

- `data` (string): 需要解密的数据
- `key` (string): 解密密钥
- `mode` (unknown, 可选): 解密方式，默认为 CBC 模式
- `padding` (unknown, 可选): 填充方式，默认为 Pkcs7
- `iv` (string, 可选): 初始化向量，默认为 '0000000000000000'

**返回值:**

- (string): 解密后的数据

### sha1(data)

SHA1 散列摘要

**参数:**

- `data` (string): 需要进行 SHA1 散列的源字符串

**返回值:**

- (string): SHA1 散列后的字符串

### md5(data)

MD5 散列摘要

**参数:**

- `data` (string): 需要进行 MD5 散列的源字符串

**返回值:**

- (string): MD5 散列后的字符串

### base64Encode(data)

Base64 编码

**参数:**

- `data` (string): 需要进行 Base64 编码的字符串

**返回值:**

- (string): Base64 编码后的字符串

### base64Decode(data)

Base64 解码

**参数:**

- `data` (string): 需要进行 Base64 解码的字符串

**返回值:**

- (string): Base64 解码后的字符串

## 使用示例

```typescript
import {CryptoUtil} from '@airpower/util'

// AES 加密
const encrypted = CryptoUtil.aesEncrypt('Hello World', 'mySecretKey')

// AES 解密
const decrypted = CryptoUtil.aesDecrypt(encrypted, 'mySecretKey')

// SHA1 散列
const sha1Hash = CryptoUtil.sha1('Hello World')

// MD5 散列
const md5Hash = CryptoUtil.md5('Hello World')

// Base64 编码
const encoded = CryptoUtil.base64Encode('Hello World')

// Base64 解码
const decoded = CryptoUtil.base64Decode(encoded)
```