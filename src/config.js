/**
 * Created by Tw93 on 2016/11/4.
 */

export default {

    // 正常模式的tab title配置
    tabTitles: [{
            title: '首页',
            icon: '/src/assets/mainpage.png',
            activeIcon: '/src/assets/mainpaged.png'
        },
        {
            title: '推荐',
            icon: 'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png'
        },
        {
            title: '我的',
            icon: '/src/assets/myinfo.png',
            activeIcon: '/src/assets/myinfod.png'
        }
    ],
    tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10
    },

    // 使用 iconFont 模式的tab title配置
    tabIconFontTitles: [{
            title: '首页',
            codePoint: '\ue623'
        },
        {
            title: '特别推荐',
            codePoint: '\ue608'
        },
        {
            title: '消息中心',
            codePoint: '\ue752',
            badge: 5
        },
        {
            title: '我的主页',
            codePoint: '\ue601',
            dot: true
        }
    ],
    tabIconFontStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: 'red',
        iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
    }
}