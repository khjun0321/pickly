/**
 * Pickly UI Web - Main Export
 * React 컴포넌트 라이브러리
 */

// Import base CSS
import '@pickly/design-foundations/dist/css/index.css';

// Re-export all components
export * from './components';

// CSS exports for individual component styles
export const styles = {
  button: () => import('./components/Button/Button.css'),
  input: () => import('./components/Input/Input.css'),
  card: () => import('./components/Card/Card.css'),
};