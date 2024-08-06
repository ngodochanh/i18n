// Check for any missing settings by uncomment
// import en from '../en';
// const translation: typeof en = {
const translation = {
  translation: {
    app: {
      name: 'DSP.ONE ChatBot',
      nameWithoutClaude: 'DSP.ONE ChatBot',
      inputMessage: '입력해 주십시오',
    },
    deleteDialog: {
      title: '삭제 확인',
      content: '채팅 "<Bold>{{title}}</Bold>"을(를) 삭제하시겠습니까?',
    },
    clearDialog: {
      title: '삭제 확인',
      content: '모든 대화 기록을 삭제하시겠습니까?',
    },
    languageDialog: {
      title: '언어 변경',
    },
    button: {
      newChat: '새로운 채팅',
      SaveAndSubmit: '변경 & 전송',
      resend: '재전송',
      regenerate: '재생성',
      delete: '삭제',
      deleteAll: '모두 삭제',
      ok: '확인',
      cancel: '취소',
      menu: '메뉴',
      language: '언어 변경',
      clearConversation: '모든 대화 지우기',
      signOut: '로그아웃',
    },
    error: {
      answerResponse: '응답 중 오류가 발생했습니다.',
      notFoundConversation: '지정된 채팅이 존재하지 않기 때문에 새로운 채팅 화면을 표시했습니다.',
      notFoundPage: '찾고 있는 페이지를 찾을 수 없습니다.',
      predict: {
        general: '예측 중 오류가 발생했습니다.',
        invalidResponse: '예상치 못한 응답이 반환되었습니다.',
      },
    },
    //
    signIn: {
      username: {
        placeholder: {
          enterEmail: '이메일을 입력하세요',
        },
      },
    },
    signUp: {
      password: {
        label: '비밀번호:',
        placeholder: {
          enterPassword: '비밀번호를 입력하세요',
        },
      },
      confirm_password: {
        label: '비밀번호 확인:',
      },
    },
    forceNewPassword: {
      password: {
        placeholder: '비밀번호를 입력하세요:',
      },
    },
    forgotPassword: {
      username: {
        placeholder: '이메일을 입력하세요:',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: '확인 코드를 입력하세요:',
        label: '새로운 레이블',
      },
      confirm_password: {
        placeholder: '비밀번호를 입력하세요:',
      },
    },
    setupTotp: {
      QR: {
        totpIssuer: '테스트 발급자',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        label: '새로운 레이블',
        placeholder: '확인 코드를 입력하세요:',
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: '새로운 레이블',
        placeholder: '확인 코드를 입력하세요:',
      },
    },
  },
};

export default translation;
