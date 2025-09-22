/**
 * Validation utilities
 * 유효성 검사 유틸리티 함수들
 */

/**
 * 이메일 유효성 검사
 * @param email 이메일 주소
 * @returns 유효성 여부
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 비밀번호 강도 검사
 * @param password 비밀번호
 * @returns 강도 점수 (0-4)
 */
export function getPasswordStrength(password: string): number {
  let score = 0;

  // 길이 체크
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  // 문자 조합 체크
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return Math.min(score, 4);
}

/**
 * 비밀번호 유효성 검사
 * @param password 비밀번호
 * @param minLength 최소 길이
 * @returns 유효성 여부와 메시지
 */
export function validatePassword(
  password: string,
  minLength: number = 8
): { isValid: boolean; message?: string } {
  if (password.length < minLength) {
    return {
      isValid: false,
      message: `비밀번호는 최소 ${minLength}자 이상이어야 합니다.`
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: '비밀번호에 소문자가 포함되어야 합니다.'
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: '비밀번호에 대문자가 포함되어야 합니다.'
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      message: '비밀번호에 숫자가 포함되어야 합니다.'
    };
  }

  return { isValid: true };
}

/**
 * URL 유효성 검사
 * @param url URL 문자열
 * @returns 유효성 여부
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 신용카드 번호 유효성 검사 (루한 알고리즘)
 * @param cardNumber 신용카드 번호
 * @returns 유효성 여부
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\D/g, '');

  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * 숫자만 포함하는지 검사
 * @param value 값
 * @returns 숫자 여부
 */
export function isNumericOnly(value: string): boolean {
  return /^\d+$/.test(value);
}

/**
 * 영문자만 포함하는지 검사
 * @param value 값
 * @returns 영문자 여부
 */
export function isAlphaOnly(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}

/**
 * 영문자와 숫자만 포함하는지 검사
 * @param value 값
 * @returns 영문자+숫자 여부
 */
export function isAlphaNumericOnly(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}

/**
 * 입력 값 범위 검사
 * @param value 값
 * @param min 최솟값
 * @param max 최댓값
 * @returns 범위 내 여부
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * 문자열 길이 범위 검사
 * @param text 텍스트
 * @param minLength 최소 길이
 * @param maxLength 최대 길이
 * @returns 길이 범위 내 여부
 */
export function isValidLength(
  text: string,
  minLength: number,
  maxLength: number
): boolean {
  return text.length >= minLength && text.length <= maxLength;
}

/**
 * 필수 필드 검사
 * @param value 값
 * @returns 값 존재 여부
 */
export function isRequired(value: any): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/**
 * 날짜 형식 검사 (YYYY-MM-DD)
 * @param dateString 날짜 문자열
 * @returns 유효한 날짜 형식인지 여부
 */
export function isValidDateFormat(dateString: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  return date.toISOString().slice(0, 10) === dateString;
}

/**
 * 미래 날짜인지 검사
 * @param date 날짜
 * @returns 미래 날짜 여부
 */
export function isFutureDate(date: Date | string): boolean {
  const targetDate = new Date(date);
  const now = new Date();
  return targetDate > now;
}

/**
 * 과거 날짜인지 검사
 * @param date 날짜
 * @returns 과거 날짜 여부
 */
export function isPastDate(date: Date | string): boolean {
  const targetDate = new Date(date);
  const now = new Date();
  return targetDate < now;
}

/**
 * 정규표현식 패턴 매칭
 * @param value 값
 * @param pattern 정규표현식 패턴
 * @returns 매칭 여부
 */
export function matchesPattern(value: string, pattern: RegExp): boolean {
  return pattern.test(value);
}

/**
 * 유효성 검사 결과 타입
 */
export interface ValidationResult {
  isValid: boolean;
  message?: string;
  field?: string;
}

/**
 * 다중 유효성 검사 실행
 * @param validators 유효성 검사 함수 배열
 * @returns 첫 번째 실패한 검사 결과 또는 성공 결과
 */
export function validateMultiple(
  validators: (() => ValidationResult)[]
): ValidationResult {
  for (const validator of validators) {
    const result = validator();
    if (!result.isValid) {
      return result;
    }
  }

  return { isValid: true };
}