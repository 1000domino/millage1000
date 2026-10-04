/*
  探索内容はこのファイルだけ編集すれば更新できます。

  title      : 日本語の場所名
  en         : タイトルバー用の英字
  time       : 表示時刻
  status     : オレンジ色の見出し
  intro      : 最初から表示される文章
  detail     : 「もう少し調べる」で開く文章
  artifact   : 画像内の短いラベル
  visual     : book / water / note / sound / door
  image      : 任意。例 "img/explore/library.png"。空ならCSSの仮画像を表示
  available  : false にすると未開放表示
*/

window.EXPLORE_PLACES = {
  "map-ground": { title:"グラウンド", en:"GROUND", time:"15:08", status:"白線の先で、足跡が途切れています。", intro:"白線の先は高い壁で途切れている。空だけが、どこまでも広い。", detail:"ここから先の探索情報を入力してください。", artifact:"TRACK 08", visual:"note", image:"", available:true },
  "map-gym": { title:"体育館", en:"GYMNASIUM", time:"15:22", status:"中から音が聞こえます。", intro:"扉には鍵がかかっている。中からボールの弾む音が聞こえた。", detail:"ここから先の探索情報を入力してください。", artifact:"SOUND LOG", visual:"sound", image:"", available:true },
  "map-clubrooms": { title:"部室棟", en:"CLUB ROOMS", time:"15:36", status:"まだ新しい私物があります。", intro:"使われていないはずの部室に、まだ新しい私物が残されている。", detail:"ここから先の探索情報を入力してください。", artifact:"LOST ITEM", visual:"note", image:"", available:true },
  "map-school": { title:"本校舎", en:"MAIN BUILDING", time:"15:48", status:"人の気配だけが残っています。", intro:"北棟と昇降口を、左右の渡り廊下がつないでいる。廊下には、人の気配だけが残っている。", detail:"ここから先の探索情報を入力してください。", artifact:"HALLWAY", visual:"door", image:"", available:true },
  "map-rooftop": { title:"屋上プール", en:"ROOFTOP POOL", time:"16:01", status:"風がないのに、水面が揺れています。", intro:"水面は揺れている。風はない。", detail:"ここから先の探索情報を入力してください。", artifact:"WATER 01", visual:"water", image:"", available:true },
  "map-courtyard": { title:"中庭", en:"COURTYARD", time:"16:14", status:"誰かを待っていた形跡があります。", intro:"中央には夏の青葉を茂らせた桜。その横にベンチがある。誰かを待つためのような。", detail:"ここから先の探索情報を入力してください。", artifact:"BENCH", visual:"note", image:"", available:true },
  "map-dormitory": { title:"学生寮", en:"DORMITORY", time:"16:28", status:"建物の中から声が聞こえます。", intro:"賑やかな声が聞こえる。建物は古びている。", detail:"ここから先の探索情報を入力してください。", artifact:"ROOM LOG", visual:"door", image:"", available:true },
  "map-entrance": { title:"昇降口", en:"ENTRANCE", time:"16:33", status:"全員分の靴が揃っています。", intro:"外へ通じる門はない。下駄箱には全員分の靴が揃っている。", detail:"ここから先の探索情報を入力してください。", artifact:"SHOES", visual:"door", image:"", available:true },

  "school-rooftop-door": { title:"屋上扉", en:"ROOFTOP DOOR", time:"16:38", status:"鍵はかかっていません。", intro:"自由に出入りできる。", detail:"ここから先の探索情報を入力してください。", artifact:"OPEN", visual:"door", image:"", available:true },
  "school-pool": { title:"屋上プール", en:"ROOFTOP POOL", time:"16:42", status:"底に何かが沈んでいます。", intro:"どこまでも透き通っている。けれど、底には何かが沈んでいるように見える。何かはわからない。", detail:"ここから先の探索情報を入力してください。", artifact:"WATER 02", visual:"water", image:"", available:true },
  "school-stairs": { title:"階段", en:"STAIRS", time:"16:44", status:"遠くで音楽が響いています。", intro:"音楽が響いている。", detail:"ここから先の探索情報を入力してください。", artifact:"SOUND LOG", visual:"sound", image:"", available:true },
  "school-classroom-4": { title:"四階の教室", en:"CLASSROOM 4F", time:"16:47", status:"机が一つ余っています。", intro:"机の数は、生徒の数より一つ多い。", detail:"ここから先の探索情報を入力してください。", artifact:"DESK 00", visual:"note", image:"", available:true },
  "school-music-room": { title:"音楽室", en:"MUSIC ROOM", time:"16:51", status:"演奏している者の姿がありません。", intro:"誰かが演奏している。姿は見えない。", detail:"ここから先の探索情報を入力してください。", artifact:"SCORE", visual:"sound", image:"", available:true },
  "school-music-prep": { title:"音楽準備室", en:"MUSIC STORAGE", time:"16:54", status:"空のケースがあります。", intro:"棚に並ぶ楽器のうち、一つだけケースが空いている。", detail:"ここから先の探索情報を入力してください。", artifact:"CASE 08", visual:"sound", image:"", available:true },
  "school-principal-room": { title:"校長室", en:"PRINCIPAL ROOM", time:"16:58", status:"記録に不自然な点があります。", intro:"机の上に名前のない印章が置かれている。壁の歴代写真は、すべて同じ顔だ。", detail:"ここから先の探索情報を入力してください。", artifact:"ARCHIVE", visual:"note", image:"", available:true },
  "school-classroom-3": { title:"三階の教室", en:"CLASSROOM 3F", time:"17:02", status:"黒板が書き換えられています。", intro:"黒板の日付は今日になっている。", detail:"ここから先の探索情報を入力してください。", artifact:"TODAY", visual:"note", image:"", available:true },
  "school-library": { title:"図書室", en:"LIBRARY", time:"16:42", status:"誰かがいた形跡があります。", intro:"返却期限が一千年前の本が、一冊だけ机の上に置かれている。", detail:"貸出カードの氏名欄は削り取られている。けれど、紙を傾けると筆圧の跡だけが残っている。", artifact:"貸出カード", visual:"book", image:"", available:true },
  "school-art-room": { title:"美術室", en:"ART ROOM", time:"17:09", status:"古いデッサンが残されています。", intro:"誰かが描いたのだろう、片隅に置かれたままのデッサンは少しずつ老いていく。", detail:"ここから先の探索情報を入力してください。", artifact:"DRAWING", visual:"note", image:"", available:true },
  "school-classroom-2": { title:"二階の教室", en:"CLASSROOM 2F", time:"17:13", status:"乾ききっていない跡があります。", intro:"窓際の机に、乾ききっていない水滴の跡が残っている。", detail:"ここから先の探索情報を入力してください。", artifact:"DESK 02", visual:"water", image:"", available:true },
  "school-home-economics": { title:"家庭科室", en:"HOME ECONOMICS", time:"17:17", status:"水の音が聞こえます。", intro:"水の音が聞こえる。", detail:"ここから先の探索情報を入力してください。", artifact:"SINK", visual:"water", image:"", available:true },
  "school-broadcast-room": { title:"放送室", en:"BROADCAST ROOM", time:"17:21", status:"電源の入っていない機材が反応しています。", intro:"電源の入っていないマイクが、ときどき誰かの呼吸を拾う。", detail:"ここから先の探索情報を入力してください。", artifact:"REC 00", visual:"sound", image:"", available:true },
  "school-entrance": { title:"昇降口", en:"ENTRANCE", time:"17:24", status:"全員分の靴が揃っています。", intro:"外へ通じる門はない。下駄箱には全員分の靴が揃っている。", detail:"ここから先の探索情報を入力してください。", artifact:"SHOES", visual:"door", image:"", available:true },
  "school-infirmary": { title:"保健室", en:"INFIRMARY", time:"17:28", status:"カーテンの向こうに気配があります。", intro:"白いカーテンの向こうから、眠っている誰かの呼吸が聞こえる。", detail:"ここから先の探索情報を入力してください。", artifact:"BED 01", visual:"sound", image:"", available:true },
  "school-staff-room": { title:"職員室", en:"STAFF ROOM", time:"17:32", status:"先生がいます。", intro:"先生がいる。", detail:"ここから先の探索情報を入力してください。", artifact:"STAFF", visual:"door", image:"", available:true },

  "dorm-rooftop": { title:"物干し場", en:"DRYING AREA", time:"17:38", status:"持ち主のいない洗濯物があります。", intro:"洗濯物が揺れている。", detail:"ここから先の探索情報を入力してください。", artifact:"LAUNDRY", visual:"note", image:"", available:true },
  "dorm-water-tank": { title:"貯水槽", en:"WATER TANK", time:"17:41", status:"新しい鍵がかかっています。", intro:"点検口には新しい鍵がかかっている。", detail:"ここから先の探索情報を入力してください。", artifact:"LOCKED", visual:"water", image:"", available:true },
  "dorm-stairs": { title:"寮の階段", en:"DORM STAIRS", time:"17:45", status:"遠くで音楽が響いています。", intro:"音楽が響いている。", detail:"ここから先の探索情報を入力してください。", artifact:"SOUND LOG", visual:"sound", image:"", available:true },
  "dorm-room-401": { title:"寮室401", en:"ROOM 401", time:"17:48", status:"明日の日付の記録があります。", intro:"机の引き出しに、明日の日付で書かれた日記が入っている。", detail:"ここから先の探索情報を入力してください。", artifact:"DIARY 401", visual:"note", image:"", available:true },
  "dorm-room-402": { title:"寮室402", en:"ROOM 402", time:"17:51", status:"明日の日付の記録があります。", intro:"机の引き出しに、明日の日付で書かれた日記が入っている。", detail:"ここから先の探索情報を入力してください。", artifact:"DIARY 402", visual:"note", image:"", available:true },
  "dorm-room-301": { title:"寮室301", en:"ROOM 301", time:"17:54", status:"明日の日付の記録があります。", intro:"机の引き出しに、明日の日付で書かれた日記が入っている。", detail:"ここから先の探索情報を入力してください。", artifact:"DIARY 301", visual:"note", image:"", available:true },
  "dorm-lounge": { title:"談話室", en:"LOUNGE", time:"17:58", status:"テレビに映像が流れています。", intro:"テレビには誰もいない食堂の映像が映っている。", detail:"ここから先の探索情報を入力してください。", artifact:"CAM 08", visual:"sound", image:"", available:true },
  "dorm-room-201": { title:"寮室201", en:"ROOM 201", time:"18:01", status:"明日の日付の記録があります。", intro:"机の引き出しに、明日の日付で書かれた日記が入っている。", detail:"ここから先の探索情報を入力してください。", artifact:"DIARY 201", visual:"note", image:"", available:true },
  "dorm-bath": { title:"浴室", en:"BATH", time:"18:05", status:"ここにはないはずの物があります。", intro:"湯船の底に貝殻が置いてあった。", detail:"ここから先の探索情報を入力してください。", artifact:"SHELL", visual:"water", image:"", available:true },
  "dorm-laundry": { title:"洗濯室", en:"LAUNDRY", time:"18:08", status:"機械が停止しません。", intro:"洗濯機が回り続けている。", detail:"ここから先の探索情報を入力してください。", artifact:"RUNNING", visual:"sound", image:"", available:true },
  "dorm-shop": { title:"購買", en:"SCHOOL SHOP", time:"18:12", status:"必要な物だけが揃っています。", intro:"棚には必要なものが揃っている。", detail:"ここから先の探索情報を入力してください。", artifact:"STOCK", visual:"note", image:"", available:true },
  "dorm-entrance": { title:"寮玄関", en:"DORM ENTRANCE", time:"18:15", status:"古い伝言が残っています。", intro:"昔ながらの伝言板が設置されている。", detail:"ここから先の探索情報を入力してください。", artifact:"MESSAGE", visual:"note", image:"", available:true },
  "dorm-cafeteria": { title:"食堂", en:"CAFETERIA", time:"18:20", status:"人数分の食事が並んでいます。", intro:"人数分の食事が毎日決まった時刻に並ぶ。", detail:"ここから先の探索情報を入力してください。", artifact:"MEAL 08", visual:"note", image:"", available:true },
  "dorm-kitchen": { title:"厨房", en:"KITCHEN", time:"18:24", status:"使われたばかりの熱が残っています。", intro:"調理器具は温かい。料理をする者の姿はない。", detail:"ここから先の探索情報を入力してください。", artifact:"HEAT", visual:"water", image:"", available:true }
};
