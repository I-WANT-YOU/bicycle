const menuList = [
    {
        title: '首页',
        icon:'pie-chart',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        icon:'pie-chart',
        children: [
            {
                title: '按钮',
                key: '/ui/buttons',
                children: [
                    {
                        title: '弹框',
                        key: '/ui/modals/modals',
                    },
                    {
                        title: 'Loading',
                        key: '/ui/loadings/loadings',
                    },
                ]
            },
            {
                title: '弹框',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
            },
            {
                title: '全局Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
            },
            {
                title: '图片画廊',
                key: '/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        icon:'pie-chart',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        icon:'pie-chart',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/basic',
            },
            {
                title: '高级表格',
                key: '/table/high',
            }
        ]
    },
    {
        title: '富文本',
        icon:'pie-chart',
        key: '/rich'
    },
    {
        title: '城市管理',
        icon:'pie-chart',
        key: '/city'
    },
    {
        title: '订单管理',
        icon:'pie-chart',
        key: '/order',
        btnList: [
            {
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        icon:'pie-chart',
        key: '/user'
    },
    {
        title: '车辆地图',
        icon:'pie-chart',
        key: '/bikeMap'
    },
    {
        title: '图标',
        icon:'pie-chart',
        key: '/charts',
        children: [
            {
                title: '柱形图',
                key: '/charts/bar'
            },
            {
                title: '饼图',
                key: '/charts/pie'
            },
            {
                title: '折线图',
                key: '/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        icon:'pie-chart',
        key: '/permission'
    },
];
export default menuList;