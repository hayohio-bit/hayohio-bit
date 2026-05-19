// 프로젝트 데이터의 양식을 엄격하게 통일하기 위한 타입 정의
export interface Project {
  id: string;             // 프로젝트 고유 ID
  slug: string;           // hash 라우팅용 slug
  title: string;          // 프로젝트명
  period: string;         // 진행 기간
  type: string;           // 개인/팀 구분
  role: string;           // 역할
  description: string;    // 한 줄 요약
  techStack: string[];    // 사용 기술 스택
  githubUrl?: string;     // 깃허브 레포지토리 URL (선택)
  demoUrl?: string;       // 배포/데모 URL (선택)
  details: string[];      // 주요 구현 내용 및 성과
  challenge?: string;     // 핵심 도전 과제
  featured: boolean;      // 메인 프로젝트 여부
}

// 실제 프로젝트 데이터 목록 — 마스터정리 우선순위 기반 (배포 완료된 프로젝트만)
export const PROJECTS: Project[] = [
  {
    id: 'spring-mvc-migration',
    slug: 'spring-mvc',
    title: 'Spring MVC Migration',
    period: '2025.12 ~ 2026.01',
    type: '개인 프로젝트',
    role: 'Backend 전담',
    description: 'JSP/Servlet Model2 기반 팀 게시판을 Spring Legacy (Spring MVC + MyBatis) 계층형 아키텍처로 직접 재설계·마이그레이션한 프로젝트',
    techStack: ['Java', 'Spring Framework 5.x', 'Spring MVC', 'MyBatis', 'MySQL 8', 'JSP', 'Render'],
    githubUrl: 'https://github.com/hayohio-bit/daechul-spring-legacy',
    demoUrl: 'https://daechul-spring-legacy.onrender.com/',
    details: [
      'ActionFactory 수동 라우팅 → DispatcherServlet + @RequestMapping 선언적 라우팅으로 전환, 코드량 대폭 감소',
      'JDBC 직접 연결(try-catch 반복) → MyBatis XML 매퍼로 SQL과 비즈니스 로직 완전 분리',
      'getInstance() 수동 Singleton → @Autowired DI(Spring IoC 컨테이너)로 결합도 감소, 테스트 용이성 확보',
      'root-context.xml / servlet-context.xml 분리 구조로 Spring 설정 레이어의 역할 이해 및 구성',
    ],
    challenge: '"왜 Spring이 필요한가"를 직접 체감 — 프레임워크 없이 수동 관리하던 코드를 Spring으로 전환하며 구조적 차이를 코드 레벨에서 증명',
    featured: true,
  },
  {
    id: 'daypoo',
    slug: 'daypoo',
    title: 'DayPoo',
    period: '2026.03 ~ 2026.04',
    type: '팀 프로젝트 (3인)',
    role: 'Backend — 인증·보안 / 결제 / CI·CD 담당',
    description: '전국 5만여 건 공공 화장실 데이터를 지도로 시각화하고, 배변 기록을 AI로 분석해 건강 인사이트를 제공하는 위치 기반 생활 편의 서비스',
    techStack: ['Java 21', 'Spring Boot 3.4', 'Spring Security', 'JWT', 'OAuth2', 'PostgreSQL+PostGIS', 'Redis', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/hayohio-bit/daypoo',
    demoUrl: 'https://daypoo.8o2.site',
    details: [
      'JWT Access/Refresh Token 전략 수립, OAuth2 카카오 소셜 로그인 구현',
      'Redis Rate Limiting(Throttling) 구현 — API 남용 방지',
      '토스페이먼츠 SDK 기반 결제 승인/취소 API + 멱등성 보장 중복 결제 방지',
      'Docker 멀티스테이지 빌드로 팀 개발 환경 표준화, GitHub Actions CI/CD 파이프라인 구축',
      'Nginx 리버스 프록시 및 SSL 터미네이션 적용',
    ],
    challenge: '5만 건 공공데이터 실연동 + PostGIS 공간 검색 + AI 마이크로서비스 + 결제 — 복합 기술 스택 통합',
    featured: true,
  },
  {
    id: 'creative-archive',
    slug: 'creative-archive',
    title: 'Creative Archive',
    period: '2025.12.19 ~ 2025.12.24',
    type: '개인 프로젝트',
    role: 'Frontend 전담',
    description: 'BGF 재직 시절 제작한 디자인 자산물을 아카이빙한 React 기반 포트폴리오 카탈로그 사이트. Redux Toolkit 실습 목적',
    techStack: ['React 18', 'Vite', 'Redux Toolkit', 'React Router v6', 'CSS Modules', 'GitHub Pages'],
    githubUrl: 'https://github.com/hayohio-bit/hayohio-portfolio',
    demoUrl: 'https://hayohio-bit.github.io/hayohio-portfolio/',
    details: [
      'Redux Slice 패턴 + createSelector 메모이제이션으로 무한 렌더링 해결',
      'useCallback + debounce 300ms 기반 실시간 검색 구현',
      'Context API 테마(다크/라이트) + localStorage 상태 지속',
      '모바일/태블릿/데스크톱 완전 반응형 대응',
    ],
    challenge: 'Redux 전역 상태 관리 패턴 실습 — useSelector의 참조 동일성 문제를 createSelector로 해결한 경험',
    featured: true,
  },
  {
    id: 'dn-platform',
    slug: '62dangnyang',
    title: '62댕냥 (DN Platform)',
    period: '2026.02.03 ~ 2026.02.27',
    type: '팀 프로젝트 (4인)',
    role: 'Backend (Spring Boot + JPA + Security)',
    description: '공공데이터 API 기반 유기동물 입양·임시보호 매칭 플랫폼. 쇼핑몰 아키텍처를 비영리 도메인에 적용',
    techStack: ['Java 21', 'Spring Boot 3.2', 'Spring Security', 'JWT', 'JPA', 'MySQL 8', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/hayohio-bit/62dn',
    demoUrl: 'https://62dn.cloud/',
    details: [
      'Git 브랜치 전략 수립·관리, 초기 환경설정 가이드 문서화(macOS·Windows 양환경)',
      '공공데이터 포털 API 연동 — 인증키 발급부터 파싱까지',
      '프로젝트 종료 후 동물 정보 API·입양/임보 프로세스·즐겨찾기 기능 독자 구현',
      '쇼핑몰 도메인 모델(상품→동물, 주문→입양신청)을 비영리로 재해석한 JPA 엔티티 설계',
    ],
    challenge: '공공데이터 포털 API 실연동 + 도메인 모델 재해석 설계',
    featured: false,
  },
  {
    id: 'portmanager',
    slug: 'portmanager',
    title: 'PortManager',
    period: '2026.01 ~ 2026.02',
    type: '개인 프로젝트',
    role: '기획·개발·배포 전담',
    description: '개발 중 반복되는 포트 충돌(EADDRINUSE) 문제를 해결하기 위한 Windows 포트 관리 데스크톱 앱',
    techStack: ['Electron 33', 'Node.js 20+', 'HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/hayohio-bit/PortManager',
    demoUrl: 'https://github.com/hayohio-bit/PortManager/releases/latest',
    details: [
      'contextIsolation + contextBridge 보안 설계 — 최소 권한 API만 노출',
      'PID 정수 검증으로 커맨드 인젝션 방지, CSP 적용',
      'LISTEN 중인 TCP/UDP 포트 실시간 조회, 200ms 디바운싱 통합 검색',
      '설치 없이 실행 가능한 포터블 exe 배포',
    ],
    challenge: '불편함을 직접 도구로 만드는 개발자 마인드셋 — 문제 인식 → 설계 → 구현 → 배포',
    featured: false,
  },
];
