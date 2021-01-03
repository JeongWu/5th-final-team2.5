import { Typography } from '@dodam/components';

export default function Card() {
  return (
    <div className="col">
      <div className="card border-light">
        <img src="" className="card-img-top" alt="이미지가 없습니다" />
        <div className="card-body">
          <Typography>수원 연합 창작 동아리 그 노래 회원모집</Typography>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            width: 136px;
          }

          .card-body {
            padding: 8px;
          }

          .card-img-top {
            width: 146px;
            height: 146px;
            background-color: #aaa;
            cursor: pointer;
            border-radius: 6px;
          }
        `}
      </style>
    </div>
  );
}
