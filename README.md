<div align="center">
<h1>offco</h1>
offco는 office와 community를 합친 단어로 단체모임을 위한 sns이다.
</div>

### ScreenShot
<p>
<img src="https://user-images.githubusercontent.com/87973617/184475773-f93476ab-cb8d-47c1-8e89-52ee6fb222ce.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475755-c70ef898-8695-48d5-bf77-ae84046a3de8.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475788-2fb5bb56-a800-4143-a856-aa8bbe41d215.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475790-87ef5186-f030-4a0d-97bf-e6e1ffe78924.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475794-872779eb-531b-465a-86b9-ba9abe1aa179.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475800-e836fe92-cda6-4ee6-b92d-6cedc7f0499a.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475806-731be7d8-d4e2-404e-926a-ebbc90d5387c.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475808-1a47eebc-4457-478b-977f-092902367838.png" width=auto height="300"/>
<img src="https://user-images.githubusercontent.com/87973617/184475814-9cfcc515-c1d6-4588-b112-61795107d9fc.png" width=auto height="360"/>
<img src="https://user-images.githubusercontent.com/87973617/184475817-738b709d-15f4-4d4b-82d0-cf90aae2e9b3.png" width=auto height="360"/>
<img src="https://user-images.githubusercontent.com/87973617/184475823-4c0e74e5-afe9-407c-bb49-875b33e7bbd9.png" width="200" height="360"/>
<img src="https://user-images.githubusercontent.com/87973617/184475825-61bf00fe-c34d-422c-950d-ca6e8589f64b.png" width="200" height="360"/>
</p>

## 구상 이유
대학 신입생때에는 팀플, 학생회, 동아리 등 다앙한 단체 모임을 하게된다.   
이와 같은 단체 모임에는 수많은 인원이 속해있기 때문에 대부분의 대화와 공지는 카카오톡을 이용한다.
따라서 카카오톡 친구리스트와 단체 채팅방 수가 급격히 많아진다.

단체 모임 활동이 활발한 당시에는 카카오톡 사용에 단점을 느끼지 못한다.
그러나 4학년이 되면서 학교 단체 모임 활동이 자연스럽게 줄게된 시점에 카카오톡을 보았을 때 연락하지 않는 친구들과 사용하지 않은 단체 채팅방이 마구잡이로 섞여있어 정리하는데 번거러움을 느끼게 될 것이다.

이러한 문제를 단체모임만을 위한 sns인 offco가 해결할수 있다고 생각한다. 

## 스토리보드
figma 사용
![image](https://user-images.githubusercontent.com/87973617/184476901-9f7aba60-a5b1-4045-9c99-1e12e2d31653.png)


## 기간
### 주차별 일정
1주차.    
+ 프로젝트 구성 및 스토리보드 작성

2주차.
+ 회원가입 및 로그인

3주차.
+ 유저 페이지
+ 방만들기
+ 초대 링크 부여

4주차.
+ 초대 수락 및 페이지 이동

5주차.
+ 방의 사용자 list
+ 달력만들기

6주차.
+ 채팅 
+ vuex로 방만들기, 초대링크 구현 (일정 수정 사항)

7주차.
+ modal로 달력에 일정 추가
+ vuex로 회원가입, 로그인 구현 (일정 수정 사항)

8주차.
+ 최종 점검

## 기능
+ 유저가 방을 만들게되면 관리자로서 초대 링크를 부여할 수 있다. 
+ 초대 수락한 사용자는 단체 채팅방 및 친구 list에 추가된다.
+ 각 모임 별로 친구 list가 구별되어 있으며, 우저가 원하는 사람끼리 채팅방을 추가 개설할 수 있다.
+ 각 모임별로 캘린더가 있어 단체 일정 관리가 가능하다.
+ 유저가 더이상 활동하지 않는 모임을 삭제할 경우,    
모임의 친구 list, 채팅방, 캘린더을 일괄적으로 삭제할 수 있다.

## 기술
+ Node.js
+ Vue
+ Vuex
+ Vue-router
+ Figma

## 업데이트
https://github.com/sujungYu/renew_offco_project
