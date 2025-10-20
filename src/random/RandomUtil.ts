/**
 * ### 随机生成数据工具类
 *
 * @author Hamm.cn
 */
export class RandomUtil {
  /**
   * ### 数字集合
   */
  private static STRING_OF_NUMBER: string = '0123456789'

  /**
   * ### 小写字母集合
   */
  private static STRING_OF_LOWER_CHAR: string = 'abcdefghijklmnopqrstuvwxyz'

  /**
   * ### 大写字母集合
   */
  private static STRING_OF_UPPER_CHAR: string = this.STRING_OF_LOWER_CHAR.toUpperCase()

  /**
   * ### 默认长度
   */
  private static readonly DEFAULT_LENGTH: number = 32

  /**
   * ### 十进制
   */
  private static readonly DECIMALISM: number = 10

  /**
   * ### 指定范围内获取随机整数
   * @param min 最小
   * @param max 最大
   */
  static getRandNumber(min: number, max: number): number {
    return Number.parseInt((min + Math.random() * (max - min)).toString(), this.DECIMALISM)
  }

  /**
   * ### 获取随机数字字符串
   * @param length `可选` 长度 `默认6位`
   */
  static getRandNumberString(length: number = 6): string {
    let str: string = ''
    for (let i: number = 0; i < length; i += 1) {
      str
        += this.STRING_OF_NUMBER[
          Number.parseInt((Math.random() * this.STRING_OF_NUMBER.length).toString(), this.DECIMALISM)
        ]
    }
    return str
  }

  /**
   * ### 获取随机字母字符串
   * @param length `可选` 长度
   * @param isUpper `可选` 是否大写 `默认小写`
   */
  static getRandCharString(length: number = this.DEFAULT_LENGTH, isUpper: boolean = false): string {
    let str: string = ''
    for (let i: number = 0; i < length; i += 1) {
      str
        += this.STRING_OF_LOWER_CHAR[
          Number.parseInt((Math.random() * this.STRING_OF_LOWER_CHAR.length).toString(), this.DECIMALISM)
        ]
    }
    return isUpper ? str.toLocaleUpperCase() : str
  }

  /**
   * ### 获取大小写混合随机字母字符串
   * @param length `可选` 长度
   */
  static getRandMixedCharString(length: number = this.DEFAULT_LENGTH): string {
    let str: string = ''
    const strStorage: string = this.STRING_OF_LOWER_CHAR + this.STRING_OF_UPPER_CHAR
    for (let i: number = 0; i < length; i += 1) {
      str += strStorage[Number.parseInt((Math.random() * strStorage.length).toString(), this.DECIMALISM)]
    }
    return str
  }

  /**
   * ### 获取字母加数字随机字符串
   * @param length `可选` 长度
   * @param isUpper `可选` 是否大写 `默认false`
   */
  static getRandNumberAndCharString(length: number = this.DEFAULT_LENGTH, isUpper = false): string {
    let str: string = ''
    const strStorage: string = this.STRING_OF_LOWER_CHAR + this.STRING_OF_NUMBER
    for (let i: number = 0; i < length; i += 1) {
      str += strStorage[Number.parseInt((Math.random() * strStorage.length).toString(), this.DECIMALISM)]
    }
    return isUpper ? str.toLocaleUpperCase() : str
  }

  /**
   * ### 获取大小写字母加数字随机字符串
   * @param length `可选` 长度
   */
  static getRandNumberAndMixedCharString(length: number = this.DEFAULT_LENGTH): string {
    let str = ''
    const strStorage: string = this.STRING_OF_LOWER_CHAR + this.STRING_OF_NUMBER + this.STRING_OF_UPPER_CHAR
    for (let i: number = 0; i < length; i += 1) {
      str += strStorage[Number.parseInt((Math.random() * strStorage.length).toString(), this.DECIMALISM)]
    }
    return str
  }

  /**
   * ### 获取随机颜色
   * @returns 随机颜色
   */
  static getRandColor(): string {
    return `#${Math.random().toString(16).padEnd(6, '0').slice(2, 8)}`
  }
}
