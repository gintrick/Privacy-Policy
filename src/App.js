import React from 'react';

function App() {
  const containerStyle = {
    position: 'relative',
    maxWidth: '800px', // 最大幅を設定
    width: 'calc(100% - 40px)',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    paddingBottom: '40px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '2em',
    marginTop: '20px',
    marginBottom: '20px',
  };

  const headerStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    marginBottom: '10px',
  };

  const sectionStyle = {
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const divStyle = {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>ペットの気持ちAI</div>
      <div style={headerStyle}>プライバシーポリシー</div>
      <p>
        株式会社
        GinTrick（以下「当社」といいます。）は、当社のサービス（以下「本サービス」といいます。）を利用する方（以下「利用者」といいます。）の個人情報の取扱いについて、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性を認識させるとともにその取組みを徹底させることにより、個人情報の保護を推進します。
      </p>

      {/* 第1条 */}
      <div style={sectionStyle}>第1条（個人情報）</div>
      <p>
        「個人情報」とは、個人情報の保護に関する法律（平成十五年法律第五十七号、以下「個人情報保護法」といいます。）にいう「個人情報」を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別できるもの又は個人識別符号が含まれるものを指します。
      </p>

      {/* 第2条 */}
      <div style={sectionStyle}>第2条（個人情報の取得と利用）</div>
      <ol>
        <li>当社は以下の情報又は個人情報を取得することがあります。</li>
        <ol>
          <li>氏名、性別、住所、メールアドレス、電話番号</li>
          <li>アカウントID、ニックネーム、パスワード</li>
          <li>クレジットカード番号など本サービスの料金の決済に必要な情報</li>
          <li>利用者が選択し本サービスにアップロードした画像・映像データ</li>
          <li>端末固有ID、ご利用機種の種類、IPアドレス</li>
          <li>本サービス上での操作・利用履歴</li>
          <li>広告配信用識別子（端末固有情報を含む）</li>
        </ol>
        <li>
          当社は、以下の目的に必要な範囲で、第１項記載の利用者の情報又は個人情報を取得し、利用させていただきます。以下の⽬的の範囲を超えて個⼈情報を利⽤する場合には、事前に適切な⽅法で利用者からの同意を得るものとします。
        </li>
        <ol>
          <li>本サービスを提供するため</li>
          <li>本サービスの内容を改良・改善し、又は新サービスを開発するため</li>
          <li>
            本サービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスのご案内（電子メール、チラシ、その他のダイレクトメールの送付を含む）のため
          </li>
          <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
          <li>
            本サービスに関する利用者からのお問い合わせに回答するため（本人確認を行うことを含む）
          </li>
          <li>本サービスの利用状況を利用者にご報告するため</li>
          <li>
            本サービスに関するアンケート・取材等のご協力依頼や各種イベントへのご参加をお願いし、又はその結果などをご報告するため
          </li>
          <li>
            本サービスの利用履歴等を調査・分析し、その結果を本サービスの改良・開発や広告の配信に利用するため
          </li>
          <li>
            利用規約に違反した利用者や、不正・不当な目的で本サービスを利用しようとする利用者の特定をし、ご利用をお断りするため
          </li>
          <li>料金請求や課金精算のため</li>
        </ol>
      </ol>

      {/* 第3条 */}
      <div style={sectionStyle}>第3条（情報収集モジュールによる取得）</div>
      <p>
        当社は、利用者による本サービスの利用に関する動向を調査することにより、より良いサービスを提供し、適切な広告を表示するため、第三者が提供する情報収集モジュールを利用することがあります。
      </p>
      <div style={{ width: '100%', textAlign: 'center' }}>記</div>
      <div style={divStyle}>
        本サービスにおいて利用する主な情報収集モジュールについては以下をご確認ください。
        <br />
        情報収集モジュール名： Google Analytics 及びFirebase 向け Google
        Analytics並びにAdMob（以下併せて「Googleモジュール」といいます。）
        情報収集モジュール提供者による情報の利用：Google
        モジュールは、Cookieを利用して利用者の情報を収集し、それによって収集された情報はGoogleモジュールに関するポリシーや規約等に基づいて管理されます。
      </div>
      <div style={divStyle}>
        Googleモジュールに関するポリシーや規約等については、以下をご確認ください。
        <ol>
          <li>
            <a href='https://marketingplatform.google.com/intl/ja/about/analytics/'>
              Google Analytics
            </a>
          </li>
          <li>
            <a href='https://firebase.google.com/products/analytics?hl=ja'>
              Firebase向けGoogle Analytics
            </a>
          </li>
          <li>
            <a href='https://admob.google.com/intl/ja/home/'>AdMob</a>
          </li>
          <li>
            <a href='https://policies.google.com/technologies/partner-sites'>
              Google ポリシーと規約
            </a>
          </li>
          <li>
            <a href='https://policies.google.com/privacy?hl=ja'>
              Google プライバシーポリシー
            </a>
          </li>
        </ol>
      </div>

      {/* 第4条 */}
      <div style={sectionStyle}>第4条（個人情報の管理と保護）</div>
      <p>
        個人情報の管理は、厳重に行うこととし、次に掲げる場合を除き、利用者の同意がない限り、第三者に対しデータを開示・提供することはいたしません（なお、利用者から取得した情報又は個人情報は統計的な処理を行った後、第三者に開示し、若しくは公表することがありますが、統計情報から、個人を特定・識別することはできません。）。また、安全性を考慮し、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん及び漏えい等のリスクに対する予防並びに是正に関する対策を講じます。
      </p>
      <ol>
        <li>
          人の生命、身体又は財産の保護のために必要がある場合であって、利用者の同意を得ることが困難である場合
        </li>
        <li>
          公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難である場合
        </li>
        <li>
          国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
        </li>
        <li>
          業務を円滑に遂行するため、利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合
        </li>
        <li>
          合併その他の事由による事業の承継に伴って個人情報が提供される場合
        </li>
        <li>
          個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的及び当該個人情報の管理について責任を有する者の氏名又は名称について、あらかじめ利用者に通知し、又は利用者が容易に知り得る状態に置いた場合
        </li>
        <li>その他法令で認められる場合</li>
      </ol>

      {/* 第5条 */}
      <div style={sectionStyle}>第5条（個人情報の取扱いの委託）</div>
      <p>
        当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部又は一部を委託する場合がございます。この場合、当社は、委託先としての適格性を十分審査するとともに、契約にあたって守秘義務に関する事項等を定め、委託先に対する必要かつ適切な監督を行います。また、当社は、取得個人情報の全部又は一部を、個人情報保護法の定めに基づいて共同利用することがございます。
      </p>

      {/* 第6条 */}
      <div style={sectionStyle}>第6条（個人情報の開示）</div>
      <p>
        当社は、利用者から個人情報の開示を求められたときは、利用者に対し、遅滞なくこれを開示します。但し、開示することにより次のいずれかに該当する場合は、その全部又は一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
      </p>
      <ol>
        <li>
          利用者又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
        </li>
        <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
        <li>その他法令に違反することとなる場合</li>
      </ol>

      {/* 第7条 */}
      <div style={sectionStyle}>第7条（個人情報の訂正及び削除）</div>
      <ol>
        <li>
          当社の保有する個人情報が誤った情報である場合には、利用者の請求により、当社が定める手続きに従い個人情報の訂正又は削除を行います。
        </li>
        <li>
          当社は、利用者から前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正又は削除を行い、これを利用者に通知します。
        </li>
      </ol>

      {/* 第8条 */}
      <div style={sectionStyle}>第8条（個人情報の利用停止等）</div>
      <p>
        当社は、利用者から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、又は不正の手段により取得されたものであるという理由により、その利用の停止又は消去（以下「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行い、その旨利用者に通知します。但し、個人情報の利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、利用者の権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じます。
      </p>

      {/* 第9条 */}
      <div style={sectionStyle}>第9条（プライバシーポリシーの変更手続）</div>
      <p>
        当社は本ポリシーの内容を適宜見直し、その改善に努めます。本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、変更することができるものとします。変更後のプライバシーポリシーは、当社所定の方法により、利用者に通知し、又は当社ウェブサイトに掲載したときから効力を生じるものとします。
      </p>

      {/* 第10条 */}
      <div style={sectionStyle}>第10条（法令、規範の遵守）</div>
      <p>
        当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守します。
      </p>

      {/* 第11条 */}
      <div style={sectionStyle}>第11条（苦情及び相談への対応）</div>
      <p>
        当社は、個人情報の取扱いに関する利用者からの苦情、相談を受け付け、適切かつ迅速に対応いたします。また、利用者からの当該個人情報の開示、訂正、追加、削除、利用又は提供の拒否などのご要望に対しても、迅速かつ適切に対応いたします。
      </p>

      {/* 第12条 */}
      <div style={sectionStyle}>第12条（お問い合わせ窓口）</div>
      <p> 当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>
      <div style={divStyle}>
        株式会社 GinTrick お客様対応窓口
        <br />
        <span>
          お問い合わせは
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSd4u1Tgp_ifVTbOCUiPkm_aGVdR3E_M_JRizeWCvHABxPAQKQ/viewform'>
            コチラへ
          </a>
        </span>
      </div>

      <div style={divStyle}>
        <p>2024年01月10日制定・施行</p>
      </div>
    </div>
  );
}

export default App;