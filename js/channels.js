const channels = [
  // News Channels
  {
    name: "Aaj Tak HD",
    category: "News",
    image: "https://i.imgur.com/RpIdCB3.png",
    stream: "https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8",
  },
  {
    name: "India TV",
    category: "News",
    image: "https://jiotvimages.cdn.jio.com/dare_images/images/India_TV.png",
    stream:
      "https://pl-indiatvnews.akamaized.net/out/v1/db79179b608641ceaa5a4d0dd0dca8da/index.m3u8",
  },
  {
    name: "TV9 Bharatvarsh",
    category: "News",
    image: "https://i.imgur.com/GEqUslW.png",
    stream:
      "https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9hinjzgtpe/liveabr/playlist.m3u8",
  },
  {
    name: "ZNews",
    category: "News",
    image:
      "https://english.cdn.zeenews.com/static/public/updated_logos/english.svg",
    stream: "https://dxfxzhqtgt09i.cloudfront.net/index.m3u8",
  },
  {
    name: "ABP News",
    category: "News",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ABP_News_logo.svg/300px-ABP_News_logo.svg.png",
    stream:
      "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-news/master.m3u8",
  },
  {
    name: "NDTV India",
    category: "News",
    image:
      "https://cdn.pnggallery.com/wp-content/uploads/ndtv-india-logo-02.png",
    stream:
      "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8",
  },
  {
    name: "CNN News 18",
    category: "News",
    image: "https://i.imgur.com/WrmeIco.png",
    stream:
      "https://n18syndication.akamaized.net/bpk-tv/CNN_News18_NW18_MOB/output01/index.m3u8",
  },
  {
    name: "WION",
    category: "News",
    image:
      "https://www.wionews.com/_next/static/media/wion-logo_white.d670dbc6.svg",
    stream: "https://d2f067kuhcp3tj.cloudfront.net/index.m3u8",
  },
  {
    name: "NDTV 24x7",
    category: "News",
    image: "https://i.ibb.co/845X7fY1/ndtv-24x7-in.png",
    stream:
      "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8",
  },
  {
    name: "BBC World News",
    category: "News",
    image: "https://i.imgur.com/vSz2WEp.png",
    stream: "http://fl3.moveonjoy.com/BBC_WORLD_NEWS/index.m3u8",
  },
  {
    name: "Euro News",
    category: "News",
    image: "https://i.imgur.com/8t9mdg9.png",
    stream: "https://apollo.production-public.tubi.io/live/ac-euronews2.m3u8",
  },
  {
    name: "DD India",
    category: "News",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/DD_India_logo.jpg",
    url: "https://cdn-7.pishow.tv/live/20/master.m3u8",
  },
  {
    name: "CNBC TV18",
    category: "News",
    image: "https://www.cnbctv18.com/static/images/common/cnbcwhite.svg",
    url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/cnbc-tv18/master.m3u8",
  },
  {
    name: "DD News",
    category: "News",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/c/cc/Dd-news.png",
    url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/0811cd8c37ca4c409d5385a6cd2fa18b/index.m3u8",
  },
  {
    name: "Sansad TV 1 HD",
    category: "News",
    image: "https://sansadtv.nic.in/wp-content/uploads/2022/07/logo-sansad.png",
    url: "https://playhls.media.nic.in/hls/live/lstv/lstv.m3u8",
  },
  //   Entertainment Channels
  {
    name: "DD Nation HD",
    category: "Entertainment",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/DD_National_2025_logo.png",
    url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8",
  },
  {
    name: "Korean TV",
    category: "Entertainment",
    image:
      "https://i.ibb.co/4ZczvFb7/Chat-GPT-Image-Apr-14-2025-03-25-19-PM-150x150.png",
    url: "https://amg02537-skandhamediaser-koreantv-samsungin-ad-1s.amagi.tv/playlist/amg02537-skandhamediaser-koreantv-samsungin/playlist.m3u8",
  },
  {
    name: "E24",
    category: "Entertainment",
    image:
      "https://play-lh.googleusercontent.com/FDbnukqGiI8pxKrYWFVGwTX6SHBi0635o5xrnJL1by1ydhHaqLhKlEWMawzZyGGY0KSE",
    url: "https://bagnetwork.digivive.com/hlslive/Admin/px09241091/live/E24LiveB/master_1.m3u8",
  },
  // Sports Channels
  {
    name: "NBC Sports",
    category: "Sports",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/NBC_Sports_2023.svg",
    stream:
      "https://d1m1xk35ma8qfl.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-v4tilgx2y7n7y/master.m3u8",
  },
  {
    name: "SSC Extra",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/sscex1.webp",
    stream:
      "https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd",
    drmKey: "ecbc9e6fe6b145efb6658fb5cf7427f8:03c17e28911f71221acbc0b11f900401",
  },
  {
    name: "SSC 1",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/ssc1.webp",
    stream:
      "https://ssc-1-enc.edgenextcdn.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd",
    drmKey: "d84c325f36814f39bbe59080272b10c3:550727de4c96ef1ecff874905493580f",
  },
  {
    name: "SSC 2",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/ssc2.webp",
    stream:
      "https://ssc-2-enc.edgenextcdn.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd",
    drmKey: "8bcfc55359e24bd7ad1c5560a96ddd3c:b5dcf721ab522af92a9d3bf0bd55b596",
  },
  {
    name: "SSC 3",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/ssc3.webp",
    stream:
      "https://ssc-3-enc.edgenextcdn.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd",
    drmKey: "7de5dd08ad8041d586c2f16ccc9490a1:5e1503f3398b34f5099933fedab847ef",
  },
  {
    name: "Cric Life Max",
    category: "Sports",
    image:
      "https://www.ooredoo.qa/web/wp-content/uploads/2025/08/cricbuzz-active.png",
    stream:
      "https://ev-fast-mpd.starzplayarabia.com/live/eds/CricLifeMax/DASH/CricLifeMax.mpd",
    drmKey: "ad59b720bd4b44d063686212b99484b5:e1744990edf98acc729c0773a3766583",
  },
  {
    name: "TNT Sports 2 HD",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/tntsports2.webp",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
    drmKey: "0d9efa8287a52a2497a281f7a9012211:e4f832d372943014fe5c30928a90e547",
  },
  {
    name: "TNT Sports 3 HD",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/tntsports3.webp",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
    drmKey: "08efc7fb107981608f7b64db5ea62469:3a6844bc9f0d9d9fd962639d7e4eb76a",
  },
  {
    name: "TNT Sports 4 HD",
    category: "Sports",
    image: "https://ultrawebs.github.io/-/webpa/tntsports4.webp",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
    drmKey: "5ccdccf0818d3d9ff6c26076fc1153ac:f8d7fda7e3f11a29b346a37e98f749d4",
  },
  {
    name: "Willow Sports",
    category: "Sports",
    image: "https://img.willow.tv/apps/wlw-nw-lgo.png",
    stream:
      "https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/clients/dash/enc/f60kqesunw/out/v1/a435ed7a00f947deb4369b46d8f2fb70/cenc.mpd",
    drmKey: "1779c27b9d077a3ba0c9cc1bb9a94b9f:cc5cf3b7928fb9e0a1ee6a8b566f0a8e",
  },
  {
    name: "TSN 2",
    category: "Sports",
    image: "https://brandeps.com/logo-download/T/TSN2-logo-01.png",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/v5v9yfn62i/out/v1/0991e33d09da46b2857fcc845db95c40/cenc.mpd",
    drmKey: "362202eefc5d9e42eec6450998cce9e8:978dfdd53186ec587d940e0bd1e2ec42",
  },
  {
    name: "TSN 3",
    category: "Sports",
    image: "https://brandeps.com/logo-download/T/TSN3-logo-01.png",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/mrskysvotx/out/v1/ad58961bd8fd48d2944e461c034b8914/cenc.mpd",
    drmKey: "d9097a1b7d04b7786b29f2b0e155316d:279695ebe0fb1bc5787422b6b59ce8a8",
  },
  {
    name: "TSN 4",
    category: "Sports",
    image: "https://brandeps.com/logo-download/T/TSN4-logo-01.png",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/irtfdsri14/out/v1/165128c314e944faa3d79e107974b323/cenc.mpd",
    drmKey: "e1aa4c4daf6222a04f7ae80130495ea1:31bb1ee9a8d088f62b0103550c301449",
  },
  {
    name: "TSN 5",
    category: "Sports",
    image: "https://brandeps.com/logo-download/T/TSN5-logo-01.png",
    stream:
      "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/mttgh1c4ei/out/v1/9cc664b146744e2ba23066aa048efbc5/cenc.mpd",
    drmKey: "8ce20e2a4b3dd04e0a6e5469b7cb47be:163c323b65d0597b13f037641fd67b1e",
  },
  {
    name: "FOX Sports",
    category: "Sports",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FOX_Sports_logo.svg/2560px-FOX_Sports_logo.svg.png",
    stream:
      "https://amg02855-foxsports-amg02855c1-xumo-us-1755.playouts.now.amagi.tv/Fox-Sports-AmazonNews/playlist.m3u8",
  },
  {
    name: "FOX Sports 1",
    category: "Sports",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Fox_Sports_1_logo.svg/1280px-Fox_Sports_1_logo.svg.png",
    stream: "https://fl7.moveonjoy.com/FOX_Sports_1/index.m3u8",
  },
  // Movie Channels
  {
    name: "Sony Max HD",
    category: "Movie",
    image:
      "https://www.sonypicturesnetworks.com/images/logos/Sony_MAX-HD_WHITE.png",
    stream: "https://sundirectgo-live.pc.cdn.bitgravity.com/hd21/dth.mpd",
    drmKey: "8268467a7a974698b18c9e63b13f73a4:6affb3ad6e781bc4afafad402e1d4510",
  },
  {
    name: "B4U Movies",
    category: "Movie",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/1/1b/B4U_MOVIES_2014.png",
    stream: "https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8",
  },
  {
    name: "Movie Sphere Canada",
    category: "Movie",
    image:
      "https://imageservice.disco.peacocktv.com/logo/skychb_6666006923928981117_darknow/AGG_SOURCE/600/208?proposition=NBCUOTT&territory=US",
    stream: "https://livetv-fa.tubi.video/moviesphere-canada2/playlist.m3u8",
  },
  {
    name: "& Flix",
    category: "Movie",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/3/30/%26flix_%282025%29.svg",
    stream:
      "https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/index.m3u8",
  },
  {
    name: "History TV18",
    category: "Entertainment",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/6/67/History_tv18_hd.png",
    stream:
      "https://amg01448-amg01448c16-samsung-in-3495.playouts.now.amagi.tv/playlist/amg01448-samsungindia-historychannelenglish-samsungin/playlist.m3u8",
  },
  // Music Channels
  {
    name: "9XM",
    image: "https://jiotvimages.cdn.jio.com/dare_images/images/9XM.png",
    category: "Music",
    stream:
      "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/master.m3u8",
  },
  {
    name: "Balle Balle",
    image:
      "https://balleballe.tv/wp-content/uploads/2019/07/logo-e1568618159543.png",
    category: "Music",
    stream: "https://mcncdndigital.com/balleballetv/index.m3u8",
  },
  {
    name: "Shemaroo Filmi Gaane",
    image:
      "https://jiotvimages.cdn.jio.com/dare_images/images/shemaroofilmigaane.png",
    category: "Music",
    stream:
      "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-filmigaane/master.m3u8",
  },
  {
    name: "Zoom",
    image: "https://jiotvimages.cdn.jio.com/dare_images/images/Zoom.png",
    category: "Music",
    stream:
      "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8",
  },
  {
    name: "B4U Music",
    image: "https://i.imgur.com/KSxPLJA.png",
    category: "Music",
    stream: "https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8",
  },
  {
    name: "Music India",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/2/2f/Music_India.jpeg",
    category: "Music",
    stream: "https://cdn-2.pishow.tv/live/226/master.m3u8",
  },
  //   Kids Channels
  {
    name: "PBS Kids",
    image:
      "https://cms-tc.pbskids.org/globalresources/resources/img/pbs-kids-logo.svg",
    category: "Kids",
    stream:
      "https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8",
  },
  {
    name: "Baby Shark TV",
    image:
      "https://provider-static.plex.tv/epg/cms/production/f8f7c285-f574-4037-84cd-131a22066e57/Channel_Logo_dark_1500x1000_.png",
    category: "Kids",
    stream: "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8",
  },
  {
    name: "Nick Jr.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Nick_Jr._logo_2023.svg",
    category: "Kids",
    stream: "https://fl25.moveonjoy.com/NICK_JR/index.m3u8",
  },
  {
    name: "Teen Nick",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/TeenNick_logo_2023_%28outline%29.svg/1200px-TeenNick_logo_2023_%28outline%29.svg.png",
    category: "Kids",
    stream: "https://fl25.moveonjoy.com/Teen_Nick/index.m3u8",
  },
  {
    name: "Nicklodeon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nickelodeon_2023_logo_%28outline%29.svg/1920px-Nickelodeon_2023_logo_%28outline%29.svg.png",
    category: "Kids",
    stream: "https://fl25.moveonjoy.com/NICKELODEON/index.m3u8",
  },
  {
    name: "Nick Toons",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Nicktoons_logo_%282023%29.svg",
    category: "Kids",
    stream: "https://fl25.moveonjoy.com/NICKTOONS/index.m3u8",
  },
  {
    name: "Disney Channel",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2014_Disney_Channel_logo.svg/2560px-2014_Disney_Channel_logo.svg.png",
    category: "Kids",
    stream: "https://fl7.moveonjoy.com/DISNEY/index.m3u8",
  },
  {
    name: "Micky Mouse",
    category: "Kids",
    image:
      "https://logos-world.net/wp-content/uploads/2022/02/Mickey-Mouse-Logo.png",
    stream: "https://youtu.be/762J6L_lduo",
  },
  {
    name: "Tom and Jerry",
    category: "Kids",
    image: "https://i.ibb.co/cXp8SFKR/tom-and-jerry-PNG42.png",
    stream: "https://youtu.be/rEKifG2XUZg",
  },
  {
    name: "Adventure Time Cartoon Network",
    category: "Kids",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/b/b3/AT_DISTANT_LANDS.png",
    stream: "https://youtu.be/uZkaJ3e9nfY",
  },
  {
    name: "Mr Bean",
    category: "Kids",
    image: "https://i.ibb.co/vCZ4k5jc/Png-Item-7405077.png",
    stream: "https://youtu.be/WL3a8k-9o88",
  },
  {
    name: "Pixer Cars",
    category: "Kids",
    image: "https://i.ibb.co/MDtkJTt6/cars-seeklogo.png",
    stream: "https://youtu.be/RVORY42HQXM",
  },
  {
    name: "Phineas and Ferb",
    category: "Kids",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Phineas_and_Ferb_logo.svg/1920px-Phineas_and_Ferb_logo.svg.png",
    stream: "https://youtu.be/0uUCyGKZm1M",
  },
  {
    name: "Peppa Pig",
    category: "Kids",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/c/c5/Peppa_Pig.svg",
    stream: "https://youtu.be/o9VXLSmD69M",
  },
  {
    name: "Shaun The Sheep",
    category: "Kids",
    image: "https://i.ibb.co/zV5G5RNC/Shaun-The-Sheep.png",
    stream: "https://youtu.be/dLz8GUOveio",
  },
  {
    name: "Battle Bots",
    category: "Kids",
    image: "https://i.ibb.co/m56t0Ygp/battlebots-62c739f0d6b11.png",
    stream: "https://youtu.be/uUevHstl-Ak",
  },
  {
    name: "Disney Junior",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/2024_Disney_Jr._Logo.svg",
    category: "Kids",
    stream: "https://fl7.moveonjoy.com/DISNEY_JR/index.m3u8",
  },
  {
    name: "Cartoon Network Aisa",
    image:
      "https://static.wikia.nocookie.net/ultraverse/images/0/01/Cartoon_Network_Logo_-1.png",
    category: "Kids",
    stream: "https://youtu.be/fonMqM42xEk",
  },
  {
    name: "Cartoon Network",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
    category: "Kids",
    stream: "https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8",
  },
  //   Travel Channels
  {
    name: "Travel XP",
    category: "Travel",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Travelxp_logo.png",
    stream: "https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.m3u8",
  },
  {
    name: "GO 2 Travel",
    category: "Travel",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Travel_Channel_-_Logo.svg",
    stream: "https://go2thls.wns.live/hls/stream.m3u8",
  },
  {
    name: "GO Traveler",
    category: "Travel",
    image:
      "https://images.squarespace-cdn.com/content/v1/629a1dd9b0affc4a4cd27525/5d20c3dc-f70a-4792-857e-9cf13fe06160/GoTraveler+4c+Rev+2021+FINAL.png",
    stream:
      "https://amg09501-questar-amg09501c1-stirr-us-3094.playouts.now.amagi.tv/amg09501/AMG09501C1/segmented_playlist/0/35-89-3094.m3u8",
  },
  {
    name: "5 Minute Crafts",
    category: "Entertainment",
    image: "https://cdn.boltplus.tv/boltplus-global/assets/image/5mc-logo.png",
    stream: "https://soul-5mincrafteng-rakuten.amagi.tv/playlist.m3u8",
  },
  {
    name: "Gubbare",
    image: "https://i.ibb.co/xKBmbd36/Bvbf9o7.png",
    category: "Kids",
    stream: "https://epiconvh.akamaized.net/live/gubbare/master.m3u8",
  },
  {
    name: "NDTV Good Time",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/8/85/Goodtimes.png",
    category: "LifeStyle",
    stream:
      "https://amg01448-samsungin-ndtvgoodtimes-samsungin-ad-gp.amagi.tv/playlist/amg01448-samsungin-ndtvgoodtimes-samsungin/playlist.m3u8",
  },
  {
    name: "B4U Kadak",
    image: "https://jiotvimages.cdn.jio.com/dare_images/images/B4U_Kadak.png",
    category: "Movie",
    stream: "https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8",
  },
  {
    name: "Z Cinema HD",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/c/c5/Zee_Cinema_HD_%282025%29.svg",
    category: "Movie",
    stream:
      "https://amg17931-zee-amg17931c5-samsung-th-5696.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeecinema-samsungth/playlist.m3u8",
  },
  {
    name: "9X Jalwa",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/2/21/9x_Jalwa.png",
    category: "Music",
    stream:
      "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/9x-jalwa/master.m3u8",
  },
  {
    name: "Weather Spy",
    image:
      "https://v.fastcdn.co/t/ce0680fc/05c22bcb/1709567860-50673365-1918x534x1918x1080x0x274-WEATHERSPY-LOGO-WHIT.png",
    category: "Weather",
    stream: "https://jukin-weatherspy-2-in.samsung.wurl.tv/playlist.m3u8",
  },
  {
    name: "1Animax",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Animaxlogo-20160701.png",
    category: "Anime",
    stream:
      "https://amg02159-kcglobal-amg02159c1-samsung-in-521.playouts.now.amagi.tv/playlist/amg02159-kcglobal-animax-samsungin/playlist.m3u8",
  },
  {
    name: "Anime Lofi Music",
    image:
      "https://dbl-discord.usercontent.prism.gg/avatars/830530156048285716/7650d0c9ae84e6b11edc43028b90e392.png?size=480",
    category: "Anime",
    stream: "https://youtu.be/x0hbDv_Y63c",
  },
  {
    name: "Yu-Gi-Oh!",
    image:
      "https://static.wikia.nocookie.net/yugioh/images/6/6d/Yu-Gi-OhLogo.png",
    category: "Anime",
    stream: "https://youtu.be/QAIcUkgSuKA",
  },
  {
    name: "Anime Vanguard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Vg_new_logo.png",
    category: "Anime",
    stream: "https://youtu.be/Y9nK_ERdvgE",
  },
  {
    name: "Anileap",
    image: "https://www.musicman.co.jp/wp-content/uploads/2023/03/sub9.png",
    category: "Anime",
    stream: "https://youtu.be/4FBW3mkdKOs",
  },
  {
    name: "Dragon Ball Ultra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Dragon_Ball_Super.png/1200px-Dragon_Ball_Super.png",
    category: "Anime",
    stream: "https://youtu.be/UYFcyyVaaQ4",
  },
  {
    name: "Ultimate Spider-Man",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Ultimate_Spider-Man_%28TV_series%29_logo.svg/1200px-Ultimate_Spider-Man_%28TV_series%29_logo.svg.png",
    category: "Kids",
    stream: "https://youtu.be/2PzfL3zrE-o",
  },
  {
    name: "The Smurfs",
    image: "https://i.ibb.co/mFcHckgk/pngfind-com-smurf-png-2026501.png",
    category: "Kids",
    stream: "https://youtu.be/I-TUCWGmrt8",
  },
  {
    name: "GI Joe",
    image:
      "https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64fb2254d874220681d5f519_GI%20joe%20logo.png",
    category: "Kids",
    stream: "https://youtu.be/TZ3mxF4U__k",
  },
  {
    name: "The Amazing World of Gumball",
    image: "https://i.ibb.co/S7ZzbS87/image.png",
    category: "Kids",
    stream: "https://youtu.be/nIyaCRNwxhU",
  },
  {
    name: "PAW Patrol",
    image: "https://www.freeiconspng.com/uploads/paw-patrol-logo-png-18.png",
    category: "Kids",
    stream: "https://youtu.be/6mb-CQ110Uo",
  },
  {
    name: "Spider-Man",
    image:
      "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/34EA2EB994DCA40C9927EA53B016D24DDA8DE4F5DD83C9EFBCC1F5AB166DE60A/compose?aspectRatio=1.78&format=webp&width=600",
    category: "Kids",
    stream: "https://youtu.be/yABPtUc7KOg",
  },
  {
    name: "USA Network",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/512px-USA_Network_logo_%282016%29.svg.png",
    category: "Entertainment",
    stream: "http://fl7.moveonjoy.com/USA_NETWORK/index.m3u8",
  },
  {
    name: "USA Network Latin America",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/USA_Network_logo_%282016%29.svg/512px-USA_Network_logo_%282016%29.svg.png",
    category: "Entertainment",
    stream:
      "https://cors-proxy.cooks.fyi/https://streamer1.nexgen.bz/SYFY/index.m3u8",
  },
  {
    name: "National Geographic",
    image: "https://i.ibb.co/RpNNL2bz/nge.png",
    category: "Education",
    stream: "https://youtu.be/COtW-y631JA",
  },
  {
    name: "Nat Geo Wild",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nat_Geo_Wild_HD_logo.png",
    category: "Education",
    stream: "https://youtu.be/THooYCltViI",
  },
  {
    name: "Earthquake Alert Channel 24/7 Live 🔴",
    image: "https://www.jrustonapps.com/resources/images/app-icons/mea.png",
    category: "Education",
    stream: "https://youtu.be/rvtygG4n6ew",
  },
  {
    name: "Batman",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/batman-3-logo-png-transparent.png",
    category: "Kids",
    stream: "https://youtu.be/TTUMev7J8jQ",
  },
  {
    name: "Emma And Joey - Nursery Rhymes",
    image: "https://i.ibb.co/0y2CDMZs/image.png",
    category: "Kids",
    stream: "https://youtu.be/-VBxijFm50Y",
  },
  {
    name: "G.I. JOE Renegades",
    image: "https://i.ibb.co/27s97XQ2/gi-joe-renegades-680e2de395de3.png",
    category: "Kids",
    stream: "https://youtu.be/Bu8AbtM0xA4",
  },
  {
    name: "Chu Chu TV - Phonics Song ",
    image:
      "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABa3DdoM-tl16phbsU0YyX8VGZLrFDbxNZ1H7kv5OWRpYgdbrNukBx407cgWbgXabFKtN05iN7Qy2pcJ_LKkijHwvYISa68LnQ2I.png?r=6ef",
    category: "Kids",
    stream: "https://youtu.be/KU2Nx63olF4",
  },
  {
    name: "One Puch Man ",
    image:
      "https://api.duniagames.co.id/api/product/upload/image/17792057321731573408.png",
    category: "Anime",
    stream: "https://youtu.be/DQTqAZdEPwU",
  },
  {
    name: "ABP Asmita",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/ABP_Asmita_logo.svg",
    category: "News",
    stream:
      "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-asmita/master.m3u8",
  },
  {
    name: "Epic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/EPIC_logo_for_print.png",
    category: "Entertainment",
    stream: "https://epiconvh.akamaized.net/live/epic/master.m3u8",
  },
  {
    name: "& TV HD",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/4/4c/%26TV_HD_%282025%29.svg",
    category: "Entertainment",
    stream:
      "https://amg01117-amg01117c1-amgplt0165.playout.now3.amagi.tv/playlist.m3u8",
  },
  {
    name: "Colors Cineplex Bollywood",
    image:
      "https://jiotvimages.cdn.jio.com/dare_images/images/Colors_Cineplex_Bollywood.png",
    category: "Movie",
    stream:
      "https://nonprod-sports-cohort.jiocinema.com/bpk-tv/JC_ColorsCineplexBollywood/JCHLS/index.m3u8",
  },
  {
    name: "Colors Cineplex Superhit",
    image:
      "https://jiotvimages.cdn.jio.com/dare_images/images/Rishtey_Cineplex.png",
    category: "Movie",
    stream:
      "https://nonprod-sports-cohort.jiocinema.com/bpk-tv/JC_ColorsCineplexSuperhit/JCHLS/index.m3u8",
  },
  {
    name: "Star Gold HD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Star_Gold_2020.svg",
    category: "Movie",
    stream:
      "https://live.dinesh29.com.np/stream/jiotvplus/stargoldhd/master.m3u8",
  },
  {
    name: "Star Gold 2 HD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Star_Gold_2.svg",
    category: "Movie",
    stream:
      "https://live.dinesh29.com.np/stream/jiotvplus/stargold2hd/master.m3u8",
  },
  {
    name: "Star Gold Romance",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/8/8a/Star_Gold_Romance.svg",
    category: "Movie",
    stream:
      "https://live.dinesh29.com.np/stream/jiotvplus/stargoldromance/master.m3u8",
  },
  {
    name: "Star Gold Thrills",
    image:
      "https://static.wikia.nocookie.net/logopedia/images/b/b7/Star_Gold_Thrills.svg",
    category: "Movie",
    stream:
      "https://live.dinesh29.com.np/stream/jiotvplus/stargoldthrills/master.m3u8",
  },
  {
    name: "Star Movies HD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/STAR_Movies_logo.svg",
    category: "Movie",
    stream:
      "https://live.dinesh29.com.np/stream/jiotvplus/starmovieshd/master.m3u8",
  },
  {
    name: "Star Movie Select HD",
    image: "https://static.wikia.nocookie.net/logopedia/images/c/c5/SMSHD.png",
    category: "Movie",
    stream:
      "https://live.dinesh29.com.np/stream/jiotvplus/starmoviesselecthd/master.m3u8",
  },
  {
    name: "Motorvision",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Motorvision%2B_Logo_2023.svg",
    category: "Education",
    stream: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=535",
  },
  {
    name: "Top Gear Classic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Top-Gear-Logo.png",
    category: "Education",
    stream: "https://youtu.be/5Bw7xtfpUV4",
  },
  {
    name: "Learn English",
    image: "https://theuniversalhr.com/images/english-learning-english.png",
    category: "Education",
    stream: "https://youtu.be/k_2FA6vyOgM",
  },
  {
    name: "RetroCrush",
    image: "https://explore.retrocrush.tv/wp-content/uploads/retrocrush_logo2.png",
    category: "Anime",
    stream: "https://cineverse.g-mana.live/media/ac7cff3c-5bc3-4745-ac4d-56aadb586d00/profile/1/profileManifest.m3u8",
  },
  {
    name: "Camp Spoopy",
    image: "https://i.ibb.co/GB8p1cn/8-PUb-PVU-d.webp",
    category: "Kids",
    stream: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=269",
  },
  {
    name: "Hobby Maker",
    image: "https://files.ekmcdn.com/honeypotcrafts/images/1st-october-festive-sale-show-1310-c.png",
    category: "LifeStyle",
    stream: "https://lo3.gemporia.com/abrhobbymakerukgfx/smil:livestreamFullHD.smil/playlist.m3u8",
  },
  {
    name: "FIFA +",
    image: "https://i.ibb.co/6cVtCjjL/l5iax42.png",
    category: "Sports",
    stream: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8",
  },
  {
    name: "GREAT! Movies",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Great%21_Movies_logo_2021.svg/2560px-Great%21_Movies_logo_2021.svg.png",
    category: "Movie",
    stream: "https://amg01753-narrativeuk-amg01753c3-lg-gb-1833.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatmovies-lggb/playlist.m3u8",
  },
  {
    name: "GREAT! Romance",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Great%21_Romance_logo_2023.svg",
    category: "Movie",
    stream: "https://amg01753-narrativeuk-amg01753c2-lg-gb-1832.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-greatchristmas-lggb/playlist.m3u8",
  },
  {
    name: "Discover Film",
    image:
      "https://i.ibb.co/GvvcdNZ7/o-Mnps-Q5-d.webp",
    category: "Movie",
    stream: "https://discoverfilm-discoverfilm-1-nl.samsung.wurl.tv/playlist.m3u8",
  },
  {
    name: "Tiny POP",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Tiny_Pop_logo_2018.svg/1920px-Tiny_Pop_logo_2018.svg.png",
    category: "Kids",
    stream: "https://amg01753-narrativeuk-amg01753c1-lg-gb-1830.playouts.now.amagi.tv/playlist/amg01753-narrativeuk-tinypop-lggb/playlist.m3u8",
  },
  {
    name: "POP",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pop_UK_TV_Logo_%282015%29.svg/2560px-Pop_UK_TV_Logo_%282015%29.svg.png",
    category: "Anime",
    stream: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01753-narrativeentert-popkids-lggb/playlist.m3u8",
  },
  {
    name: "iFood.TV",
    image:
      "https://i.postimg.cc/GpPt7q5T/ifoodtv.png",
    category: "Food",
    stream: "https://ifood-vizio.amagi.tv/playlist.m3u8",
  },
  {
    name: "Sky News Weather",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/SkyNewsWeatherChannelAU.svg",
    category: "Weather",
    stream: "https://distro001-gb-hls1-prd.delivery.skycdp.com/easel_cdn/ngrp:weather_loop.stream_all/playlist.m3u8",
  },
  {
    name: "Cloudflare TV",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAxMDEuNDUxIDEwMS40NTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InRyYW5zZm9ybTpzY2FsZSguODUpIj48Y2lyY2xlIGN4PSI1MC43MjYiIGN5PSI1MC43MjYiIHI9IjUwLjcyNiIgZmlsbD0iIzMzMyI+PC9jaXJjbGU+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNS44MzYgLTI3LjU2MSkiPjxwYXRoIGQ9Ik0yMzUuNzExLDcxLjE0N2E5LjgwNyw5LjgwNywwLDAsMSw5LjQyMy0xMS4yMjgsNi45LDYuOSwwLDAsMSwxMC44MjYtNy4yMzUsMTUuMzQyLDE1LjM0MiwwLDAsMSwyOS41LDEuNTg2Ljg1MS44NTEsMCwwLDEsLjAxNy4xNjYuODI3LjgyNywwLDAsMS0uMDUzLjNsLTEuMzQ0LDMuNTFhOC40MTMsOC40MTMsMCwwLDEtNi44NzksNS4xNjFsLTIzLjU1Ny4zYS42MjQuNjI0LDAsMCwwLS41NDIuNDE1LjQ3NC40NzQsMCwwLDAsLjA1LjQyMS40NjMuNDYzLDAsMCwwLC4zNjcuMmwyMy4zNDEuM2EzLjYsMy42LDAsMCwxLDIuODU2LDEuNDEzLDQuMDU4LDQuMDU4LDAsMCwxLC40MTQsMy41NDZsLS4zMzEsMS4xNDVhLjU2OS41NjksMCwwLDEtLjUzMy40MDdsLS4wMTMsMC00My4wOSwwQS40NTcuNDU3LDAsMCwxLDIzNS43MTEsNzEuMTQ3WiIgZmlsbD0iI2Y2ODIxZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yOTkuODU2LDcxLjJhLjQ3Ni40NzYsMCwwLDEtLjQ1OS4zNDNoLTE3Ljc5bC0uMDE0LDBhLjI3Ni4yNzYsMCwwLDEtLjI0NS0uMzc0bC4zNzQtLjk3NmE4LjQxNSw4LjQxNSwwLDAsMSw2Ljg5MS01LjE2MWw1LjE3LS4zYS42MjUuNjI1LDAsMCwwLC41NDEtLjQxNS40Ny40NywwLDAsMC0uMDUyLS40MjMuNDU0LjQ1NCwwLDAsMC0uMzU1LS4xOTNsLTQuOTc1LS4zYTMuNiwzLjYsMCwwLDEtMi44NTYtMS40MTMsNC4wNTMsNC4wNTMsMCwwLDEtLjQxNC0zLjU0NWwuOTE4LTMuMTdhLjM3MS4zNzEsMCwwLDEsLjIzNS0uMjQ4LjM3OS4zNzksMCwwLDEsLjEtLjAyMmMuMjE1LS4wMS40My0uMDE2LjY0Ni0uMDE2QTEyLjc2OCwxMi43NjgsMCwwLDEsMjk5Ljg1Niw3MS4yWiIgZmlsbD0iI2ZiYWQ0MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xLjM0My0yNS4xMjF2LTYuMTQzSDI3Ljc3MXY2LjE0M0gxOC4yODJWMGgtNy40NVYtMjUuMTIxWm0zNy42NjYtNi4xNDMsNi45ODUsMjIuOWguMjY5bDYuOTg1LTIyLjloOC40NjNMNTEuMTYsMEg0MS4xTDMwLjU0Ni0zMS4yNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYuNjE4IDExMC4wNikiIGZpbGw9IiNmZmYiPjwvcGF0aD48L2c+PC9zdmc+",
    category: "Education",
    stream: "https://cloudflare.tv/hls/live.m3u8",
  },
  {
    name: "NBA TV",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/NBA_TV.svg/512px-NBA_TV.svg.png",
    category: "Sports",
    stream:
      "https://amg00556-amg00556c3-firetv-us-6060.playouts.now.amagi.tv/playlist.m3u8",
    stream: "https://fl7.moveonjoy.com/NBA_TV/index.m3u8",
  },
  {
    name: "GO USA",
    image: "https://i.imgur.com/x90ALip.png",
    category: "Travel",
    stream: "https://brandusa-gousa-1-in.samsung.wurl.tv/playlist.m3u8",
    stream: "https://brandusa-gousa-1-nl.samsung.wurl.tv/playlist.m3u8",
    stream: "https://brandusa-gousa-1-se.samsung.wurl.tv/playlist.m3u8",
  },
  // Add other channels...
];

