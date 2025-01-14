import {LightStatus} from "../pagenote-brush";

enum BackupVersion {
    version1 = 1,
    version = 2
}

enum AnnotationStatus {
    fixed=1,
    un_fixed=0,
    SHOW=2,
    HIDE=0
}

type Target = Step & {
    clientX: number,
    clientY: number,
    bg: string
}

type Step = {
    x: number, // 标记在文档中基于 body 的 x轴 位置
    y: number, // 标记在文档中基于 body 的 y轴 位置
    id: string, // 标记的元素节点，在文档中唯一标识符，取值参考 whats-element
    level?: number, // 高亮层级
    bg: string, // 标记背景色
    text?: string, // 标记的文本内容
    pre? : string, // 标记的文本内容 上文信息
    suffix?: string, // 标记的文本内容 下文信息
    tip: string, // 标记的笔记（用户输入）
    isActive: boolean, // 是否为激活状态
    clientX?: number,
    clientY?: number,
    offsetX?: number, // 批注与高亮元素的相对偏移量
    offsetY?: number, // 批注与高亮元素的相对偏移量
    parentW?: number, // 高亮元素父节点宽度
    lightId?: string, // 每一条标记的唯一 hash id
    images?: any[], // 图片高亮，待支持
    lightStatus: LightStatus
    annotationStatus: AnnotationStatus,
    lightBg?: string, // 将废弃
    daskBg?: string, // 将废弃
    isFocusTag?: boolean,
    time?: number,
    createAt?: number, // 创建时间
    updateAt?: number, // 修改时间
    score?: number, // 此条笔记重要评分
    originContext?: string, // 原始上下文
}

type Position = {
    x:number,
    y:number
}

type PlainData = {
    url: string,
    images: string[],
    categories: string[],
    snapshots: string[],
    setting: any,
    steps: Step[],
    note?: string,

    // TODO 废弃 SDK 不处理
    title?: string,
    version?: string,
    icon?: string,
    createAt?: number,
    description?: string,
    lastModified?: number,
}

export enum PAGE_TYPES {
    file= 'file',
    http= 'http'
}
type WebPageIds = {
    key: string, // 此数据的唯一标识符，一般为 URL，但也可能是hash值
    url: string, // 此条数据绑定的 URL
    urls: string[], // 此条数据绑定的 URL 集合
    pageType: PAGE_TYPES
}

type WebPageTimes = {
    // 数据真实的创建、最后更新时间
    createAt: number,
    updateAt: number,


    mtimeMs?: number, // fileSystem 本地文件最后同步时间 待弃用
    expiredAt?: number, // 时效过期时间

    /**webdav 信息，仅表示文档的相关信息，不能作为数据本身的更新标识 （如笔记是 2021年创建的，但是 2022 年才上传云盘，此时的 lastmod 是2022年）*/
    lastmod?: string // Thu, 19 Nov 2020 08:08:11 GMT ，对应 webdav meta信息中的值
    etag?: string, // 对应 webdav 文件的etag信息，用于比较一致性
    lastSyncTime?: number, // 云盘最后同步时间
    hash?: string,
    visitedAt?: number, // 最后访问时间

    filename?: string, // hash + 自定义导出文件名

    commits?: {hash:string,time: number, did: string}[], // 版本号记录。每次同步都生成一次hash, 生成类似 git commit 记录，用于跟踪版本合并、冲突解决
}

enum DataVersion {
    version3='3', // 携带有 lastmode etag 字段
}

type WebPageSiteInfo = {
    deleted: boolean,
    icon: string,
    title: string, // 网站标题
    version: DataVersion,
    description: string, // 网站描述
    customTitle?: string, // 自定义标题
}

// 链路信息，记录各个网站之间的联系
type RouteInfo = {
    sessionId?: string
}

enum MetaResourceType {
    image='image',
    html='html',
}

type MetaResource = {
    url: string, // 可访问的URL 地址，
    type: MetaResourceType
    data?: string, // 原始数据
    createAt?: number, // 资源创建时间
}

type WebPageDatas = {
    plainData: PlainData,
    snapshots?: Omit<MetaResource, 'data'>[],
}

type WebPage = WebPageIds & WebPageTimes & WebPageDatas & WebPageSiteInfo & RouteInfo;

type AllowUpdateKeys = keyof  WebPageDatas | keyof  WebPageSiteInfo | keyof RouteInfo | 'url' | 'urls'

interface BackupData {
    pages: WebPage[],
    version: BackupVersion,
    extension_version: string,
    backup_at: number,
}

export type {
    PlainData,
    WebPage,
    Step,
    Position,
    Target,
    AllowUpdateKeys,
    BackupData
}

export {
    AnnotationStatus,
    BackupVersion,
    DataVersion
}
