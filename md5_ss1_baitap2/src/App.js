import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import HeaderComp from './component/HeaderComp';
import SliderComp from './component/SliderComp';
import DetailComp from './component/DetailComp';
import ProductsComp from './component/ProductsComp';
import FindComp from './component/FindComp';
import ClientComp from './component/ClientComp';
import SignComp from './component/SignComp';
import InfoComp from './component/InfoComp';
import FooterComp from './component/FooterComp';


class App extends Component{
  render(){
    return (
      <div className="App">
        <>
    <div className="hero_area">
      {/* header section strats */}
      <header className="header_section">
        <HeaderComp></HeaderComp>
      </header>
      {/* end header section */}
      {/* slider section */}
      <section className="slider_section position-relative">
       <SliderComp></SliderComp>
      </section>
      {/* end slider section */}
    </div>
    {/* detail section */}
    <section className="detail_section">
      <DetailComp></DetailComp>
    </section>
    {/* end detail section */}
    {/* products section */}
    <section className="products_section">
      <ProductsComp></ProductsComp>
    </section>
    {/* end products section */}
    {/* find section */}
    <section className="find_section layout_padding-bottom">
      <FindComp></FindComp>
    </section>
    {/* end find section */}
    {/* client section */}
    <section className="client_section layout_padding">
      <ClientComp></ClientComp>
    </section>
    {/* end client section */}
    {/* sign section */}
    <section className="sign_section layout_padding2">
      <SignComp></SignComp>
    </section>
    {/* end sign section */}
    {/* info section */}
      <InfoComp></InfoComp>
    {/* end info section */}
  </>
  
      </div>
    );
  }

}

export default App;
