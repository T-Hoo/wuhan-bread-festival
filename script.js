// 1.WordArt爱心造型词云
const wordList = [
    ["市集经济", 100],
    ["面包节", 95],
    ["创意市集", 90],
    ["烘焙", 85],
    ["可颂", 70],
    ["欧包", 68],
    ["文旅融合", 82],
    ["社交打卡", 78],
    ["消费升级", 75],
    ["手作", 65],
    ["碳水", 60],
    ["城市文旅", 72],
    ["年轻消费", 66],
    ["摊位", 58],
    ["数据新闻", 88]
];
WordCloud(document.getElementById('wordCloud'), {
    list: wordList,
    gridSize: 10,
    weightFactor: 2,
    fontFamily: "Microsoft YaHei",
    shape: 'heart', // 核心：爱心造型，替换默认矩形
    color: function() {
        const colors = ['#d48b47','#b46d32','#8c5a38','#e6b880','#442c1c'];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    hover: function(item) {
        alert("关键词：" + item[0]);
    },
    backgroundColor: '#ffffff'
});

// 2.市集经济饼状图
const ctx = document.getElementById('marketChart').getContext('2d');
const marketChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['创意手工摊位', '社交打卡体验', '文旅联动活动', '其他配套业态'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
                '#d48b47',
                '#b46d32',
                '#e6b880',
                '#8c5a38'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(item){
                        return item.label + "：占比 " + item.raw + "%";
                    }
                }
            }
        }
    }
});

// 3.查看目录弹窗
const reportBtn = document.getElementById('reportBtn');
reportBtn.onclick = function(){
    alert(`完整报告目录：
1.选题背景与意义
2.数据来源
3.作品框架
4.呈现形式`);
}

// 4.抽奖互动
const lotteryBtn = document.getElementById('lotteryBtn');
lotteryBtn.onclick = function(){
    const gifts = ["面包市集定制帆布袋", "烘焙黄油小样", "市集免费入场券", "手工曲奇礼盒", "面包摄影打卡贴纸"];
    let random = Math.floor(Math.random() * gifts.length);
    alert("恭喜！你抽中：" + gifts[random]);
}

// 5.问卷弹窗
const surveyBtn = document.getElementById('surveyBtn');
surveyBtn.onclick = function(){
    alert("感谢参与调研！问卷内容包含：市集消费偏好、喜爱面包品类、文旅活动期待，提交后可领取电子优惠券。");
}

// 6.返回顶部
const topBtn = document.getElementById('topBtn');
window.onscroll = function(){
    if(window.scrollY > 300){
        topBtn.classList.add('show');
    }else{
        topBtn.classList.remove('show');
    }
}
topBtn.onclick = function(){
    window.scrollTo({top: 0, behavior: "smooth"});
}