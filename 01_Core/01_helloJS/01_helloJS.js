console.log('helloworld');

// 코드러너 단축키
// ctrl + alt + n

// ctrl + / : 한줄 주석
/* alt + shift + a : 여러줄 주석 */

console.log('안녕하세요');

// 코드 스니펫 설정
// 커맨드 파레트 -> snippets -> javascript
/* 
    "Print to console": {
        "prefix": "cl",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    }
*/


// 파일 목록 탭 : explorer 탭 이동 단축키
// ctrl + shift + e


// 파일 생성 및 폴더 생성 단축키 설정
// 커맨드 파레트 -> preferences:open keyboard shortcut (json)

//file생성 단축키 cntl + shift + e -> cntl + n
//폴더 생성 단축키 cntl + shift + e -> cntl + shift + n

//줄복사 : alt + shift + 아래방향키
// 탭열고,닫기: cntl + b 

/* 
[
  { "key": "ctrl+n",
    "command": "explorer.newFile",
    "when": "!editorFocus" },


  { "key": "ctrl+shift+n",
    "command": "explorer.newFolder",
    "when": "!editorFocus" }
]
*/