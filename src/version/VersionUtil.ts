/**
 * ### 版本工具类
 *
 * @author Hamm.cn
 */
export class VersionUtil {
  /**
   * ### 版本号长度
   */
  private static readonly VERSION_LENGTH: number = 2

  /**
   * ### 版本号分隔符
   */
  private static readonly VERSION_SEPARATOR: string = '.'

  /**
   * ### 获取版本号数字
   * @param version 版本号字符串
   * @param separator `可选` 分隔符 默认 `.`
   * @param padding `可选` 填充位数 默认 `2`
   * @returns 版本号数字
   */
  static parseVersion(
    version: string,
    separator: string = this.VERSION_SEPARATOR,
    padding: number = this.VERSION_LENGTH,
  ): number {
    return Number.parseInt(
      version
        .split(separator)
        .map((item: string) => item.padStart(padding, '0'))
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
  static formatVersion(
    version: number,
    separator: string = this.VERSION_SEPARATOR,
    padding: number = this.VERSION_LENGTH,
  ): string {
    const major: number = Math.floor(version / 10 ** (padding ** padding))
    const minor: number = Math.floor(version % 10 ** (padding ** padding)) / 10 ** padding
    return [major, minor].join(separator)
  }
}
