import React from 'react';
import ReactDOM from 'react-dom';
// 配置文件

// 加入redux的一些东西
import Love from "./reducers"
import {Provider} from "react-redux";
import { createStore } from "redux";
// 导入样式
import './index.css'
// import 'antd/dist/antd.css';
// 导入路由

import Route from "./route/route"
import store from "./store"
//导入ant design中的日期语言为“中文”
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
            <div className='all'>
            	<Route />
            </div>
        </Provider>
    </LocaleProvider>
    
   ,document.getElementById('root')
)
