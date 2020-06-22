import Mock from 'mockjs';
const permission1 = [
    {
        path: 'atwill1',
        name: 'Atwill1',
        component: () => import('@/views/Atwill1/Index.vue'),
        meta: {
            title: '随意页面1',
            icon: 'el-icon-light-rain'
        },
        children: [
            {
                path: 'atwill1-c1',
                name: 'atwill1C1',
                component: () => import('@/views/Atwill1/children1.vue'),
                meta: {
                    title: '随意页面1-1',
                    link: '/atwill1/atwill1-c1'
                }
            }
        ]
    },
    {
        path: 'atwill2',
        name: 'Atwill2',
        component: () => import('@/views/Atwill2/Index.vue'),
        meta: {
            title: '随意页面2',
            icon: 'el-icon-lightning'
        },
        children: [
            {
                path: 'atwill2-c1',
                name: 'atwill2C1',
                component: () => import('@/views/Atwill2/children1.vue'),
                meta: {
                    title: '随意页面2-1',
                    link: '/atwill2/atwill2-c1'
                }
            }
        ]
    },
    {
        path: 'atwill3',
        name: 'Atwill3',
        component: () => import('@/views/Atwill3/Index.vue'),
        meta: {
            title: '随意页面3',
            icon: 'el-icon-heavy-rain'
        }
    }
];
const permission2 = [
    {
        path: 'atwill1',
        name: 'Atwill1',
        component: () => import('@/views/Atwill1/Index.vue'),
        meta: {
            title: '随意页面1',
            icon: 'el-icon-light-rain'
        }
    },
    {
        path: 'atwill2',
        name: 'Atwill2',
        component: () => import('@/views/Atwill2/Index.vue'),
        meta: {
            title: '随意页面2',
            icon: 'el-icon-lightning'
        }
    }
]

Mock.mock('/meau/bar/data', 'post', (options) => {
    let resData = {
        code: 0,
        msg: 'token错误',
        data: []
    }
    if (options.body) {
        let params;
        params = JSON.parse(options.body);
        let { token } = params;
        if (token === 'admin1') {
            resData.code = 200;
            resData.msg = '获取成功';
            resData.data = permission1;
        } else if (token === 'admin2') {
            resData.code = 200;
            resData.msg = '获取成功';
            resData.data = permission2;
        }
    }
    return resData;
});
