const translation = {
  translation: {
    signIn: {
      button: {
        login: 'Đăng nhập',
      },
      placeholder: {
        enterEmail: 'Nhập email của bạn',
        enterPassword: 'Nhập mật khẩu của bạn',
      },
    },
    app: {
      name: 'DSP.ONE ChatBot',
      nameWithoutClaude: 'DSP.ONE ChatBot',
      inputMessage: 'Gửi tin nhắn',
      starredBots: 'Bot đã đánh dấu sao',
      recentlyUsedBots: 'Bot sử dụng gần đây',
      conversationHistory: 'Lịch sử',
      chatWaitingSymbol: '▍',
      adminConsoles: 'Chỉ dành cho quản trị viên',
    },
    agent: {
      label: 'Tác nhân',
      help: {
        overview:
          'Bằng cách sử dụng chức năng Tác nhân, chatbot của bạn có thể tự động xử lý các tác vụ phức tạp hơn.',
      },
      hint: `Tác nhân tự động xác định công cụ nào cần sử dụng để trả lời câu hỏi của người dùng. Do thời gian cần thiết cho việc quyết định, thời gian phản hồi thường dài hơn. Kích hoạt một hoặc nhiều công cụ sẽ bật chức năng của tác nhân. Ngược lại, nếu không có công cụ nào được chọn, chức năng của tác nhân sẽ không được sử dụng. Khi chức năng của tác nhân được bật, việc sử dụng "Kiến thức" cũng được coi là một trong những công cụ. Điều này có nghĩa là "Kiến thức" có thể không được sử dụng trong các phản hồi.`,
      progress: {
        label: 'Tác nhân đang suy nghĩ...',
      },
      tools: {
        get_weather: {
          name: 'Thời tiết hiện tại',
          description: 'Lấy dự báo thời tiết hiện tại.',
        },
        sql_db_query: {
          name: 'Truy vấn cơ sở dữ liệu',
          description:
            'Thực hiện truy vấn SQL chi tiết và chính xác để lấy kết quả từ cơ sở dữ liệu.',
        },
        sql_db_schema: {
          name: 'Sơ đồ cơ sở dữ liệu',
          description: 'Lấy sơ đồ và các hàng mẫu cho danh sách các bảng.',
        },
        sql_db_list_tables: {
          name: 'Liệt kê bảng cơ sở dữ liệu',
          description: 'Liệt kê tất cả các bảng có sẵn trong cơ sở dữ liệu.',
        },
        sql_db_query_checker: {
          name: 'Kiểm tra truy vấn',
          description:
            'Kiểm tra xem truy vấn SQL của bạn có chính xác không trước khi thực thi.',
        },
        internet_search: {
          name: 'Tìm kiếm Internet',
          desciription: 'Tìm kiếm thông tin trên internet.',
        },
      },
    },
    bot: {
      label: {
        myBots: 'Bot của tôi',
        recentlyUsedBots: 'Bot chia sẻ đã sử dụng gần đây',
        knowledge: 'Kiến thức',
        url: 'URL',
        sitemap: 'URL Sitemap',
        file: 'Tệp',
        loadingBot: 'Đang tải...',
        normalChat: 'Trò chuyện',
        notAvailableBot: '[KHÔNG khả dụng]',
        notAvailableBotInputMessage: 'Bot này KHÔNG khả dụng.',
        noDescription: 'Không có mô tả',
        notAvailable: 'Bot này KHÔNG khả dụng.',
        noBots: 'Không có Bot.',
        noBotsRecentlyUsed: 'Không có Bot chia sẻ đã sử dụng gần đây.',
        retrievingKnowledge: '[Đang truy xuất kiến thức...]',
        dndFileUpload:
          'Bạn có thể tải lên tệp bằng cách kéo và thả.\nCác tệp được hỗ trợ: {{fileExtensions}}',
        uploadError: 'Thông báo lỗi',
        referenceLink: 'Liên kết tham khảo',
        syncStatus: {
          queue: 'Đang chờ đồng bộ',
          running: 'Đang đồng bộ',
          success: 'Đã hoàn thành đồng bộ',
          fail: 'Đồng bộ thất bại',
        },
        fileUploadStatus: {
          uploading: 'Đang tải lên...',
          uploaded: 'Đã tải lên',
          error: 'LỖI',
        },
        quickStarter: {
          title: 'Khởi động nhanh cuộc trò chuyện ',
          exampleTitle: 'Tiêu đề',
          example: 'Ví dụ cuộc trò chuyện',
        },
        citeRetrievedContexts: 'Trích dẫn ngữ cảnh đã truy xuất',
      },
      titleSubmenu: {
        edit: 'Chỉnh sửa',
        copyLink: 'Sao chép liên kết',
        copiedLink: 'Đã sao chép',
      },
      help: {
        overview:
          'Bot hoạt động theo các hướng dẫn được xác định trước. Trò chuyện không hoạt động như mong muốn trừ khi ngữ cảnh được xác định trong tin nhắn, nhưng với bot, không cần phải xác định ngữ cảnh.',
        instructions:
          'Xác định cách bot nên hoạt động. Đưa ra hướng dẫn mơ hồ có thể dẫn đến các hành động không thể đoán trước, vì vậy hãy cung cấp hướng dẫn rõ ràng và cụ thể.',
        knowledge: {
          overview:
            'Bằng cách cung cấp kiến thức bên ngoài cho bot, nó có khả năng xử lý dữ liệu mà nó chưa được đào tạo trước.',
          url: 'Thông tin từ URL được chỉ định sẽ được sử dụng làm Kiến thức. Nếu bạn đặt URL của video YouTube, bản ghi của video đó sẽ được sử dụng làm Kiến thức.',
          sitemap:
            'Bằng cách chỉ định URL của sitemap, thông tin thu được thông qua việc tự động thu thập từ các trang web trong đó sẽ được sử dụng làm Kiến thức.',
          file: 'Các tệp đã tải lên sẽ được sử dụng làm Kiến thức.',
          citeRetrievedContexts:
            'Cấu hình xem có hiển thị ngữ cảnh được truy xuất để trả lời truy vấn của người dùng dưới dạng thông tin trích dẫn hay không.\nNếu được bật, người dùng có thể truy cập các URL nguồn gốc hoặc tệp.',
        },
        quickStarter: {
          overview:
            'Khi bắt đầu cuộc trò chuyện, cung cấp các ví dụ. Ví dụ minh họa cách sử dụng bot.',
        },
      },
      alert: {
        sync: {
          error: {
            title: 'Lỗi đồng bộ Kiến thức',
            body: 'Đã xảy ra lỗi khi đồng bộ hóa Kiến thức. Vui lòng kiểm tra thông báo sau:',
          },
          incomplete: {
            title: 'CHƯA sẵn sàng',
            body: 'Bot này chưa hoàn thành việc đồng bộ hóa kiến thức, vì vậy kiến thức trước khi cập nhật được sử dụng.',
          },
        },
      },
      samples: {
        title: 'Mẫu hướng dẫn',
        anthropicLibrary: {
          title: 'Thư viện gợi ý Anthropic',
          sentence: 'Bạn cần thêm ví dụ? Truy cập: ',
          url: 'https://docs.anthropic.com/claude/prompt-library',
        },
        pythonCodeAssistant: {
          title: 'Trợ lý lập trình Python',
          prompt: `Viết một đoạn mã Python ngắn gọn và chất lượng cao cho nhiệm vụ đã cho, giống như một chuyên gia Python rất giỏi sẽ viết. Bạn đang viết mã cho một nhà phát triển có kinh nghiệm nên chỉ thêm chú thích cho những điều không rõ ràng. Đảm bảo bao gồm bất kỳ import nào cần thiết. 
KHÔNG BAO GIỜ viết bất cứ điều gì trước khối \`\`\`python\`\`\`. Sau khi bạn hoàn thành việc tạo mã và sau khối \`\`\`python\`\`\`, hãy kiểm tra kỹ công việc của bạn để đảm bảo không có lỗi, sai sót hoặc không nhất quán. Nếu có lỗi, hãy liệt kê những lỗi đó trong thẻ <error>, sau đó tạo một phiên bản mới với những lỗi đó đã được sửa. Nếu không có lỗi, hãy viết "ĐÃ KIỂM TRA: KHÔNG CÓ LỖI" trong thẻ <error>.`,
        },
        mailCategorizer: {
          title: 'Phân loại thư',
          prompt: `Bạn là một đại lý dịch vụ khách hàng được giao nhiệm vụ phân loại email theo loại. Vui lòng đưa ra câu trả lời của bạn và sau đó giải thích lý do phân loại của bạn. 

Các danh mục phân loại là: 
(A) Câu hỏi trước khi bán hàng 
(B) Mặt hàng bị hỏng hoặc có lỗi 
(C) Câu hỏi về thanh toán 
(D) Khác (vui lòng giải thích)

Bạn sẽ phân loại email này như thế nào?`,
        },
        fitnessCoach: {
          title: 'Huấn luyện viên thể hình cá nhân',
          prompt: `Bạn là một huấn luyện viên thể hình cá nhân lạc quan, nhiệt tình tên là Sam. Sam đam mê giúp khách hàng tập thể dục và có lối sống lành mạnh hơn. Bạn viết với giọng điệu khuyến khích và thân thiện và luôn cố gắng hướng dẫn khách hàng của mình đến các mục tiêu thể hình tốt hơn. Nếu người dùng hỏi bạn điều gì không liên quan đến thể hình, hãy đưa chủ đề trở lại thể hình hoặc nói rằng bạn không thể trả lời.`,
        },
      },
      create: {
        pageTitle: 'Tạo Bot của tôi',
      },
      edit: {
        pageTitle: 'Chỉnh sửa Bot của tôi',
      },

      item: {
        title: 'Tên',
        description: 'Mô tả',
        instruction: 'Hướng dẫn',
      },
      explore: {
        label: {
          pageTitle: 'Bảng điều khiển Bot',
        },
      },
      apiSettings: {
        pageTitle: 'Cài đặt API xuất bản Bot chia sẻ',
        label: {
          endpoint: 'Điểm cuối API',
          usagePlan: 'Kế hoạch sử dụng',
          allowOrigins: 'Nguồn gốc được phép',
          apiKeys: 'Khóa API',
          period: {
            day: 'Mỗi NGÀY',
            week: 'Mỗi TUẦN',
            month: 'Mỗi THÁNG',
          },
          apiKeyDetail: {
            creationDate: 'Ngày tạo',
            active: 'Hoạt động',
            inactive: 'Không hoạt động',
            key: 'Khóa API',
          },
        },
        item: {
          throttling: 'Điều tiết',
          burstLimit: 'Giới hạn đột biến',
          rateLimit: 'Giới hạn tốc độ',
          quota: 'Hạn mức',
          requestLimit: 'Giới hạn yêu cầu',
          offset: 'Bù đắp',
        },
        help: {
          overview:
            'Tạo API cho phép các chức năng của Bot được truy cập bởi các máy khách bên ngoài; API cho phép tích hợp với các ứng dụng bên ngoài.',
          endpoint: 'Máy khách có thể sử dụng Bot từ điểm cuối này.',
          usagePlan:
            'Kế hoạch sử dụng xác định số lượng hoặc tốc độ yêu cầu mà API của bạn chấp nhận từ một máy khách. Liên kết API với kế hoạch sử dụng để theo dõi các yêu cầu mà API của bạn nhận được.',
          throttling: 'Giới hạn tốc độ mà người dùng có thể gọi API của bạn.',
          rateLimit:
            'Nhập tốc độ, tính bằng yêu cầu mỗi giây, mà máy khách có thể gọi API của bạn.',
          burstLimit:
            'Nhập số lượng yêu cầu đồng thời mà một máy khách có thể thực hiện đối với API của bạn.',
          quota:
            'Bật hạn mức để giới hạn số lượng yêu cầu mà người dùng có thể thực hiện đối với API của bạn trong một khoảng thời gian nhất định.',
          requestLimit:
            'Nhập tổng số yêu cầu mà người dùng có thể thực hiện trong khoảng thời gian bạn chọn trong danh sách thả xuống.',
          allowOrigins:
            'Nguồn gốc máy khách được phép truy cập. Nếu nguồn gốc không được phép, người gọi sẽ nhận được phản hồi 403 Forbidden và bị từ chối truy cập vào API. Nguồn gốc phải tuân theo định dạng: "(http|https)://tên-máy-chủ" hoặc "(http|https)://tên-máy-chủ:cổng" và có thể sử dụng dấu hoa thị (*).',
          allowOriginsExample:
            'ví dụ: https://tên-máy-chủ-của-bạn.com, https://*.tên-máy-chủ-của-bạn.com, http://localhost:8000',
          apiKeys:
            'Khóa API là một chuỗi chữ và số được sử dụng để xác định máy khách của API của bạn. Nếu không, người gọi sẽ nhận được phản hồi 403 Forbidden và bị từ chối truy cập vào API.',
        },
        button: {
          ApiKeyShow: 'Hiện',
          ApiKeyHide: 'Ẩn',
        },
        alert: {
          botUnshared: {
            title: 'Vui lòng chia sẻ Bot',
            body: 'Bạn không thể xuất bản API cho bot chưa được chia sẻ.',
          },
          deploying: {
            title: 'Việc triển khai API đang TIẾN HÀNH',
            body: 'Vui lòng đợi cho đến khi việc triển khai hoàn tất.',
          },
          deployed: {
            title: 'API đã được TRIỂN KHAI',
            body: 'Bạn có thể truy cập API từ Máy khách bằng Điểm cuối API và Khóa API.',
          },
          deployError: {
            title: 'KHÔNG THỂ triển khai API',
            body: 'Vui lòng xóa API và tạo lại API.',
          },
        },
        deleteApiDaialog: {
          title: 'Xóa?',
          content:
            'Bạn có chắc chắn muốn xóa API không? Điểm cuối API sẽ bị xóa và máy khách sẽ không còn có quyền truy cập vào nó nữa.',
        },
        addApiKeyDialog: {
          title: 'Thêm Khóa API',
          content: 'Nhập tên để xác định Khóa API.',
        },
        deleteApiKeyDialog: {
          title: 'Xóa?',
          content:
            'Bạn có chắc chắn muốn xóa <Bold>{{title}}</Bold>?\nCác máy khách sử dụng Khóa API này sẽ bị từ chối truy cập vào API.',
        },
      },
      button: {
        newBot: 'Tạo Bot mới',
        create: 'Tạo',
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
        share: 'Chia sẻ',
        apiSettings: 'Cài đặt xuất bản API',
        copy: 'Sao chép',
        copied: 'Đã sao chép',
        instructionsSamples: 'Mẫu',
        chooseFiles: 'Chọn tệp',
      },
      deleteDialog: {
        title: 'Xóa?',
        content: 'Bạn có chắc chắn muốn xóa <Bold>{{title}}</Bold>?',
      },
      shareDialog: {
        title: 'Chia sẻ',
        off: {
          content:
            'Chia sẻ liên kết đang tắt, vì vậy chỉ bạn mới có thể truy cập bot này thông qua URL của nó.',
        },
        on: {
          content:
            'Chia sẻ liên kết đang bật, vì vậy TẤT CẢ người dùng có thể sử dụng liên kết này để trò chuyện.',
        },
      },
      error: {
        notSupportedFile: 'Tệp này không được hỗ trợ.',
        duplicatedFile: 'Một tệp có cùng tên đã được tải lên.',
        failDeleteApi: 'Không thể xóa API.',
      },
    },
    admin: {
      sharedBotAnalytics: {
        label: {
          pageTitle: 'Phân tích Bot chia sẻ',
          noPublicBotUsages:
            'Trong Kỳ Tính toán, không có bot công khai nào được sử dụng.',
          published: 'API đã được xuất bản.',
          SearchCondition: {
            title: 'Kỳ Tính toán',
            from: 'Từ',
            to: 'Đến',
          },
          sortByCost: 'Sắp xếp theo Chi phí',
        },
        help: {
          overview:
            'Theo dõi tình trạng sử dụng của Bot Chia sẻ và API Bot Đã Xuất bản.',
          calculationPeriod:
            'Nếu Kỳ Tính toán không được đặt, chi phí cho hôm nay sẽ được hiển thị.',
        },
      },
      apiManagement: {
        label: {
          pageTitle: 'Quản lý API',
          publishedDate: 'Ngày xuất bản',
          noApi: 'Không có API.',
        },
      },
      botManagement: {
        label: {
          pageTitle: 'Quản lý Bot',
          sharedUrl: 'URL Bot chia sẻ',
          apiSettings: 'Cài đặt xuất bản API',
          noKnowledge: 'Bot này không có Kiến thức.',
          notPublishApi: 'API của bot này chưa được xuất bản.',
          deployStatus: 'Trạng thái triển khai',
          cfnStatus: 'Trạng thái CloudFormation',
          codebuildStatus: 'Trạng thái CodeBuild',
          codeBuildId: 'ID CodeBuild',
          usagePlanOn: 'BẬT',
          usagePlanOff: 'TẮT',
          rateLimit:
            '<Bold>{{limit}}</Bold> yêu cầu mỗi giây, mà máy khách có thể gọi API.',
          burstLimit:
            'Máy khách có thể thực hiện <Bold>{{limit}}</Bold> yêu cầu đồng thời đến API.',
          requestsLimit:
            'Bạn có thể thực hiện <Bold>{{limit}}</Bold> yêu cầu <Bold>{{period}}</Bold>.',
        },
        alert: {
          noApiKeys: {
            title: 'Không có Khóa API',
            body: 'Tất cả máy khách không thể truy cập API.',
          },
        },
        button: {
          deleteApi: 'Xóa API',
        },
      },
      validationError: {
        period: 'Nhập cả Từ và Đến',
      },
    },
    deleteDialog: {
      title: 'Xóa?',
      content: 'Bạn có chắc chắn muốn xóa <Bold>{{title}}</Bold>?',
    },
    clearDialog: {
      title: 'Xóa TẤT CẢ?',
      content: 'Bạn có chắc chắn muốn xóa TẤT CẢ cuộc trò chuyện?',
    },
    languageDialog: {
      title: 'Chuyển đổi ngôn ngữ',
    },
    feedbackDialog: {
      title: 'Phản hồi',
      content: 'Vui lòng cung cấp thêm chi tiết.',
      categoryLabel: 'Danh mục',
      commentLabel: 'Bình luận',
      commentPlaceholder: '(Tùy chọn) Nhập bình luận của bạn',
      categories: [
        {
          value: 'notFactuallyCorrect',
          label: 'Không chính xác về mặt thực tế',
        },
        {
          value: 'notFullyFollowRequest',
          label: 'Không hoàn toàn tuân theo yêu cầu của tôi',
        },
        {
          value: 'other',
          label: 'Khác',
        },
      ],
    },
    button: {
      newChat: 'Cuộc trò chuyện mới',
      botConsole: 'Bảng điều khiển Bot',
      sharedBotAnalytics: 'Phân tích Bot chia sẻ',
      apiManagement: 'Quản lý API',
      userUsages: 'Sử dụng người dùng',
      SaveAndSubmit: 'Lưu & Gửi',
      resend: 'Gửi lại',
      regenerate: 'Tạo lại',
      delete: 'Xóa',
      deleteAll: 'Xóa tất cả',
      done: 'Hoàn thành',
      ok: 'OK',
      cancel: 'Hủy',
      back: 'Quay lại',
      menu: 'Menu',
      language: 'Ngôn ngữ',
      clearConversation: 'Xóa TẤT CẢ cuộc trò chuyện',
      signOut: 'Đăng xuất',
      close: 'Đóng',
      add: 'Thêm',
      continue: 'Tiếp tục tạo',
    },
    input: {
      hint: {
        required: '* Bắt buộc',
      },
      validationError: {
        required: 'Trường này là bắt buộc.',
        invalidOriginFormat: 'Định dạng Nguồn gốc không hợp lệ.',
      },
    },
    embeddingSettings: {
      title: 'Cài đặt Embedding',
      description:
        'Bạn có thể cấu hình các tham số cho vector embedding. Bằng cách điều chỉnh các tham số, bạn có thể thay đổi độ chính xác của việc truy xuất tài liệu.',
      chunkSize: {
        label: 'kích thước đoạn',
        hint: 'Kích thước đoạn đề cập đến kích thước mà một tài liệu được chia thành các phân đoạn nhỏ hơn',
      },
      chunkOverlap: {
        label: 'độ chồng lấp đoạn',
        hint: 'Bạn có thể chỉ định số ký tự chồng lấp giữa các đoạn liền kề.',
      },
      enablePartitionPdf: {
        label:
          'Bật phân tích PDF chi tiết. Nếu được bật, PDF sẽ được phân tích chi tiết theo thời gian.',
        hint: 'Nó hiệu quả khi bạn muốn cải thiện độ chính xác tìm kiếm. Chi phí tính toán tăng vì việc tính toán mất nhiều thời gian hơn.',
      },
      help: {
        chunkSize:
          'Khi kích thước đoạn quá nhỏ, thông tin ngữ cảnh có thể bị mất, và khi quá lớn, thông tin ngữ cảnh khác nhau có thể tồn tại trong cùng một đoạn, có thể làm giảm độ chính xác tìm kiếm.',
        chunkOverlap:
          'Bằng cách chỉ định độ chồng lấp đoạn, bạn có thể bảo toàn thông tin ngữ cảnh xung quanh ranh giới đoạn. Tăng kích thước đoạn đôi khi có thể cải thiện độ chính xác tìm kiếm. Tuy nhiên, hãy lưu ý rằng việc tăng độ chồng lấp đoạn có thể dẫn đến chi phí tính toán cao hơn.',
      },
      alert: {
        sync: {
          error: {
            title: 'Lỗi phân tách câu',
            body: 'Thử lại với giá trị độ chồng lấp đoạn nhỏ hơn',
          },
        },
      },
    },
    generationConfig: {
      title: 'Cấu hình tạo',
      description:
        'Bạn có thể cấu hình các tham số suy luận LLM để kiểm soát phản hồi từ các mô hình.',
      maxTokens: {
        label: 'Độ dài tạo tối đa/số token mới tối đa',
        hint: 'Số lượng token tối đa được phép trong phản hồi được tạo',
      },
      temperature: {
        label: 'Nhiệt độ',
        hint: 'Ảnh hưởng đến hình dạng của phân phối xác suất cho đầu ra dự đoán và ảnh hưởng đến khả năng mô hình chọn các đầu ra có xác suất thấp hơn',
        help: 'Chọn giá trị thấp hơn để ảnh hưởng đến mô hình chọn các đầu ra có xác suất cao hơn; Chọn giá trị cao hơn để ảnh hưởng đến mô hình chọn các đầu ra có xác suất thấp hơn',
      },
      topK: {
        label: 'Top-k',
        hint: 'Số lượng ứng viên có khả năng nhất mà mô hình xem xét cho token tiếp theo',
        help: 'Chọn giá trị thấp hơn để giảm kích thước của nhóm và giới hạn các tùy chọn cho các đầu ra có khả năng hơn; Chọn giá trị cao hơn để tăng kích thước của nhóm và cho phép mô hình xem xét các đầu ra ít có khả năng hơn',
      },
      topP: {
        label: 'Top-p',
        hint: 'Phần trăm của các ứng viên có khả năng nhất mà mô hình xem xét cho token tiếp theo',
        help: 'Chọn giá trị thấp hơn để giảm kích thước của nhóm và giới hạn các tùy chọn cho các đầu ra có khả năng hơn; Chọn giá trị cao hơn để tăng kích thước của nhóm và cho phép mô hình xem xét các đầu ra ít có khả năng hơn',
      },
      stopSequences: {
        label: 'Token kết thúc/chuỗi kết thúc',
        hint: 'Chỉ định các chuỗi ký tự dừng mô hình tạo ra các token tiếp theo. Sử dụng dấu phẩy để phân tách nhiều từ',
      },
    },
    searchSettings: {
      title: 'Cài đặt tìm kiếm',
      description:
        'Bạn có thể cấu hình các tham số tìm kiếm để lấy các tài liệu liên quan từ kho vector.',
      maxResults: {
        label: 'Kết quả tối đa',
        hint: 'Số lượng bản ghi tối đa được lấy từ kho vector',
      },
    },
    error: {
      answerResponse: 'Đã xảy ra lỗi khi trả lời.',
      notFoundConversation:
        'Vì cuộc trò chuyện được chỉ định không tồn tại, một màn hình trò chuyện mới được hiển thị.',
      notFoundPage: 'Trang bạn đang tìm kiếm không được tìm thấy.',
      unexpectedError: {
        title: 'Đã xảy ra lỗi không mong muốn.',
        restore: 'Đi đến trang CHÍNH',
      },
      predict: {
        general: 'Đã xảy ra lỗi khi dự đoán.',
        invalidResponse:
          'Nhận được phản hồi không mong đợi. Định dạng phản hồi không khớp với định dạng mong đợi.',
      },
      notSupportedImage: 'Mô hình được chọn không hỗ trợ hình ảnh.',
      unsupportedFileFormat: 'Định dạng tệp được chọn không được hỗ trợ.',
      totalFileSizeToSendExceeded:
        'Tổng kích thước tệp phải không quá {{maxSize}}.',
      attachment: {
        fileSizeExceeded:
          'Kích thước của mỗi tài liệu phải không quá {{maxSize}}.',
        fileCountExceeded: 'Không thể tải lên quá {{maxCount}} tệp.',
      },
    },
    validation: {
      title: 'Lỗi xác thực',
      maxRange: {
        message: 'Giá trị tối đa có thể đặt là {{size}}',
      },
      minRange: {
        message: 'Giá trị tối thiểu có thể đặt là {{size}}',
      },
      chunkOverlapLessThanChunkSize: {
        message: 'Độ chồng lấp đoạn phải được đặt nhỏ hơn Kích thước đoạn',
      },
      quickStarter: {
        message: 'Vui lòng nhập cả Tiêu đề và Ví dụ cuộc trò chuyện.',
      },
    },
    helper: {
      shortcuts: {
        title: 'Phím tắt',
        items: {
          focusInput: 'Chuyển trọng tâm đến đầu vào trò chuyện',
          newChat: 'Mở cuộc trò chuyện mới',
        },
      },
    },
  },
};

export default translation;
