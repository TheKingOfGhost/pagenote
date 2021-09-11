import {h} from 'preact';
import "../src/pagenote";
import '../../demos/index.css'
import "../../demos/init"
import {useEffect} from "preact/hooks";

export default function Demo() {

    useEffect(()=>{
        window.initPagenote();
    },[])

    return (
        <div className="demo">
            {/*<pagenote-root>*/}
            {/*    <pagenote-annotations></pagenote-annotations>*/}
            {/*</pagenote-root>*/}
            <article>
                <section>
                    <h2>
                        PAGENOTE SDK 尝鲜功能
                    </h2>
                    <div className="block">
                        <div className="part">
                            <h3>
                                这个页面是什么？
                            </h3>
                            <p>
                                你现在访问的是 PAGENOTE SDK 功能预览页面，你不必安装插件也可以试用主要功能。
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3>SDK 新功能列表</h3>
                    <ul>
                        <li>
                            <span>4.8.0-typescript。我们对 UI、交互都做了一次大的改造和升级。</span>
                            <ul>
                                <li>
                                    将批注和功能按钮区进行了拆分。
                                </li>
                                <li>
                                    有笔记的高亮末尾会增加一个图标，以提示此处高亮有笔记。
                                </li>
                                <li>
                                    单击高亮区域能切换状态：浅高亮、深高亮；双击可以快速进入编辑状态。
                                </li>
                                <li>
                                    批注的拖拽会更丝滑
                                </li>
                                <li>
                                    通过快捷键来高亮，可以直接进入编辑笔记模式。（选中一段文本后，长按 P 试试）
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>接下来的新功能规划是什么？</h3>
                    <ol>
                        <li>
                            侧边栏会被去掉。PAGENOTE 会更少的侵入原本网页。减少不必要的元素，影响原网页。
                        </li>
                        <li>
                            会将「长按唤起」升级为「召唤模式」，长按鼠标来激活划词功能，否则不激活。就像数码宝贝变身有没有？
                        </li>
                        <li>
                            开放对 图像、视频、音频的标记功能。并针对选区的不同内容，展示不同的功能按钮。
                        </li>
                        <li>
                            画笔也要分级，除了支持自定义颜色，增加 1、2级区分。
                        </li>
                        <li>
                            暂时就透露这些功能啦，想法还有超级多，一个一个实现吧。
                        </li>
                    </ol>
                </section>

                <hr/>

                <section>
                    <h2>
                        <span> 你能用 PAGENOTE 做什么？ </span>
                    </h2>
                    <div className="block">
                        <div className='card'>
                            <h3>
                                高亮
                            </h3>
                            <div>
                                <div>
                                    多种颜色高亮网页
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="part">
                            <h3>
                                怎么使用
                            </h3>
                            <p>
                                在这里勾选任意一段文本，然后按钮就会自动出来。点击后就高亮成功了。
                            </p>
                            <p>
                                高亮成功后，还可以记录笔记，下次访问网页，笔记也都还在
                            </p>
                        </div>
                    </div>
                    <div className="block">
                        <div className='card'>
                            <h3>
                                批注
                            </h3>
                            <div>
                                <div>
                                    高亮内容
                                </div>
                                <div>
                                    批注笔记
                                </div>
                            </div>
                        </div>
                        <div className="part">
                            <h3>
                                怎么使用
                            </h3>
                            <p>
                                在这里勾选任意一段文本，然后按钮就会自动出来。点击后就高亮成功了。
                            </p>
                            <p>
                                高亮成功后，还可以记录笔记，下次访问网页，笔记也都还在
                            </p>
                        </div>
                    </div>
                    <div className="block">
                        <div className='card'>
                            <h3>
                                整理
                            </h3>
                            <div>
                                <div>
                                    在本地就整理的创建的笔记
                                </div>
                            </div>
                        </div>
                        <div className="part">
                            <h3>
                                免登录、离线可用
                            </h3>
                            <p>
                                你不必注册账号就能管理你的数据，因为数据就在你本机。
                            </p>
                            <p>
                                服务器端不存储你的数据
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>
                        特有的操作小技巧
                    </h2>
                    <p>
                        这是 PAGENOTE 特有的特性，在其他同类产品，你可能找不到。
                    </p>
                    <div className="block">
                        <div className="card">
                            <h3>
                                延迟功能
                            </h3>
                            <div>
                                按住鼠标不放一段时间后，按钮才会出现。
                            </div>
                        </div>
                        <div className="part">
                            <p>
                                当你在网页上选中一段内容后，你安装的划词插件会立即出现按钮 -- 或许，这已经打扰到你。
                                <br/>
                                而 PAGENOTE 允许你灵活控制按钮是否出现：按住鼠标不松一定时间后，PAGENOTE 才会开始工作。
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>
                        PAGENOTE +
                    </h2>
                    <div className="block">
                        <div className="card">
                            <h3>
                                扩展划词
                            </h3>
                            <div>
                                除了高亮、笔记等核心功能。更多的扩展功能，支持个性化定制，划词之后，还可以做什么？搜索、翻译、发送，这些，在 PAGENOTE+ 中都可以实现。
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                    <h2>
                        与其他同类产品优点是什么？
                    </h2>
                    <div className="block">
                        <div className="part">
                            <h3>
                                免费，开源
                            </h3>
                            <div>
                                基本的高亮标注等核心功能，都是免费的。不会刻意限制你使用它。
                            </div>
                        </div>
                        <div className="part">
                            <h3>

                            </h3>
                        </div>
                    </div>
                </section> */}

                <section>
                    <h2>
                        关于我
                    </h2>
                    <div className="block">
                        <div className="part">
                            喜欢软件开发的我，需要联系我的话，关注公众号吧：
                            <div>
                                <img width="100" height='100' src="https://pagenote.cn/img/wechat.jpg" alt="pagenote"/>
                            </div>
                            <p>
                                如果觉得 PAGENOTE 还不错，微信扫一扫，小小打赏一下吧
                                <br/>
                                <img width="100" height='100' src="https://pagenote.cn/img/pay/wechat-pay.png" alt=""/>
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}