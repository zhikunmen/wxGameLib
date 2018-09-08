/*!
 * wxGameLib - d.ts for Description
 * @licence wxGameLib - v0.1.0 (2018-09-08)
 * qq:93749937 | Licence: helojo
 */
declare module wxgame {
    /**小程序版本枚举 */
    class envVersionConst {
        /**开发版 */
        static DEVELOP: string;
        /**体验版 */
        static TRIAL: string;
        /**正式版 */
        static RELEASE: string;
    }
}

declare module wxgame {
    class Global {
        private static _instance;
        appId: string;
        secret: string;
        private userInfoData;
        tableLobbyGameList: table.TableLobbyGameList;
        static readonly instance: Global;
        /**
         * @param appId 小游戏appid
         * @param secret 小游戏秘钥
         */
        init(): Promise<any>;
        /**获取用户消息 例如头像 昵称等 */
        getUserInfo(): Promise<any>;
        /**
         * @param jscode login回调成功的code
         */
        private getSessionKeyOpenId(jscode);
        /**退出当前小游戏 */
        exitMiniProgram(success?: Function, fail?: Function, complete?: Function): Promise<any>;
        /**跳转客服回话 */
        openCustomerServiceConversation(): Promise<{}>;
        /**打开同一公众号下关联的另一个小程序 */
        navigateToMiniProgram(appid: string, path?: string, extraData?: any, envVersion?: string): Promise<{}>;
    }
}

declare module wxgame {
    class Message {
        private static _instance;
        key: Array<string>;
        launchOption: LaunchOptions;
        static readonly instance: Message;
        init(): void;
        /**
         * 初始化启动参数
         */
        private initLaunchOption();
        /**监听小游戏回到前台的事件 */
        private addOnShowEvent();
        private _rankBit;
        /**设置用户数据上报 */
        setUserCloudStorage(KVDataList: Array<KVData>): Promise<{}>;
    }
}

declare module wxgame {
    class OpenData {
        private static _instance;
        static readonly instance: OpenData;
        private _openDataContext;
        sendShareData(kvdata: any): void;
        createDisplayObject(type: any, width: any, height: any): egret.Bitmap;
    }
}

declare module wxgame {
    class ShareMessage {
        private static _instance;
        private _data;
        static readonly instance: ShareMessage;
        /**监听被动转发 */
        onShareAppMessage(title?: string, imageUrl?: string, query?: string): void;
        /**
         * 显示转发按钮
         * @param ticket 是否带ticket 可以获取群id做群排行使用
         */
        showShareMenu(ticket?: boolean): Promise<any>;
        /**
         * 隐藏转发按钮
         */
        hideShareMenu(): Promise<any>;
        /**更新转发属性 */
        updateShareMenu(ticket: any): Promise<any>;
        /**
         * 消息分享
         * @param title 分享标题
         * @param imageUrl 分享图片url
         * @param query 查询字符串 从这条转发消息进入后，可通过 wx.getLaunchInfoSync() 或 wx.onShow() 获取启动参数中的 query。
         */
        shareAppMessage(shareVo: uniLib.WXShareVo, success?: Function, fail?: Function): Promise<any>;
        /**
         * 获得分享
         */
        getShareInfo(ticket: string): Promise<any>;
        /**
         * 发送分享数据
         * @param opType  操作类型
         * @param jsonShare 是否分享群
         *  */
        sendShareMessage(shareVo?: uniLib.WXShareVo): void;
        private sendShare();
    }
}

declare module wxgame {
    class Utils {
        /**弹框 */
        static showConfirm(info: string, title?: string, oktxt?: string, okFunc?: Function, caltxt?: string, calFunc?: Function): void;
    }
}
