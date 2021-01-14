import { Typography } from '@dodam/components';

export default function Card() {
  return (
    <div className="sidenav">
      <style jsx>
        {`
          .sidenav {
            width: 260px;
            height: 640px;
            position: fixed;
            z-index: 1;
            top: 0px;
            left: 0px;
            padding: 15px;
          }

          .profile-image {
            background: #ededed 0% 0% no-repeat padding-box;
            opacity: 1;
            width: 66px;

            height: 66px;
            border-radius: 50%;
            margin: 10px;
          }
          .sidebar-line {
            border: 1px solid #cdcdcd;
            text-align: center;
            margin: 8px;
          }
          .list-group-item {
            border: none;
            margin: 5px;
            font-weight: bold;
          }
          span {
            font-size: 14px;
          }
        `}
      </style>
      <img className="profile-image" />
      <span>로그인이 필요합니다</span>
      <i className="fas fa-angle-right"></i>

      <hr className="sidebar-line" />
      <ul className="list-group">
        <li className="list-group-item">홈</li>
        <li className="list-group-item">맞춤 동아리 테스트</li>
        <li className="list-group-item">동아리 등록</li>
        <li className="list-group-item">등록한 게시물</li>
        <li className="list-group-item">스크랩 동아리</li>
        <li className="list-group-item">고객센터</li>
        <li className="list-group-item">로그인</li>
      </ul>
    </div>
  );
}
