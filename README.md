# 82MAJOR · Little Brew

非官方粉丝咖啡店游戏 / 비공식 팬 카페 게임

## 发布到 GitHub Pages
1. 建立 GitHub 仓库，将本文件夹里的所有文件上传到仓库根目录（index.html 在根目录）。
2. Settings → Pages → Deploy from a branch，选择 main 分支和 / (root)，保存。
3. 等待 GitHub 部署完成，打开 Pages 给出的地址。无需 npm 安装、后端或 API 密钥。

默认韩语，右上角切换中文。点击订单制作，再点击交付获得金币。18 种饮品与 10 种甜品，美式、拿铁、卡布奇诺和曲奇默认开放；可升级设备、装修和解锁菜单。点击成员进入虚构互动：每位成员 4 个事件，共 24 个中韩双语事件。选对 +2 好感度、选错 -1（最低为 0），每次到店结算一次。手机支持竖排订单、大按钮、底部导航与互动弹层。

## 存档与音乐
此资源包的存档只保存在当前浏览器 localStorage；更换设备、域名或清除网站数据不会保留进度。与在线 Sites 试玩版存档独立。
音乐面板可随机播放 4 首官方 YouTube 视频，需要能够访问 YouTube，首次点击后播放；嵌入受限时可打开官方链接。也可选择本地 MP3/OGG/WAV/M4A 文件随机播放，文件不会上传。包内不包含商业歌曲音频。

## 修改内容
- interactions.js：24 个双语互动事件、选项与好感度变化。
- catalog.js：饮品、甜品、价格、解锁费用、成员对话、官方音乐链接。
- engine.js：升级、订单、奖励、存档迁移。
- game-v2.js：界面与互动；locale.js、labels-v2.js：中韩文字。
- style.css、style-v2.css：布局和样式。
- members-v2.png：六位透明 Q 版角色图集；cafe.png：店内背景。

开源参考与许可详见 credits.txt 和 TEASHOP-LICENSE.txt。角色插画由提供的照片参考生成，台词与偏好均为虚构。第三方音乐与艺人名称不随代码授予额外权利。