/* -------------------------
   Helper Functions
------------------------- */

/* -------------------------
   Utility Functions
------------------------- */

function getChannelSource(channel) {
  return (
    (channel &&
      (channel.stream || channel.url || channel.youtube || channel.src)) ||
    ""
  );
}

function getStreamType(src) {
  if (!src) return null;
  const s = src.toLowerCase();
  if (
    s.includes("youtube.com") ||
    s.includes("youtu.be") ||
    s.includes("embed/") ||
    s.includes("/shorts/") ||
    s.includes("<iframe")
  )
    return "youtube";
  if (s.includes(".m3u8")) return "hls";
  if (s.includes(".mpd")) return "dash";
  if (s.includes(".mp4") || s.includes(".mkv")) return "mp4";
  return "unknown";
}

function extractYouTubeId(input) {
  if (!input || typeof input !== "string") return null;
  const url = input.trim();

  // Case 1: Full <iframe> HTML → grab src
  if (url.startsWith("<iframe")) {
    const match = url.match(/src=["']([^"']+)["']/i);
    if (match && match[1]) {
      return extractYouTubeId(match[1]); // recurse with src link
    }
  }

  // Case 2: Embed link
  const embed = url.match(/embed\/([A-Za-z0-9_-]{11})/);
  if (embed) return embed[1];

  // Case 3: Watch?v=
  const watch = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (watch) return watch[1];

  // Case 4: Shortened youtu.be
  const short = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (short) return short[1];

  // Case 5: Shorts link
  const shorts = url.match(/\/shorts\/([A-Za-z0-9_-]{11})/);
  if (shorts) return shorts[1];

  // Case 6: Raw ID
  if (/^[A-Za-z0-9_-]{11}$/.test(url)) return url;

  return null;
}

