'use client';

import { useEffect } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Clock3,
  MapPin,
  Menu as MenuIcon,
  Sparkles,
  Star,
} from 'lucide-react';

const scallionMenu = [
  { name: '福茶クラシック', price: '¥580', note: '香ばしい層と青ねぎの甘み。まずは食べてほしい一枚。', badge: '人気 No.1' },
  { name: 'とろける蛋起司', price: '¥760', note: 'ふわふわ卵と濃厚チーズを包んだ、台湾屋台の定番。', badge: 'おすすめ' },
  { name: '台湾スパイスチキン', price: '¥880', note: '五香粉香るチキンと野菜。食べ応えのあるごちそう餅。', badge: '数量限定' },
];

const drinkMenu = [
  { name: '黒糖タピオカミルク', price: '¥650', note: '店内炊き黒糖パールと、まろやかな北海道ミルク。', badge: '人気 No.1' },
  { name: '鉄観音ミルクティー', price: '¥620', note: '焙煎香の深い台湾茶。甘さの奥に香りが残ります。', badge: '茶葉香る' },
  { name: '茉莉花フルーツティー', price: '¥600', note: 'ジャスミン茶に季節の果実。すっきり爽やかな一杯。', badge: 'さっぱり' },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="福茶葱餅 トップへ">
      <span className="brand__seal" aria-hidden="true">福</span>
      <span className="brand__name">
        <strong>福茶葱餅</strong>
        <small>FUKUCHA TAIWAN SNACKS</small>
      </span>
    </a>
  );
}

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#about">私たちについて</a>
          <a href="#story">おいしさの物語</a>
          <a href="#menu">メニュー</a>
          <a href="#shop">店舗情報</a>
        </nav>
        <a className="header-cta" href="#shop">お店へ行く <ArrowRight size={16} /></a>
        <details className="mobile-nav">
          <summary aria-label="メニューを開く"><MenuIcon size={23} /></summary>
          <nav aria-label="モバイルナビゲーション">
            <a href="#about">私たちについて</a><a href="#story">おいしさの物語</a>
            <a href="#menu">メニュー</a><a href="#shop">店舗情報</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow"><Sparkles size={15} /> TAIWAN STREET SOUL, TOKYO MOOD</p>
          <h1 id="hero-title"><span>パリッと、</span><span>もちっと。</span><em>福</em>をひとくち。</h1>
          <p className="hero__lead">焼きたてネギ餅と、店内炊きタピオカ。<br />台湾の味を、もっと気軽に楽しめるお店です。</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#menu">メニューを見る <ArrowRight size={18} /></a>
            <a className="button button--text" href="#shop"><MapPin size={17} /> アクセス</a>
          </div>
        </div>

        <div className="hero__visual" aria-label="焼きたてネギ餅と黒糖タピオカミルク">
          <figure className="hero__pancake image-wrap"><img src="/scallion-pancake.jpg" alt="香ばしく焼けたネギ餅" /></figure>
          <figure className="hero__tea image-wrap"><img src="/brown-sugar-bubble-tea.jpg" alt="黒糖がとろけるタピオカミルク" /></figure>
          <div className="hero__stamp" aria-hidden="true"><span>毎日手づくり</span><strong>現做</strong><span>焼きたて</span></div>
          <p className="hero__vertical" aria-hidden="true">台灣小吃・幸福時間</p>
        </div>
        <a className="scroll-cue" href="#about" aria-label="次のセクションへ"><span>SCROLL</span><ArrowDown size={17} /></a>
      </section>

      <div className="ticker" aria-hidden="true"><div>
        <span>焼きたて葱油餅</span><i>◆</i><span>もちもち珍珠</span><i>◆</i><span>台湾茶葉</span><i>◆</i>
        <span>焼きたて葱油餅</span><i>◆</i><span>もちもち珍珠</span><i>◆</i><span>台湾茶葉</span><i>◆</i>
      </div></div>

      <section className="about section-pad" id="about">
        <div className="section-number" data-reveal>01 — ABOUT US</div>
        <div className="about__grid">
          <div className="about__title" data-reveal>
            <p className="kicker">私たちについて</p>
            <h2>台湾の街角で出会った<br /><em>「また食べたい」</em>を、<br />毎日のそばに。</h2>
          </div>
          <div className="about__body" data-reveal>
            <p className="lead-copy">福茶葱餅は、台湾の朝市で頬ばった一枚のネギ餅と、友人と笑いながら飲んだ一杯のタピオカから始まりました。</p>
            <p>特別な日のごちそうではなく、ふと立ち寄れて、心が少しほどける味。粉から仕込む生地、たっぷりの青ねぎ、毎日少量ずつ炊くタピオカ。目の前で仕上がる音や香りまで、台湾のおいしい時間として届けます。</p>
            <dl className="values">
              <div><dt>01</dt><dd><strong>つくりたて</strong><span>焼く、炊く、淹れる。できたての瞬間を大切に。</span></dd></div>
              <div><dt>02</dt><dd><strong>台湾らしく</strong><span>香りと食感は本場にまっすぐ、食べ方は自由に。</span></dd></div>
              <div><dt>03</dt><dd><strong>ひらかれた店</strong><span>初めての方も、一人でも、気軽に楽しめる場所に。</span></dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="product-story" id="story">
        <article className="product-panel product-panel--pancake">
          <div className="product-panel__image" data-reveal><img src="/scallion-pancake.jpg" alt="層になった生地と青ねぎが見えるネギ餅" /><span className="photo-label">蔥油餅 ・ CONG YOU BING</span></div>
          <div className="product-panel__copy" data-reveal>
            <p className="section-number">02 — OUR SPECIALTY</p><p className="kicker">ネギ餅とは？</p>
            <h2>外はパリッ。<br />中は、もっちり。</h2>
            <p>小麦の生地に青ねぎと油を重ね、薄い層をつくって香ばしく焼く台湾の粉もの。ひと口目はサクッ、そのあとにむっちりした生地とねぎの甘い香りが広がります。</p>
            <div className="taste-notes"><span>香ばしい</span><span>層の食感</span><span>ねぎの甘み</span></div>
          </div>
        </article>
        <article className="product-panel product-panel--tea">
          <div className="product-panel__image" data-reveal><img src="/brown-sugar-bubble-tea.jpg" alt="氷の入った黒糖タピオカミルク" /><span className="photo-label">珍珠奶茶 ・ ZHEN ZHU NAI CHA</span></div>
          <div className="product-panel__copy" data-reveal>
            <p className="kicker">タピオカとは？</p><h2>お茶を味わい、<br />パールを噛む。</h2>
            <p>キャッサバのでんぷんから生まれる、つるんと弾む黒いパール。コクのある黒糖で丁寧に炊き、香り高い台湾茶やミルクと合わせます。飲むだけではない、楽しい食感のデザートドリンクです。</p>
            <div className="taste-notes"><span>もちもち</span><span>黒糖のコク</span><span>台湾茶の香り</span></div>
          </div>
        </article>
      </section>

      <section className="history section-pad" aria-labelledby="history-title">
        <div className="history__intro" data-reveal><p className="section-number">03 — ROOTS &amp; CULTURE</p><p className="kicker">おいしさの歴史</p><h2 id="history-title">朝ごはんから、<br />世界のカルチャーへ。</h2></div>
        <div className="timeline">
          <article data-reveal><span>毎日の味</span><h3>台湾の暮らしに根づくネギ餅</h3><p>身近な小麦と青ねぎを使ったネギ餅は、台湾で朝食や軽食として親しまれてきました。屋台の鉄板で焼ける音と香りも、ごちそうの一部です。</p></article>
          <article data-reveal><span>1980s</span><h3>台中から生まれた新しいお茶時間</h3><p>冷たい泡沫紅茶の文化に、甘く煮た粉圓（タピオカパール）が出会い、1980年代の台湾で珍珠奶茶が広まりました。</p></article>
          <article data-reveal><span>NOW</span><h3>世代も国境も越える台湾小吃</h3><p>片手で楽しめる粉ものとお茶は、台湾の気取らない食文化そのもの。今では世界中で、自由な具材や甘さに進化しています。</p></article>
        </div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-heading" data-reveal>
          <div><p className="section-number">04 — MENU</p><p className="kicker">今日の気分で選ぶ</p><h2>パリッと一枚。<br />もちっと一杯。</h2></div>
          <p>すべてご注文後に仕上げます。<br />ネギ餅とドリンクのセットは単品合計から <strong>¥100 OFF</strong></p>
        </div>
        <div className="featured-menu" data-reveal>
          <img src="/flying-pearls-milk-tea.jpg" alt="タピオカパールとミルクが宙を舞うミルクティー" />
          <div className="featured-menu__overlay"><span>FUKUCHA SIGNATURE</span><h3>黒糖タピオカ<br />ミルク</h3><p>毎日、店内でじっくり炊く黒糖パール。<br />もちもちの食べごろを、一杯ずつ。</p><strong>¥650</strong></div>
        </div>
        <div className="menu-columns">
          <div className="menu-list" data-reveal><h3><span>蔥油餅</span> NEGI MOCHI</h3>
            {scallionMenu.map((item) => <article key={item.name}><span className="menu-badge">{item.badge}</span><div><h4>{item.name}</h4><p>{item.note}</p></div><strong>{item.price}</strong></article>)}
          </div>
          <div className="menu-list" data-reveal><h3><span>珍珠飲品</span> TAPIOCA DRINK</h3>
            {drinkMenu.map((item) => <article key={item.name}><span className="menu-badge">{item.badge}</span><div><h4>{item.name}</h4><p>{item.note}</p></div><strong>{item.price}</strong></article>)}
          </div>
        </div>
        <div className="set-menu" data-reveal>
          <div><span>SET A</span><strong>定番ペア</strong><p>福茶クラシック ＋ お好きなタピオカドリンク</p></div><b>¥1,100</b>
          <div><span>SET B</span><strong>満福ペア</strong><p>お好きな具入りネギ餅 ＋ お好きなタピオカドリンク</p></div><b>¥1,350〜</b>
        </div>
        <p className="menu-note">※価格はすべて税込。写真はイメージです。季節により内容が変わる場合があります。</p>
      </section>

      <section className="message section-pad">
        <div className="message__photo" data-reveal><img src="/scallion-pancake.jpg" alt="焼きたてのネギ餅" /><div className="message__monogram" aria-hidden="true">福</div></div>
        <div className="message__copy" data-reveal><p className="section-number">05 — FROM OUR TEAM</p><p className="kicker">スタッフから</p><blockquote>「焼ける音も、<br />幸せの一部だと思う。」</blockquote>
          <p>注文をいただいてから鉄板へ。生地がふくらみ、香ばしい匂いが立つ数分も、ぜひ楽しんでください。忙しい日の小休憩にも、大切な人とのおやつにも。台湾の街角のような、明るくておいしい時間を用意してお待ちしています。</p>
          <div className="signature"><span>店長</span><strong>林 美福</strong><small>LIN MEI-FU</small></div>
        </div>
      </section>

      <section className="shop section-pad" id="shop">
        <div className="shop__heading" data-reveal><p className="section-number">06 — SHOP INFO</p><p className="kicker">店舗情報</p><h2>おなかが鳴ったら、<br />台湾へ寄り道。</h2></div>
        <div className="shop__card" data-reveal>
          <div className="shop__identity"><BrandMark light /><p>台湾ネギ餅とタピオカ専門店</p></div>
          <dl>
            <div><dt><MapPin size={17} />住所</dt><dd>東京都渋谷区神宮前 0-0-0<br /><small>○○駅 東口より徒歩3分</small></dd></div>
            <div><dt><Clock3 size={17} />営業時間</dt><dd>11:00 — 21:00<br /><small>ラストオーダー 20:30</small></dd></div>
            <div><dt>定休日</dt><dd>毎週火曜日</dd></div><div><dt>OPEN</dt><dd>2026年 秋予定</dd></div>
          </dl>
          <div className="shop__links"><a href="https://maps.google.com" target="_blank" rel="noreferrer">Google Map <ArrowRight size={17} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a></div>
          <p className="placeholder-note">※店舗名・住所・営業時間・オープン日は仮情報です。公開前に正式情報へ差し替えてください。</p>
        </div>
      </section>

      <section className="closing">
        <div className="closing__image" aria-hidden="true"><img src="/brown-sugar-bubble-tea.jpg" alt="" /></div>
        <div className="closing__copy" data-reveal><Star size={28} fill="currentColor" /><p>パリッ。もちっ。にっこり。</p><h2>ぜひ、本場の味を<br />お楽しみください。</h2><a className="button button--light" href="#menu">今日のメニューへ <ArrowRight size={18} /></a></div>
      </section>

      <footer><BrandMark light /><p>台湾の味を、もっと気軽に。</p><div><a href="#about">ABOUT</a><a href="#menu">MENU</a><a href="#shop">SHOP</a></div><small>© 2026 FUKUCHA TAIWAN SNACKS</small></footer>
      <a className="floating-menu" href="#menu"><span>MENU</span><ArrowRight size={16} /></a>
    </main>
  );
}
