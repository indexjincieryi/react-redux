// 通用
const ENV = process.env.NODE_ENV || 'development';
export const YES = true;
export const NO = false;

// 接口地址
export const BASE_URI = ENV === 'development' ? 'http://localhost:2995/wechat/discussion/' : 'http://www.bamaying.com/wechat/discussion/';

// 测试专用 接口请求 Header
export const apiHeader = ENV === 'development' ? {
  'Authorization': 'Bearer kcHlUBoN2QjrQXbPX8jX97CoWlHIKwbakWCC5KK43dJM0MvGaqwUgByHSVLrW8D4'
  //'Authorization': 'Bearer vV6uYfhAX9qfGNb3qjxbm3Es1altHb2j9THSKk5y6AEQEvaEPVc3sbAv7Mn6Ndcj'
  //'Authorization': 'Bearer anSO12GUNlSDy3LHCz2bZ3iEzSrL3NkrfvHV557c3A5pVCiF01A6LoZnhvjse7Wa'
} : {};

// 获取授权码
export const REQUEST_WECHAT_AUTHORIZE_URL = 'REQUEST_WECHAT_AUTHORIZE_URL';
export const RECIEVE_WECHAT_AUTHORIZE_URL = 'RECIEVE_WECHAT_AUTHORIZE_URL';

// 微信快捷登录
export const REQUEST_USER_SIGN_IN = 'REQUEST_USER_SIGN_IN';
export const RECIEVE_USER_SIGN_IN = 'RECIEVE_USER_SIGN_IN';

// 获取个人信息
export const REQUEST_FETCH_MY_INFO = 'REQUEST_FETCH_MY_INFO';
export const RECIEVE_FETCH_MY_INFO = 'RECIEVE_FETCH_MY_INFO';

// 用户登出
export const REQUEST_USER_SIGN_OUT = 'REQUEST_USER_SIGN_OUT';
export const RECIEVE_USER_SIGN_OUT = 'RECIEVE_USER_SIGN_OUT';

//轮播图
export const REQUEST_GET_CAROUSEL = 'REQUEST_GET_CAROUSEL';
export const RECIEVE_GET_CAROUSEL = 'RECIEVE_GET_CAROUSEL';

//上传文件
export const REQUEST_FILE_UPLOAD = 'REQUEST_FILE_UPLOAD';
export const RECIEVE_FILE_UPLOAD = 'RECIEVE_FILE_UPLOAD';

//上传匿名头像
export const REQUEST_UPLOAD_ANONYMOUS_AVATAR = 'REQUEST_UPLOAD_ANONYMOUS_AVATAR';
export const RECIEVE_UPLOAD_ANONYMOUS_AVATAR = 'RECIEVE_UPLOAD_ANONYMOUS_AVATAR';


//求助列表
export const REQUEST_GET_REQUEST_LIST = 'REQUEST_GET_REQUEST_LIST';
export const RECIEVE_GET_REQUEST_LIST = 'RECIEVE_GET_REQUEST_LIST';

//快速回答列表
export const REQUEST_GET_QUICKANSWER_LIST = 'REQUEST_GET_QUICKANSWER_LIST';
export const RECIEVE_GET_QUICKANSWER_LIST = 'RECIEVE_GET_QUICKANSWER_LIST';

//个人求助列表
export const REQUEST_GET_OWNER_REQUEST_LIST = 'REQUEST_GET_OWNER_REQUEST_LIST';
export const RECIEVE_GET_OWNER_REQUEST_LIST = 'RECIEVE_GET_OWNER_REQUEST_LIST';

//获取用户信息
export const REQUEST_GET_USERINFO = 'REQUEST_GET_USERINFO';
export const RECIEVE_GET_USERINFO = 'RECIEVE_GET_USERINFO';

//设置用户信息
export const REQUEST_SET_USERINFO = 'REQUEST_SET_USERINFO';
export const RECIEVE_SET_USERINFO = 'RECIEVE_SET_USERINFO';

//他人求助列表
export const REQUEST_GET_OTHERS_REQUEST_LIST = 'REQUEST_GET_OTHERS_REQUEST_LIST';
export const RECIEVE_GET_OTHERS_REQUEST_LIST = 'RECIEVE_GET_OTHERS_REQUEST_LIST';

