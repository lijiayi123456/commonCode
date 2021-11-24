<template>
    <section class="wrap-header">
        <div class="ten_main">
            <span class="ten_logo">Tencent 腾讯</span>
            <div style="float:right;">
                <div class="ten_header_item">
                    <span class="ten_header_item-title">简介</span>
                    <ul>
                        <li>公司简介</li>
                        <li>愿景及使命</li>
                        <li>发展历程</li>
                        <li>业务架构</li>
                        <li>管理团队</li>
                        <li>企业文化</li>
                        <li>办公地点</li>
                    </ul>
                </div>
                <div class="ten_header_item">
                    <span class="ten_header_item-title">业务</span>
                    <ul>
                        <li>面向用户</li>
                        <li>面向企业</li>
                        <li>创新科技</li>
                    </ul>
                </div>
                <div class="ten_header_item">
                    <span class="ten_header_item-title">员工</span>
                    <ul>
                        <li>人才发展</li>
                        <li>腾讯学堂</li>
                        <li>工作环境</li>
                        <li>员工活动</li>
                    </ul>
                </div>
                <div class="ten_header_item">
                    <span class="ten_header_item-title">企业责任</span>
                    <ul>
                        <li>全球战疫</li>
                        <li>践行承诺</li>
                        <li>支持善举</li>
                        <li>鼓励创新</li>
                        <li>企业社会责任报告</li>
                    </ul>
                </div>
                <div class="ten_header_item">
                    <span class="ten_header_item-title">投资者</span>
                    <ul>
                        <li>财务新闻</li>
                        <li>公告及财务报告</li>
                        <li>业绩电话会级路演</li>
                        <li>投资者工具包</li>
                        <li>证券及债券信息</li>
                        <li>企业管治</li>
                    </ul>
                </div>
                <div class="ten_header_item">
                    <span class="ten_header_item-title">媒体</span>
                    <ul>
                        <li>企业动态</li>
                        <li>财务新闻</li>
                        <li>腾讯视角</li>
                        <li>媒体资料库</li>
                    </ul>
                </div>
                <span class="font-country">简 繁 / EN</span>
                <!-- <ul>
                    <li>
                        <span>简介</span>
                        <ul style="display:none;">
                            <li>公司简介</li>
                            <li>愿景及使命</li>
                            <li>发展历程</li>
                            <li>业务架构</li>
                            <li>管理团队</li>
                            <li>企业文化</li>
                            <li>办公地点</li>
                        </ul>
                    </li>
                        
                    
                </ul> -->
                
            </div>
            
        </div>
    </section>
   <div class="banner_slide-wrap">
       <div v-if="isShow" class="banner_slide">
           <!-- 照片的遮罩 -->
           <div class="banner_slide_shadow"></div>
           <img src="../../../public/img/tencent/brief-3.jpg" alt=""> 
           <div class="banner_slide_text">
               <div class="ten_main">
                   <h1>精品展 #成才在腾讯 </h1>
                    <h3>在腾讯视角新的系列文章里，一起遇见不断推动创新，身体力行“用户为本，科技向善”的杰出腾讯团队成员.</h3>
               </div>
           </div>
       </div>
       <div v-if="!isShow" class="banner_slide">
           <!-- 照片的遮罩 -->
           <div class="banner_slide_shadow"></div>
           <img src="../../../public/img/tencent/brief-1-1.jpg" alt="">
           <div class="banner_slide_text">
               <div class="ten_main">
                   <h1>腾讯公布二零二一年第三季业绩 </h1>
                    <h3>查看腾讯业绩新闻详情。</h3>
               </div>
           </div>
           
       </div>
       <div class="banner_slide_footer">
            <div class="ten_main">
                <div class="banner_slider_bottons">
                    <span class="ten_banner_arr ten_banner_arr_l" @click="changeImage"></span>
                    <span class="ten_banner_arr"  @click="changeImage"></span>
                </div>
            </div>
        </div>
   </div>
   <!-- 最新动态 -->
   <section class="ten_cards">
       <div class="ten_main">
           <h4>
               最新动态
           </h4>
           <div class="ten_cards_grid">
               <div class="ten_cards_grid_left">
                   <div class="ten_card">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                                2021.07.29
                            </span>
                            <h1>技术助力 网友齐心救援洪水受灾民众</h1>
                            <p>一位网名为Manto的21岁学生，第一时间利用技术帮助洪水中受困的灾民，成为众多救援力量的一个缩影。</p>
                       </div>
                   </div>
                   <div class="ten_card ten_card_small ten_card--blue">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img3.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                                2021.11.09
                            </span>
                            <h1>适老化设计助长者轻松理财</h1>
                            <p>科技的飞速发展有利我们以创新和更高效率的方式完成工作。但有时候发展步伐太快，却可能令很多老年人跟不上。</p>
                       </div> 
                   </div>
                   <div class="ten_card ten_card_small">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img4.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                                2021.11.03
                            </span>
                            <h1>气候变化与全球水资源危机息息相关</h1>
                            <p>水是生命之源，然而，据腾讯首席探索官网大为观察，许多人对于水的珍贵熟视无睹。</p>
                       </div>
                   </div>
                   <div class="ten_card">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img6.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                                2020.11.19
                            </span>
                            <h1>AI技术如何帮助听障群体“听更清”？</h1>
                            <p>腾讯天籁AI音频技术通过AI降噪算法改善听障人群听觉体验，让他们真正听清世界。</p>
                       </div>
                   </div>
                   <div class="ten_card ten_card-bottom">
                       <div class="ten_img">
                           <div class="ten_img_shadow"></div>
                           <img src="../../../public/img/tencent/bg-together.png" alt="">
                           <div class="ten_img_txt">
                               <h1>全球战疫 一起行动</h1>
                               <p>腾讯发挥科技优势，为远程办公、学习和娱乐提供工具和服务，减缓新冠疫情传播。</p>
                           </div>
                       </div>
                       
                   </div>
               </div>
               <div class="ten_cards_grid_right">
                   <div class="ten_card ten_card_small-right ten_card--ligthblue">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img2.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                                2021.11.08
                            </span>
                            <h1>腾讯联手亚洲数码金融研究所，推动亚洲地区金融科技创新</h1>
                            <p>腾讯在2021年新加坡金融科技节宣布，将与亚洲数码金融研究所（AIDF）展开合作。</p>
                       </div>
                   </div>
                   <div class="ten_card ten_card_small-right ten_card-gray">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img7.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                               2021.09.02
                            </span>
                            <h1>“天才妈妈”以祖传工艺打造潮流时尚</h1>
                            <p>“天才妈妈”是腾讯公益慈善基金会为支持乡村妇女发展而设立的项目。该项目为中国偏远山区和乡村妇女筹集资金，让她们得以施展传统技艺，传承宝贵的文化习俗和非物质文化遗产。。</p>
                       </div>
                       
                   </div>
                   <div class="ten_card ten_card_small-right ten_card--blue">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img8.png" alt="">
                       </div>
                       <div class="ten_card_body">
                            <span class="ten_tagline">
                                2021.08.20
                            </span>
                            <h1>“能源互联网”可助全球能源加速转型</h1>
                            <p>网大为（David Wallerstein）作为腾讯首席探索官，近期受邀出席“国际能源变革对话”，并就如何发挥包括云、软件、数据、人工智能和机器学习等互联网先进科技在能源转型中的重要作用，分享了前瞻性的观点。</p>
                       </div>
                   </div>
                   <div class="ten_card  ten_card-bottom ten_card_bottom-right">
                       <div class="ten_img">
                           <img src="../../../public/img/tencent/img9.png">
                           <a href="https://static.www.tencent.com/uploads/2019/11/26/58c24b0316504a2ee47b273df02367b2.mp4" target="_blank"></a>
                           <div class="ten_img_txt">
                               <h1>用户为本，科学为善</h1>
                           </div>
                           <div class="vedio-play"></div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section>
       <div class="ten_main">
           <div class="ten_links">
               <div class="img_text">
                    <img src="../../../public/img/tencent/index_detail_1.jpg" alt="">
                    <h1>公司简介</h1>
                </div>
                <div class="img_text">
                    <img src="../../../public/img/tencent/index_detail_2.jpg" alt="">
                    <h1>企业文化</h1>
                </div>
                <div class="img_text">
                    <img src="../../../public/img/tencent/index_detail_3.jpg" alt="">
                    <h1>办公地点</h1>
                </div>
           </div>
       </div>
   </section>

   <section class="ten_bg--dark">
       <div class="ten_main">
           <div class="ten_home">
               <div class="ten_home_left">
                   <a href="https://www.tencent.com/zh-cn/business.html" @mouseenter="showIndex = 1" :class="{'checked-a':showIndex === 1}">
                        <h2><i>连接用户与生活</i></h2>
                        <div>
                            <span>让生活更便捷更多彩</span>
                            <img src="../../../public/img/tencent/icon_arrow_r.png" alt="" >
                        </div>
                   </a>
                   <a href="https://www.tencent.com/zh-cn/business.html" @mouseenter="showIndex = 2" :class="{'checked-a':showIndex === 2}">
                        <h2>连接企业与科技</h2>
                        <div>
                            <span><i>数字化助手，助力产业升级</i></span>
                            <img src="../../../public/img/tencent/icon_arrow_r.png" alt="">
                        </div>
                   </a>
                   <a href="https://www.tencent.com/zh-cn/business.html" @mouseenter="showIndex = 3" :class="{'checked-a':showIndex === 3}">
                        <h2>连接现在与未来</h2>
                        <div>
                            <span><i>探索面向未来的创新科技</i></span>
                            <img src="../../../public/img/tencent/icon_arrow_r.png" alt="">
                        </div>
                   </a>
               </div>
               <div class="ten_home_right" v-if="showIndex === 1">
                    <div class="ten_home_card" >
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_1_1.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>通信与社交</h3>
                            <span>连接人与人，提供功能丰富的即时通信和社交平台，让沟通更便捷</span>
                        </div>
                    </div>
                    <div class="ten_home_card" >
                        <div class="ten_img_shadow"></div>
                        <img  src="../../../public/img/tencent/index_link_1_2.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>数字内容</h3>
                            <span>基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态</span>
                        </div>
                    </div>
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_1_3.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>金融科技服务</h3>
                            <span>连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。</span>
                        </div>
                    </div>
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_1_4.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>工具</h3>
                            <span>提供多种工具性软件，帮助用户快速直接解决各项具体需求。</span>
                        </div>
                    </div>
                </div>
                <div class="ten_home_right" v-if="showIndex === 2">
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_2_1.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>腾讯广告营销</h3>
                            <span>大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。</span>
                        </div>

                    </div>
                    <div class="ten_home_card" >
                        <div class="ten_img_shadow"></div>
                        <img  src="../../../public/img/tencent/index_link_2_2.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>腾讯云</h3>
                            <span>提供领先的云产品与云服务，辅助企业走向数字化和全球化。</span>
                        </div>
                    </div>
                    <div class="ten_home_card ten_home_card-big">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_2_3.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>智慧产业</h3>
                            <span>通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品，<br> 打造智慧产业方案，助力产业数字化升级。。</span>
                        </div>
                    </div>
                </div>
                <div class="ten_home_right" v-if="showIndex === 3">
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_3_1.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>人工智能</h3>
                            <span>运用多种技术资产，提升人工智能实力，惠及人类和世界。</span>
                        </div>
                    </div>
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img  src="../../../public/img/tencent/index_link_3_2.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>物联网</h3>
                            <span>通过腾讯云物联网，致力提供IoT全栈产品和解决方案。</span>
                        </div>
                    </div>
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_3_3.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>多媒体</h3>
                            <span>腾讯多媒体实验室专注音视频通信技术的前瞻性研究。</span>
                        </div>
                    </div>
                    <div class="ten_home_card">
                        <div class="ten_img_shadow"></div>
                        <img src="../../../public/img/tencent/index_link_3_4.jpg" alt="" >
                        <div class="ten_img_txt">
                            <h3>腾讯探索</h3>
                            <span>携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。</span>
                        </div>
                    </div>
                </div>
           </div>
       </div>
   </section>
   
   <section class="ten_subbanner">
       <div class="ten_main">
           <transition name="fade">
               <div class="ten_subbanner_img_text" v-show="isShowBanImg">
                    <div class="ten_img_shadow"></div>
                    <img :src="subBannerList[showBanImgIndex].img" alt="">
                    <img src="../../../public/img/tencent/i_tri.png" alt="" class="img_i_tri">
                    <div class="ten_txt">
                        <h2>{{subBannerList[showBanImgIndex].title}}</h2>
                        <span>{{subBannerList[showBanImgIndex].content}}</span>
                    </div>
                    <span class="ten_slider_arr ten_slider_arr-left" @click="leftBanImg">&lt;</span>
                    <span class="ten_slider_arr ten_slider_arr-right" @click="rightBanImg">&gt;</span>
                </div>
           </transition>
           
           <div class="ten_subbanner_txt">
               <h3>连接<br>
                责任与信任</h3>
               <span>聚合微笑善行，以科技让世界更美好</span>
               <img src="../../../public/img/tencent/icon_arrow_r_dark.png" alt="">
           </div>
       </div>
   </section>

   <section class="ten_subbanner_bottom">
       <img :src="bannerBottomImgList[showBanBottomImgIndex]" alt="">
       <!-- <img src="../../../public/img/tencent/index_develop_bg2.jpg" alt="">
       <img src="../../../public/img/tencent/index_develop_bg3.jpg" alt=""> -->
       <div class="banner_slide_footer">
            <div class="banner_slider_bottons">
                <span class="ten_banner_arr ten_banner_arr_l" @click="leftBanBottomImg"></span>
                <span class="ten_banner_arr"  @click="rightBanBottomImg"></span>
            </div>
        </div>
   </section>

   <section class="wrap_footer">
       <div class="ten_main">
           <div class="focus_us">
                <span>关注我们</span>
                <span class="iconfont icon-icon-test48"></span>
                <span class="iconfont icon-dingtalk"></span>
                <span class="iconfont icon-icon-test53"></span>
                <span class="iconfont icon-alipay"></span>
            </div>
            <div class="join_us">
                <span>加入我们</span>
                <span class="iconfont icon-icon-test40" @click="showJoinUs=!showJoinUs" :class="{'arrow-down':showJoinUs}"></span>
                <div v-show="showJoinUs">
                    <ul>
                        <li>社会招聘</li>
                        <li>校园招聘</li>
                        <li>国际招聘</li>
                    </ul>
                </div>
            </div>
            <div class="call_us">
                <span>联系我们</span>
                <span class="iconfont icon-icon-test40" @click="callUs=!callUs" :class="{'arrow-down':callUs}"></span>
                <div v-show="callUs">
                    <ul>
                        <li>客户服务</li>
                        <li>合作洽谈</li>
                        <li>腾讯采购</li>
                        <li>媒体及投资者</li>
                        <li>法律信息</li>
                    </ul>
                </div>
            </div>
            <div class="lawer-info">
                <span>联系我们</span>
                <span class="iconfont icon-icon-test40" @click="showLawerInfo=!showLawerInfo" :class="{'arrow-down':showLawerInfo}"></span>
                <div v-show="showLawerInfo">
                    <ul>
                        <li>服务协议</li>
                        <li>隐私政策</li>
                        <li>知识产权</li>
                    </ul>
                </div>
            </div>
            <div class="page-footer">
                <ul>
                    <li>法律声明 </li>
                    <li>阳光准则</li>
                    <li>网站地图</li>
                    <li>粤文网【2017】6138-1456号</li>
                    <li>粤B2-20090059-1</li>
                </ul>
                <!-- <div>
                    <span>法律声明 </span>
                    <span>阳光准则</span>
                    <span>网站地图</span>
                    <span>粤文网【2017】6138-1456号</span>
                    <span>粤B2-20090059-1</span>
                </div> -->
                <span>Copyright © 1998 - 2021 Tencent. All Rights Reserved. 腾讯公司 版权所有</span>
            </div>
       </div>
       
   </section>
   <div class="page-scroll-top" @click="toTop" v-if="showToScroll">
       <span class="iconfont icon-icon-test40"></span>
   </div>


