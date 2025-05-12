import CryptoJS from 'crypto-js'

/**
 * ### 加解密和散列摘要算法工具类
 *
 * @author Hamm.cn
 */
export class CryptoUtil {
  /**
   * ### AES加解密使用默认向量
   */
  static aesCbcIvString = '0000000000000000'

  /**
   * ### `AES` 加密方法
   * @param data 加密数据
   * @param key 密钥
   * @param mode `可选` 加密方式 默认 `CBC`
   * @param padding `可选` 填充方式 默认 `Pkcs7`
   * @param iv `可选` 向量
   */
  static aesEncrypt(
    data: string,
    key: string,
    mode: unknown = CryptoJS.mode.CBC,
    padding: unknown = CryptoJS.pad.Pkcs7,
    iv = this.aesCbcIvString,
  ): string {
    return CryptoJS.AES.encrypt(data, CryptoJS.enc.Base64.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode,
      padding,
    }).toString()
  }

  /**
   * ### `AES` 解密方法
   * @param data 需要解密的数据
   * @param key 密钥
   * @param mode `可选` 加密方式 默认 `CBC`
   * @param padding `可选` 填充方式 默认 `Pkcs7`
   * @param iv `可选` 向量
   */
  static aesDecrypt(
    data: string,
    key: string,
    mode: unknown = CryptoJS.mode.CBC,
    padding: unknown = CryptoJS.pad.Pkcs7,
    iv = this.aesCbcIvString,
  ): string {
    return CryptoJS.AES.decrypt(data, CryptoJS.enc.Base64.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode,
      padding,
    }).toString(CryptoJS.enc.Utf8)
  }

  /**
   * ### `SHA1` 散列摘要
   * @param data 源字符串
   */
  static sha1(data: string): string {
    return CryptoJS.SHA1(data).toString()
  }

  /**
   * ### `MD5` 散列摘要
   * @param data 源字符串
   */
  static md5(data: string): string {
    return CryptoJS.MD5(data).toString()
  }

  /**
   * ### Base64编码
   * @param data
   */
  static base64Encode(data: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
  }

  /**
   * ### Base64解码
   * @param data
   */
  static base64Decode(data: string): string {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
  }
}
