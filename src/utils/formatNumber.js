/**
 * 数字格式化（例如：12345 => 12,345）
 * @param {Number/String} input
 * @return {String}
 */
export function formatNum(input) {
    return (input || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}