</template>

<script lang="ts">
import { defineComponent,ref,reactive,onMounted,onUnmounted } from 'vue';


// 若src定义在 html中，使用相对地址，若定义在js中，使用绝对地址
export default defineComponent({
    components: {
        //  Slide
    },
    setup(props,ctx) {
        onMounted(()=>{
            // 监听滚动事件
            window.addEventListener('scroll',handleScroll,false)
        })
        onUnmounted(()=>{
            window.removeEventListener('resize',handleScroll)
        })
        let subBannerList = reactive([
            {
                'img':'./img/tencent/index_resp_bg0.png',
                'title':'全球战疫  一起行动',
                'content':'在新冠肺炎疫情之战中，腾讯秉持科技向善，以互联网科技的力量，通过我们的技术和产品为全球战疫提供支持。'
            },
            {
                'img':'./img/tencent/index_resp_bg1.jpg',
                'title':'99公益日 ',
                'content':'每年一度于9月举行的全民公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。'
            },
            {
                'img':'./img/tencent/index_resp_bg2.jpg',
                'title':'腾讯长城保护项目',
                'content':'腾讯公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。'
            },
            {
                'img':'./img/tencent/index_resp_bg3.jpg',
                'title':'腾讯为村',
                'content':'根据乡村使用场景定制微信公众号，形成由村、乡镇、区县、州市组成的公众号集群服务村民，打造手机上的“为村服务中心”'
            },
        ])
        let bannerBottomImgList = reactive(['./img/tencent/index_develop_bg1.jpg','./img/tencent/index_develop_bg2.jpg','./img/tencent/index_develop_bg3.jpg'])
        let showBanBottomImgIndex = ref(0);
        let isShow = ref(true);
        let isShowBanImg = ref(true);
        let showIndex = ref(1); 
        let showBanImgIndex = ref(0);
        let showJoinUs = ref(false);
        let callUs = ref(false);
        let showLawerInfo = ref(false);
        let showToScroll = ref(false);

        let changeImage = () => {
            isShow.value = !isShow.value;
        }
        let leftBanImg = () => {
            isShowBanImg.value = false;
            setTimeout(()=>{
                if(showBanImgIndex.value === 0) {
                    showBanImgIndex.value = subBannerList.length-1;
                } else {
                    showBanImgIndex.value -= 1;
                }
                isShowBanImg.value = true;
            },100)
            
        }
        let rightBanImg = () => {
            isShowBanImg.value = false;
            setTimeout(()=>{
                isShowBanImg.value = true;
                if(showBanImgIndex.value === subBannerList.length-1) {
                    showBanImgIndex.value = 0;
                } else {
                    showBanImgIndex.value += 1;
                }
            },100)
        }
        let leftBanBottomImg = () => {
            if(showBanBottomImgIndex.value === 0) {
                showBanBottomImgIndex.value = bannerBottomImgList.length-1;
            } else {
                showBanBottomImgIndex.value -= 1;
            }
        }
        let rightBanBottomImg = () => {
            if(showBanBottomImgIndex.value === bannerBottomImgList.length-1) {
                showBanBottomImgIndex.value = 0;
            } else {
                showBanBottomImgIndex.value += 1;
            }
        }
        let toTop = () => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        let handleScroll = () => {
            if(document.documentElement.scrollTop > 60) {
                showToScroll.value = true;
            } else {
                showToScroll.value = false;
            }
        }
        return {
            showIndex,
            isShow,
            subBannerList,
            showBanImgIndex,
            bannerBottomImgList,
            showBanBottomImgIndex,
            showJoinUs,
            callUs,
            showLawerInfo,
            showToScroll,
            isShowBanImg,
            changeImage,
            leftBanImg,
            rightBanImg,
            leftBanBottomImg,
            rightBanBottomImg,
            toTop
            
        }
    },
})
</script>