//求助帖回答
export const REQUEST_GET_REQUEST_ANSWER = 'REQUEST_GET_REQUEST_ANSWER';
export const RECIEVE_GET_REQUEST_ANSWER = 'RECIEVE_GET_REQUEST_ANSWER';

//求助主题
export const REQUEST_GET_REQUEST_BYID = 'REQUEST_GET_REQUEST_BYID';
export const RECIEVE_GET_REQUEST_BYID = 'RECIEVE_GET_REQUEST_BYID';

//添加移除上传图片
export const ADD_UPDATE_PICTRUE = 'ADD_UPDATE_PICTRUE';
export const REMOVE_UPDATE_PICTRUE = 'REMOVE_UPDATE_PICTRUE';
export const REMOVE_ALL_PICTRUE = 'REMOVE_ALL_PICTRUE';

//上传求助
export const REQUEST_QUESTION_CONTENT = 'REQUEST_QUESTION_CONTENT';
export const RECIEVE_QUESTION_CONTENT = 'RECIEVE_QUESTION_CONTENT';

//上传回答
export const REQUEST_ANSWER_CONTENT = 'REQUEST_ANSWER_CONTENT';
export const RECIEVE_ANSWER_CONTENT = 'RECIEVE_ANSWER_CONTENT';

//喜欢
export const REQUEST_QUESTION_FAVOR = 'REQUEST_QUESTION_FAVOR';
export const RECIEVE_QUESTION_FAVOR = 'RECIEVE_QUESTION_FAVOR';

export const REQUEST_QUESTION_LIST_FAVOR = 'REQUEST_QUESTION_LIST_FAVOR';
export const RECIEVE_QUESTION_LIST_FAVOR = 'RECIEVE_QUESTION_LIST_FAVOR';

//赞
export const REQUEST_COMMENT_LIKE = 'REQUEST_COMMENT_LIKE';
export const RECIEVE_COMMENT_LIKE = 'RECIEVE_COMMENT_LIKE';

//踩
export const REQUEST_COMMENT_UNLIKE = 'REQUEST_COMMENT_UNLIKE';
export const RECIEVE_COMMENT_UNLIKE = 'RECIEVE_COMMENT_UNLIKE';

//自己喜欢的求助
export const REQUEST_GET_OWNER_LIKED_LIST = 'REQUEST_GET_OWNER_LIKED_LIST';
export const RECIEVE_GET_OWNER_LIKED_LIST = 'RECIEVE_GET_OWNER_LIKED_LIST';

//自己回答的求助
export const REQUEST_GET_OWNER_ANSWERED_LIST = 'REQUEST_GET_OWNER_ANSWERED_LIST';
export const RECIEVE_GET_OWNER_ANSWERED_LIST = 'RECIEVE_GET_OWNER_ANSWERED_LIST';

//用户列表删除喜欢
export const REQUEST_USER_DELETE_FAVOR = 'REQUEST_USER_DELETE_FAVOR';
export const RECIEVE_USER_DELETE_FAVOR = 'RECIEVE_USER_DELETE_FAVOR';

//删除发帖
export const REQUEST_DELETE_USER_DISCUSSION = 'REQUEST_DELETE_USER_DISCUSSION';
export const RECIEVE_DELETE_USER_DISCUSSION = 'RECIEVE_DELETE_USER_DISCUSSION';

//删除评论
export const REQUEST_DELETE_UESR_COMMENT = 'REQUEST_DELETE_UESR_COMMENT';
export const RECIEVE_DELETE_UESR_COMMENT = 'RECIEVE_DELETE_UESR_COMMENT';

//帮助达人
export const REQUEST_HELPER_RANK_LIST = 'REQUEST_HELPER_RANK_LIST';
export const RECIEVE_HELPER_RANK_LIST = 'RECIEVE_HELPER_RANK_LIST';

//获取标签
export const REQUEST_GET_TAGS = 'REQUEST_GET_TAGS';
export const RECIEVE_GET_TAGS = 'RECIEVE_GET_TAGS';

//temp
export const REQUEST_TOP_TOP_TOP = 'REQUEST_TOP_TOP_TOP';
export const RECIEVE_TOP_TOP_TOP = 'RECIEVE_TOP_TOP_TOP';