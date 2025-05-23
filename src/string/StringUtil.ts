/**
 * ### 字符串处理工具类
 *
 * @author Hamm.cn
 */
export class StringUtil {
  /**
   * ### 单码元长度
   */
  private static SINGLE_POINT_LENGTH = 65535

  /**
   * ### 获取字符串可视化长度
   */
  static getLength(str: string): number {
    let len = 0
    for (let i = 0; i < str.length;) {
      const codePoint = str.codePointAt(i)!
      i += codePoint > this.SINGLE_POINT_LENGTH ? 2 : 1
      len += 1
    }
    return len
  }

  /**
   * ### 获取字符串可视化位置的内容
   * @param str 字符串
   * @param index 所在位置
   * @returns 字符串
   */
  static get(str: string, index: number): string {
    let current = 0
    if (index < 0) {
      throw new Error('AirString.get() Error: index error')
    }
    for (let i = 0; i < str.length;) {
      const codePoint = str.codePointAt(i)!
      if (current === index) {
        return String.fromCodePoint(codePoint)
      }
      i += codePoint > this.SINGLE_POINT_LENGTH ? 2 : 1
      current += 1
    }
    throw new Error('AirString.get() Error: index out of range')
  }

  /**
   * ### 字符串可视化截取
   * @param str 字符串
   * @param from 截取开始位置
   * @param to 截取结束位置
   */
  static slice(str: string, from = 0, to = this.getLength(str) - 1): string {
    if (from < 0) {
      throw new Error('Error: from error')
    }
    if (to < 0) {
      throw new Error('Error: to error')
    }
    if (from > this.getLength(str) - 1) {
      throw new Error('Error: from out of range')
    }
    if (to > this.getLength(str) - 1) {
      throw new Error('Error: to out of range')
    }
    let s = ''
    for (let i = from; i <= to; i += 1) {
      s += this.get(str, i)
    }
    return s
  }
}
