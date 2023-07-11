# BLUELOG PROJECT

- 배포 링크 : https://bluelog-4520e.web.app/
- github 링크 : https://github.com/seoJunPyo/bluelog

## Introduce 

`BLUELOG`는 블로그 플랫폼으로 게시물을 작성하고 카테고리로 묶어 관리할 수 있고, 태그를 통해 게시물 검색할 수 있는 기능을 제공합니다. 게시물 작성에는 마크 다운 편집기를 제공합니다.


## Project Stack
- React
- React Router
- Redux
- React Hook Form
- Zod
- Mantine
- Tiptap
- Firebase
- Algolia

## Meaning
이번 프로젝트에서 상태 관리 툴로 `Redux`를 채택하였습니다. `Recoil`과 `React-Query`처럼 `Redux`를 대체할 수 있는 툴이 등장했지만, 여전히 `Redux`는 현업에서 많이 쓰이고 `Redux`를 사용해 개발된 서비스가 많아 배울 필요성을 느껴 채택하게 되었습니다. `Redux`로 개발을 진행하면서 `Redux`와 `Recoil + React-Query`의 차이와 장단점을 비교해볼 수 있는 좋은 경험이었습니다.

`Firebase`로 `serverless` 앱을 개발해보는 경험을 할 수 있었습니다. 덕분에 서버를 구축하고 `api`를 만드는 작업없이 수월하게 앱을 개발할 수 있었습니다. 또한, 구현하기 까다로웠던 사용자 인증을 `Firebase`에서 제공하는 인증 기능을 통해 보다 간단하게 적용할 수 있었습니다. 

검색 기능을 구현하기 위해 `Firebase`의 확장 기능을 통해 `Algolia`와 `Firestore`를 연동시켜 사용하였습니다. `Firebase`에서 제공하는 API만으로는 검색을 구현하는데는 한계가 있어 이를 해결하기 위한 방법으로 `Algolia`를 사용하는 방법을 선택하였습니다. 

`Firebase`의 호스팅 기능과 `Github`의 actions을 통해 간단한 CI/CD을 구축하는 경험을 할 수 있었습니다. 

## 추후 개발 예정
- '나중에 읽을 게시물' 페이지 개발
- 다른 유저 프로필 방문 
- 태그 검색 시,태그가 완전히 일치하는 게시물이 먼저 노출되도록 우선 순위 변경 

  1. 검색한 태그와 게시물의 태그가 완전 일치 && 좋아요 높음
  2. 검색한 태그와 게시물의 태그가 완전 일치
  3. 검색한 태그가 제목, 본문에 포함 && 좋아요 높음
  4. 검색한 태그가 제목, 본문에 포함
