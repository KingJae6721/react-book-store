import 'styled-components';
import { Theme } from './style/theme'; // 실제 Theme 타입이 정의된 경로

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
