import React from 'react'
import Spring from '../images/article1/spring.jpg'
import Summer  from '../images/article1/summer.jpg'
import Autumn  from '../images/article1/autumn.jpg'
import Winter  from '../images/article1/winter.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Article1 = () => {
   return (
      <Container >
         <div className="blank" ></div>
         <h4>コロナ禍、北大情報エレクトロニクス学科2年の勉強内容です。</h4>
         <h4>左に時間割表、右に評価方法（参考程度）を載せました。</h4>
         <div className="blank" ></div>
         <Row>
            <Col><img className="w400" src={Spring} alt="" /></Col>
            <Col className="left" >
               {/* <div className="blank" ></div> */}
               <p className="font-weight600" >応用数学Ⅰ</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >応用数学Ⅰ演習</p>
               <p>週1の課題</p>
               <p className="font-weight600" >応用数学Ⅱ</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >応用数学Ⅱ演習</p>
               <p>週1の課題</p>
               <p className="font-weight600" >電気回路</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >電子デバイス工学</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >コンピュータ工学</p>
               <p>週1の課題、中間レポート、期末レポート</p>
               <p className="font-weight600" >情報エレクトロ演習</p>
               <p>4回の課題</p>
               <p className="font-weight600" >メディアネットワーク演習</p>
               <p>なし</p>
               <p className="font-weight600" >計算機プログラミングⅠ、演習</p>
               <p>なし（夏タームの最終レポートのみ）</p>
            </Col>
         </Row>
         <div className="blank" ></div>
         <div className="blank" ></div>
         <Row>
            <Col><img className="w400" src={Summer} alt=""  /></Col>
            <Col　className="left" >
               <p className="font-weight600" >応用数学Ⅰ</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >応用数学Ⅰ演習</p>
               <p>週1の課題</p>
               <p className="font-weight600" >電子デバイス工学</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >情報エレクトロ演習</p>
               <p>4回の課題</p>
               <p className="font-weight600" >メディアネットワーク演習</p>
               <p>課題4回くらい</p>
               <p className="font-weight600" >計算機プログラミングⅠ、演習</p>
               <p>最終レポート</p>
               <p className="font-weight600" >情報理論</p>
               <p>週1の課題、オンラインテスト1回</p>
            </Col>
         </Row>
         <div className="blank" ></div>
         <div className="blank" ></div>
         <Row>
            <Col><img className="w400" src={Autumn} alt=""  /></Col>
            <Col className="left" >
               <p className="font-weight600" >電子回路</p>
               <p>週1の課題、オンラインテスト2回</p>
               <p className="font-weight600" >電磁気学</p>
               <p>週1の課題、オンラインテスト2回</p>
               <p className="font-weight600" >信号処理</p>
               <p>週1の課題、対面テスト1回</p>
               <p className="font-weight600" >応用数学Ⅲ</p>
               <p>週1の課題、対面テスト1回</p>
               <p className="font-weight600" >情報エレクトロニクス演習</p>
               <p>4回の課題</p>
               <p className="font-weight600" >メディアネットワーク演習</p>
               <p>対面授業（冬タームとまとめて評価）</p>
               <p className="font-weight600" >計算機プログラミングⅡ</p>
               <p>週1の課題（冬タームとまとめて評価）</p>
            </Col>
         </Row>
         <div className="blank" ></div>
         <div className="blank" ></div>
         <Row>
            <Col><img className="w400" src={Winter} alt=""  /></Col>
            <Col className="left" >
               <p className="font-weight600" >線形システム論</p>
               <p>週1の課題、オンラインテスト1回</p>
               <p className="font-weight600" >情報数学</p>
               <p>オンラインテスト1回</p>
               <p className="font-weight600" >ディジタル回路</p>
               <p>4回の小テスト、期末テスト</p>
               <p className="font-weight600" >情報エレクトロニクス演習</p>
               <p>3回の課題</p>
               <p className="font-weight600" >メディアネットワーク演習</p>
               <p>対面授業、作品制作、発表</p>
               <p className="font-weight600" >計算機プログラミングⅡ</p>
               <p>週1の課題</p>
            </Col>
         </Row>
      </Container>
   )
}

export default Article1
