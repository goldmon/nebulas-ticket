// var HttpRequest = require("nebulas").HttpRequest;
// var Neb = window.nebulas.Neb;
// var Neb = require("nebulas").Neb
// var Account = require("nebulas").Account;
// var Transaction = require("nebulas").Transaction;
// var Unit = require("nebulas").Unit;
// var NVM = require("nebulas").NVM;
import NebPay from 'nebpay';
const myNebPay = new NebPay();
// var neb = new Neb();
// neb.setRequest(new HttpRequest("https://testnet.nebulas.io"));

const contactAddr = 'n1gHKnBYf5FA8djpXiVsPxvnLEjESrxUqjm'

const options = {
	// goods: {        //Dapp端对当前交易商品的描述信息，app暂时不展示
	// 	name: "",       //商品名称
	// 	desc: "",       //描述信息
	// 	orderId: "",    //订单ID
	// 	ext: ""         //扩展字段
	// },
	qrcode: {
		showQRCode: false,      //是否显示二维码信息
		container: undefined,    //指定显示二维码的canvas容器，不指定则生成一个默认canvas
		completeTip: undefined, // 完成支付提示
		cancelTip: undefined // 取消支付提示
	},
	extension: {
		openExtension: true //是否支持插件调用
	},
	mobile: {
		showInstallTip: true, //是否支持手机钱包安装提示
		installTip: undefined // 手机钱包安装提示
	},

	// callback 是记录交易返回信息的交易查询服务器地址，
	// 目前我们提供了主网和测试网交易查询服务器, 查询频率不能超过20次/分钟
	//callback: NebPay.config.mainnetUrl,     //主网(默认为主网,可不写)
	// callback: NebPay.config.testnetUrl, //测试网

	// listener: 指定一个listener函数来处理交易返回信息（仅用于浏览器插件，App钱包不支持listener）
	listener: undefined,
	// if use nrc20pay ,should input nrc20 params like name, address, symbol, decimals
	nrc20: undefined,

	// 是否为测试模式，在测试模式下，将打开测试版Nano钱包和切换请求连接
	debug: false
};

export {
  myNebPay,
  options,
  contactAddr
}