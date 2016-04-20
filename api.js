/**
 * Created by kevin on 16-4-19.
 */

/***
 * [get] user/login?username=xxxx&password=xxxx
 */

Return:{
    success:{
        username,
            nickname,
            signature,
            avatarUrl,
            token
    }
}

//注册
[post]
user / register
{
    username, //用户名
        nickname.//昵称
            password,
        signature,//签名
        class//专业班级
}

//获得用户排名 (ranklist)
[get]
users
return
```