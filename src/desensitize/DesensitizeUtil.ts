import { DesensitizeType } from './DesensitizeType'

/**
 * ### 脱敏助手类
 *
 * @author Hamm.cn
 */
export class DesensitizeUtil {
  /**
   * ### 默认的脱敏符号
   */
  private static DEFAULT_MASK = '*'

  /**
   * ### IP地址分隔符
   */
  private static readonly IP_V4_SEPARATOR = '.'

  /**
   * ### `IPv4` 的块长度
   */
  private static readonly IP_V4_PART_COUNT = 4

  /**
   * ### 字符串替换
   *
   * @param text   原始字符串
   * @param head   头部保留长度
   * @param tail   尾部保留长度
   * @param symbol 中间替换的单个符号
   * @return 替换后的字符串
   */
  public static replace(text: string, head: number, tail: number, symbol: string): string {
    if (head < 0 || tail < 0 || head + tail >= text.length) {
      return text
    }
    let str = ''
    for (let i = 0; i < text.length; i += 1) {
      if (i >= head && i <= text.length - tail - 1) {
        str += symbol
      }
      else {
        str += text[i]
      }
    }
    return str
  }

  /**
   * ### `IPv4` 地址脱敏
   *
   * @param ipv4   `IPv4` 地址
   * @param symbol `可选` 脱敏符号
   * @return 脱敏后的 `IPv4` 地址
   */
  public static desensitizeIpv4Address(ipv4: string, symbol = this.DEFAULT_MASK): string {
    const strings = ipv4.split(this.IP_V4_SEPARATOR)
    if (strings.length !== DesensitizeUtil.IP_V4_PART_COUNT) {
      return ipv4
    }
    const temp = symbol + symbol + symbol
    strings[1] = temp
    strings[2] = temp
    return strings.join(this.IP_V4_SEPARATOR)
  }

  /**
   * ### 文本脱敏
   *
   * @param source 原始文本
   * @param type        脱敏类型
   * @param head        `可选` 头部保留
   * @param tail        `可选` 尾部保留
   * @param symbol      `可选` 脱敏符号
   * @return 脱敏后的文本
   */
  public static desensitize(
    source: string,
    type: DesensitizeType,
        head = 0,
        tail = 0,
        symbol = this.DEFAULT_MASK,
  ): string {
    if (!source) {
      return symbol
    }
    head = head <= 0 ? type.head : head
    tail = tail <= 0 ? type.tail : tail
    switch (type.key) {
      case DesensitizeType.IP_V4.key:
        return DesensitizeUtil.desensitizeIpv4Address(source, symbol)
      case DesensitizeType.CHINESE_NAME.key:
        if (source.length <= head + tail) {
          tail = 0
        }
        break
      case DesensitizeType.TELEPHONE.key:
        // 包含区号 前后各留4 不包含则各留2
        // eslint-disable-next-line no-case-declarations
        const isContainRegionCode = source.length > 8 ? 4 : 2
        head = isContainRegionCode
        tail = isContainRegionCode
        break
      default:
    }
    return this.replace(source, head, tail, symbol)
  }
}
