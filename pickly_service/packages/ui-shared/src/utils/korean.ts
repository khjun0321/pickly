/**
 * Korean language utilities
 * 한국어 처리를 위한 유틸리티 함수들
 */

/**
 * 한글 자음 분리 함수
 * @param text 입력 텍스트
 * @returns 자음만 추출된 문자열
 */
export function extractConsonants(text: string): string {
  const consonants = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
  const consonantMap: Record<string, string> = {
    'ㄱ': 'ㄱ', 'ㄲ': 'ㄱ', 'ㄴ': 'ㄴ', 'ㄷ': 'ㄷ', 'ㄸ': 'ㄷ',
    'ㄹ': 'ㄹ', 'ㅁ': 'ㅁ', 'ㅂ': 'ㅂ', 'ㅃ': 'ㅂ', 'ㅅ': 'ㅅ',
    'ㅆ': 'ㅅ', 'ㅇ': 'ㅇ', 'ㅈ': 'ㅈ', 'ㅉ': 'ㅈ', 'ㅊ': 'ㅊ',
    'ㅋ': 'ㅋ', 'ㅌ': 'ㅌ', 'ㅍ': 'ㅍ', 'ㅎ': 'ㅎ'
  };

  return text
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      if (code >= 0xAC00 && code <= 0xD7A3) {
        // 한글 완성형 범위
        const consonantIndex = Math.floor((code - 0xAC00) / 588);
        return consonants[consonantIndex];
      }
      return consonantMap[char] || char;
    })
    .join('');
}

/**
 * 한글 초성 검색 함수
 * @param searchTerm 검색어 (초성)
 * @param targetText 대상 텍스트
 * @returns 매치 여부
 */
export function matchKoreanConsonants(searchTerm: string, targetText: string): boolean {
  const searchConsonants = extractConsonants(searchTerm.toLowerCase());
  const targetConsonants = extractConsonants(targetText.toLowerCase());

  return targetConsonants.includes(searchConsonants);
}

/**
 * 조사 자동 선택 함수
 * @param word 단어
 * @param particles 조사 옵션 [받침 있을 때, 받침 없을 때]
 * @returns 적절한 조사가 붙은 단어
 */
export function addParticle(word: string, particles: [string, string]): string {
  if (!word) return word;

  const lastChar = word[word.length - 1];
  const lastCharCode = lastChar.charCodeAt(0);

  // 한글 완성형인지 확인
  if (lastCharCode >= 0xAC00 && lastCharCode <= 0xD7A3) {
    // 받침 여부 확인 (종성이 있는지)
    const finalConsonant = (lastCharCode - 0xAC00) % 28;
    return word + (finalConsonant > 0 ? particles[0] : particles[1]);
  }

  // 영어나 숫자인 경우 받침 있는 것으로 처리
  return word + particles[0];
}

/**
 * 한글 문장 줄바꿈 최적화
 * @param text 입력 텍스트
 * @param maxLength 최대 길이
 * @returns 최적화된 줄바꿈이 적용된 텍스트
 */
export function optimizeKoreanLineBreak(text: string, maxLength: number): string {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;

    if (testLine.length <= maxLength) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        // 단어가 너무 긴 경우 강제로 자름
        lines.push(word.substring(0, maxLength));
        currentLine = word.substring(maxLength);
      }
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.join('\n');
}

/**
 * 한글 숫자 변환 함수
 * @param num 숫자
 * @returns 한글 숫자 표현
 */
export function numberToKorean(num: number): string {
  const units = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const tens = ['', '', '이십', '삼십', '사십', '오십', '육십', '칠십', '팔십', '구십'];
  const hundreds = ['', '일백', '이백', '삼백', '사백', '오백', '육백', '칠백', '팔백', '구백'];
  const thousands = ['', '일천', '이천', '삼천', '사천', '오천', '육천', '칠천', '팔천', '구천'];

  if (num === 0) return '영';
  if (num < 0) return '마이너스 ' + numberToKorean(-num);

  let result = '';

  if (num >= 10000) {
    const man = Math.floor(num / 10000);
    result += numberToKorean(man) + '만';
    num %= 10000;
  }

  if (num >= 1000) {
    result += thousands[Math.floor(num / 1000)];
    num %= 1000;
  }

  if (num >= 100) {
    result += hundreds[Math.floor(num / 100)];
    num %= 100;
  }

  if (num >= 20) {
    result += tens[Math.floor(num / 10)];
    num %= 10;
  } else if (num >= 10) {
    result += '십';
    num %= 10;
  }

  if (num > 0) {
    result += units[num];
  }

  return result || '영';
}

/**
 * 한국 전화번호 포맷팅
 * @param phoneNumber 전화번호
 * @returns 포맷팅된 전화번호
 */
export function formatKoreanPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 11) {
    // 휴대폰 번호 (010-xxxx-xxxx)
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (cleaned.length === 10) {
    // 지역번호 (02-xxx-xxxx 또는 031-xxx-xxxx)
    if (cleaned.startsWith('02')) {
      return cleaned.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
    } else {
      return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  }

  return phoneNumber;
}

/**
 * 한국 우편번호 유효성 검사
 * @param zipCode 우편번호
 * @returns 유효성 여부
 */
export function isValidKoreanZipCode(zipCode: string): boolean {
  const cleaned = zipCode.replace(/\D/g, '');
  return cleaned.length === 5 && /^\d{5}$/.test(cleaned);
}

/**
 * 한국 사업자등록번호 유효성 검사
 * @param businessNumber 사업자등록번호
 * @returns 유효성 여부
 */
export function isValidKoreanBusinessNumber(businessNumber: string): boolean {
  const cleaned = businessNumber.replace(/\D/g, '');

  if (cleaned.length !== 10) return false;

  const weights = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned[i]) * weights[i];
  }

  sum += parseInt(cleaned[8]) * 5 / 10;
  const checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit === parseInt(cleaned[9]);
}