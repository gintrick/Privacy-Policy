import React from 'react';

function App() {
  const containerStyle = {
    maxWidth: '600px', // 最大幅を設定
    width: 'calc(100% - 40px)',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
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

  const linkStyle = {
    color: 'blue', // リンクの色
    textDecoration: 'underline', // 下線を引く
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>プライバシーポリシー</div>
      <p>
        当社のアプリケーションでは、ユーザーのプライバシーとデータの安全を最優先事項としています。本プライバシーポリシーは、ユーザーが当社のアプリケーションを通じてアップロードする画像の取り扱いについて説明しています。
      </p>

      <div style={sectionStyle}>画像データの取り扱い</div>
      <p>
        <strong>アップロードされた画像の使用目的：</strong>
        ユーザーがアプリケーションにアップロードする画像は、サービスの提供およびユーザー体験の向上の目的でのみ使用されます。
      </p>
      <p>
        <strong>画像の保存期間と削除：</strong>
        アップロードされた画像は、目的達成後、最大30日間サーバーに保存されます。この期間経過後、画像は自動的に永久に削除されます。削除された画像は復元できません。
      </p>
      <p>
        <strong>データ保護：</strong>
        当社は、ユーザーの画像データを保護するために最新のセキュリティ対策を講じています。アクセス制御、暗号化、定期的なセキュリティ監査を実施し、データの安全を確保しています。
      </p>

      <div style={sectionStyle}>ユーザーの権利</div>
      <p>
        <strong>アクセスと削除の要求：</strong>
        ユーザーはいつでも自分のデータにアクセスする権利があります。また、任意の時点で自分の画像データの削除を要求することができます。
      </p>
      <p>
        <strong>透明性：</strong>
        当社は、ユーザーのプライバシーに関連するすべての処理において透明性を保つことを約束します。ユーザーはいつでもプライバシーポリシーに関する質問や懸念を当社に対して提起することができます。
      </p>

      <div style={sectionStyle}>お問い合わせ</div>
      <p>
        プライバシーポリシーに関するご質問や懸念がある場合は、以下の連絡先までお気軽にお問い合わせください。
      </p>
      <p>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSd4u1Tgp_ifVTbOCUiPkm_aGVdR3E_M_JRizeWCvHABxPAQKQ/viewform'
          style={linkStyle}
        >
          お問い合わせフォーム
        </a>
      </p>
    </div>
  );
}

export default App;
