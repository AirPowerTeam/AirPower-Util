/**
 * ### 版本工具类
 *
 * @author Hamm.cn
 */
export class VersionUtil {
  /**
   * ### 版本号长度
   */
  private static readonly VERSION_LENGTH = 2

  /**
   * ### 版本号分隔符
   */
  private static readonly VERSION_SEPARATOR = '.'

  /**
   * ### 获取版本号数字
   * @param version 版本号字符串
   * @param separator `可选` 分隔符 默认 `.`
   * @param padding `可选` 填充位数 默认 `2`
   * @returns 版本号数字
   */
  static parseVersion(version: string, separator = this.VERSION_SEPARATOR, padding = this.VERSION_LENGTH): number {
    return Number.parseInt(
      version
        .split(separator)
        .map(item => item.padStart(padding, '0'))
        .join(''),
      10,
    )
  }

  /**
   * ### 解析版本号数字
   * @param version 版本号数字
   * @param separator `可选` 分隔符 默认 `.`
   * @param padding `可选` 填充位数 默认 `2`
   * @returns 版本号字符串
   */
  static formatVersion(version: number, separator = this.VERSION_SEPARATOR, padding = this.VERSION_LENGTH): string {
    const major = Math.floor(version / 10 ** (padding ** padding))
    const minor = Math.floor(version % 10 ** (padding ** padding)) / 10 ** padding
    return [major, minor].join(separator)
  }
}
