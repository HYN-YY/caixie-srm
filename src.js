PrototypeApp({
  name:'采协云 SRM',en:'SUPPLIER RELATIONSHIP',color:'#0f766e',color2:'#14b8a6',user:'周景行',role:'采购经理',badge:9,
  greeting:'采购工作台',subtitle:'洞察供应风险，让每一次寻源与交付清晰可控。',entity:'寻源项目',metricLabel:'采购金额',
  nav:['采购工作台','供应商库','准入管理','寻源管理','订单协同','质量管理','绩效与风险','报表中心','系统设置'],
  kpis:[{label:'活跃供应商',value:'248',trend:'↑ 6.8%'},{label:'进行中询价',value:'18',trend:'↑ 12.0%'},{label:'待确认订单',value:'26',trend:'↑ 4.2%'},{label:'延期订单',value:'7',trend:'↓ 16.7%'}],
  chartTitle:'采购金额与交付趋势',donutTitle:'供应商等级分布',focusTitle:'进行中寻源项目',categories:['A 级供应商','B 级供应商','C 级供应商'],
  rows:[{name:'控制器组件年度集采',code:'RFQ-202607-0068',status:'报价中',value:'¥ 1,280,000',progress:68,owner:'周景行'},{name:'华东仓储包装材料',code:'RFQ-202607-0062',status:'评审中',value:'¥ 560,000',progress:78,owner:'许清和'},{name:'精密轴承二次寻源',code:'RFQ-202606-0057',status:'定标审批',value:'¥ 860,000',progress:88,owner:'沈听澜'},{name:'办公设备框架采购',code:'RFQ-202606-0048',status:'待发布',value:'¥ 240,000',progress:32,owner:'周景行'},{name:'新能源电芯样品采购',code:'RFQ-202605-0039',status:'风险关注',value:'¥ 920,000',progress:41,owner:'许清和'}],
  activities:['控制器组件项目收到第 4 家供应商报价','华岳精工营业资质将在 15 天后到期','订单 PO-260701 创建第二批发货通知','质量工程师发起 NCR-2026-0032','精密轴承项目已提交定标审批'],
  roles:[{name:'采购经理',user:'周景行',scope:'全部数据',nav:[0,1,2,3,4,5,6,7,8],permissions:['create','edit','export','advance']},{name:'采购专员',user:'许清和',scope:'个人数据',nav:[0,1,2,3,4,6,7],permissions:['create','edit','advance']},{name:'质量工程师',user:'沈听澜',scope:'质量相关数据',nav:[0,1,2,5,6],permissions:['edit','export','advance']},{name:'供应商业务员',user:'江屿',scope:'个人数据',nav:[0,3,4,5],permissions:['edit','advance']}]
});
