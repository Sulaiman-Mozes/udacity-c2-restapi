// require('dotenv').config();

export const config = {
  "postgress": {
    "USERNAME": process.env.POSTGRES_USERNAME,
    "PASSWORD": process.env.POSTGRES_PASSWORD,
    "DATABASE": process.env.POSTGRES_DATABASE_NAME,
    "HOST": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  },
  "aws": {
    "AWS_REGION": process.env.AWS_REGION,
    "AWS_PROFILE": process.env.AWS_PROFILE,
    "AWS_MEDIA_BUCKET": process.env.AWS_MEDIA_BUCKET
  },
  "SECRET_KEY": process.env.SECRET_KEY
}