<style lang="scss" scoped>
    h1,h2,h3,h4,h5 {
        margin: 12px 0;
        line-height: 1.4em;
    }
    p {
        margin: 12px 0;
        line-height: 1.5em;
    }
    .wrap-header {
        position: absolute;
        text-align: left;
        top: 0;
        left: 0;
        padding-top: 30px;
        font-size: 20px;
        z-index: 3;
        width: 100%;
        height: 60px;
        color: white;
        transition: ease height 0.5s;
        .ten_logo {
            font-size: 25px;
            font-weight: bold;
        }
        .ten_header_item {
            font-size: 20px;
            color: white;
            cursor: pointer;
            display: inline-block;
            margin-right: 50px;
            position: relative;
            ul {
                display: none;
                position: absolute;
                width: 200px;
                top: 43px;
                left: 23px;
                text-align: center;
                transform: translateX(-50%);
                li {
                    line-height: 50px;
                    font-size: 16px;
                    color: #777;
                }
                li:hover {
                    color: #111;
                }
            }
            &:hover {
                .ten_header_item-title::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 3px;
                    background: #0052d9;
                }
                ul {
                    display: block;
                }
            }
        }
        &:hover {
            background:white;
            height:500px;
            color: black;
            .ten_logo {
                color:#0052d9;
            }
            .ten_header_item {
                color:black;
                height: 500px;
            }
            .font-country {
                color: black;
                font-weight: normal;
            }
        }
    }


    .banner_slide-wrap {
        position: relative;
        height: 720px;
        // margin-left:
        .banner_slide {
            height: 100%;
            .banner_slide_shadow {
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
            }
        }
        .banner_slide_text {
            position: absolute;
            top: 40%;
            transform: translateY(-50%);
            z-index: 1;
            width: 100vw;
            text-align: left;
            color: white;
        }
        img {
            height: 100%;
            width:100%;
            object-fit: cover; //对图片进行剪切，保留原始比例：
        }
        
    }
    .banner_slide_footer {
        width: 100%;
        position:absolute;
        bottom: 100px;
        height:100px;
        // background: rgba(0,0,0,0.3);
        z-index: 3;
        
        .ten_main {
            height: 100%;
            border-bottom: 1px solid white;
        }
        .banner_slider_bottons {
            // display: inline-block;
            float: left;
            font-size: 48px;
            color: white;
            .ten_banner_arr {
                display: inline-block;
                width: 54px;
                height: 54px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center left;
                background-image: url(../../../public/img/tencent/icon_arrow_r.png);
                margin: 0px 24px 0px 0px;
            }
            .ten_banner_arr_l {
                transform: scaleX(-1);
            }
        }
    }
    .ten_cards {
        width: 100%;
        position: relative;
        top: -100px;
        margin-bottom: -140px;
        h4 {
            font-weight: 500;
            font-family: TencentSansW7CN;
            font-size: 28px;
            color: white;
            text-align: left;
            line-height: 1.5em;
        }
        .ten_cards_grid {
            display: flex;
            justify-content: space-between;
            .ten_card {
                width: 100%;
                margin-bottom: 20px;
                color: black;
                height: 580px;
                .ten_img {
                    height: 58%;
                    // height: 300px;
                    position:relative;
                    overflow: hidden;
                    .vedio-play {
                        cursor: pointer;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        z-index: 4;
                        width: 72px;
                        height: 72px;
                        background: rgba(25,74,195,0.95);
                        border-radius: 50%;
                        z-index: 4;
                    }
                    .vedio-play:after {
                        position: absolute;
                        content: "";
                        display: block;
                        top: calc(50% - 9px);
                        left: calc(50% - 4px);
                        width: 0px;
                        height: 0px;
                        border: 9px solid transparent;
                        border-left: 13px solid #D8D7DF;
                        z-index: 5;
                    }
                }
                .ten_img:hover {
                    .vedio-play {
                        background: rgba(255,255,255,0.8);
                    }
                    .vedio-play:after {
                        border-color: transparent transparent transparent rgba(25,74,195,1);
                    }
                }
                a, .ten_img_shadow {
                    position:absolute;
                    top:0px;
                    left:0px;
                    height: 100%;
                    width: 100%;
                    z-index:3;
                }
                .ten_img_shadow {
                    background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
                    z-index:0;
                }
                img {
                    position: absolute;
                    top:0px;
                    left: 0px;
                    object-fit: cover;
                    // z-index: 0;
                }
                img:hover {
                    transform: scale(1.05);
                    transition: all 0.4s;
                }
                .ten_card_body {
                    padding: 36px 24px;
                    text-align: left;
                    // color: white;
                    .ten_tagline {
                        position:relative;
                        display: inline-block;
                        border-top: 1px solid rgba(25,74,195,1);
                        color: rgba(25,74,195,1);
                        height: 30px;
                        // border-bottom: 1px solid rgba(25,74,195,1);
                        line-height: 30px;
                        left: -24px;
                        padding-left: 24px;
                        padding-right: 20px;
                        overflow: hidden;
                        font-weight: 700;
                    }
                    .ten_tagline:before {
                        content: "";
                        display: block;
                        position: absolute;
                        left: calc(100% - 12px);
                        bottom: 0px;
                        width: 100%;
                        border-top: 1px solid rgba(25,74,195,1);
                        transform: rotate( -69deg  ) translate(-1px,0px);
                        transform-origin: 0px 0px;
                    }
                    .ten_tagline::after {
                        content: "";
                        display: block;
                        position: absolute;
                        left: 0px;
                        bottom: 0px;
                        width: calc(100% - 12px);
                        border-top: 1px solid rgba(25,74,195,1);
                    }
                    h1 {
                       font-size: 24px;
                    }
                    @media screen and (max-width: 1279px) {
                        h1 {
                            font-size: 18px;
                        }
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.5em;
                        font-weight: normal;
                        color: black;
                    }
                }
            }
            .ten_card:hover {
                box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
                transform: translateY(-4px);
                transition: all 0.4s;
            }
            .ten_card.ten_card_small {
                width: calc(50% - 10px);
                .ten_img {
                    height: 42%;
                }
            }
            .ten_card.ten_card_small-right {
                width: 100%;
                .ten_img {
                    height: 42%;
                }

            }
            // 最后一行，只有图片和文字是在一起的
            .ten_card.ten_card-bottom {
                height: 300px;
                margin-bottom: 100px;
                .ten_img {
                    height: 100%;
                    img {
                        height: 100%;
                        z-index: -1;
                    }
                }
            }
            .ten_img_txt {
                position:absolute;
                height: 100%;
                width:100%;
                z-index: 2;
                display: flex;
                text-align: left;
                align-items: center;
                flex-direction: row;
                align-content: center;
                flex-wrap: wrap;
                padding: 0px 80px;
                h1 {
                    font-size: 18px;
                    color: white;
                    max-width: 500px;
                }
                p {
                    font-size: 16px;
                    line-height: 1.5em;
                    color: black;
                    max-width: 500px;
                }
            }
            .ten_card.ten_card--blue {
                background: #0052d9;
                color: white;
                p {
                    color: white !important;
                }
                .ten_tagline {
                    border-top: 1px solid white;
                    color: white;
                }
                .ten_tagline::before {
                    border-top: 1px solid white;;
                }
                .ten_tagline::after {
                    border-top: 1px solid white;
                }
            } 
            .ten_card.ten_card--ligthblue {
                background: rgb(0, 169, 206);
                color: white;
                p {
                    color: white !important;
                }
                .ten_tagline {
                    border-top: 1px solid white;
                    color: white;
                }
                .ten_tagline::before {
                    border-top: 1px solid white;;
                }
                .ten_tagline::after {
                    border-top: 1px solid white;
                }
            } 
            .ten_card.ten_card-gray {
                background: #D8D7DF;
            }
        }
        .ten_cards_grid_left {
            display: flex;
            width: 65%;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .ten_cards_grid_right {
            display: flex;
            width: calc(35% - 20px);
            flex-wrap: wrap;
        }
    }

    .ten_links {
        height: 350px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        padding: 72px 0px 48px 0px;
    }
    .img_text {
        position: relative;
        width: calc(33% - 10px);
        transition: ease all 0.5s;
        img {
            width:100%;
            height: 100%;
            position: absolute;
            top: 0;
            left:0;
            z-index: -1;
        }
        h1 {
            font-size: 32px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        h1:after {
            position:absolute;
            width: 0px;
            content: "";
            display: block;
            height: 2px;
            background: #FFF;
            transition: ease all 0s;
        }
    }
    .img_text:hover {
        background: rgba(25,74,195,0.7);
        h1:after {
            left: 0;
            opacity: 1;
            width: 100%;
            transition: ease all 0.3s;
        }
    }
    .ten_bg--dark {
        background: black;
        color: white;
        justify-content: space-between;
        .ten_home {
            height: 600px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .ten_home_left {
            width: calc(33.33% - 12px);
            padding-top: 24px;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            a {
                color: #bbb;
                h2 {
                    position: relative;
                    font-size: 32px;
                }
                h2::before {
                    position: absolute;
                    content: "";
                    display: none;
                    height: 100%;
                    width: 5px;
                    background: rgba(25, 74, 195, 0.95);
                    left: -36px;
                }
                display: block;
                margin: 12px 0;
                text-decoration: none;
                
                img {
                    display: block;
                    opacity: 0;
                    width: 50px;
                    padding:12px 0;
                }
            }
            .checked-a,a:hover {
                color:white;
                transform:translateX(36px);
                img {
                    opacity: 1;
                }
                h2::before {
                    display: block;
                }
                transition: ease-in transform 0.3s;
                
            }
        }
        .ten_home_right {
            width: calc(66.66% - 12px);
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            .ten_home_card {
                cursor: pointer;
                width: 50%;
                height: 50%;
                position: relative;
                overflow: hidden;
                padding: 24px;
                text-align: left;
                img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top:0;
                    left:0;
                }
                .ten_img_txt {
                    position: absolute;
                    bottom: 24px;
                    h3 {
                        font-family: 'TencentSansw7';
                        font-size: 24px;
                        position: relative;
                    }
                    h3::after {
                        position: absolute;
                        top: 50%;
                        left: calc(100% - 54px);
                        content: '';
                        display: block;
                        opacity: 0;
                        width: 0;
                        height: 0;
                        background-image: url(../../../public/img/tencent/icon_arrow_r.png);
                        background-size: contain; //此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。
                        background-repeat: no-repeat;
                    }
                    span {
                        display: none;
                    }
                }
                .ten_img_shadow {
                    position:absolute;
                    top:0px;
                    left:0px;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 100%);
                    z-index:2;
                }
            }
            .ten_home_card.ten_home_card-big {
                width: 100%;
            }
            .ten_home_card:hover {
                .ten_img_txt {
                    h3:after {
                        opacity: 1;
                        transition: all 0.3s;
                        width: 54px;
                        height: 10px;
                    }
                    span {
                        display:block;
                    //    opacity: 1;
                    }
                }
            }
        }
    }

    .ten_subbanner {
        margin:72px 0px;
        .ten_main {
            display: flex;
            .ten_subbanner_img_text {
                width: 50%;
                position: relative;
                height: 550px;
                img {
                    height: 100%;
                    width:100%;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    z-index: -1;
                }
                img.img_i_tri {
                    height: 100%;
                    // position: absolute;
                    width: 50px;
                    left: calc(100% - 50px); 
                    z-index:1;
                }
                .ten_slider_arr {
                    opacity: 0;
                    cursor: pointer;
                    font-size: 30px;
                    color: #ccc;
                    position: absolute;
                    bottom: 2px;
                    right: 80px;
                    z-index:2;
                }
                .ten_slider_arr-left {
                    right: 120px;
                }
                .ten_img_shadow {
                    position:absolute;
                    top:0px;
                    left:0px;
                    height: 100%;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.3);;
                    z-index:0;
                }
            }
            .ten_subbanner_img_text:hover {
                .ten_slider_arr {
                    transition: all 0.7s;
                    opacity: 1;
                }
            }
            .ten_txt {
                width: 74%;
                position: absolute;
                bottom: 40px;
                left: 20px;
                color: white;
                text-align: left;
                z-index:2;
            }
            .ten_subbanner_txt {
                width: 50%;
                text-align: left;
                padding-left: 72px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h3 {
                    cursor: pointer;
                    font-size: 32px;
                    line-height: 1.2em;
                    font-family: 'TencentSansw7';
                    font-weight: bold;
                    &:hover {
                        color: #0052d9;
                    }
                }
                span {
                    width:100%;
                    display: inline-block;
                    line-height: 1.8em;
                }
                img{
                    display:inline-block;
                    width: 50px;
                    margin: 15px 0px;
                }
            }
        }
    }
    .ten_subbanner_bottom {
        position: relative;
        height: 600px;
        img {
            height: 100%;
            width: 100%;
        }
        .banner_slide_footer {
            bottom: 0px;
            padding-left: 6vw;
        }
    }
    .wrap_footer {
        padding: 20px 0px;
        .focus_us ,.join_us,.call_us,.lawer-info{
            padding: 20px 0px;
            text-align: left;
            font-size: 20px;
            line-height: 28px;
            vertical-align: middle;
            margin-right: 20px;
            span,.iconfont {
                display: inline-block;
                // line-height: 20px;
                padding-right: 30px;
                height: 28px;
            }
            .iconfont {
                font-size: 28px;
                vertical-align: middle;
            }
        }
        .focus_us {
            border-bottom: 1px solid #eee;
        }
        .join_us , .call_us,.lawer-info{
            .iconfont {
                cursor: pointer;
                float: right;
            }
            .iconfont.arrow-down {
                transform:rotate(180deg);
                margin-right: 30px;
                // transition: all 0.5s;
            }
            ul {
                margin-top: 20px;
                font-size: 15px;
                line-height: 50px;
            }
        }
        .page-footer {
            text-align: left;
            font-size: 12px;
            line-height: 22px;
            color: rgb(146,151,151);
            span,li {
                display: inline-block;
                // float: left;
                margin-right: 20px;
            }
        }
    }
    .ten_main {
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
        h1 {
            font-size: 48px;
            line-height: 1.8em;
            max-width: 950px;
        }
        h3 {
            max-width:680px;
            font-size: 18px;
            line-height: 1.5em;
        }
    }
    @media screen and (max-width: 1248px) {
        .ten_main {
            margin: 0px 24px;
            width: auto;
        }
    }
    .page-scroll-top {
        position: fixed;
        bottom:40px;
        right: 40px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #0052d9;
        background: white;
        .iconfont {
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #0052d9;
            font-size: 25px;
        }
        &:hover {
            cursor: pointer;
            background: #0052d9;
            // border: 1px solid white;
            .iconfont {
                color: white;
            }
        }
    }
    .fade-enter-active {
        transition: opacity 0s;
    }
    .fade-leave-active {
        transition: opacity 0.2s;
    }
    .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0.9;
    }
</style>