/* -------------------------
   YouTube Player
------------------------- */

function createYouTubeModalIfNeeded() {
  let modal = document.getElementById("ytModal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "ytModal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.85);
    z-index: 99999;
    padding: 20px;
  `;

  modal.innerHTML = `
    <div id="ytBox" style="
      position: relative;
      max-width: 1100px;
      width: 100%;
      background: transparent;
      border-radius: 10px;
      overflow: visible;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    ">
      <button id="ytClose" aria-label="close" style="
        margin-bottom: 4px;
        width: 36px;
        height: 36px;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
        font-size: 22px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.3);
      ">×</button>

      <div style="position: relative; width: 100%; padding-top: 56.25%; border-radius: 10px; overflow: hidden;">
        <iframe id="ytFrame" src="" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
          style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 10px;"></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector("#ytClose");

  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    closeBtn.style.boxShadow = "0 8px 40px rgba(255, 255, 255, 0.4)";
  });
  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    closeBtn.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeYouTube();
  });

  closeBtn.addEventListener("click", closeYouTube);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeYouTube();
  });

  return modal;
}

function openYouTube(url, channel) {
  const id = extractYouTubeId(url);
  if (!id) {
    console.error("Unable to extract YouTube ID from:", url);
    alert(
      "This YouTube URL is not valid or the video ID couldn't be detected."
    );
    return;
  }

  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

  const modal = createYouTubeModalIfNeeded();
  const iframe = modal.querySelector("#ytFrame");
  if (!iframe) {
    console.error("ytFrame not found inside modal.");
    return;
  }

  iframe.src = embedUrl;
  modal.style.display = "flex";

  console.log(
    `Playing YouTube: ${
      channel && channel.name ? channel.name + " - " : ""
    }${id}`
  );
}

