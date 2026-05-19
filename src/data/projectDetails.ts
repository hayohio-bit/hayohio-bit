// 프로젝트 세부 페이지 데이터
export const PROJECT_DETAILS: Record<string, any> = {
  'spring-mvc': {
    tagline: 'JSP/Servlet Model2 → Spring MVC + MyBatis 직접 마이그레이션',
    overview: {
      problem: '수동 if-else 라우팅, JDBC 직접 연결, Singleton 패턴 등 프레임워크 없이 작성된 코드의 유지보수 한계',
      whyBuilt: '부트캠프에서 JSP/Servlet으로 팀 프로젝트를 완성한 뒤, "왜 Spring이 필요한가"를 코드 레벨에서 직접 증명하고 싶었습니다.',
      features: ['DispatcherServlet + @RequestMapping 선언적 라우팅', 'MyBatis XML 매퍼로 SQL 분리', 'Spring IoC 컨테이너 기반 DI 전환']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Java', r: '팀 공통 언어' }, { n: 'Spring MVC', r: '선언적 라우팅' }, { n: 'MyBatis', r: 'SQL 분리' }] },
      { name: 'Database', items: [{ n: 'MySQL 8', r: '기존 스키마 유지' }] },
      { name: 'Infra', items: [{ n: 'Render', r: '무료 배포' }] }
    ],
    archMermaid: 'flowchart LR\n  Client-->|HTTP|DispatcherServlet\n  DispatcherServlet-->Controller\n  Controller-->Service\n  Service-->MyBatis\n  MyBatis-->MySQL[(MySQL)]',
    erdMermaid: 'erDiagram\n  MEMBER ||--o{ BOARD : writes\n  BOARD ||--o{ REPLY : has\n  MEMBER { int member_id PK\n    string name\n    string email }\n  BOARD { int board_id PK\n    string title\n    text content }\n  REPLY { int reply_id PK\n    text content }',
    useCases: [
      { title: 'Before vs After 라우팅', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant D as DispatcherServlet\n  participant CT as @Controller\n  participant S as Service\n  C->>D: HTTP Request\n  D->>CT: @RequestMapping\n  CT->>S: Business Logic\n  S-->>CT: Result\n  CT-->>D: ModelAndView\n  D-->>C: JSP Response' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '프로젝트 구조 분석', desc: '기존 Model2 코드 분석 및 Spring 전환 계획 수립' },
      { week: 'Week 2', milestone: 'Spring MVC 전환', desc: 'DispatcherServlet + @Controller 라우팅 전환' },
      { week: 'Week 3', milestone: 'MyBatis 통합', desc: 'JDBC → MyBatis XML 매퍼 전환' },
      { week: 'Week 4', milestone: '배포 및 마무리', desc: 'Render 배포 + 테스트' }
    ],
    keyImpls: [
      { title: 'ActionFactory → @RequestMapping', summary: '수동 if-else 분기 60줄 → 어노테이션 1줄로 대체', code: { lang: 'java', snippet: '@Controller\n@RequestMapping("/board")\npublic class BoardController {\n    @GetMapping("/list")\n    public String list(Model model) {\n        model.addAttribute("boards", boardService.findAll());\n        return "board/list";\n    }\n}' } },
      { title: 'JDBC → MyBatis XML', summary: 'try-catch-finally 반복 제거, SQL을 XML로 분리하여 유지보수성 향상', code: { lang: 'xml', snippet: '<select id="findAll" resultType="Board">\n  SELECT board_id, title, content, reg_date\n  FROM board\n  ORDER BY reg_date DESC\n</select>' } }
    ],
    troubleshooting: [
      { problem: 'MyBatis parameterType 불일치로 쿼리 실행 시 TypeException 발생', cause: 'XML에서 parameterType을 String으로 지정했으나 실제 int 전달', solution: 'parameterType을 int로 수정하고, #{} 바인딩 타입 명시', learned: 'MyBatis 타입 매핑의 엄격성과 디버깅 방법을 체득' },
      { problem: 'DispatcherServlet이 정적 리소스(CSS/JS)까지 가로채는 문제', cause: 'url-pattern을 /로 설정하여 모든 요청을 가로챔', solution: 'servlet-context.xml에 <resources> 태그로 정적 리소스 경로 예외 처리', learned: 'Spring MVC의 요청 흐름과 정적 리소스 처리 메커니즘 이해' }
    ],
    retro: {
      good: ['프레임워크의 필요성을 코드 레벨에서 직접 증명', 'Spring 설정 XML의 역할 분리 이해'],
      bad: ['테스트 코드 부재 — 수동 테스트에 의존', 'Spring Boot가 아닌 Legacy 설정의 복잡성'],
      next: ['JUnit + Mockito 테스트 코드 추가', 'Spring Boot로 재마이그레이션']
    }
  },
  'daypoo': {
    tagline: '전국 5만 건 공공 화장실 데이터 시각화 + AI 건강 인사이트',
    overview: {
      problem: '공공 화장실 위치 정보가 분산되어 있고, 개인 건강 데이터를 체계적으로 관리할 도구가 부족',
      whyBuilt: '팀원 3명이 실생활 불편함에서 출발 — 위치 기반 서비스 + AI 분석이라는 복합 기술 통합 경험을 목표로 했습니다.',
      features: ['PostGIS 기반 5만 건 공간 검색', 'JWT + OAuth2 카카오 인증', '토스페이먼츠 결제 + 멱등성 보장', 'Docker + CI/CD 파이프라인']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Spring Boot 3.4', r: '최신 LTS' }, { n: 'Spring Security', r: '인증/인가' }, { n: 'JWT + OAuth2', r: '토큰 기반 인증' }] },
      { name: 'Database', items: [{ n: 'PostgreSQL+PostGIS', r: '공간 검색' }, { n: 'Redis', r: 'Rate Limiting' }] },
      { name: 'Infra', items: [{ n: 'Docker', r: '환경 표준화' }, { n: 'GitHub Actions', r: 'CI/CD' }, { n: 'Nginx', r: '리버스 프록시' }] }
    ],
    archMermaid: 'flowchart LR\n  Client-->Nginx\n  Nginx-->SpringBoot[Spring Boot API]\n  SpringBoot-->PostgreSQL[(PostgreSQL+PostGIS)]\n  SpringBoot-->Redis[(Redis)]\n  SpringBoot-->GPT[GPT-4o API]',
    erdMermaid: 'erDiagram\n  USERS ||--o{ RECORDS : creates\n  USERS ||--o{ PAYMENTS : makes\n  TOILETS ||--o{ REVIEWS : has\n  USERS { bigint id PK\n    string email\n    string provider }\n  RECORDS { bigint id PK\n    timestamp recorded_at\n    text ai_analysis }\n  TOILETS { bigint id PK\n    point location\n    string name }\n  PAYMENTS { bigint id PK\n    string idempotency_key\n    int amount }',
    useCases: [
      { title: 'OAuth2 카카오 로그인', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant S as Spring Security\n  participant K as Kakao OAuth\n  participant DB as Database\n  C->>S: 로그인 요청\n  S->>K: 인가 코드 요청\n  K-->>S: 인가 코드\n  S->>K: Access Token 요청\n  K-->>S: Access Token\n  S->>DB: 사용자 조회/생성\n  S-->>C: JWT 발급' },
      { title: '결제 플로우', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant T as 토스페이먼츠\n  participant S as Server\n  participant DB as Database\n  C->>T: 결제 요청\n  T-->>C: paymentKey\n  C->>S: 결제 승인 요청\n  S->>S: 멱등성 키 검증\n  S->>T: 승인 API 호출\n  T-->>S: 승인 결과\n  S->>DB: 결제 내역 저장\n  S-->>C: 완료 응답' }
    ],
    timeline: [
      { week: 'Week 1-2', milestone: '설계 및 인증', desc: 'ERD 설계, JWT/OAuth2 인증 시스템 구축' },
      { week: 'Week 3', milestone: '핵심 기능', desc: 'PostGIS 공간 검색, 결제 API 구현' },
      { week: 'Week 4', milestone: 'AI + 인프라', desc: 'GPT-4o 연동, Docker + CI/CD 구축' },
      { week: 'Week 5', milestone: '배포', desc: 'Nginx SSL 설정, 프로덕션 배포' }
    ],
    keyImpls: [
      { title: 'Redis Rate Limiting', summary: 'Sliding Window 알고리즘으로 API 남용 방지. IP 기반 + 사용자 기반 이중 제한', code: { lang: 'java', snippet: '@Component\npublic class RateLimitInterceptor implements HandlerInterceptor {\n    private final StringRedisTemplate redis;\n    \n    @Override\n    public boolean preHandle(HttpServletRequest req, ...) {\n        String key = "rate:" + getClientIp(req);\n        Long count = redis.opsForValue().increment(key);\n        if (count == 1) redis.expire(key, 60, TimeUnit.SECONDS);\n        if (count > 100) throw new RateLimitException();\n        return true;\n    }\n}' } },
      { title: '토스페이먼츠 멱등성 보장', summary: '멱등성 키(UUID)로 중복 결제 방지. 결제 전 DB에 키를 기록하고 중복 요청 시 기존 결과 반환', code: { lang: 'java', snippet: '@Transactional\npublic PaymentResult confirmPayment(PaymentRequest req) {\n    if (paymentRepo.existsByIdempotencyKey(req.getKey()))\n        return paymentRepo.findByIdempotencyKey(req.getKey());\n    // 토스 API 승인 호출\n    TossResponse res = tossClient.confirm(req);\n    return paymentRepo.save(Payment.from(res, req.getKey()));\n}' } }
    ],
    troubleshooting: [
      { problem: 'Redis Rate Limiting 키가 분산 환경에서 충돌', cause: '서버 인스턴스별 로컬 카운터가 아닌 공유 Redis를 사용했으나 키 네이밍 규칙이 불일치', solution: '키 prefix를 "rate:{endpoint}:{ip}" 형식으로 통일, TTL을 원자적 연산으로 설정', learned: '분산 시스템에서의 네이밍 컨벤션과 원자적 연산의 중요성' },
      { problem: '토스페이먼츠 멱등성 키 설계 시 UUID 충돌 가능성 우려', cause: '클라이언트에서 생성한 UUID의 유일성을 서버에서 보장해야 하는 문제', solution: 'DB unique constraint + try-catch로 중복 시 기존 결제 결과 반환', learned: '멱등성 설계는 "같은 요청은 같은 결과"라는 원칙에 충실해야 함' }
    ],
    retro: {
      good: ['복합 기술 스택(PostGIS+Redis+OAuth2+결제) 통합 경험', 'Docker + CI/CD 파이프라인 구축으로 배포 자동화'],
      bad: ['테스트 커버리지 부족 — 통합 테스트 미작성', 'AI 분석 결과 캐싱 전략 미흡'],
      next: ['Testcontainers로 통합 테스트 구축', 'AI 응답 캐싱으로 비용 최적화']
    }
  },
  'creative-archive': {
    tagline: 'BGF 재직 시절 디자인 자산물 아카이빙 React 카탈로그',
    overview: {
      problem: '이전 직장에서 제작한 디자인 작업물이 흩어져 있어 체계적 관리 필요',
      whyBuilt: 'Redux Toolkit 실습 목적 + 디자인 경력 아카이빙을 동시에 달성하고자 6일간 집중 개발했습니다.',
      features: ['Redux Slice 패턴 상태 관리', '실시간 검색 + 카테고리 필터', '다크/라이트 모드 토글']
    },
    techCategories: [
      { name: 'Frontend', items: [{ n: 'React 18', r: '컴포넌트 기반 UI' }, { n: 'Redux Toolkit', r: '전역 상태 관리 실습' }, { n: 'Vite', r: '빠른 번들링' }] }
    ],
    archMermaid: 'flowchart LR\n  User-->React[React App]\n  React-->Redux[Redux Store]\n  Redux-->Slice[Category Slice]\n  React-->Router[React Router]\n  Router-->Pages[Gallery Pages]\n  React-->GHPages[GitHub Pages]',
    dataFlowMermaid: 'flowchart TD\n  Store[(Redux Store)]\n  Filter[Filter Slice]\n  Items[Items Data]\n  UI[Gallery UI]\n  Store --- Filter\n  Store --- Items\n  Filter -->|Selector| UI\n  Items -->|Selector| UI',
    useCases: [
      { title: '검색 + 필터 플로우', mermaid: 'sequenceDiagram\n  participant U as User\n  participant C as SearchComponent\n  participant R as Redux Store\n  participant G as Gallery\n  U->>C: 검색어 입력\n  C->>C: debounce 300ms\n  C->>R: dispatch(setFilter)\n  R->>R: createSelector 메모이제이션\n  R-->>G: 필터링된 결과\n  G-->>U: UI 업데이트' }
    ],
    timeline: [
      { week: 'Day 1-2', milestone: '프로젝트 셋업', desc: 'Vite + React + Redux Toolkit 초기 구성' },
      { week: 'Day 3-4', milestone: '핵심 기능', desc: '갤러리 UI, 검색, 필터, 정렬 구현' },
      { week: 'Day 5-6', milestone: '마무리', desc: '다크모드, 반응형, GitHub Pages 배포' }
    ],
    keyImpls: [
      { title: 'createSelector 무한 렌더링 해결', summary: 'useSelector가 매 렌더링마다 새 참조를 반환하여 무한 루프 발생 → createSelector로 메모이제이션 적용', code: { lang: 'javascript', snippet: 'const selectFilteredItems = createSelector(\n  [(state) => state.portfolio.items,\n   (state) => state.portfolio.filter],\n  (items, filter) => {\n    return items.filter(item =>\n      item.category === filter.category &&\n      item.title.includes(filter.search)\n    );\n  }\n);' } }
    ],
    troubleshooting: [
      { problem: 'useSelector 참조 동일성 문제로 컴포넌트 무한 리렌더링', cause: 'useSelector에서 매번 새 배열을 생성하는 filter() 호출', solution: 'createSelector를 사용해 입력이 같으면 동일 참조 반환', learned: 'React-Redux에서 참조 동일성(referential equality)이 성능의 핵심' }
    ],
    retro: {
      good: ['6일 만에 기획부터 배포까지 완료', 'Redux 상태 관리 패턴 체득'],
      bad: ['TypeScript 미적용으로 타입 안전성 부족', '테스트 코드 부재'],
      next: ['TypeScript 마이그레이션', 'React Testing Library 테스트 추가']
    }
  },
  '62dangnyang': {
    tagline: '공공데이터 API 기반 유기동물 입양·임시보호 매칭 플랫폼',
    overview: {
      problem: '유기동물 정보가 공공데이터 포털에만 존재하여 접근성이 낮고, 입양/임시보호 매칭이 체계화되지 않음',
      whyBuilt: '부트캠프 팀 프로젝트로, 쇼핑몰 아키텍처를 비영리 도메인에 재해석하는 설계 경험을 목표로 했습니다.',
      features: ['공공데이터 API 실연동', 'JPA 기반 도메인 모델 설계', '입양/임보 신청 프로세스', '즐겨찾기 기능']
    },
    techCategories: [
      { name: 'Backend', items: [{ n: 'Spring Boot 3.2', r: '팀 표준' }, { n: 'Spring Security + JWT', r: '인증' }, { n: 'JPA', r: 'ORM' }] },
      { name: 'Database', items: [{ n: 'MySQL 8', r: '관계형 데이터' }] },
      { name: 'Frontend', items: [{ n: 'React + TypeScript', r: '타입 안전 UI' }] }
    ],
    archMermaid: 'flowchart LR\n  Client-->SpringBoot[Spring Boot API]\n  SpringBoot-->MySQL[(MySQL)]\n  SpringBoot-->PublicAPI[공공데이터 포털 API]',
    erdMermaid: 'erDiagram\n  USERS ||--o{ ADOPTION_REQUEST : submits\n  USERS ||--o{ VOLUNTEER_APPLY : submits\n  USERS ||--o{ FAVORITES : adds\n  ANIMALS ||--o{ ADOPTION_REQUEST : receives\n  ANIMALS ||--o{ FAVORITES : has\n  USERS { bigint id PK\n    string email }\n  ANIMALS { bigint id PK\n    string species\n    string status }\n  ADOPTION_REQUEST { bigint id PK\n    string status }\n  VOLUNTEER_APPLY { bigint id PK\n    date start_date }',
    useCases: [
      { title: '유기동물 조회', mermaid: 'sequenceDiagram\n  participant C as Client\n  participant S as Server\n  participant API as 공공데이터 포털\n  C->>S: 동물 조회 요청\n  S->>API: API 호출\n  API-->>S: XML 응답\n  S->>S: 파싱 및 변환\n  S-->>C: JSON 응답' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '설계', desc: 'ERD 설계, Git 브랜치 전략 수립' },
      { week: 'Week 2', milestone: 'API 연동', desc: '공공데이터 API 연동 및 파싱' },
      { week: 'Week 3', milestone: '핵심 기능', desc: '입양/임보 신청, 즐겨찾기 구현' },
      { week: 'Week 4', milestone: '마무리 및 배포', desc: '통합 테스트, 프로덕션 배포' }
    ],
    keyImpls: [
      { title: '도메인 모델 재해석', summary: '쇼핑몰의 상품→동물, 주문→입양신청으로 재해석. AdoptionRequest / VolunteerApply를 분리하여 비영리 도메인 특성 반영', code: { lang: 'java', snippet: '@Entity\npublic class AdoptionRequest {\n    @Id @GeneratedValue\n    private Long id;\n    \n    @ManyToOne(fetch = LAZY)\n    private User applicant;\n    \n    @ManyToOne(fetch = LAZY)\n    private Animal animal;\n    \n    @Enumerated(STRING)\n    private AdoptionStatus status; // PENDING, APPROVED, REJECTED\n}' } }
    ],
    troubleshooting: [
      { problem: '공공데이터 API 응답 구조 불일치로 파싱 에러 발생', cause: 'API 문서와 실제 응답 XML 구조가 다름 (필드 누락, 타입 불일치)', solution: 'Optional + null-safe 파싱 유틸리티 작성, 실패 시 기본값 반환', learned: '외부 API 연동 시 방어적 프로그래밍의 필요성' }
    ],
    retro: {
      good: ['쇼핑몰 도메인을 비영리로 재해석하는 설계 경험', '팀 Git 브랜치 전략 수립 및 운영'],
      bad: ['프로젝트 기간 내 프론트엔드 완성도 부족', '공공데이터 API 응답 지연에 대한 캐싱 미적용'],
      next: ['Redis 캐싱으로 API 응답 시간 개선', '관리자 대시보드 추가']
    }
  },
  'portmanager': {
    tagline: 'Windows 포트 충돌(EADDRINUSE) 해결용 데스크톱 앱',
    overview: {
      problem: '개발 중 포트 충돌(EADDRINUSE) 에러가 반복 발생하지만, 매번 CLI로 PID를 찾아 종료하는 과정이 번거로움',
      whyBuilt: '직접 겪은 불편함을 도구로 해결하는 개발자 마인드셋 — 문제 인식부터 배포까지 전 과정을 경험하고자 했습니다.',
      features: ['LISTEN 포트 실시간 조회', 'PID 기반 프로세스 종료', '포터블 exe 배포']
    },
    techCategories: [
      { name: 'Desktop', items: [{ n: 'Electron 33', r: '크로스플랫폼 데스크톱' }, { n: 'Node.js 20+', r: '시스템 API 접근' }] },
      { name: 'Frontend', items: [{ n: 'HTML/CSS/JS', r: '경량 UI' }] }
    ],
    archMermaid: 'flowchart LR\n  UI[Renderer Process]-->|contextBridge|Main[Main Process]\n  Main-->|child_process|OS[Windows OS]\n  OS-->|netstat|Main\n  Main-->|IPC|UI',
    dataFlowMermaid: 'sequenceDiagram\n  participant U as User\n  participant R as Renderer\n  participant M as Main Process\n  participant OS as Windows OS\n  U->>R: 포트 조회 클릭\n  R->>M: IPC invoke\n  M->>OS: netstat -ano\n  OS-->>M: TCP/UDP 포트 목록\n  M-->>R: 파싱된 결과\n  R-->>U: 테이블 표시',
    useCases: [
      { title: '포트 조회 및 종료', mermaid: 'sequenceDiagram\n  participant U as User\n  participant App as PortManager\n  participant OS as Windows\n  U->>App: 포트 검색\n  App->>OS: netstat -ano\n  OS-->>App: 포트 목록\n  App-->>U: 결과 표시\n  U->>App: PID 종료 요청\n  App->>App: PID 정수 검증\n  App->>OS: taskkill /PID\n  OS-->>App: 종료 결과\n  App-->>U: 완료 알림' }
    ],
    timeline: [
      { week: 'Week 1', milestone: '기획 및 프로토타입', desc: 'Electron 셋업, netstat 파싱 로직' },
      { week: 'Week 2', milestone: '핵심 기능', desc: '포트 조회, 프로세스 종료, 검색' },
      { week: 'Week 3', milestone: '보안 및 배포', desc: 'contextIsolation, CSP, 포터블 빌드' }
    ],
    keyImpls: [
      { title: 'contextBridge 보안 설계', summary: 'contextIsolation + contextBridge로 최소 권한 API만 렌더러에 노출. 커맨드 인젝션 방지를 위한 PID 정수 검증', code: { lang: 'javascript', snippet: '// preload.js\ncontextBridge.exposeInMainWorld("portAPI", {\n  getPorts: () => ipcRenderer.invoke("get-ports"),\n  killProcess: (pid) => {\n    if (!Number.isInteger(pid)) throw new Error("Invalid PID");\n    return ipcRenderer.invoke("kill-process", pid);\n  }\n});' } }
    ],
    troubleshooting: [
      { problem: 'Electron에서 netstat 출력 파싱 시 인코딩 깨짐', cause: 'Windows cmd 기본 인코딩(CP949)과 Node.js UTF-8 불일치', solution: 'child_process.exec에 encoding 옵션 지정 + iconv-lite로 변환', learned: '크로스플랫폼 개발 시 OS별 인코딩 차이 고려 필요' }
    ],
    retro: {
      good: ['불편함을 직접 도구로 만드는 경험', 'Electron 보안 모델(contextIsolation) 이해'],
      bad: ['Windows 전용 — macOS/Linux 미지원', 'UI 디자인 완성도 부족'],
      next: ['크로스플랫폼 지원 (macOS lsof 연동)', 'UI/UX 개선 및 시스템 트레이 상주']
    }
  }
};
