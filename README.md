# BLUELOG PROJECT

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

## Meaning
이번 프로젝트에서 상태 관리 툴로 `Redux`를 채택하였습니다. `Recoil`과 `React-Query`처럼 `Redux`를 대체할 수 있는 툴이 등장했지만, 여전히 `Redux`는 현업에서 많이 쓰이고 `Redux`를 사용해 개발된 서비스가 많아 배울 필요성을 느껴 채택하게 되었습니다. `Redux`로 개발을 진행하면서 `Recoil`과 `React-Query`의 차이와 장단점을 비교해볼 수 있는 좋은 경험이었습니다.

`Firebase`로 `serverless` 앱을 개발해보는 경험을 할 수 있었습니다. 덕분에 서버를 구축하고 `api`를 만드는 작업없이 수월하게 앱을 개발할 수 있었습니다. 또한, 구현하기 까다로웠던 사용자 인증을 `Firebase`에서 제공하는 인증 기능을 통해 보다 간단하게 적용할 수 있었습니다. 