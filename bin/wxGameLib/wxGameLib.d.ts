/*!
 * wxGameLib - d.ts for Description
 * @licence wxGameLib - v0.1.0 (2019-02-14)
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
    class CustomerServiceConst {
        /**跳转客服默认标题 */
        static DEFAULTTITLE: string;
    }
}

declare module wxgame {
    class Global {
        private static _instance;
        appId: string;
        secret: string;
        private userInfoData;
        tableLobbyGameList: table.TableLobbyGameList;
        shareIconUrl: string;
        private isFirst;
        static readonly instance: Global;
        /**
         * @param appId 小游戏appid
         * @param secret 小游戏秘钥
         */
        init(): Promise<any>;
        /**退出当前小游戏 */
        exitMiniProgram(success?: Function, fail?: Function, complete?: Function): Promise<any>;
        /**跳转客服回话 */
        openCustomerServiceConversation(showCard: boolean, title?: string, imgUrl?: string): Promise<{}>;
        /**打开同一公众号下关联的另一个小程序 */
        /**调用设置交口 */
        openSetting(): Promise<any>;
        /**调用授权 */
        authorize(scopeStr: string): Promise<any>;
        /**banner unit id 数组*/
        bannerUnitIdArr: string[];
        private _bannerIndex;
        private _sysInfo;
        private _bannerAd;
        /**广告组件是否准备好 */
        private _bannerIsReady;
        private onLoadBanner;
        private onErrorBanner;
        /**暂时只支持底部显示 */
        private onResizeBanner;
        /**销毁显示的广告 */
        destroyBannerAd(): void;
        /**
         * 创建banner 暂时只支持单个广告
         */
        private wxCreateBannerAd(adUnitId?, style?);
        /**
         * 获取广告banner
         * 默认靠低居中
         * @style 暂时支持top left right width设置
         */
        createBannerAd(adUnitId?: string, style?: Object): void;
        /**video unit id 数组*/
        videoUnitIdArr: string[];
        private _videoAd;
        private _videoCallFun;
        private _vidoeCallObj;
        private _videoAdCanUse;
        private onErrorVideo;
        private onCloseVideo;
        /**获取激励视频video
         * sucCall 看完视频的回调
        */
        createRewardedVideoAd(adUnitId?: string, sucCall?: Function, callObj?: any): void;
        /**
        * 阿拉丁事件统计
        */
        aldSendEvent(name: string, value: string | Object): void;
    }
}

declare module wxgame {
    class Message {
        private static _instance;
        key: Array<string>;
        launchOption: any;
        static readonly instance: Message;
        init(): void;
        /**
         * 初始化启动参数
         */
        private initLaunchOption();
        /**监听小游戏回到前台的事件 */
        private addOnShowEvent();
        /** */
        private onShow(res?);
        private _rankBit;
        /**设置用户数据上报 */
        setUserCloudStorage(KVDataList: Array<any>): Promise<{}>;
        /**
         * 内存警报 建立在fundebug第三方工具上  让服务器做怕是觉得有压力
         * */
        private onMemoryWarning();
    }
}

declare module wxgame {
    class OpenData {
        private static _instance;
        static readonly instance: OpenData;
        private _openDataContext;
        sendShareData(kvdata: any): void;
        createDisplayObject(type: any, width: any, height: any, offsetY: any): egret.Bitmap;
    }
}

declare module wxgame {
    class ShareMessage {
        private static _instance;
        private _data;
        private _lastTimeOutSec;
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
         * 消息分享 如果写死分享的话务必填写shareVo.title和shareVo.shareImageUrl
         * @param shareVo 分享数据
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
        sendShareMessage(shareVo?: uniLib.WXShareVo): Promise<any>;
        checkSession(): Promise<any>;
        private sendShare();
        /**回滚游戏压后台时间 */
        private resetTimeSec();
    }
}

declare module wxgame {
    class Utils {
        /**弹框 */
        static showConfirm(info: string, title?: string, oktxt?: string, okFunc?: Function, caltxt?: string, calFunc?: Function): void;
        /**时间戳 做版本控制 */
        static getVersionControlCode(): string;
        /**检查当前是否是微信小游戏 不能导致h5上报错 */
        static readonly isWxGame: boolean;
        /**获取定位 */
        static getPosition(callBack?: Function, thisObj?: any): void;
        /**小游戏获取手机信息 */
        static readonly isIos: boolean;
        /**
         * 小程序截图--异步版本 返回imageData
         * @param rect截图区域
         * @param destW目标文件的宽度，会将截取的部分拉伸或压缩至该数值
         * @param destH目标文件的高度，会将截取的部分拉伸或压缩至该数值
         * @return 截图之后的数据;
         */
        static catchScreenToData(rect?: egret.Rectangle, destW?: number, destH?: number): Promise<any>;
        /**
         * 小程序截图--同步截图 返回imageUrl
         * @param rect截图区域
         * @param destW目标文件的宽度，会将截取的部分拉伸或压缩至该数值
         * @param destH目标文件的高度，会将截取的部分拉伸或压缩至该数值
         * @return 截图之后的数据;
         */
        static catchScreenToPathSync(rect?: egret.Rectangle, destW?: number, destH?: number): string;
        /**异步截图 */
        static catchScreenToTex(rect?: egret.Rectangle, cs?: any): Promise<any>;
        /**
         * 版本比较
         * @param version当前版本
         * @param compVersion 需要比较的版本
         * @return 0版本一样 1大于比较版本 -1小与比较版本;
         */
        static compareVersion(version: string, compVersion: any): number;
    }
}
