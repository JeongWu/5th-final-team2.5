import { Typography, Button } from '@dodam/components';
import Recommendation from '../components/Recommendation';

export default function Result() {
  const mode = 1;
  return (
    <>
      <div className="result">
        <div className="result-top">
          <Typography className="header" align="center" variant="h5">
            김도담님은
          </Typography>
          <Typography className="header" align="center" variant="h2" weight="bolder">
            적극적이고 진취적인 성격이군요!
          </Typography>

          <img className="result-image" />
        </div>
        <div className="result-bottom">
          <Typography weight="bolder">분석 결과</Typography>
          <Typography>
            당신은 적극적이고, 진취적인 성격입니다. 활동적인 경험을 하면서 친한 사람들과 똘똘 뭉치고 싶어 합니다. 또한
            당신은 할 일이 많아 조금은 바빠지더라도 자기 자신을 발전시키기 위해 꾸준히 노력합니다. 이러한 성격의
            당신에게 동틀무렵(밴드), 허리케인(축구)를 추천합니다.
          </Typography>
          <div className="row">
            <Button id="btn-1" outline fullWidth variant="secondary">
              결과 공유
            </Button>
          </div>
          {mode === 2 && (
            <div className="row">
              <Button id="btn-2" variant="secondary" fullWidth>
                동아리 등록 완료
              </Button>
            </div>
          )}
        </div>
      </div>
      {mode === 1 && (
        <>
          <div className="result-line"></div>
          <Recommendation />
        </>
      )}
      <style jsx>
        {`
          .result-top {
            background: url('circle_particle.svg') 0% 0% no-repeat padding-box,
              linear-gradient(180deg, #fff6d9 0%, #ffffff 100%, #ffffff 100%) 0% 0% no-repeat padding-box;

            background-size: 367px 164px;
            padding: 48px;
            text-align: center;

            height: 289px;
          }
          .result-line {
            width: 360px;
            height: 4px;
            background: #eeeeee 0% 0% no-repeat padding-box;
          }

          .result-image {
            background: #ffffff 0% 0% no-repeat padding-box;
            box-shadow: 0px 10px 15px #0000001c;
            opacity: 1;
            width: 152px;
            height: 152px;
            border-radius: 50%;
            margin: 16px;
          }
          .result-bottom {
            padding: 48px 8px 16px 8px;
          }

          .row {
            padding: 8px;
          }
        `}
      </style>
    </>
  );
}
