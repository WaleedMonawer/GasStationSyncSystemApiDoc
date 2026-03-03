import { CodeBlock } from './CodeBlock';
import { Endpoint } from './Endpoint';
import { Table } from './Table';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/translations';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function DocContent() {
  const { language } = useLanguage();
  const t = content[language];
  const headers = t.tableHeaders;

  return (
    <div className="max-w-4xl mx-auto pb-20">
      
      {/* Overview Section */}
      <motion.section 
        id="overview" 
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.overview.title}</h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {t.overview.description}
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-2">{t.overview.baseUrlTitle}</h3>
          <code className="text-blue-700 dark:text-blue-400 font-mono text-base" dir="ltr">http://localhost/GasSyncApp/api/webhook</code>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.howItWorks.title}</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {t.howItWorks.intro}
        </p>

        <div className="overflow-x-auto py-6 mb-8">
          <div className="min-w-[640px] flex items-stretch justify-center gap-0" style={{ direction: 'ltr' }}>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex-1 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4 text-center">
                <div className="font-semibold text-amber-900 dark:text-amber-200">{t.howItWorks.diagramLabels.station}</div>
                <div className="text-xs text-amber-700 dark:text-amber-400 mt-1">{t.howItWorks.diagramLabels.stationSub}</div>
              </div>
              <div className="flex-shrink-0 text-zinc-400 dark:text-zinc-500">→</div>
            </div>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex-1 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4 text-center">
                <div className="font-semibold text-indigo-900 dark:text-indigo-200">{t.howItWorks.diagramLabels.api}</div>
              </div>
              <div className="flex-shrink-0 text-zinc-400 dark:text-zinc-500">→</div>
            </div>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex-1 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-4 text-center">
                <div className="font-semibold text-emerald-900 dark:text-emerald-200">{t.howItWorks.diagramLabels.sync}</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">{t.howItWorks.diagramLabels.mapping}</div>
              </div>
              <div className="flex-shrink-0 text-zinc-400 dark:text-zinc-500">→</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50 p-4 text-center">
                <div className="font-semibold text-slate-900 dark:text-slate-200">{t.howItWorks.diagramLabels.erp}</div>
              </div>
            </div>
          </div>
        </div>

        <ol className="list-decimal list-inside space-y-4 text-zinc-600 dark:text-zinc-400">
          <li><span className="font-medium text-zinc-800 dark:text-zinc-200">{t.howItWorks.step1}</span></li>
          <li><span className="font-medium text-zinc-800 dark:text-zinc-200">{t.howItWorks.step2}</span></li>
          <li><span className="font-medium text-zinc-800 dark:text-zinc-200">{t.howItWorks.step3}</span></li>
          <li><span className="font-medium text-zinc-800 dark:text-zinc-200">{t.howItWorks.step4}</span></li>
        </ol>
      </motion.section>

      {/* Authentication Section */}
      <motion.section 
        id="authentication" 
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.authentication.title}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {t.authentication.description}
        </p>
        
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 mb-6">
            <div className="text-sm font-mono text-zinc-500 mb-2">{t.authentication.headerFormat}</div>
            <code className="text-zinc-800 dark:text-zinc-200 font-mono block" dir="ltr">X-API-Token: 123456789@#rMmsbnBKxx6700432Sdfxxx</code>
        </div>
      </motion.section>

      {/* Transactions Section */}
      <motion.section 
        id="transactions" 
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.transactions.title}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          {t.transactions.description}
        </p>

        <Endpoint method="POST" path="/api/webhook/transactions" />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.transactions.requestFormat}</h3>
        <CodeBlock 
          language="json"
          code={`{
  "transactionType": "Sales",
  "dataSet": [
    {
      "SNO": "6",
      "SITE_ID": "ST001",
      "SITE_NAME": "ST001",
      "TRANSACTION_DATE": "2025-10-01 10:45:14",
      "VOLUME": "16.84",
      "UNIT_PRICE": "7.54",
      "AMOUNT": "127.03",
      "CURRENCY_CODE": "SAR",
      "PAYMENT_MODE": "CASH",
      "PRODUCT_NAME": "Gasoline 95",
      "PUMP_NO": "6",
      "NOZZLE_NO": "148",
      "START_TOTALIZER": "1895.46",
      "END_TOTALIZER": "1912.30",
      "VolumeDecimal": 16.84,
      "UnitPriceDecimal": 7.54,
      "AmountDecimal": 127.03,
      "TransactionDateTime": "2025-10-01T10:45:14",
      "TransactionId": "6",
      "shift_id": "SHIFT_001"
    }
  ]
}`} 
        />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.transactions.fieldDescriptions}</h3>
        <Table 
          headers={[headers.field, headers.type, headers.desc]}
          rows={[
            [<code className="text-indigo-600" dir="ltr">transactionType</code>, 'String', t.transactions.fields.transactionType],
            [<code className="text-indigo-600" dir="ltr">dataSet</code>, 'Array', t.transactions.fields.dataSet],
            [<code className="text-indigo-600" dir="ltr">SNO</code>, 'String', t.transactions.fields.sno],
            [<code className="text-indigo-600" dir="ltr">SITE_ID</code>, 'String', t.transactions.fields.siteId],
            [<code className="text-indigo-600" dir="ltr">VOLUME</code>, 'String', t.transactions.fields.volume],
            [<code className="text-indigo-600" dir="ltr">AMOUNT</code>, 'String', t.transactions.fields.amount],
            [<code className="text-indigo-600" dir="ltr">TransactionId</code>, 'String', t.transactions.fields.transactionId],
          ]}
        />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.transactions.successResponse}</h3>
        <CodeBlock 
          language="json"
          code={`{
  "success": true,
  "message": "Processing completed successfully",
  "errorCode": "0",
  "processedCount": 5,
  "failedCount": 0,
  "duplicateCount": 0,
  "duplicateTransactions": [],
  "savedTransactionIds": ["6", "7", "8", "9", "10"],
  "failedTransactionIds": [],
  "savedTransactions": [
    {
      "originalTransactionId": "6",
      "syncTransactionId": "6"
    }
  ]
}`} 
        />
      </motion.section>

      {/* Station Data Section */}
      <motion.section 
        id="station-data" 
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.stationData.title}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          {t.stationData.description}
        </p>

        <Endpoint method="POST" path="/api/webhook/station-system-data" />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.stationData.requestBody}</h3>
        <CodeBlock 
          language="json"
          code={`{
  "stationCode": "ST001",
  "stationName": "Main Gas Station",
  "pumps": [
    { "code": "P01", "name": "Pump 1" },
    { "code": "P02", "name": "Pump 2" }
  ],
  "Nozzles": [
    { "code": "C01", "name": "Counter 1", "pumpCode": "P01" }
  ],
  "paymentMethods": [
    { "code": "CASH", "name": "Cash" }
  ],
  "currencies": [
    { "code": "SAR", "name": "Saudi Riyal" }
  ],
  "shifts": [
    { "code": "SHIFT_01", "name": "Shift 1" }
  ]
}`} 
        />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.stationData.fieldDescriptions}</h3>
        <Table 
          headers={[headers.field, headers.type, headers.required, headers.desc]}
          rows={[
            [<code className="text-indigo-600" dir="ltr">stationCode</code>, 'String', 'Yes', t.stationData.fields.stationCode],
            [<code className="text-indigo-600" dir="ltr">stationName</code>, 'String', 'Yes', t.stationData.fields.stationName],
            [<code className="text-indigo-600" dir="ltr">pumps</code>, 'Array', 'No', t.stationData.fields.pumps],
            [<code className="text-indigo-600" dir="ltr">Nozzles</code>, 'Array', 'No', t.stationData.fields.nozzles],
            [<code className="text-indigo-600" dir="ltr">paymentMethods</code>, 'Array', 'No', t.stationData.fields.paymentMethods],
          ]}
        />

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.stationData.responseFormat}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">{t.stationData.success}</h4>
            <CodeBlock 
              language="json"
              code={`{
  "success": true,
  "message": "Data saved successfully",
  "processedCount": 15,
  "errorCode": null
}`} 
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">{t.stationData.error}</h4>
            <CodeBlock 
              language="json"
              code={`{
  "success": false,
  "message": "No valid data to process",
  "processedCount": 0,
  "errorCode": "NO_DATA"
}`} 
            />
          </div>
        </div>
      </motion.section>

      {/* Health Check Section */}
      <motion.section 
        id="health" 
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.health.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{t.health.healthCheck}</h3>
            <Endpoint method="GET" path="/api/webhook/health" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{t.health.healthDesc}</p>
            <CodeBlock 
              language="json"
              code={`{
  "Status": "Healthy",
  "Timestamp": "2025-10-05T03:48:39.36909Z",
  "Service": "GasStation Webhook Service"
}`} 
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">{t.health.securityInfo}</h3>
            <Endpoint method="GET" path="/api/webhook/public-security-info" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{t.health.securityDesc}</p>
            <CodeBlock 
              language="json"
              code={`{
  "SecurityEnabled": true,
  "RateLimiting": {
    "Enabled": true,
    "RequestsPerMinute": 60
  }
}`} 
            />
          </div>
        </div>
      </motion.section>

      {/* Best Practices Section */}
      <motion.section 
        id="best-practices" 
        className="scroll-mt-24 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">{t.bestPractices.title}</h2>
        
        <div className="grid gap-4">
          {t.bestPractices.items.map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mt-8 mb-4">{t.bestPractices.commonErrors}</h3>
        <Table 
          headers={[headers.code, headers.desc, headers.action]}
          rows={t.bestPractices.errors.map(err => [
            err.code,
            err.desc,
            err.action
          ])}
        />
      </motion.section>

    </div>
  );
}

