const experience = [
  {
    company: '华玉集团',
    period: '2023.06 - 至今',
    role: 'AI提效负责人 & 增长PM',
    projects: [
      {
        title: '私域AI物流系统',
        description: '独立开发，实现从下单到客服、物流查询的全链路自动化，显著降低人力成本。',
        color: 'text-blue-400',
      },
      {
        title: '国内珠宝站群 (0 → 8000+ 日IP)',
        description: '运用SEO与AI内容策略，快速搭建并运营近8个垂直站，验证流量获取能力。',
        color: 'text-green-400',
      },
    ],
  },
  {
    company: '广州全乐科技',
    period: '2016.03 - 2023.04',
    role: 'SEO专家 & 增长负责人',
    projects: [
       {
        title: '核心业务站 (5k → 30k 日UV)',
        description: '作为核心增长负责人（2人团队），主导站点流量实现6倍增长。',
        color: 'text-green-400',
      },
      {
        title: '自研SEO工具集',
        description: '使用Python半自动化完成日志分析、关键词挖掘、收录排名监控等工作。',
        color: 'text-blue-400',
      },
    ],
  },
   {
    company: '全球体育',
    period: '2019.10 - 2023.10',
    role: 'SEO策划及流量挖掘',
    projects: [
      {
        title: '流量挖掘与架构优化 (峰值20k 日UV)',
        description: '研究竞品，修正旧架构，以SEO为导向聚合内容，实现流量占比达50%。',
        color: 'text-green-400',
      },
    ],
  },
];

const achievements = [
    { title: '独立AI产品开发', description: '独立搭建2款成熟AI产品（塔罗、H5游戏CMS），并即兴上线20余款AI应用。', color: 'text-purple-400' },
    { title: 'AI写作 & 数据分析 (变现3w+)', description: '精通SPSS, Stata, Python, R，完成超100篇数据分析、建模论文。探索公众号写作中。', color: 'text-yellow-400' },
    { title: '小红书私域运营 (引流5k+)', description: '累计引流微信5000人，运营30+社群，覆盖实物与虚拟电商。', color: 'text-red-400' },
    { title: 'DZY私域电商 (月利润1w+)', description: '2022年疫情期间个人运营，通过公域渠道获客，月流水10w。', color: 'text-teal-400' }
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="text-center mb-12">
        <img src="https://scys.mrmine.org/i.jpg" alt="欧壹的头像" className="w-24 h-24 rounded-full mx-auto border-2 border-border-color shadow-lg mb-4" />
        <h1 className="font-serif text-4xl font-bold text-white">欧壹</h1>
        <h2 className="gradient-text font-semibold mt-1">AI驱动的增长黑客</h2>
        <div className="flex justify-center space-x-4 text-xs text-text-secondary mt-4 font-mono">
          <span><i className="fa-solid fa-phone mr-1 text-gray-500"></i>186-2028-2624</span>
          <span><i className="fa-brands fa-weixin mr-1 text-green-400"></i>ou154586079</span>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-12">
        <h3 className="font-mono text-sm uppercase text-text-secondary mb-3">// CORE_COMPETENCIES</h3>
        <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <p className="text-sm leading-relaxed">
                将 <strong className="text-white">8年SEO增长经验</strong> 与 <strong className="text-white">AI应用开发能力</strong> 深度融合，从战略规划到 <strong className="font-mono text-green-400">Python/Next.js</strong> 产品落地，驱动业务可持续增长。
            </p>
        </div>
      </section>
      
      {/* Experience */}
      <section className="mb-12">
        <h3 className="font-mono text-sm uppercase text-text-secondary mb-6">// PROFESSIONAL_EXPERIENCE</h3>
        <div className="relative border-l-2 border-border-color pl-6 space-y-10">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[34px] top-1 w-4 h-4 bg-card-bg border-2 border-border-color rounded-full"></div>
              <h4 className="font-bold text-white text-lg">{exp.company}</h4>
              <p className="text-xs text-text-secondary font-mono">{exp.period} | {exp.role}</p>
              <div className="mt-4 space-y-3">
                {exp.projects.map((proj, pIndex) => (
                  <div key={pIndex} className="bg-editor-bg border border-border-color p-3 rounded-lg">
                    <h5 className={`font-semibold ${proj.color} text-sm`}>{proj.title}</h5>
                    <p className="text-xs text-text-secondary mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Achievements */}
      <section>
        <h3 className="font-mono text-sm uppercase text-text-secondary mb-4">// ADDITIONAL_ACHIEVEMENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach, index) => (
                 <div key={index} className="bg-editor-bg border border-border-color p-4 rounded-lg">
                    <h5 className={`font-semibold ${ach.color} text-sm`}>{ach.title}</h5>
                    <p className="text-xs text-text-secondary mt-1">{ach.description}</p>
                  </div>
            ))}
        </div>
      </section>
    </div>
  )
} 