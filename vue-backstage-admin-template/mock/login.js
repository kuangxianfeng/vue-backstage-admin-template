import Mock from 'mockjs';

Mock.mock('/login', 'post', (options) => {
    /**
     * @userName 用户名
     * @password 密码
     * 在这里对账户进行分配权限，但是了解到的权限分为两大类。
     * 1、权限较为分散（每个账户的权限各有千秋，利用权限树勾选来完成账号权限）
     * 2、权限较为集中（每个账户的权限是固定的，比如管理员 审批员 发布员，只给种类权限。）
     * 现在测试第二种权限
     */
    let params = JSON.parse(options.body);
    let { userName, password } = params;
    let resData = {
        code: 0,
        msg: '账号或密码错误',
        data: {}
    };
    if (userName === 'admin1' && password === 'admin1') {
        resData.code = 200;
        resData.msg = '登录成功';
        resData.data.token = 'admin1';
    } else if (userName === 'admin2' && password === 'admin2') {
        resData.code = 200;
        resData.msg = '登录成功';
        resData.data.token = 'admin2';
    } else {
        delete resData.data;
    }
    return resData
})