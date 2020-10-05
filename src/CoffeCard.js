import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';

// 아이콘을 넣을떄는 아이콘 버튼으로 감싸는게 좋다.
// 쓰고 안쓰고 한번 해보면 안다.
// 기본적으로 모든 것을 만드려고 하지 말고,
// Material UI 쪽에 가서 배껴서 오는 것이다.

const CoffeCard = (props) =>{
    
    const {avatarUrl,title,subtitle,description,imageUrl} = props;

    return (
        <Card item xs={12} sm={4}>
        <CardHeader
        avatar={
          <Avatar src={avatarUrl}/>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
      style={{height:"150px"}}
      image={imageUrl}
      title="Paella dish"
    />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">BUY NOW</Button>
          <Button size="small">OFFER</Button>
        </CardActions>
      </Card>
    )
}

export default CoffeCard