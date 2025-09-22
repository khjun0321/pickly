/**
 * Formatting utilities
 * 다양한 포맷팅 유틸리티 함수들
 */

/**
 * 숫자를 한국식 천단위 구분자로 포맷팅
 * @param num 숫자
 * @param locale 로케일 (기본값: ko-KR)
 * @returns 포맷팅된 문자열
 */
export function formatNumber(
  num: number | string,
  locale: string = 'ko-KR'
): string {
  const number = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(number)) return '0';

  return new Intl.NumberFormat(locale).format(number);
}

/**
 * 통화 포맷팅 (원화)
 * @param amount 금액
 * @param showSymbol 통화 기호 표시 여부
 * @returns 포맷팅된 금액 문자열
 */
export function formatCurrency(
  amount: number | string,
  showSymbol: boolean = true
): string {
  const number = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(number)) return showSymbol ? '₩0' : '0';

  const formatted = formatNumber(number);
  return showSymbol ? `₩${formatted}` : formatted;
}

/**
 * 백분율 포맷팅
 * @param value 값 (0~1 또는 0~100)
 * @param decimals 소수점 자릿수
 * @param isDecimal 입력값이 소수인지 (0~1) 여부
 * @returns 포맷팅된 백분율 문자열
 */
export function formatPercentage(
  value: number,
  decimals: number = 1,
  isDecimal: boolean = false
): string {
  const percentage = isDecimal ? value * 100 : value;
  return `${percentage.toFixed(decimals)}%`;
}

/**
 * 파일 크기 포맷팅
 * @param bytes 바이트 수
 * @param decimals 소수점 자릿수
 * @returns 포맷팅된 파일 크기 문자열
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * 시간 포맷팅 (상대 시간)
 * @param date 날짜
 * @param baseDate 기준 날짜 (기본값: 현재)
 * @returns 상대 시간 문자열
 */
export function formatRelativeTime(
  date: Date | string | number,
  baseDate: Date = new Date()
): string {
  const targetDate = new Date(date);
  const diffMs = baseDate.getTime() - targetDate.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffYear > 0) return `${diffYear}년 전`;
  if (diffMonth > 0) return `${diffMonth}개월 전`;
  if (diffWeek > 0) return `${diffWeek}주 전`;
  if (diffDay > 0) return `${diffDay}일 전`;
  if (diffHour > 0) return `${diffHour}시간 전`;
  if (diffMin > 0) return `${diffMin}분 전`;
  if (diffSec > 5) return `${diffSec}초 전`;
  return '방금 전';
}

/**
 * 날짜 포맷팅
 * @param date 날짜
 * @param format 포맷 타입
 * @returns 포맷팅된 날짜 문자열
 */
export function formatDate(
  date: Date | string | number,
  format: 'short' | 'medium' | 'long' | 'full' = 'medium'
): string {
  const targetDate = new Date(date);

  const optionsMap: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric', month: 'numeric', day: 'numeric' },
    medium: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
  };

  return new Intl.DateTimeFormat('ko-KR', optionsMap[format]).format(targetDate);
}

/**
 * 시간 포맷팅
 * @param date 날짜/시간
 * @param format 포맷 타입
 * @returns 포맷팅된 시간 문자열
 */
export function formatTime(
  date: Date | string | number,
  format: '12h' | '24h' = '24h'
): string {
  const targetDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: format === '12h'
  };

  return new Intl.DateTimeFormat('ko-KR', options).format(targetDate);
}

/**
 * 텍스트 말줄임 처리
 * @param text 텍스트
 * @param maxLength 최대 길이
 * @param suffix 말줄임 접미사
 * @returns 처리된 텍스트
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix: string = '...'
): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * 카멜케이스를 케밥케이스로 변환
 * @param str 카멜케이스 문자열
 * @returns 케밥케이스 문자열
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 케밥케이스를 카멜케이스로 변환
 * @param str 케밥케이스 문자열
 * @returns 카멜케이스 문자열
 */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * 스네이크케이스를 카멜케이스로 변환
 * @param str 스네이크케이스 문자열
 * @returns 카멜케이스 문자열
 */
export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * 첫 글자 대문자화
 * @param str 문자열
 * @returns 첫 글자가 대문자인 문자열
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * URL slug 생성
 * @param text 원본 텍스트
 * @returns URL slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // 특수문자 제거
    .replace(/[\s_-]+/g, '-') // 공백과 언더스코어를 하이픈으로
    .replace(/^-+|-+$/g, ''); // 시작과 끝의 하이픈 제거
}