function closeYouTube() {
  const modal = document.getElementById("ytModal");
  if (!modal) return;
  const iframe = modal.querySelector("#ytFrame");
  if (iframe) iframe.src = "";
  modal.style.display = "none";
}

/* -------------------------
   M3U8 / MPD Player Navigation
------------------------- */
function navigateToPlayer(src, drmKey, nameSafe, imageUrl) {
  const type = getStreamType(src);
  let url = `player.html?play=${encodeURIComponent(src)}`;

  // Only attach DRM params if it's a DASH stream with a valid drmKey
  if (type === "dash" && drmKey && drmKey.trim() !== "") {
    url += `&drm=clearkey&keyid=${encodeURIComponent(drmKey)}`;
  }

  // Always append channel + logo info
  if (nameSafe) {
    url += `&channel=${encodeURIComponent(nameSafe)}`;
  }
  if (imageUrl) {
    url += `&logo=${encodeURIComponent(imageUrl)}`;
  }

  // Navigate to player page
  window.location.href = url;
}

/* -------------------------
   Load Channels and Handle Clicks
------------------------- */

function loadChannels() {
  if (typeof channels === "undefined") {
    console.error("channels array not found.");
    return;
  }

  const container = document.getElementById("channel-container");
  if (!container) {
    console.error("No #channel-container found in DOM.");
    return;
  }
  container.innerHTML = "";

  // Group channels by category
  const grouped = channels.reduce((acc, channel) => {
    const cat = channel.category || "Others";
    acc[cat] = acc[cat] || [];
    acc[cat].push(channel);
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b)
  );

  console.log(
    `Loading ${channels.length} channels into ${sortedCategories.length} categories.`
  );

  sortedCategories.forEach((category) => {
    // Sort channels alphabetically inside the category
    const sortedGroup = grouped[category].sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );

    // Create category title
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = category;
    container.appendChild(sectionTitle);

    const sectionGrid = document.createElement("div");
    sectionGrid.className = "container";

    // Render sorted channels
    sortedGroup.forEach((channel) => {
      const card = document.createElement("div");
      card.className = "channel-card";

      const imageUrl = channel.image || "";
      card.style.setProperty("--bg", `url(${imageUrl})`);

      const nameSafe = channel.name || "Untitled";
      const catSafe = channel.category || category;
      card.innerHTML = `
        <img src="${imageUrl}" alt="${nameSafe}" loading="lazy" onerror="this.style.opacity=.5">
        <div class="channel-info">
          <h3>${nameSafe}</h3>
          <span>${catSafe}</span>
        </div>
      `;

      card.addEventListener("click", (e) => {
        e.stopPropagation();

        const src = getChannelSource(channel);
        if (!src) {
          console.warn(`Channel "${nameSafe}" has no stream/url property.`);
          return;
        }

        const type = getStreamType(src);
        if (type === "youtube") {
          openYouTube(src, channel);
          return;
        }

        navigateToPlayer(src, channel.drmKey, nameSafe, imageUrl);
      });

      sectionGrid.appendChild(card);
    });

    container.appendChild(sectionGrid);
  });
}

/* -------------------------
   Initialization on DOM ready
------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadChannels();
  } catch (err) {
    console.error("Error while loading channels:", err);
  }
});
