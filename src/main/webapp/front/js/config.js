
var projectName = '高校校园招聘服务系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
]


var indexNav = [

{
	name: '职位信息',
	url: './pages/zhiweixinxi/list.jsp'
}, 

{
	name: '新闻资讯',
	url: './pages/news/list.jsp'
},
{
	name: '留言反馈',
	url: './pages/messages/list.jsp'
}
]

var adminurl =  "http://localhost:8080/jspmfz6u8/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"yonghu"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业","menuJump":"列表","tableName":"qiye"}],"menu":"企业管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"职位类别","menuJump":"列表","tableName":"zhiweileibie"}],"menu":"职位类别管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"职位信息","menuJump":"列表","tableName":"zhiweixinxi"}],"menu":"职位信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"职位申请","menuJump":"列表","tableName":"zhiweishenqing"}],"menu":"职位申请管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"liuyanbanguanli"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"lunbotuguanli"},{"buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","职位申请"],"menu":"职位信息列表","menuJump":"列表","tableName":"zhiweixinxi"}],"menu":"职位信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"职位申请","menuJump":"列表","tableName":"zhiweishenqing"}],"menu":"职位申请管理"}],"frontMenu":[{"child":[{"buttons":["查看","职位申请"],"menu":"职位信息列表","menuJump":"列表","tableName":"zhiweixinxi"}],"menu":"职位信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"职位信息","menuJump":"列表","tableName":"zhiweixinxi"}],"menu":"职位信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"职位申请","menuJump":"列表","tableName":"zhiweishenqing"}],"menu":"职位申请管理"}],"frontMenu":[{"child":[{"buttons":["查看","职位申请"],"menu":"职位信息列表","menuJump":"列表","tableName":"zhiweixinxi"}],"menu":"职位信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"企业","tableName":"qiye"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
