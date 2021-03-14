import React from 'react'
import { ArticleCard } from '../components'

const Home = () => {
   return (
      <div>
         {/* <h4>最低限の勉強で単位を取りたい意識低い人向けのサイト~</h4> */}
         <div className='margin20 flex-wrap' >
            <ArticleCard　title='情エレ2年時間割'　text='春、夏、秋、冬の時間割' date='03/06' link='article1' />
            <ArticleCard　title='応用数学Ⅰ、演習'　text='線形代数、ベクトル解析' date='' link='article2' />
            <ArticleCard　title='応用数学Ⅱ、演習'　text='微分方程式、ラプラス変換' date='' link='article3' />
            <ArticleCard　title=''　text='' date='' link='article' />

         </div>
      </div>
   )
}

export default Home
