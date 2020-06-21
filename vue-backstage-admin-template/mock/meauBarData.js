import Mock from 'mockjs';

const responseData=[1,2,3]

Mock.mock('/meau/bar/data','post',responseData);
