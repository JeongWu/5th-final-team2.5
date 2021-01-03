import { Typography, Button } from '@dodam/components';
import Card from './Card';

export default function Recommendation() {
  return (
    <div className="recommendation">
      <Typography className="header" align="center" variant="h5" weight="bolder">
        이 동아리를 추천드려요!
      </Typography>

      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Button fullWidth>더보기</Button>
      <style jsx>
        {`
          .recommendation {
            padding: 32px 16px;
          }
        `}
      </style>
    </div>
  );
}
