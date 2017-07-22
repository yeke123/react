var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
app.get('/api', function (req, res) {
   // 输出 JSON 格式
   var list=[{
                        "positionId": 2556858,
                        "positionName": "Web前端工程师",
                        "city": "成都",
                        "createTime": "昨天 09:56",
                        "salary": "20k-30k",
                        "companyId": 150134,
                        "companyLogo": "i/image/M00/5E/D2/CgqKkVfs3OaAaxyFAAO24Szt7Io547.png",
                        "companyName": "德誉网络",
                        "companyFullName": "成都德誉电子科技有限公司"
                    },
                    {
                        "positionId": 2735603,
                        "positionName": "Web前端Leader",
                        "city": "成都",
                        "createTime": "今天 08:49",
                        "salary": "18k-20k",
                        "companyId": 30148,
                        "companyLogo": "image1/M00/00/43/CgYXBlTUXNOAB9zQAACiK-dB8kg706.jpg",
                        "companyName": "海南航空",
                        "companyFullName": "海南航空股份有限公司"
                    },
                    {
                        "positionId": 2889754,
                        "positionName": "PHP架构师/PHP高级工程师",
                        "city": "成都",
                        "createTime": "昨天 09:53",
                        "salary": "20k-30k",
                        "companyId": 33179,
                        "companyLogo": "i/image/M00/30/1C/CgpFT1k5HyuAc11WAAEB4bMyYyg889.jpg",
                        "companyName": "掌麦科技",
                        "companyFullName": "四川掌麦科技有限公司"
                    }
			]
   		
   var joblist = {
   			sendlist:list		
   };
   res.send(joblist);
})
//加载更多的url
app.get('/more', function (req, res) {
   var getnumber=req.query.numbers;
   var addtime=req.query.time;
   console.log(getnumber);
   console.log(addtime);   
   var list=[{
						"positionId":2619262,
                        "positionName":"WEB安全研究员",
                        "city":"杭州",
                        "createTime":"今天 13:37",
                        "salary":"15k-25k",
                        "companyId":6462,
                        "companyLogo":"image1/M00/00/0D/Cgo8PFTUWCSATxVSAADtA-8MgOc118.jpg",
                        "companyName":"安恒信息",
                        "companyFullName":"杭州安恒信息技术有限公司"
						},
						{
						"positionId":2399028,
                        "positionName":"软件测试",
                        "city":"上海",
                        "createTime":"今天 13:31",
                        "salary":"6k-9k",
                        "companyId":24995,
                        "companyLogo":"image1/M00/00/33/CgYXBlTUXI-AC08_AACIkHlny3Y866.jpg",
                        "companyName":"泛微",
                        "companyFullName":"上海泛微网络科技股份有限公司"
						},
                    {
					 	"positionId": 3260293,
					 	"positionName": "手游联运专员",
					 	"city": "广州",
					 	"createTime": "今天 14:49",
					 	"salary": "5k-10k",
					 	"companyId": 29750,
					 	"companyLogo": "image1/M00/00/42/Cgo8PFTUXM-ADbYaAABkFvdxFTs993.png",
					 	"companyName": "天拓游戏",
					 	"companyFullName": "广东星辉天拓互动娱乐有限公司"
					 }
                    ]   		
   var joblist = {
   			sendlist:list		
   };
   res.send(joblist);
})
//搜索处理数据
app.get('/search', function (req, res) {
   var cityName=req.query.cityNames;
   var intro=req.query.intros;
   console.log(cityName)
   console.log(intro)
})
var server = app.listen(8096, function (){
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
