export const content = {
  en: {
    sidebar: {
      title: 'GasSync API',
      version: 'v1.0.0 Documentation',
      download: 'Download Spec',
      sections: {
        overview: 'Overview',
        howItWorks: 'How It Works',
        authentication: 'Authentication',
        transactions: 'Transactions',
        stationData: 'Station Data',
        health: 'Health Check',
        bestPractices: 'Best Practices'
      }
    },
    overview: {
      title: 'Overview',
      description: 'This guide explains how to integrate with the Gas Station Sync System webhook service for real-time transaction data migration. The webhook service allows gas station systems to automatically send transaction data to the sync system for processing and ERP integration.',
      baseUrlTitle: 'Base URL'
    },
    howItWorks: {
      title: 'How the API Works',
      intro: 'This API acts as a bridge between the station system and the ERP. The flow is:',
      step1: 'Station system is connected to devices (counters/meters) and pumps. It sends station data (counters, pumps, payment methods, shifts, currencies) and financial/transaction data at station, pump, and meter level.',
      step2: 'The API receives this data and forwards it to the Sync Middleware.',
      step3: 'The Sync Middleware maps data between the station system format and the ERP format.',
      step4: 'The Sync Middleware then transfers (posts) the mapped data to the ERP system.',
      diagramLabels: {
        station: 'Station System',
        stationSub: 'Devices, Pumps, Meters',
        api: 'This API',
        sync: 'Sync Middleware',
        mapping: 'Mapping',
        erp: 'ERP System'
      }
    },
    authentication: {
      title: 'Authentication',
      description: 'All webhook requests must include a valid API token in the request header. This token authenticates your station system with the sync service.',
      headerFormat: 'Header Format'
    },
    transactions: {
      title: 'Transactions',
      description: 'Sends transaction data to the sync system for processing and migration to the ERP system.',
      requestFormat: 'Request Format',
      fieldDescriptions: 'Field Descriptions',
      successResponse: 'Success Response',
      fields: {
        transactionType: 'Type of transaction (e.g., "Sales", "Inventory")',
        dataSet: 'List of transaction records',
        sno: 'Sequential number of the transaction',
        siteId: 'Unique identifier for the gas station',
        volume: 'Volume of fuel dispensed',
        amount: 'Total transaction amount',
        transactionId: 'Unique transaction identifier'
      }
    },
    stationData: {
      title: 'Station System Data',
      description: 'Sends station system configuration data to the sync system. This includes station information, pumps, nozzles (counters), payment methods, currencies, and shifts.',
      requestBody: 'Request Body',
      fieldDescriptions: 'Field Descriptions',
      responseFormat: 'Response Format',
      success: 'Success (200)',
      error: 'Error (400/500)',
      fields: {
        stationCode: 'Unique identifier for the gas station',
        stationName: 'Name of the gas station',
        pumps: 'List of pump items',
        nozzles: 'List of nozzle (counter) items',
        paymentMethods: 'List of payment method items'
      }
    },
    health: {
      title: 'Health & Security',
      healthCheck: 'Health Check',
      healthDesc: 'Check if the webhook service is running and healthy.',
      securityInfo: 'Security Info',
      securityDesc: 'Get information about security settings and rate limits.'
    },
    bestPractices: {
      title: 'Integration Best Practices',
      items: [
        { title: 'Error Handling', desc: 'Always check the success field in the response and handle HTTP status codes appropriately.' },
        { title: 'Data Validation', desc: 'Ensure all required fields are present and validate data types before sending.' },
        { title: 'Rate Limiting', desc: 'Respect the rate limits (60 requests/minute) and implement exponential backoff for retries.' },
        { title: 'Security', desc: 'Keep your API token secure and never expose it in client-side code. Use HTTPS in production.' },
        { title: 'Monitoring', desc: 'Monitor response times and success rates. Set up alerts for failed requests.' }
      ],
      commonErrors: 'Common Error Codes',
      errors: [
        { code: '0', desc: 'Success', action: 'No action needed' },
        { code: '4001', desc: 'Invalid API token', action: 'Check your API token' },
        { code: '4002', desc: 'Missing required fields', action: 'Validate request data' },
        { code: '4003', desc: 'Invalid data format', action: 'Check data types and formats' },
        { code: '5000', desc: 'Internal server error', action: 'Contact support' }
      ]
    },
    tableHeaders: {
      field: 'Field',
      type: 'Type',
      desc: 'Description',
      required: 'Required',
      code: 'Code',
      action: 'Action'
    }
  },
  ar: {
    sidebar: {
      title: 'واجهة برمجة GasSync',
      version: 'توثيق الإصدار 1.0.0',
      download: 'تحميل المواصفات',
      sections: {
        overview: 'نظرة عامة',
        howItWorks: 'كيف تعمل',
        authentication: 'المصادقة',
        transactions: 'المعاملات',
        stationData: 'بيانات المحطة',
        health: 'فحص الحالة',
        bestPractices: 'أفضل الممارسات'
      }
    },
    overview: {
      title: 'نظرة عامة',
      description: 'يشرح هذا الدليل كيفية التكامل مع خدمة الويب هوك لنظام مزامنة محطات الوقود لترحيل بيانات المعاملات في الوقت الفعلي. تتيح الخدمة لأنظمة المحطات إرسال البيانات تلقائياً للمعالجة والتكامل مع نظام تخطيط الموارد (ERP).',
      baseUrlTitle: 'الرابط الأساسي (Base URL)'
    },
    howItWorks: {
      title: 'كيف تعمل الواجهة البرمجية',
      intro: 'تعمل هذه الواجهة البرمجية كوسيط بين نظام المحطة ونظام الـ ERP. المسار كالتالي:',
      step1: 'نظام المحطة متصل بالأجهزة (العدادات/المقاييس) والمضخات. يرسل بيانات المحطة (العدادات، المضخات، طرق الدفع، الورديات، العملات) وبيانات العمليات المالية على مستوى المحطة والمضخة والعداد.',
      step2: 'الواجهة البرمجية تستقبل هذه البيانات وتمررها إلى نظام المزامنة الوسيط.',
      step3: 'نظام المزامنة الوسيط يقوم بعمل ربط (Mapping) للبيانات بين صيغة نظام المحطة وصيغة نظام الـ ERP.',
      step4: 'ثم يترحّل نظام المزامنة الوسيط البيانات المرتبطة إلى نظام الـ ERP.',
      diagramLabels: {
        station: 'نظام المحطة',
        stationSub: 'أجهزة، مضخات، عدادات',
        api: 'هذه الواجهة (API)',
        sync: 'نظام المزامنة الوسيط',
        mapping: 'ربط البيانات',
        erp: 'نظام الـ ERP'
      }
    },
    authentication: {
      title: 'المصادقة',
      description: 'يجب أن تتضمن جميع الطلبات رمز API صالح في ترويسة الطلب (Header). يستخدم هذا الرمز لتوثيق نظام المحطة مع خدمة المزامنة.',
      headerFormat: 'صيغة الترويسة'
    },
    transactions: {
      title: 'المعاملات',
      description: 'إرسال بيانات المعاملات إلى نظام المزامنة للمعالجة والترحيل إلى نظام ERP.',
      requestFormat: 'صيغة الطلب',
      fieldDescriptions: 'وصف الحقول',
      successResponse: 'رد النجاح',
      fields: {
        transactionType: 'نوع المعاملة (مثال: "Sales", "Inventory")',
        dataSet: 'قائمة سجلات المعاملات',
        sno: 'الرقم التسلسلي للمعاملة',
        siteId: 'المعرف الفريد للمحطة',
        volume: 'كمية الوقود المستهلكة',
        amount: 'إجمالي مبلغ المعاملة',
        transactionId: 'معرف المعاملة الفريد'
      }
    },
    stationData: {
      title: 'بيانات نظام المحطة',
      description: 'إرسال بيانات تكوين نظام المحطة. يشمل ذلك معلومات المحطة، المضخات، العدادات (Nozzles)، طرق الدفع، العملات، والورديات.',
      requestBody: 'جسم الطلب',
      fieldDescriptions: 'وصف الحقول',
      responseFormat: 'صيغة الرد',
      success: 'نجاح (200)',
      error: 'خطأ (400/500)',
      fields: {
        stationCode: 'المعرف الفريد للمحطة',
        stationName: 'اسم المحطة',
        pumps: 'قائمة المضخات',
        nozzles: 'قائمة العدادات (Nozzles)',
        paymentMethods: 'قائمة طرق الدفع'
      }
    },
    health: {
      title: 'الصحة والأمان',
      healthCheck: 'فحص الحالة',
      healthDesc: 'التحقق مما إذا كانت الخدمة تعمل بشكل صحيح.',
      securityInfo: 'معلومات الأمان',
      securityDesc: 'الحصول على معلومات حول إعدادات الأمان وحدود الطلبات.'
    },
    bestPractices: {
      title: 'أفضل ممارسات الربط',
      items: [
        { title: 'معالجة الأخطاء', desc: 'تحقق دائماً من حقل success في الرد وتعامل مع رموز حالة HTTP بشكل مناسب.' },
        { title: 'التحقق من البيانات', desc: 'تأكد من وجود جميع الحقول المطلوبة وصحة أنواع البيانات قبل الإرسال.' },
        { title: 'حدود الطلبات', desc: 'التزم بحدود الطلبات (60 طلب/دقيقة) واستخدم استراتيجية التراجع الأسي (exponential backoff) لإعادة المحاولة.' },
        { title: 'الأمان', desc: 'حافظ على سرية رمز API ولا تكشفه في كود الواجهة الأمامية. استخدم HTTPS في بيئة الإنتاج.' },
        { title: 'المراقبة', desc: 'راقب أوقات الاستجابة ومعدلات النجاح. قم بإعداد تنبيهات للطلبات الفاشلة.' }
      ],
      commonErrors: 'رموز الأخطاء الشائعة',
      errors: [
        { code: '0', desc: 'نجاح', action: 'لا يلزم اتخاذ إجراء' },
        { code: '4001', desc: 'رمز API غير صالح', action: 'تحقق من الرمز الخاص بك' },
        { code: '4002', desc: 'حقول مطلوبة مفقودة', action: 'تحقق من بيانات الطلب' },
        { code: '4003', desc: 'صيغة بيانات غير صالحة', action: 'تحقق من أنواع وصيغ البيانات' },
        { code: '5000', desc: 'خطأ داخلي في الخادم', action: 'اتصل بالدعم الفني' }
      ]
    },
    tableHeaders: {
      field: 'الحقل',
      type: 'النوع',
      desc: 'الوصف',
      required: 'مطلوب',
      code: 'الرمز',
      action: 'الإجراء'
    }
  }
};
