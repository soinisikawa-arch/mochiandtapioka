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

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="もちっとこいよ トップへ">
      <span className="brand__seal" aria-hidden="true">餅</span>
      <span className="brand__name">
        <strong>もちっとこいよ</strong>
        <small>MOCHITTO KOIYO</small>
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

  useEffect(() => {
    const section = document.querySelector<HTMLElement>('.scroll-cinema');
    const video = section?.querySelector<HTMLVideoElement>('video');
    const intro = section?.querySelector<HTMLElement>('.scroll-cinema__intro');
    const outro = section?.querySelector<HTMLElement>('.scroll-cinema__outro');
    const progressBar = section?.querySelector<HTMLElement>('.scroll-cinema__progress-bar');
    if (!section || !video || !intro || !outro || !progressBar) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const showStill = () => {
      if (Number.isFinite(video.duration)) video.currentTime = Math.min(2.7, video.duration * 0.6);
    };

    const syncToScroll = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      const duration = Number.isFinite(video.duration) ? video.duration : 0;

      if (duration > 0) {
        const targetTime = progress * Math.max(0, duration - 0.04);
        if (Math.abs(video.currentTime - targetTime) > 0.025) video.currentTime = targetTime;
      }

      intro.style.opacity = String(Math.max(0, 1 - progress / 0.24));
      intro.style.setProperty('--scroll-y', `${-progress * 70}px`);
      const outroProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.18));
      outro.style.opacity = String(outroProgress);
      outro.style.setProperty('--outro-y', `${(1 - outroProgress) * 42}px`);
      video.style.transform = `scale(${1.02 + progress * 0.045})`;
      progressBar.style.transform = `scaleX(${progress})`;
    };

    const requestSync = () => {
      if (!frame) frame = window.requestAnimationFrame(syncToScroll);
    };

    if (reducedMotion.matches) {
      video.addEventListener('loadedmetadata', showStill);
      showStill();
      return () => video.removeEventListener('loadedmetadata', showStill);
    }

    video.pause();
    video.addEventListener('loadedmetadata', syncToScroll);
    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestSync);
    syncToScroll();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      video.removeEventListener('loadedmetadata', syncToScroll);
      window.removeEventListener('scroll', requestSync);
      window.removeEventListener('resize', requestSync);
    };
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

        <div className="hero__visual" aria-label="焼きたてネギ餅とタピオカミルクティー">
          <figure className="hero__pancake image-wrap"><img src="/scallion-pancake.jpg" alt="香ばしく焼けたネギ餅" /></figure>
          <figure className="hero__tea image-wrap"><img src="/brown-sugar-bubble-tea.jpg" alt="もちもちのタピオカミルクティー" /></figure>
          <div className="hero__stamp" aria-hidden="true"><span>毎日手づくり</span><strong>現做</strong><span>焼きたて</span></div>
          <p className="hero__vertical" aria-hidden="true">台灣小吃・幸福時間</p>
        </div>
        <a className="scroll-cue" href="#motion" aria-label="タピオカミルクティーのモーションへ"><span>SCROLL</span><ArrowDown size={17} /></a>
      </section>

      <div className="ticker" aria-hidden="true"><div>
        <span>焼きたて葱油餅</span><i>◆</i><span>もちもち珍珠</span><i>◆</i><span>台湾茶葉</span><i>◆</i>
        <span>焼きたて葱油餅</span><i>◆</i><span>もちもち珍珠</span><i>◆</i><span>台湾茶葉</span><i>◆</i>
      </div></div>

      <section className="scroll-cinema" id="motion" aria-labelledby="scroll-cinema-title">
        <div className="scroll-cinema__sticky">
          <video
            aria-hidden="true"
            muted
            playsInline
            preload="auto"
            poster="/boba-scroll-poster.jpg"
            tabIndex={-1}
          >
            <source src="/boba-scroll.mp4" type="video/mp4" />
          </video>
          <div className="scroll-cinema__veil" aria-hidden="true" />
          <div className="scroll-cinema__intro">
            <p>SCROLL TO POUR</p>
            <h2 id="scroll-cinema-title">タピオカが、<br /><em>踊りだす。</em></h2>
            <span>ゆっくりスクロールして、できあがる瞬間を。</span>
          </div>
          <div className="scroll-cinema__outro">
            <span>毎日、店内炊き。</span>
            <h3>一番もちもちの瞬間を、<br />あなたの一杯に。</h3>
            <a href="#menu">タピオカメニューへ <ArrowRight size={18} /></a>
          </div>
          <p className="scroll-cinema__kanji" aria-hidden="true">珍珠奶茶</p>
          <div className="scroll-cinema__progress" aria-hidden="true"><span className="scroll-cinema__progress-bar" /></div>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-number" data-reveal>01 — ABOUT US</div>
        <div className="about__grid">
          <div className="about__title" data-reveal>
            <p className="kicker">私たちについて</p>
            <h2>本格的な味と雰囲気で、<br /><em>非日常を届ける。</em></h2>
          </div>
          <div className="about__body" data-reveal>
            <p className="lead-copy">本格的な味と雰囲気を、あなたに。</p>
            <p>一口食べた瞬間に広がる、本格的な味わい。そして、台湾の街角や夜市を思わせる装飾と活気ある雰囲気の中で、料理を味わうひとときをお楽しみください。</p>
            <p>私たちは、料理だけでなく、お店に足を運んだ瞬間から楽しんでいただける「味」と「雰囲気」の両方を大切にしています。素材や調理にこだわり、一つひとつ丁寧に仕上げた料理を、心地よい空間とともにお届けします。</p>
            <dl className="values">
              <div><dt>01</dt><dd><strong>素材へのこだわりが生む味</strong><span>タピオカとネギ餅に合う新鮮な素材を、できる限りゆかりのある土地から仕入れています。</span></dd></div>
              <div><dt>02</dt><dd><strong>専門家がつなぐ本格の味</strong><span>各ジャンルの専門家が知恵を重ね、台湾の街角を思わせる味と雰囲気を一つの店で届けます。</span></dd></div>
              <div><dt>03</dt><dd><strong>また訪れたくなるひととき</strong><span>出来たてを味わう楽しさと心地よい空間を大切にし、日常の中で本格的な味に出会える店を目指しています。</span></dd></div>
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
          <div className="product-panel__image" data-reveal><img src="/brown-sugar-bubble-tea.jpg" alt="氷の入ったタピオカミルクティー" /><span className="photo-label">珍珠奶茶 ・ ZHEN ZHU NAI CHA</span></div>
          <div className="product-panel__copy" data-reveal>
            <p className="kicker">タピオカとは？</p><h2>お茶を味わい、<br />パールを噛む。</h2>
            <p>キャッサバのでんぷんから生まれる、つるんと弾む黒いパール。丁寧に仕込んだタピオカを、香り高い台湾茶やミルクと合わせます。飲むだけではない、楽しい食感のデザートドリンクです。</p>
            <div className="taste-notes"><span>もちもち</span><span>コク深い</span><span>台湾茶の香り</span></div>
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
          <div><p className="section-number">04 — MENU</p><p className="kicker">二つの台湾のおいしさ</p><h2>ネギ餅、三つの味。<br />タピオカも一緒に。</h2></div>
          <p>ネギ餅は醤油・ポン酢・チーズの3種類。<br />タピオカは350円でご用意しています。</p>
        </div>
        <div className="menu-product-grid">
          <article className="menu-product-card" data-reveal>
            <div className="menu-product-card__image"><img src="/brown-sugar-bubble-tea.jpg" alt="タピオカ" /><span>01</span></div>
            <div className="menu-product-card__body"><p>珍珠 ・ TAPIOCA</p><h3>タピオカ</h3><div><strong>¥350</strong><span>1杯 350円</span></div></div>
          </article>
          <article className="menu-product-card menu-product-card--green" data-reveal>
            <div className="menu-product-card__image"><img src="/scallion-pancake.jpg" alt="香ばしく焼き上げたネギ餅" /><span>02</span></div>
            <div className="menu-product-card__body"><p>蔥油餅 ・ SCALLION PANCAKE</p><h3>ネギ餅</h3><div><strong>¥400〜</strong><span>醤油 400円 ／ ポン酢 400円 ／ チーズ 500円</span></div></div>
          </article>
        </div>
        <div className="menu-coming-soon" data-reveal><span>MENU PRICE</span><p>ネギ餅：醤油 400円 ／ ポン酢 400円 ／ チーズ 500円<br />タピオカ：350円</p></div>
        <p className="menu-note">※写真はイメージです。メニュー内容は変更になる場合があります。</p>
      </section>

      <section className="message section-pad">
        <div className="message__photo" data-reveal><img src="/scallion-pancake.jpg" alt="焼きたてのネギ餅" /><div className="message__monogram" aria-hidden="true">餅</div></div>
        <div className="message__copy" data-reveal><p className="section-number">05 — FROM OUR TEAM</p><p className="kicker">スタッフから</p><blockquote>「味と雰囲気の両方を、<br />大切に。」</blockquote>
          <p>本格的な味を、もっと身近に。料理だけでなく、お店に足を運んだ瞬間から楽しめる特別なひとときを、台湾の街角を思わせる空間とともにお届けします。</p>
          <div className="signature"><span>社長</span><strong>矢作 匠</strong><small>TAKUMI YAHAGI</small></div>
        </div>
      </section>

      <section className="shop section-pad" id="shop">
        <div className="shop__heading" data-reveal><p className="section-number">06 — SHOP INFO</p><p className="kicker">店舗情報</p><h2>おなかが鳴ったら、<br />台湾へ寄り道。</h2></div>
        <div className="shop__card" data-reveal>
          <div className="shop__identity"><BrandMark light /><p>台湾ネギ餅とタピオカ専門店</p></div>
          <dl>
            <div><dt><MapPin size={17} />場所</dt><dd>郁文館夢学園</dd></div>
            <div><dt><Clock3 size={17} />営業時間</dt><dd><strong>1日目</strong>　9:00 — 16:00<br /><strong>2日目</strong>　9:00 — 15:00</dd></div>
          </dl>
          <div className="shop__links"><a href="https://www.google.com/maps/search/?api=1&amp;query=%E9%83%81%E6%96%87%E9%A4%A8%E5%A4%A2%E5%AD%A6%E5%9C%92" target="_blank" rel="noreferrer">Google Map <ArrowRight size={17} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a></div>
          <p className="placeholder-note">※SNSリンクは仮情報です。公開前に正式情報へ差し替えてください。</p>
        </div>
      </section>

      <section className="closing">
        <div className="closing__image" aria-hidden="true"><img src="/brown-sugar-bubble-tea.jpg" alt="" /></div>
        <div className="closing__copy" data-reveal><Star size={28} fill="currentColor" /><p>本格的な味と雰囲気を、あなたに。</p><h2>ぜひ、私たちのお店で<br />特別なひとときを。</h2><a className="button button--light" href="#menu">二つのメニューを見る <ArrowRight size={18} /></a></div>
      </section>

      <footer><BrandMark light /><p>台湾の味を、もっと気軽に。</p><div><a href="#about">ABOUT</a><a href="#menu">MENU</a><a href="#shop">SHOP</a></div><small>© 2026 MOCHITTO KOIYO</small></footer>
      <a className="floating-menu" href="#menu"><span>MENU</span><ArrowRight size={16} /></a>
    </main>
  );
}